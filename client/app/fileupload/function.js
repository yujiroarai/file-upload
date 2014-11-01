$(function(){

  function handleDragOver(evt) {
    evt.originalEvent.stopPropagation();
    evt.originalEvent.preventDefault();
    evt.originalEvent.dataTransfer.dropEffect = 'copy';
    console.log('copy');
  }

  function handleFileSelect(evt) {
    evt.originalEvent.stopPropagation();
    evt.originalEvent.preventDefault();
    var files = evt.originalEvent.dataTransfer.files;
    var formData = new FormData();
    for (var i = 0; i < files.length; i++) {
      console.log(files[i]);
      formData.append('files', files[i]);
    }

    $.ajax({
      url: '/api/files',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false
    });
  }

  $(document).on('dragover', '.jumbotron', handleDragOver);
  $(document).on('drop', '.jumbotron', handleFileSelect);
});
