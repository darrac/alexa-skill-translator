let dialogModel;
function handleFileSelect(evt) {
  var files = evt.target.files; 
  // What is the support?
  const reader = new FileReader();
  reader.onload = (event) => {
    console.log(`Read file ${event.target.result}`);
    fileLoaded(event.target.result);
  }

  reader.readAsText(files[0]);
}

function fileLoaded(fileContent) {
  document.getElementById('jsonFile').innerHTML = fileContent;
}


window.onload = function(){
  document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);
};