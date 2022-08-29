/*Custom JavaScript*/

/*Custom JavaScript*/

$(function(){
  $('.language-switch-section a').on("click", function(e){
    let new_path;

    if(location.pathname.indexOf("en") != -1) {
      new_path = "/";
    } else {
      new_path = "/en";
    }
    window.location.href = new_path;
  });
});
