function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const locationLink = `https://maps.google.com/?q=${latitude},${longitude}`;
      document.getElementById('autoLocation').value = locationLink;
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}
