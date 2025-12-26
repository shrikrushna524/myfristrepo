if ("geolocation" in navigator) {
  navigator.geolocation.watchPosition(
    function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log("Latitude:", latitude);
      console.log("Longitude:", longitude);

      document.getElementById("location").innerHTML =
        `Latitude: ${latitude} <br> Longitude: ${longitude}`;
    },
    function (error) {
      console.error("Error getting location:", error.message);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 5000
    }
  );
} else {
  alert("Geolocation is not supported by this browser.");
}
