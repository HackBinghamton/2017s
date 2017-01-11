function initialize_maps() {
  google.maps.visualRefresh = true;
  map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(42.0943754,-75.9585148),
    zoom: 17,
    mapTypeControl: true,
    scrollwheel:false,
    navigationControl: false,
    streetViewControl: false,
    disableDefaultUI: true,
    styles: [
      {"stylers":[{"hue":"#40B26F"}]},
      {"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},
      {"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},
      {"visibility":"simplified"}]}]
  });

  var eventPin = new google.maps.Marker({
    position: new google.maps.LatLng(42.0943754,-75.9585148),
    map: map,
    title: "HackBU at the ITC Complex"
  });

  google.maps.event.addListener(eventPin, 'click', function() {
    window.open("https://goo.gl/maps/3eDqNBZpXxt","_blank");
  });
}

google.maps.event.addDomListener(window, 'load', initialize_maps);
