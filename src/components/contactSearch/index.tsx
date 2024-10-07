import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import { Icons } from '../../assets';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import styles from './style';
import contact from '../../contact.json';

// Define the structure for contact
interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
}

const ContactSearch: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]); // Typed as Contact[]
  const [searchText, setSearchText] = useState<string>(''); // Typed as string
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]); // Typed as Contact[]
  const navigation = useNavigation<NavigationProp<any>>(); // Typed navigation

  useEffect(() => {
    setContacts(contact); // Initialize contacts from contact.json
    setFilteredContacts(contact); // Set filtered contacts initially to the same data
  }, []);

  // Function to get initials from first and last name
  const getInitials = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
  };

  // Handle search functionality to filter contacts
  const handleSearch = (text: string) => {
    setSearchText(text);
    const filteredData = contacts.filter((item) => {
      const fullName = `${item.firstName.toLowerCase()} ${item.lastName.toLowerCase()}`;
      return fullName.includes(text.toLowerCase());
    });

    setFilteredContacts(filteredData);
  };

  // Handle navigation to chat room with selected contact
  const handleChatRoom = (id: number, firstName: string, lastName: string) => {
    navigation.navigate('chatroom', {
      firstName: firstName,
      lastName: lastName,
      id: id
    });
  };

  // Render individual contact item
  const renderItem = ({ item }: { item: Contact }) => (
    <TouchableOpacity style={styles.userContainer} onPress={() => handleChatRoom(item.id, item.firstName, item.lastName)}>
      <View style={styles.initialsContainer}>
        <Text style={styles.initialsText}>
          {getInitials(item.firstName, item.lastName)}
        </Text>
      </View>
      <View>
        <Text style={styles.userName}>
          {item.firstName} {item.lastName}
        </Text>
        <Text style={styles.userPhone}>{item.phone}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backContainer}>
          <Image style={styles.backIcon} resizeMode="contain" source={Icons.whiteBack} />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Search here"
          value={searchText}
          onChangeText={handleSearch} // Calls handleSearch to filter contacts
        />
      </View>
      {filteredContacts.length === 0 ? (
        <View style={styles.resultContainer}>
          <View style={styles.result}>
            <Image resizeMode='contain' style={styles.resultIcon} source={Icons.noResult} />
            <Text style={styles.resultText}>No Result Found</Text>
          </View>
        </View>
      ) : (
        <View style={styles.flStyle}>
          <FlatList
            data={filteredContacts} // Data from filteredContacts
            keyExtractor={(item) => item.id.toString()} // Ensure key is string
            renderItem={renderItem} // Renders each contact item
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );
};

export default ContactSearch;
