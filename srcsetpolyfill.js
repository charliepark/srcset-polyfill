var srcsetPolyfill = {
  run : function(){
    if(!window.devicePixelRatio || window.devicePixelRatio === 1){return;}
    var images = document.getElementsByTagName('img');
    for(var i = 0; i < images.length; i++){
      srcsetPolyfill.processImage(images[i]);
    }
  },
  processImage : function(image){
    var srcset = image.getAttribute('srcset');
    if(!(srcset && srcsetPolyfill.checkFor2x(srcset))){return;}
    var sources = srcset.split(',');
    for(var i = 0; i < sources.length; i++){
      if(srcsetPolyfill.checkFor2x(sources[i])){
        image.setAttribute('src', sources[i].trim().replace(' 2x','').trim());
      }
    }
  },
  checkFor2x : function(string){
    return / 2x/.test(string);
  },
};
srcsetPolyfill.run();
