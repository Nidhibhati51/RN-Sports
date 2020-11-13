import React, { useState, useRef ,useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from "react-redux";
import { Input, Button } from "react-native-elements";
import ModalSelector from "react-native-modal-selector";
import { Feather } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as WorkoutplanAction from "../../../store/actions/WorkoutAction";

function Workout({ navigation }) {
  const dispatch = useDispatch();
  const workoutdata = useSelector((state) => state.workout.WorkoutData);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      dispatch(
        WorkoutplanAction.getWorkoutsByCoach("5faa0224ecc09b31b03d93af")
      );
    });
  }, [dispatch]);

const deleteWorkout=(userid)=>{
    WorkoutplanAction.deleteWorkout(userid);
}

  const renderItems = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#ffe3fb",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: hp("1%"),
        paddingVertical: hp("3%"),
      }}
    >
      <View style={{ flexDirection: "row", marginLeft: 15 }}>
        
        <View style={{ flexDirection: "column", marginLeft: 20 }}>
          <Text style={{ fontWeight: "bold" }}>Exercise :{item.Exercise}</Text>
          <Text style={{ fontWeight: "bold" }}>{item.Sets}</Text>
          <Text>{`${item.Reps} ${item.Tempo}`}</Text>
         
          <Text> {item.Rest}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableWithoutFeedback onPress={() => console.log('sdf')}>
          <MaterialIcons
            style={{ marginRight: 35 }}
            name="edit"
            size={24}
            color="#000"
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() =>deleteWorkout(item._id)}>
          <MaterialIcons
            style={{ marginRight: 15 }}
            name="delete"
            size={24}
            color="#000"
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={workoutdata}
        keyExtractor={(item) => item._id}
        renderItem={renderItems}
        // extraData={refreshValue}
        contentContainerStyle={styles.productList}
      />

      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("AddWorkout")}
      >
        <View style={styles.floatingButton}>
          <Feather name="plus" size={26} color="white" />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default Workout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  floatingButton: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    position: "absolute",
    bottom: 70,
    zIndex: 1,
    right: 10,
    height: 60,
    backgroundColor: "tomato",
    borderRadius: 100,
  },
});
