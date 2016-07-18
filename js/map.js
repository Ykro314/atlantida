
function initMap() {
  var mapDiv = document.getElementById( 'map' );

  var mapOptions = {
    center: {lat: 21.592, lng: 105.828},
    zoom: 14,
    disableDefaultUI: true,
    styles: [{"stylers":[{"visibility":"on"},{"saturation":-100},{"gamma":0.54}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#4d4946"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"gamma":0.48}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"gamma":7.18}]}]
  };

  var map = new google.maps.Map( mapDiv, mapOptions);
  var markerIcon = "./graph/img/main-map-marker.png";
  var marker = new google.maps.Marker({
    position:{lat: 21.592, lng: 105.828},
    map:map,
    title: "We are here, come to visit us!",
    icon: markerIcon
  });

}
