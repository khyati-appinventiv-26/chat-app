import React from "react";
import Modal from 'react-native-modal';
import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from "react-native";
import styles from '../CustomModal/style';

// Define the shape of the data items
interface ModalItem {
  id: number;
  txt: string;
  src: ImageSourcePropType; // Ensures the correct type for the image source
}

// Define the props for the CustomModal component
interface CustomModalProps {
  visible: boolean;
  onRequestClose: () => void;
  data: ModalItem[];
  onpress: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({ visible, onRequestClose, data, onpress }) => {
  return (
    <Modal
      isVisible={visible}
      backdropOpacity={0.2}
      onBackdropPress={onRequestClose}
    //   onRequestClose={onRequestClose}
      style={{ margin: 0 }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {data.map((item) => (
            <TouchableOpacity
              style={styles.outerView}
              key={item.id}
              onPress={item.id === 1 ? onpress : undefined} // Only trigger onpress for id === 1
            >
              <Image source={item.src} style={styles.modalImg} resizeMode="contain" />
              <Text>DELETE</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
