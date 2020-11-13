import React, { useState, useRef } from "react";
import { StyleSheet, Text, View,TextInput } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { Input, Button } from "react-native-elements";

import * as WorkoutPlan from '../../../store/actions/WorkoutAction';


function AddWorkout({navigation}) {

  const dispatch = useDispatch();
  const [exercise, setExercise] = useState();
  const [sets, setSets] = useState();
  const [reps, setReps] = useState();
  const [tempo, setTempo] = useState();
  const [rest, setRest] = useState();
 

  const addPlan = () => {

    dispatch(WorkoutPlan.createWorkout(exercise,sets,reps,tempo,rest));

     navigation.pop();
}


  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Add Workout</Text>
      <Input
        value={exercise}
        // onSubmitEditing={() => ref_password.current.focus()}
        // returnKeyType={"next"}
        inputContainerStyle={styles.inputstyle}
        containerStyle={styles.textinput}
        onChangeText={(value) => setExercise(value)}
        label="Exercise"
      />
      <Input
        // ref={ref_password}
        value={sets}
        // onSubmitEditing={() => ref_name.current.focus()}
        // returnKeyType={"next"}
        inputContainerStyle={styles.inputstyle}
        containerStyle={styles.textinput}
        onChangeText={(value) => setSets(value)}
        label="Sets"
      />
      <Input
        // ref={ref_name}
        value={reps}
        inputContainerStyle={styles.inputstyle}
        containerStyle={styles.textinput}
        onChangeText={(value) => setReps(value)}
        label="Reps"
      />  
      
      <Input
        // ref={ref_name}
        value={tempo}
        inputContainerStyle={styles.inputstyle}
        containerStyle={styles.textinput}
        onChangeText={(value) => setTempo(value)}
        label="Tempo"
      /> 
      
       <Input
        // ref={ref_name}
        value={rest}
        inputContainerStyle={styles.inputstyle}
        containerStyle={styles.textinput}
        onChangeText={(value) => setRest(value)}
        label="Rest"
      />
      
            
      <Button  onPress={()=>addPlan()} title="Add" type="outline" />
    </View>
  );
}

export default AddWorkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  textStyle: {
    fontWeight: "bold",
    textAlign: "center",
    color:'tomato'
  },
  textinput: {
    height: 70,
  },
  inputstyle: {
    height: 35,
  },
});
