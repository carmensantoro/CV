//Cv
showdown.setOption('simpleLineBreaks', true);

let contactEmail = "";

var request = new XMLHttpRequest();

request.open("GET", "/cvs");
request.onload = () => {
  if (request.status ==200) {
    let response = JSON.parse(request.response);
    let converter = new showdown.Converter();
    Object.entries(response[0]).forEach(function(entry){
      let key = entry[0];
      let value = entry[1];
      if(key === "Email"){
        contactEmail = value;
      }
      let el = document.getElementById(key);
      if(el !== null){
        el.innerHTML = converter.makeHtml(value.toString());
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

//Form
document.getElementById('Send').onclick = function(e){
  e.preventDefault();
  let firstName = document.getElementById('First_Name').value;
  let lastName = document.getElementById('Last_Name').value;
  let subject = document.getElementById('Subject').value;
  let message = document.getElementById('Message').value;
  let href = "mailto:" + contactEmail + "?Subject=" + subject + " - " + lastName + " " + firstName + "&Body=" + message;
  location.href = href;

}
