import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.Input}
          mode="outlined"
          placeholder="what would you like to focus..."
        />
        <TouchableOpacity style={styles.fabButton}>
          <Text style={styles.fabText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.focusedTasks}>
        <Text style={styles.focusTitle}>Things we've focused on </Text>
      </View>
      <View>
        <Text style={styles.list}>1. Learn JS basics </Text>
        <Text style={styles.list}>2. Learn react native </Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c15a7c6",
  },

  InputContainer: {
    padding: 20,
    flexDirection: "row",
  },
  Input: {
    flex: 1,
  },
  fabButton: {
    height: 60,
    width: 60,
    borderRadius: 50,
    backgroundColor: "transparent",
    borderWidth: 2,
    marginLeft: 7,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  fabText: {
    fontSize: 24,
    color: "#fff",
  },
  focusedTasks: {
    marginTop: 20,
    padding: 10,
  },
  focusTitle: {
    fontWeight: "bold",
    fontSize: 21,
    color: "#fff",
    paddingLeft: 20,
  },
  list: {
    paddingLeft: 80,
    fontSize: 18,
    color: "#fff",
  },
});
