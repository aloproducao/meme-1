var html = '' +
'<div class="memeMakerExtension hide" id="memeMakerExtension">' +
  '<div class="container">' +
    '<div class="canvas-wrapper">' +
      '<div class="canvas back-panel"></div>' +
      '<canvas class="canvas canvas-background wide" id="canvas-background" width="1024" height="512"></canvas>' +
      '<canvas class="canvas canvas-overlay wide" id="canvas-overlay" width="1024" height="512"></canvas>' +
      '<canvas class="canvas canvas-text wide" id="canvas-text" width="1024" height="512"></canvas>' +
      '<canvas class="canvas canvas-logo wide" id="canvas-logo" width="1024" height="512"></canvas>' +
      '<canvas class="canvas canvas-buffer wide" id="canvas-buffer" width="1024" height="512"></canvas>' +
      '<textarea class="textarea textarea-top textarea-left" id="mememaker-textarea" rows="1">Hello, world!</textarea>' +
      '<input class="input-image" type="file" name="img" id="mememaker-input-image" />' +
    '</div>' +
    '<div class="controls-wrapper">' +
      '<ul class="controls controls-left">' +
        '<li class="control" id="mememaker-upload"><img src="https://raw.githubusercontent.com/arkmuntasser/meme/master/extension/assets/background-64.png" alt="background"></li>' +
        '<li class="control control-overlay control-overlay-none" id="mememaker-overlay"><img src="https://raw.githubusercontent.com/arkmuntasser/meme/master/extension/assets/overlay-64.png" alt="overlay"></li>' +
        '<li class="control mememaker-align mememaker-align-left" id="mememaker-align">' +
          '<img class="mememaker-icon-align-left" src="https://raw.githubusercontent.com/arkmuntasser/meme/master/extension/assets/align-left-64.png" alt="align left">' +
          '<img class="mememaker-icon-align-center" src="https://raw.githubusercontent.com/arkmuntasser/meme/master/extension/assets/align-center-64.png" alt="align center">' +
          '<img class="mememaker-icon-align-right" src="https://raw.githubusercontent.com/arkmuntasser/meme/master/extension/assets/align-right-64.png" alt="align right">' +
        '</li>' +
        '<li class="control mememaker-position mememaker-position-top" id="mememaker-position">' +
          '<img class="mememaker-icon-position-top" src="https://raw.githubusercontent.com/arkmuntasser/meme/master/extension/assets/position-top-64.png" alt="align">' +
          '<img class="mememaker-icon-position-middle" src="https://raw.githubusercontent.com/arkmuntasser/meme/master/extension/assets/position-middle-64.png" alt="align">' +
          '<img class="mememaker-icon-position-bottom" src="https://raw.githubusercontent.com/arkmuntasser/meme/master/extension/assets/position-bottom-64.png" alt="align">' +
        '</li>' +
      '</ul>' +
      '<ul class="controls controls-right">' +
        '<li class="control control-download"><a href="#" id="mememaker-download">Download</a></li>' +
      '</ul>' +
      '<div class="clear"></div>' +
    '</div>' +
  '</div>' +
'</div>';

var str2DOMElement = function(html) {
    var frame = document.createElement('iframe');
    frame.style.display = 'none';
    document.body.appendChild(frame);
    frame.contentDocument.open();
    frame.contentDocument.write(html);
    frame.contentDocument.close();
    var el = frame.contentDocument.body.firstChild;
    document.body.removeChild(frame);
    return el;
}

var el = str2DOMElement(html);

document.body.appendChild(el);
