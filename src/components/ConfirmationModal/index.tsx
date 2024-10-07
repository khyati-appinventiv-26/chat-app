import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import Modal from 'react-native-modal';
import styles from '../ConfirmationModal/style'

// Define the props interface
interface ConfirmationModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  message: string;
  image: ImageSourcePropType; // Correct type for image source
  backDropPress: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ visible, onClose, title, message, image, backDropPress }) => {
  return (
    <Modal
      backdropOpacity={0.6}
      isVisible={visible}
      onBackdropPress={backDropPress}
      style={{ margin: 0 }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.lockIconContainer}>
            <Image style={styles.ModalIcon} source={image} />
          </View>
          <Text style={styles.modalTitle}>{title}</Text>
          <Text style={styles.modalText}>{message}</Text>

          <TouchableOpacity onPress={onClose} style={styles.startChatButton}>
            <Text style={styles.startChat}>Start Chat</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};



export default ConfirmationModal;
