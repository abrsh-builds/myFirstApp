import { StyleSheet, Text, View, Button, TextInput } from "react-native";
export default function App() {
  const handlePress = () => {
    console.log("task added successfully");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Tasks </Text>
      <View style={styles.horizontal}></View>

      <View style={styles.taskContainer}>
        <TextInput style={styles.input} placeholder="Add a new task..." />
        <Button style={styles.button} title="Add" onPress={handlePress} />
      </View>
      <Text>task 1 </Text>
      <Text>task 2 </Text>
      <Text>task 3 </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  horizontal: {
    marginTop: 20,
    height: 1,
    width: "80%",
    backgroundColor: "#bbadad",
  },
  taskContainer: {
    flexDirection: "row",
    marginTop: 20,
    width: "80%",
    borderWidth: 1,
    borderColor: "#4e4a4a",
    borderRadius: 5,
    marginBottom: 20,
  },

  input: {
    flex: 1,
    width: "80%",
  },
  button: {},
});
