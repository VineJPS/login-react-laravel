import { StyleSheet } from "react-native";

export default StyleSheet.create({
    /* -------------------- GERAL -------------------- */
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        padding: 20
    },
    header: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 20
    },
    formContainer: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        elevation: 3
    },
    inputGroup: {
        marginBottom: 15
    },
    label: {
        fontWeight: "600",
        marginBottom: 5
    },
    input: {
        backgroundColor: "#eee",
        padding: 12,
        borderRadius: 8
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20
    },
    submitButton: {
        flex: 1,
        backgroundColor: "#1E90FF",
        padding: 12,
        borderRadius: 8,
        marginRight: 5,
        alignItems: "center"
    },
    cancelButton: {
        flex: 1,
        backgroundColor: "#777",
        padding: 12,
        borderRadius: 8,
        marginLeft: 5,
        alignItems: "center"
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold"
    },

    /* -------------------- LOGIN -------------------- */
    loginContainer: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20
    },
    loginTitle: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 40
    },
    loginButton: {
        backgroundColor: "#1E90FF",
        padding: 14,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10
    },
    registerButton: {
        backgroundColor: "#1E90FF",
        padding: 14,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10
    },
    loginButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16
    },

    /* -------------------- CADASTRO -------------------- */
    registerHeader: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 20
    },

    /* -------------------- HOME -------------------- */
    homeContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    welcomeText: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 20
    },
    logoutButton: {
        backgroundColor: "#ff4444",
        padding: 12,
        borderRadius: 10,
        width: "60%",
        alignItems: "center"
    },
    logoutText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    },
    button: {
        backgroundColor: "#ff4444",
        padding: 14,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
        width: "60%"
    },
    secondaryButton: {
        marginTop: 20,
        alignSelf: "center"
    },
    secondaryButtonText: {
        color: "#1E90FF",
        fontWeight: "bold",
        fontSize: 16
    }
});
