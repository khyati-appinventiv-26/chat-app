import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import CustomModalNew from '../../components/CustomModalNew';
import ConfirmationModal from '../../components/ConfirmationModal';
import styles from '../ChatRoom/style';
import { Icons } from '../../assets';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ChatRoomProps {
  route: {
    params: {
      id: string;
      lastName: string;
      firstName: string;
    };
  };
  navigation: {
    goBack: () => void;
  };
}
interface CustomMessage extends IMessage {

  emoji?: string;
 
}
const ChatRoom: React.FC<ChatRoomProps> = ({ route, navigation }) => {
  const { id, lastName, firstName } = route.params;
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [visible, setVisible] = useState<boolean>(false);
  const [dotModal, setDotModal] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>('');
  const [confirmModalVisible, setConfirmModalVisible] = useState<boolean>(false);
  const [modalId, setModalId] = useState<number>(0);
  const [messageToDelete, setMessageToDelete] = useState<number | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      
      try {
        
        const storedMessages = await AsyncStorage.getItem(`${id}`);
        if (storedMessages) {
          const parsedMessages: CustomMessage[]= JSON.parse(storedMessages);
          setMessages(parsedMessages);
        } else {
          const initialMessages: CustomMessage[] = [
            {
              _id: 1,
              text: 'Hello developer',
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
              },
              emoji: '', // Initialize emoji field
            },
          ];
          setMessages(initialMessages);
          await AsyncStorage.setItem(`${id}`, JSON.stringify(initialMessages));
        }
      } catch (error) {
        console.error('Failed to fetch messages:', error);
      }
    };

    fetchMessages();
  }, [id]);

  const Messagemodaldata = [
    { id: 1, src: Icons.reply, txt: 'Reply' },
    { id: 2, src: Icons.forward, txt: 'Forward' },
    { id: 3, src: Icons.copy, txt: 'Copy' },
    { id: 4, src: Icons.star, txt: 'Star' },
    { id: 5, src: Icons.report, txt: 'Report' },
    { id: 6, src: Icons.trash, txt: 'Delete' },
  ];

  const dotModalData = [
    { id: 6, src: Icons.trash, txt: 'Delete' },
  ];

  const toggleModal = () => {
    setModalId(1);
    setVisible(!visible);
  };

  const closeModal = () => {
    setModalId(1);
    setVisible(false);
  };

  const toggleDotModal = () => {
    setModalId(2);
    setDotModal(!dotModal);
  };

  const closeDotModal = () => {
    setModalId(2);
    setDotModal(false);
  };

  const toggleDeleteModal = () => {
    setConfirmModalVisible(!confirmModalVisible);
  };

  const deleteMsg = async () => {
    if (messageToDelete === null) return;

    const updatedMessages = messages.filter((msg) => msg._id !== messageToDelete);
    setMessages(updatedMessages);
    await AsyncStorage.setItem(`${id}`, JSON.stringify(updatedMessages));
    setMessageToDelete(null);
    setConfirmModalVisible(false);
  };

  const DeleteAll = async () => {
    setMessages([]);
    await AsyncStorage.setItem(`${id}`, JSON.stringify([]));
    setConfirmModalVisible(false);
  };

  const onSend = async () => {
    if (inputText.trim().length === 0) return;

    const newMessage: CustomMessage = {
        _id: Math.random(), // Generate a random ID
        text: inputText,
        createdAt: new Date(),
        user: { _id: 1, name: 'You' },
        emoji: '', // Initialize emoji field for new messages
    };

    const updatedMessages = GiftedChat.append(messages, [newMessage]);
    setMessages(updatedMessages);
    await AsyncStorage.setItem(`${id}`, JSON.stringify(updatedMessages));
    setInputText('');
};

  const handleEmojiSelect = (emoji: string) => {
    if (messageToDelete) {
      const updatedMessages = messages.map((msg) => {
        if (msg._id === messageToDelete) {
          return {
            ...msg,
            emoji: emoji, // Only update the emoji for the specific message
          };
        }
        return msg; // Return the message unchanged if it's not the one being modified
      });
      setMessages(updatedMessages); // Update the state with the modified messages
      AsyncStorage.setItem(`${id}`, JSON.stringify(updatedMessages)); // Save to AsyncStorage
    }
    closeModal(); // Close the emoji selection modal
  };

  const renderBubble = (props: any) => {
    const { currentMessage } = props;
    const isSender = currentMessage.user._id === 1;
    const createdAt = new Date(currentMessage.createdAt);
    return (
      <TouchableOpacity
        onLongPress={() => {
          setVisible(true);
          setMessageToDelete(currentMessage._id);
        }}
      >
        <Text
          style={[
            styles.timeText,
            {
              textAlign: isSender ? 'right' : 'left',
              marginLeft: isSender ? 0 : -25,
              marginRight: isSender ? 15 : 0,
            },
          ]}
        >
          {createdAt.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Text>
        <View
          style={[
            styles.bubble,
            {
              backgroundColor: isSender ? '#2a7cbc' : 'white',
              marginLeft: isSender ? 0 : -30,
              marginRight: isSender ? 10 : 0,
            },
          ]}
        >
          {currentMessage.emoji && (
            <View style={styles.emojiContainer}>
              <Text style={styles.selectedEmoji}>{currentMessage.emoji}</Text>
            </View>
          )}
          <Text style={{ color: isSender ? 'white' : 'black' }}>
            {props.currentMessage.text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.outer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={Icons.whiteBack} resizeMode='contain' style={styles.backIcon} />
          </TouchableOpacity>
          <View style={styles.avatarIcon}>
            <Text style={styles.avatarTxt}>{firstName[0]}{lastName[0]}</Text>
          </View>
          <Text style={styles.txtName}>{firstName} {lastName}</Text>
        </View>
        <TouchableOpacity onPress={toggleDotModal}>
          <Image source={Icons.threeDot} style={styles.threeStyle} resizeMode='contain' />
        </TouchableOpacity>
      </View>

      <GiftedChat
        messages={messages}
        renderBubble={renderBubble}
        alignTop={true}
        renderInputToolbar={() => null}
        renderTime={() => null}
        user={{
          _id: 1,
        }}
      />

      <View style={styles.inputContainer}>
        <View style={styles.addView}>
          <Text style={styles.addText}>+</Text>
        </View >
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={onSend}
        />
        <TouchableOpacity style={styles.sendButton} onPress={onSend}>
          <Image style={styles.sendButtonImage} source={Icons.send} />
        </TouchableOpacity>
      </View>

      <CustomModalNew
        visible={visible}
        onRequestClose={toggleModal}
        data={Messagemodaldata}
        onPress={closeModal}
        confirmDelete={toggleDeleteModal}
        onEmojiSelect={handleEmojiSelect}
        modalId= {1}
      />

      <CustomModalNew
        visible={dotModal}
        onRequestClose={toggleDotModal}
        data={dotModalData}
        onPress={closeDotModal}
        confirmDelete={toggleDeleteModal}
        onEmojiSelect={handleEmojiSelect}
        modalId={2}
      />

      <ConfirmationModal
        visible={confirmModalVisible}
        image={Icons.modalIcon}
        backDropPress={toggleDeleteModal}
        onClose={modalId === 1 ? deleteMsg : DeleteAll}
        title={'Delete Message?'}
        message={'Are you sure you want to delete this message?'}
      />
    </View>
  );
};

export default ChatRoom;
