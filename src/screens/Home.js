import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import ICONS from "../constant/Icon";
import CardContacts from "../components/CardContacts";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "../redux/actions/actions";
import Loader from "../components/Loader";
import ContactList from "../components/ContactList"; // import ContactList component

const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { contacts, loading, error } = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Search")}
          style={styles.searchBar}
        >
          <ICONS.Feather name="search" size={27} />
          <Text style={styles.searchText}>Search...</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contactsContainer}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          automaticallyAdjustContentInsets={true}
        >
          {contacts &&
            contacts.map((row, id) => (
              <View key={id}>
                <CardContacts
                  id={row.id}
                  firstName={row.firstName}
                  lastName={row.lastName}
                  photo={row.photo}
                />
              </View>
            ))}
        </ScrollView>
      </View>
      <View style={styles.contactListContainer}>
        <ContactList contacts={contacts} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    margin: 10,
    padding: 5,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 50,
  },
  searchText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  contactsContainer: {
    marginVertical: 5,
    marginHorizontal: 10,
  },
  contactListContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default Home;
