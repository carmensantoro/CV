var request = new XMLHttpRequest();

request.open('GET', 'https://carmensantoro.herokuapp.com/cvs', true);

request.onload = function() {
  var data = JSON.parse(this.response);

  if (request.status == 200) {

  }
}


request.send();
