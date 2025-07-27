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
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("taskForm");
  const thankYouMessage = document.getElementById("thankYouMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        form.reset();
        thankYouMessage.classList.remove("hidden");
      } else {
        alert("Something went wrong. Please try again.");
      }
    })
    .catch(error => {
      alert("Error: " + error.message);
    });
  });
});

