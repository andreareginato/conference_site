function initialize() {
  var myLatlng = new google.maps.LatLng(45.513636, 9.211376);

  var myOptions = {
    zoom: 14,
    center: myLatlng,
    navigationControl: true,
    navigationControlOptions: {
      style: google.maps.NavigationControlStyle.SMALL
    },
    mapTypeControl: false,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  var map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);

  var rubypin = new google.maps.MarkerImage('../images/rubypin.png');
  var shadow = new google.maps.MarkerImage('../images/rubypin_shadow.png',
    // This marker is 31 pixels wide by 15 pixels tall
    new google.maps.Size(31, 15),
    // The origin for this image is 0,0
    new google.maps.Point(0,0),
    // The anchor for this image is the base of the ruby vertex 7,14
    new google.maps.Point(7, 14)
  );
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    animation: google.maps.Animation.DROP,
    icon: rubypin,
    shadow: shadow
  });

  var infoWindowContent = '<div id="gmap_info_window_content">' +
      '<h4 class="red-color">Italian Ruby Day</h4>' +
      '<strong>Edificio U2</strong><br />' +
      'Piazza della Scienza<br />' +
      '20126, Milano<br />' +
      '<a href="http://maps.google.it/maps/place?q=Universit%C3%A0+degli+Studi+di+Milano-Bicocca,+Piazza+della+Scienza,+20126+Milano,+Lombardia&hl=it&ie=UTF8&ftid=0x4786c747fd941b5d:0x961404e5f7983940" target="_blank">Google Maps &#x2192;</a>' +
    '</div>';
  var infoWindow = new google.maps.InfoWindow({
    content: infoWindowContent
  });

  google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker);
  });
}

// Asynchronously loading of the API
function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyAA2-g_xQA8xOQWSbGLQdbYC5V-rot63RE&sensor=false&callback=initialize";
  document.body.appendChild(script);
}

window.onload = loadScript;
