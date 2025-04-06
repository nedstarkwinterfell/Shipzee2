import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';

export default function ShipmentDetails({ user }) {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [weight, setWeight] = useState('');
  const [priority, setPriority] = useState('Scheduled');
  const [confirmation, setConfirmation] = useState('');

  const submitShipment = async () => {
    const res = await axios.post('http://localhost:5000/api/shipments/book', {
      companyId: user.id || 'defaultCompany123',
      origin: pickup,
      destination,
      loadWeight: parseFloat(weight),
      priority,
      scheduleDate: new Date(),
    });
    setConfirmation(`Shipment Booked! ID: ${res.data.shipmentId}`);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Pickup Location:</Text>
      <TextInput value={pickup} onChangeText={setPickup} />

      <Text>Destination:</Text>
      <TextInput value={destination} onChangeText={setDestination} />

      <Text>Load Weight (in tons):</Text>
      <TextInput value={weight} onChangeText={setWeight} keyboardType="numeric" />

      <Text>Priority:</Text>
      <TextInput value={priority} onChangeText={setPriority} />

      <Button title="Submit Shipment" onPress={submitShipment} />
      {confirmation && <Text>{confirmation}</Text>}
    </View>
  );
}