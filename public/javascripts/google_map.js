function initialize() {
  var myLatlng = new google.maps.LatLng(45.463681, 9.188171);
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
      'Street address, 10 <br />' +
      '12345, Milan <br />' +
      '<a target="_blank" href="http://example.com/">http://example.com/</a>' +
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
