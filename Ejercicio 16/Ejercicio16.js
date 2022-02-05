window.onload = function() {
    var info = document.getElementById('informacion');
  
    // Numero de enlaces de la pagina
    var pw = document.getElementsByTagName('a');
      
    // Direccion del penultimo enlace
    var penenlace = pw[pw.length-2].href;
   
    
    // Numero de enlaces del tercer párrafo
    var par = document.getElementsByTagName('p');
    enlpar = par[2].getElementsByTagName('a');
    
    info.innerHTML =  '<br/>'+'El número de enlaces que tiene la página es: '+pw.length + '<br/>' + 'El penultimo enlace dirige a: '+penenlace + '<br/>' + 'El número de enlaces del tercer párrafo es: '+enlpar.length;
  }