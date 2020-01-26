var request = new XMLHttpRequest();

request.open("GET", "http://localhost:1337/cvs");
request.onload = () => {
  if (request.status ==200) {
    let response = JSON.parse(request.response);
    document.getElementById("Name").innerText = response[0].Name;
    document.getElementById("Surname").innerText = response[0].Surname;
    document.getElementById("Email").innerText = response[0].Email;
    document.getElementById("About").innerText = response[0].About;
    document.getElementById("Education").innerText = response[0].Education;
    document.getElementById("Experience").innerText = response[0].Experience;
    document.getElementById("Skills").innerText = response[0].Skills;
    console.log(response);
  } else {
    console.log(error);
  }
}
request.send();
