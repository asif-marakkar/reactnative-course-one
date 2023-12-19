import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import uuid from "react-native-uuid";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  const showModalHandler = () => setIsModalVisible(true);
  const closeModalHandler = () => setIsModalVisible(false);

  function addGoalHandler(enteredText) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { title: enteredText, id: uuid.v4() },
    ]);
    closeModalHandler();
  }

  function deleteGoalHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.mainContainer}>
        <Button
          title="Add new goal"
          color="#a065ec"
          onPress={showModalHandler}
        />
        <GoalInput
          onAdd={addGoalHandler}
          visible={isModalVisible}
          onCancel={closeModalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(data) => {
              return (
                <GoalItem
                  title={data.item.title}
                  id={data.item.id}
                  onDelete={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item) => item.id}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
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
