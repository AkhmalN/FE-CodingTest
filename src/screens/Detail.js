import { View, Image, Text } from "react-native";
import React, { useEffect } from "react";
import IconButton from "../components/IconButton";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { ICON } from "../constant/Color";
import ICONS from "../constant/Icon";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import { fetchContactDetail } from "../redux/actions/actions";
import { validPhotoUrl } from "../utils/validImage";

const Detail = ({ route, navigation }) => {
  const { contact_id } = route.params;
  let dispatch = useDispatch();
  const { contact, loading, error } = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchContactDetail(contact_id));
  }, [dispatch, contact_id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      {/* PROFILE */}
      <View
        style={{
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ backgroundColor: "#e1e1e1", borderRadius: 50 }}>
          <Image
            source={{ uri: contact.photo }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
        </View>
        <View
          style={{
            marginVertical: 10,
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 27,
                textAlign: "center",
                marginHorizontal: 2,
              }}
            >
              {contact.firstName}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 27,
                textAlign: "center",
                marginHorizontal: 2,
              }}
            >
              {contact.lastName}
            </Text>
          </View>

          <Text style={{ fontWeight: "bold", color: "grey", fontSize: 17 }}>
            (49873)48975834758
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "grey",
              fontSize: 17,
              textAlign: "center",
            }}
          >
            {contact.age} Years old
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",

            marginVertical: 10,
          }}
        >
          <IconButton
            iconName={"chatbox-ellipses-outline"}
            IconComponentName={Ionicons}
            bgColor={"green"}
            color={ICON.light}
          />
          <IconButton
            iconName={"call-outline"}
            IconComponentName={Ionicons}
            bgColor={"blue"}
            color={ICON.light}
          />
          <IconButton
            iconName={"videocam-outline"}
            IconComponentName={Ionicons}
            bgColor={"red"}
            color={ICON.light}
          />
          <IconButton
            iconName={"email-multiple-outline"}
            IconComponentName={MaterialCommunityIcons}
            bgColor={"grey"}
            color={ICON.light}
          />
        </View>
      </View>
      {/* NUMBER PHONE */}
      <View
        style={{
          width: "100%",
          marginTop: 10,
        }}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
            }}
          >
            <View style={{ width: "70%" }}>
              <Text style={{ fontSize: 20 }}>Home</Text>
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "grey" }}>
                (409385)888-8888
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "30%",
                justifyContent: "space-around",
              }}
            >
              <ICONS.Ionicons name="chatbox-ellipses-outline" size={30} />
              <ICONS.Ionicons name="videocam-outline" size={30} />
              <ICONS.Ionicons name="call-outline" size={30} />
            </View>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            padding: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ width: "70%" }}>
              <Text style={{ fontSize: 20 }}>Mobile</Text>
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "grey" }}>
                (409385)888-8888
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "30%",
                justifyContent: "space-evenly",
              }}
            >
              <ICONS.Ionicons name="chatbox-ellipses-outline" size={30} />
              <ICONS.Ionicons name="videocam-outline" size={30} />
              <ICONS.Ionicons name="call-outline" size={30} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Detail;
