$(function () {  
  //Template Demo 用
  $(".style-demo").on("click",function(){
      var $myCSS = $("#ThemeCSS");
      if ($myCSS.attr('href') == "assets/css/UI-internal.css") {
          //- 直接用變數調整的css
          $myCSS.attr('href','assets/css/UI.css');
          //- EIDDC & AOCC Demo Change
          $("html").attr("ui-system","");
          //-header & nav
          $("header.style-demo-theme").removeClass("theme-primary").addClass("theme-dark");
          $("nav.style-demo-theme").removeClass("theme-light").addClass("theme-dark");
          
      } else {
        $myCSS.attr('href','assets/css/UI-internal.css');
        $("html").attr("ui-system","AOCC");
        //-header & nav
        $("header.style-demo-theme").removeClass("theme-dark").addClass("theme-primary");
        $("nav.style-demo-theme").removeClass("theme-dark").addClass("theme-light");
      }
      setTimeout(function(){
        myColor();
      }, 300);
  });



  //切換顏色 取值
  function myColor(){
    function rgb2hex(rgb){
      rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
      return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
      }
  
    $('[myColor="Value"]').each(function(){
      var hex = rgb2hex( $(this).css('background-color') );
      $(this).find('[myColor="View"]').html(hex);
    });
  }
  myColor();



});
