import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import uuid from "react-native-uuid";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);

  function addGoalHandler(enteredText) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { title: enteredText, id: uuid.v4() },
    ]);
  }

  function deleteGoalHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.mainContainer}>
      <GoalInput onAdd={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(data) => {
            return (
              <GoalItem title={data.item.title} id={data.item.id} onDelete={deleteGoalHandler} />
            );
          }}
          keyExtractor={(item) => item.id}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 48,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
