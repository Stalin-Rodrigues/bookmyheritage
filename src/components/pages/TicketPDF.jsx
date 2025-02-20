import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    marginBottom: 10,
  color: "black",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "black",
  },
});

const TicketPDF = ({
  name,
  bookedOnDate,
  bookedForDate,
  userName,
  phoneNumber,
  ticketCount,
  totalPrice,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Your Ticket for {name}</Text>

        {/* Booked On Date */}
        <Text style={styles.text}>
          <Text style={styles.header}>Booked On:</Text> {bookedOnDate}
        </Text>

        {/* Booked For Date */}
        <Text style={styles.text}>
          <Text style={styles.header}>Booked For:</Text> {bookedForDate}
        </Text>

        {/* User Name */}
        <Text style={styles.text}>
          <Text style={styles.header}>Name:</Text> {userName}
        </Text>

        {/* Phone Number */}
        <Text style={styles.text}>
          <Text style={styles.header}>Phone Number:</Text> {phoneNumber}
        </Text>

        {/* Number of Tickets */}
        <Text style={styles.text}>
          <Text style={styles.header}>Number of Tickets:</Text> {ticketCount}
        </Text>

        {/* Total Price */}
        <Text style={styles.text}>
          <Text style={styles.header}>Total Price:</Text> ₹{totalPrice}
        </Text>

        {/* Thank You Message */}
        <Text style={styles.text}>
          Thank you for booking with BookMyHeritage!
        </Text>
      </View>
    </Page>
  </Document>
);

export default TicketPDF;