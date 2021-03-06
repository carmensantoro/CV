var request = new XMLHttpRequest();

request.open("GET", "/cvs");
request.onload = () => {
  if (request.status ==200) {
    let response = JSON.parse(request.response);
    Object.entries(response[0]).forEach(function(entry){
      let key = entry[0];
      let value = entry[1];
      let el = document.getElementById(key);
      if(el !== null){
        el.value = value.toString();
        M.textareaAutoResize(el);
      }
    });
    M.updateTextFields();
  } else {
    console.log(error);
  }
}
request.send();

document.getElementById('Save').onclick = function(e){
  e.preventDefault();
  M.toast({html: "Saved! (mocked up)", classes: 'green'});
}
