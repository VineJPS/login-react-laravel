import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import styles from "./Styles";

export function LoginScreen() {
    const navigation = useNavigation<any>();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);

    const logar = async () => {
        if (!form.email || !form.password) {
            Alert.alert("Erro", "Preencha todos os campos");
            return;
        }

        setLoading(true);

        try {
            // coloque sua API aqui
            const response = await axios.post(
                "https://sua-api/login",
                form
            );

            const user = response.data.user;

            navigation.navigate("Home", { user });

        } catch (error) {
            Alert.alert("Erro", "Credenciais inválidas");
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Entrar</Text>

            <View style={styles.formContainer}>
                
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        value={form.email}
                        onChangeText={(v: string) => setForm({ ...form, password: v })}
                        placeholder="Seu email"
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                        value={form.password}
                        onChangeText={(v: string) => setForm({ ...form, password: v })}
                        placeholder="Sua senha"
                    />
                </View>

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={logar}
                    disabled={loading}
                >
                    <Text style={styles.buttonText}>
                        {loading ? "Entrando..." : "Entrar"}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.secondaryButton}
                    onPress={() => navigation.navigate("Register")}
                >
                    <Text style={styles.secondaryButtonText}>
                        Criar Conta
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}
