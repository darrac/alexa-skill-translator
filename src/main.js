function readFile(file) {
  const reader = new FileReader();
  reader.onload = (event) => {
    // console.log(`Read file ${event.target.result}`);
    fileLoaded(event.target.result);
  }

  reader.readAsText(file);
}

function handleFileSelect(event) {
  const files = event.target.files;
  readFile(files[0]);
}

function fileLoaded(fileContent) {
  app.dialogModel = JSON.parse(fileContent);
  // console.log(`This is app.dialogMode = ${app.dialogModel.interactionModel.intents}`);
}


window.onload = function(){
  document.getElementById('file-input').addEventListener('change', handleFileSelect, false);
};

function saveModel(el) {
  const model = app.dialogModel;
  console.log(`Saving ${JSON.stringify(model)}`);
  var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(model));

  el.setAttribute("href", "data:"+data);
  el.setAttribute("download", "data.json");    
}

function onFileDrop(ev) {
  console.log(`On file drop`);
  ev.preventDefault();

  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    for (var i = 0; i < ev.dataTransfer.items.length; i++) {
      // If dropped items aren't files, reject them
      if (ev.dataTransfer.items[i].kind === 'file') {
        var file = ev.dataTransfer.items[i].getAsFile();
        console.log('... file[' + i + '].name = ' + file.name);
        readFile(file);
      }
    }
  }
}

function dragOverHandler(ev) {
  console.log('File(s) in drop zone');

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();
}


var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    dialogModel: {}
  }
});

