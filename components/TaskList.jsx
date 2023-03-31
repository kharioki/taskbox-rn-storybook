import { Task } from "./Task";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { styles } from "./styles";

export const TaskList = ({
  loading,
  tasks,
  onPinTask,
  onArchiveTask,
}) => {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  if (loading) {
    return (
      <View style={styles.listItems}>
        <Text>Loading</Text>
      </View>
    );
  }

  if (tasks.length === 0) {
    return (
      <View style={styles.listItems}>
        <Text>Empty</Text>
      </View>
    );
  }

  return (
    <View style={styles.listItems}>
      <FlatList
        data={tasks}
        keyExtractor={(task) => task.id}
        renderItem={({ item }) => <Task task={item} {...events} />}
      />
    </View>
  );
};
