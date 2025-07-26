import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // pastikan awak install: expo install @expo/vector-icons

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Selamat Datang, Izamuddin!</Text>

      {/* Ringkasan Kad */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Ionicons name="people" size={32} color="#4a90e2" />
          <Text style={styles.cardTitle}>Pengguna</Text>
          <Text style={styles.cardValue}>120</Text>
        </View>
        <View style={styles.card}>
          <Ionicons name="notifications" size={32} color="#f5a623" />
          <Text style={styles.cardTitle}>Notifikasi</Text>
          <Text style={styles.cardValue}>5</Text>
        </View>
      </View>

      {/* Senarai Menu */}
      <Text style={styles.menuTitle}>Menu Utama</Text>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="calendar" size={28} color="#fff" />
          <Text style={styles.menuText}>Jadual</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="chatbubbles" size={28} color="#fff" />
          <Text style={styles.menuText}>Chatbot</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="settings" size={28} color="#fff" />
          <Text style={styles.menuText}>Tetapan</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f7f9fc',
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardTitle: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
  cardValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuItem: {
    backgroundColor: '#4a90e2',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    width: '30%',
  },
  menuText: {
    marginTop: 5,
    color: '#fff',
    fontSize: 14,
  },
});