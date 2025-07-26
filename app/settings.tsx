import { Text, View, StyleSheet, TouchableOpacity, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function SettingsScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotifEnabled, setIsNotifEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tetapan</Text>

      {/* Akaun */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Akaun</Text>
        <TouchableOpacity style={styles.settingItem}>
          <Ionicons name="person-outline" size={20} color="#333" />
          <Text style={styles.settingText}>Edit Profil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Ionicons name="key-outline" size={20} color="#333" />
          <Text style={styles.settingText}>Tukar Kata Laluan</Text>
        </TouchableOpacity>
      </View>

      {/* Notifikasi */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifikasi</Text>
        <View style={styles.settingItem}>
          <Ionicons name="notifications-outline" size={20} color="#333" />
          <Text style={styles.settingText}>Benarkan Notifikasi</Text>
          <Switch
            value={isNotifEnabled}
            onValueChange={() => setIsNotifEnabled(!isNotifEnabled)}
            style={{ marginLeft: 'auto' }}
          />
        </View>
      </View>

      {/* Paparan */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Paparan</Text>
        <View style={styles.settingItem}>
          <Ionicons name="moon-outline" size={20} color="#333" />
          <Text style={styles.settingText}>Mod Gelap</Text>
          <Switch
            value={isDarkMode}
            onValueChange={() => setIsDarkMode(!isDarkMode)}
            style={{ marginLeft: 'auto' }}
          />
        </View>
      </View>

      {/* Akaun */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Lain-lain</Text>
        <TouchableOpacity style={styles.settingItem}>
          <Ionicons name="shield-checkmark-outline" size={20} color="#333" />
          <Text style={styles.settingText}>Privasi & Keselamatan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Ionicons name="log-out-outline" size={20} color="#e74c3c" />
          <Text style={[styles.settingText, { color: "#e74c3c" }]}>Log Keluar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f7f9fc",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 25,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    color: "#666",
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
  settingText: {
    marginLeft: 10,
    fontSize: 15,
    color: "#333",
  },
});