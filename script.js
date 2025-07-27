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
document.getElementById("taskForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Stop form from submitting

  // Optional: Collect data here and send it somewhere if you want

  // Hide form and show thank you
  document.getElementById("taskForm").classList.add("hidden");
  document.getElementById("thankYouMsg").classList.remove("hidden");
});
