function handleFileSelect(evt) {
  var files = evt.target.files; 
  // What is the support?
  const reader = new FileReader();
  reader.onload = (event) => {
    // console.log(`Read file ${event.target.result}`);
    fileLoaded(event.target.result);
  }

  reader.readAsText(files[0]);
}

function fileLoaded(fileContent) {
  app.dialogModel = JSON.parse(fileContent);
  // console.log(`This is app.dialogMode = ${app.dialogModel.interactionModel.intents}`);
}


window.onload = function(){
  document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);
  document.getElementById('saveAll').addEventListener('click', () => { saveModel(app.dialogModel)}, false);
};

function saveModel(model) {
  console.log(`Saving ${JSON.stringify(model)}`);
}


var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    dialogModel: {}
  }
});

