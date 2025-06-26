import { Text, View, StyleSheet, Button } from "react-native";

export default function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Setting Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
})