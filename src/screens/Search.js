import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";
import FragmentContacts from "../components/FragmentContacts";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { fetchContacts } from "../redux/actions/actions";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  let dispatch = useDispatch();
  const navigation = useNavigation();
  const { contacts, loading, error } = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const filteredContacts = contacts.filter((contact) => {
    const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }
  return (
    <ScrollView
      horizontal={false}
      showsVerticalScrollIndicator={false}
      automaticallyAdjustContentInsets={true}
      style={{ flex: 1, paddingHorizontal: 10 }}
    >
      <View>
        <SearchBar onSearch={handleSearch} />
      </View>
      <View>
        {filteredContacts &&
          filteredContacts.map((row, id) => {
            return (
              <FragmentContacts
                key={id}
                firstName={row.firstName}
                lastName={row.lastName}
                photo={row.photo}
                age={row.age}
                id={row.id}
              />
            );
          })}
      </View>
    </ScrollView>
  );
};

export default Search;
