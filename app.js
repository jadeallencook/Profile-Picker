(function () {
  // cache profiles
  const profiles = [{
    title: 'Bob Jones',
    subtitle: 'Subtitle',
    image: 'http://via.placeholder.com/350x350',
    link: '#'
  }, {
    title: 'John Smith',
    subtitle: 'Subtitle',
    image: 'http://via.placeholder.com/350x350',
    link: '#'
  }, {
    title: 'Jane Doe',
    subtitle: 'Subtitle',
    image: 'http://via.placeholder.com/350x350',
    link: '#'
  }, {
    title: 'John Doe',
    subtitle: 'Subtitle',
    image: 'http://via.placeholder.com/350x350',
    link: '#'
  }, {
    title: 'John Jones',
    subtitle: 'Subtitle',
    image: 'http://via.placeholder.com/350x350',
    link: '#'
  }];
  // build vars
  var current = 0,
  max = 0;
  // elem grabber
  function $(elem) {
    return document.getElementById(elem);
  }
  // start build
  function showProfiles() {
    var width = $('profile-picker').offsetWidth;
    $('profile-container').innerHTML = '';
    // set max
    if (width < 600) max = 1;
    else if (width < 750) max = 2;
    else if (width < 1000) max = 3;
    else max = 4;
    if (profiles.length <= max) max = profiles.length;
    // append each profile
    for (var x = 0; x < max; x++) {
      var ref = x + current;
      if (ref >= profiles.length) ref = ref - profiles.length;
      var profile = profiles[ref];
      var image = 'style="background-image: url(' + profile.image + ');"';
      var percent = 'style="width: ' + (100 / max) + '%;"';
      var html = '<a href="' + profile.link + '">';
      html += '<div class="profile" ' + percent + '>';
      html += '<div class="profile-image" ' + image + '></div>';
      html += '<h1>' + profile.title + '</h1>';
      html += '<span>' + profile.subtitle + '</span>';
      html += '</div></a>'
      $('profile-container').innerHTML += html;
    }
  }
  // init
  showProfiles();
  // event listeners
  window.onresize = function() {
    showProfiles();
  }
  document.getElementById('left-arrow').onclick = function() {
    current--;
    if (current < 0) current = profiles.length;
    showProfiles();
  }
  document.getElementById('right-arrow').onclick = function() {
    current++;
    if (current > profiles.length) current = 0;
    showProfiles();
  }
})();