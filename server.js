const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let nextShipmentId = 1;

app.post('/api/users/login', (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    res.json({ success: true, user: { id: "u001", email } });
  } else {
    res.status(401).json({ success: false });
  }
});

app.post('/api/shipments/book', (req, res) => {
  const shipmentId = "SHP" + (nextShipmentId++);
  console.log("Shipment booked:", req.body);
  res.json({ shipmentId });
});

app.listen(5000, () => console.log('Server running on port 5000'));