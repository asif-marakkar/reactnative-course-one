import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

const GoalInput = (props) => {
  const [enteredText, setEnteredText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredText(enteredText);
  }

  function addGoalHandler() {
    props.onAdd(enteredText);
    setEnteredText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="What is your goal?"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} color='darkseagreen'/>
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#d3d3d3",
    width: "75%",
    padding: 8,
    marginRight: 8,
  },
});
