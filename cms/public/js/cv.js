showdown.setOption('simpleLineBreaks', true);

var request = new XMLHttpRequest();

request.open("GET", "http://localhost:1337/cvs");
request.onload = () => {
  if (request.status ==200) {
    let response = JSON.parse(request.response);
    console.log(response);
    let converter = new showdown.Converter();
    Object.entries(response[0]).forEach(function(entry){
      let key = entry[0];
      let value = entry[1];
      let el = document.getElementById(key);
      if(el !== null){
        el.innerHTML = converter.makeHtml(value);
        if(el.childElementCount === 1){
          el = el.firstChild;
          var parent = el.parentNode;
          while (el.firstChild) parent.insertBefore(el.firstChild, el);
          parent.removeChild(el);
        }
      }
    });
  } else {
    console.log(error);
  }
}
request.send();