import CallContact from "../components/CallContact";
import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "../redux/actions/actions";
import Loader from "../components/Loader";

const Call = () => {
  let dispatch = useDispatch();
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
    <ScrollView
      horizontal={false}
      showsVerticalScrollIndicator={false}
      automaticallyAdjustContentInsets={true}
    >
      {contacts &&
        contacts.map((row, id) => {
          return (
            <CallContact
              status={"Incoming call"}
              key={id}
              firstName={row.firstName}
              lastName={row.lastName}
              photo={row.photo}
            />
          );
        })}
    </ScrollView>
  );
};

export default Call;
