$(document).ready(function(){
    

    $("#botonBruja").click(function(){
      $("#imgBruja").css('display','block');
      $("#imgFiesta").hide();
      $("#imgSilueta").hide();
      $("#imgSombrero").hide();
      $("#imgVolando").hide();
    });

    $("#botonFiesta").click(function(){
      $("#imgBruja").hide();
      $("#imgFiesta").css('display','block');
      $("#imgSilueta").hide();
      $("#imgSombrero").hide();
      $("#imgVolando").hide();
    });

    $("#botonSilueta").click(function(){
      $("#imgBruja").hide();
      $("#imgFiesta").hide();
      $("#imgSilueta").css('display','block');
      $("#imgSombrero").hide();
      $("#imgVolando").hide();
    });

    $("#botonSombrero").click(function(){
      $("#imgBruja").hide();
      $("#imgFiesta").hide();
      $("#imgSilueta").hide();
      $("#imgSombrero").css('display','block');
      $("#imgVolando").hide();
    });

    $("#botonVolando").click(function(){
      $("#imgBruja").hide();
      $("#imgFiesta").hide();
      $("#imgSilueta").hide();
      $("#imgSombrero").hide();
      $("#imgVolando").css('display','block');
    });
  });
