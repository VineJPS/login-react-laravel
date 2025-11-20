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

export function RegisterScreen() {
    const navigation = useNavigation<any>();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const cadastrar = async () => {
        if (!form.name || !form.email || !form.password) {
            Alert.alert("Erro", "Preencha todos os campos");
            return;
        }

        try {
            await axios.post("https://sua-api/register", form);
            Alert.alert("Sucesso", "Conta criada!");
            navigation.navigate("Login");
        } catch (error) {
            Alert.alert("Erro", "Falha ao cadastrar");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Criar Conta</Text>

            <View style={styles.formContainer}>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Nome</Text>
                    <TextInput
                        style={styles.input}
                        value={form.name}
                        onChangeText={(v: string) => setForm({ ...form, password: v })}

                        placeholder="Seu nome"
                    />
                </View>

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
                        placeholder="Crie uma senha"
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.cancelButton}
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={cadastrar}
                    >
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}
