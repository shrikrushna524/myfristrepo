// Destination (Fixed Point)
const destination = [21.088691, 78.07148];

// Initialize map
const map = L.map('map').setView(destination, 14);

// OpenStreetMap tiles (FREE)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// Destination marker
L.marker(destination).addTo(map).bindPopup("Destination");

// Live user marker (will move)
let userMarker = L.marker(destination).addTo(map);

// Route line
let routeLine = L.polyline([], { color: 'blue' }).addTo(map);

// Live GPS tracking
navigator.geolocation.watchPosition(
  position => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    // Update marker
    userMarker.setLatLng([lat, lng]);

    // Draw route line
    routeLine.setLatLngs([[lat, lng], destination]);

    // Center map smoothly
    map.panTo([lat, lng]);
  },
  error => {
    alert("Please allow location access");
  },
  {
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: 5000
  }
);
