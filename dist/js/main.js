function initMap() {
    // The location of Uluru
    var uluru = {lat: 45.526146, lng: -73.597651};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 17, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }