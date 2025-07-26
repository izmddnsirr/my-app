import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // expo install @expo/vector-icons

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Gambar Profil */}
      <Image
        source={{ uri: "https://i.pravatar.cc/150?img=12" }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Izamuddin Nasir</Text>
      <Text style={styles.email}>izamuddinasir@gmail.com</Text>

      {/* Info Peribadi */}
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Ionicons name="person" size={20} color="#555" />
          <Text style={styles.infoText}>Jantina: Lelaki</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="calendar" size={20} color="#555" />
          <Text style={styles.infoText}>Umur: 22 tahun</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="location" size={20} color="#555" />
          <Text style={styles.infoText}>Lokasi: Skudai, Johor</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="call" size={20} color="#555" />
          <Text style={styles.infoText}>Telefon: 019-4163357</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="time" size={20} color="#555" />
          <Text style={styles.infoText}>Tarikh Daftar: Jan 2024</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="shield-checkmark" size={20} color="#555" />
          <Text style={styles.infoText}>Role: Pelajar</Text>
        </View>
      </View>

      {/* Butang Tindakan */}
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="create-outline" size={20} color="#fff" />
          <Text style={styles.buttonText}>Edit Profil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: "#e74c3c" }]}>
          <Ionicons name="log-out-outline" size={20} color="#fff" />
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: "#f7f9fc",
    flex: 1,
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    color: "#888",
    marginBottom: 20,
  },
  infoContainer: {
    alignSelf: "stretch",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    marginBottom: 30,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 15,
    color: "#333",
  },
  actionContainer: {
    flexDirection: "row",
    gap: 15,
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#4a90e2",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: "center",
    gap: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});