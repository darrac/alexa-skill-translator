function readFile(file) {
  const reader = new FileReader();
  reader.onload = (event) => {
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
}


window.onload = function(){
  document.getElementById('file-input').addEventListener('change', handleFileSelect, false);
};

function saveModel(el) {
  const model = app.dialogModel;
  var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(model));

  el.setAttribute("href", "data:"+data);
  el.setAttribute("download", "data.json");    
}

function onFileDrop(ev) {
  ev.preventDefault();

  if (ev.dataTransfer.items) {
    for (let i = 0; i < ev.dataTransfer.items.length; i++) {
      if (ev.dataTransfer.items[i].kind === 'file') {
        const file = ev.dataTransfer.items[i].getAsFile();
        readFile(file);
      }
    }
  }
}

function dragOverHandler(ev) {
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

