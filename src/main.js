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
};

function saveModel(el) {
  const model = app.dialogModel;
  console.log(`Saving ${JSON.stringify(model)}`);
  var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(model));

  el.setAttribute("href", "data:"+data);
  el.setAttribute("download", "data.json");    
}

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    dialogModel: {}
  }
});

