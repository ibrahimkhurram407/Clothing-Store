  function initMap() {
    console.log('init was done');
    // Check if the browser supports geolocation
    if (navigator.geolocation) {
      // Get the current position
      navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = 24.88723757991539;
        var longitude = 67.15182822735646;

        var mapOptions = {
          center: { lat: latitude, lng: longitude },
          zoom: 15
        };

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        // Add a marker at the current location
        var marker = new google.maps.Marker({
          position: { lat: latitude, lng: longitude },
          map: map,
          title: "This is Our Address!"
        });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }