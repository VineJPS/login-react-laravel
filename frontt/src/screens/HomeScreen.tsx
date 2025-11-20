import React from "react";
import {
    View,
    Text,
    TouchableOpacity
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./Styles";

export function HomeScreen() {
    const navigation = useNavigation<any>();
    const route = useRoute<any>();

    const user = route.params?.user;

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Olá, {user?.name} 👋</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Login")}
            >
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}
