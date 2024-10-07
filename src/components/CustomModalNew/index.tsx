import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageSourcePropType,FlatList } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import styles from '../CustomModalNew/style'
// Define the type for the items passed in `data`
type ModalItem = {
  id: number;
  src: ImageSourcePropType;  // Assuming the image source is a valid image prop type
  txt: string;
};

// Define the props for CustomModal
interface CustomModalProps {
  visible: boolean;
  onRequestClose: () => void;
  data: ModalItem[];
  onPress: () => void;
  confirmDelete: () => void;
  onEmojiSelect: (emoji: string) => void;
  modalId: number|string

  
}
const emojis = ["😃", "💕", "👎", "🎉", "😂", "😍", "😢","😇"];
const CustomModal: React.FC<CustomModalProps> = ({ visible, onRequestClose, data, onPress, confirmDelete,onEmojiSelect ,modalId }) => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [modal2Requested, setModal2Requested] = useState(false);

  const handleNavigation = (id: number) => {
    if (id === 1) {
      navigation.navigate('contact');
    }
    if (id === 6) {
      setModal2Requested(true);
    }
  };

  return (
    <Modal
      isVisible={visible}
      backdropOpacity={0.2}
      onBackdropPress={onRequestClose}
      onModalHide={() => {
        if (modal2Requested) {
          confirmDelete();
          setModal2Requested(false);
        }
      }}
      style={{ margin: 0 }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
        {modalId=== 1 ?<FlatList
          data={emojis}
        
          renderItem={({ item  }) => (
            <TouchableOpacity onPress={() => onEmojiSelect(item)} style={styles.emojiButton}>
              <Text style={styles.emojiText}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          horizontal
          contentContainerStyle={styles.emojiContainer}
        />: null}
          {data.map((item) => (
            <TouchableOpacity
              style={styles.outerView}
              key={item.id}
              onPress={() => {
                handleNavigation(item.id);
                onPress();
              }}
            >
              <Image source={item.src} style={styles.modalImg} resizeMode="contain" />
              <Text>{item.txt}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
};



export default CustomModal;
