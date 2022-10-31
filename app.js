gsap.registerPlugin('ScrollTrigger')
gsap.registerPlugin('ScrollTo')
var imgg = Math.floor(Math.random() * 10)
var img = "assets/" + imgg + '.jpeg'
if (imgg == 0 || imgg == 1){
  document.getElementById('attr').innerHTML = 'Photo by <a href=\"https://unsplash.com/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">NASA</a> on <a href=\"https://unsplash.com/s/photos/nebula?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>'
}
else if (imgg === 2){
    document.getElementById("attr").innerHTML = 'Photo by <a href=\"https://unsplash.com/@op23?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">op23</a> on <a href=\"https://unsplash.com/t/wallpapers?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>'
}
else if (imgg === 3){
  document.getElementById("attr").innerHTML = 'Photo by <a href=\"https://unsplash.com/@androwv?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Andrei R. Popescu</a> on <a href=\"https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>'
}
else if (imgg === 4){
  document.getElementById("attr").innerHTML = 'Photo by <a href=\"https://unsplash.com/@alex_gruber?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Alex Gruber</a> on <a href=\"https://unsplash.com/@alex_gruber?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>'
}
else if (imgg === 5){
  document.getElementById("attr").innerHTML = 'Photo by <a href=\"https://unsplash.com/@beckerworks?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">David Becker</a> on <a href=\"https://unsplash.com/@beckerworks?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>'
}
else if (imgg === 6){
  document.getElementById("attr").innerHTML = 'Photo by <a href=\"https://unsplash.com/@wolfgang_hasselmann?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Wolfgang Hasselmann</a> on <a href=\"https://unsplash.com/t/wallpapers?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>'
}
else if (imgg === 7){
  document.getElementById("attr").innerHTML = 'Photo by <a href=\"https://unsplash.com/@sanderweeteling?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Sander Weeteling</a> on <a href=\"https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>'
}
else if (imgg === 8){
  document.getElementById("attr").innerHTML = ''
}
else if (imgg === 9){
  document.getElementById("attr").innerHTML = 'Photo by <a href=\"https://unsplash.com/@vmxhu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Szabo Viktor</a> on <a href=\"https://unsplash.com/s/photos/nature-wallpaper?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>'
}
var width  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;
document.getElementById('lmaois').src = img
var colors = []
document.getElementById('lmaois').addEventListener('load', function() {
  var vibrant = new Vibrant(document.getElementById('lmaois'));
  var swatches = vibrant.swatches()
  for (var swatch in swatches)
      if (swatches.hasOwnProperty(swatch) && swatches[swatch])
          colors.push(swatches[swatch].getHex())
});
document.getElementById('lmaois').addEventListener('load', function() {gsap.to("#projects", {backgroundColor:colors[0], duration:1, color:'#ffffff'});gsap.to("a", {color:colors[4], duration:1});})
window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
  ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate: updateValues
  });
  gsap.to('#name', { opacity: 1, duration: 0 })
  function updateValues() {
    if (ScrollTrigger.isInViewport('#ghost') && document.getElementById('ghost').style.opacity == 0) { // you can use selector text
      document.getElementById("bdiv").style.pointerEvents = 'none'
      if (window.mobileCheck() == false) {
        gsap.to(window, { duration: 0.5, scrollTo: "#rule" });
        gsap.to('#lmaois', { duration: 0.5, opacity: '0', filter: "blur(50px)", transform:"scale(110%)" });
        gsap.to('#name', { opacity: 0, duration: 0.6, top: "100%" })
        gsap.to('#projects', { opacity: 0, duration: 0.2 })
        gsap.to('#navdiv', { background: "rgba(30, 31, 33, 0.4)", backdropFilter: 'blur(20px)', boxShadow: '0px 0px 15px black' })
      }
      else {
        gsap.to(window, { duration: 0.5, scrollTo: "#rule" });
        gsap.to('#lmaois', { duration: 0.5, opacity: '0', filter: "blur(0px)" });
        gsap.to('#name', { opacity: 1, duration: 0.6 })
        gsap.to('#projects', { opacity: 0, duration: 0.2 })
        gsap.to('#navdiv', { background: "rgba(30, 31, 33, 0.4)", backdropFilter: 'blur(20px)', boxShadow: '0px 0px 15px black' })
      }
      gsap.to('#ghost', { opacity: 1, duration: 0.6 })
      gsap.to('#proj', { opacity: 1, duration: 0.6 })
    }
    if (ScrollTrigger.isInViewport('#sdiv') && document.getElementById('ghost').style.opacity == 1) { // you can use selector text
      if (window.mobileCheck() == false) {
        //gsap.to(window, {duration: 1, scrollTo:0});
      }
      gsap.to('#lmaois', { duration: 0.5, opacity: '0.6'});
      if (width >=1150){document.getElementById("bdiv").style.pointerEvents = 'all'}
      gsap.to(window, { duration: 0.5, scrollTo: 0 });
      gsap.to('#name', { opacity: 1, duration: 2, top: '50%' })
      gsap.to('#name', { duration: 0, top: '50%' })
      gsap.to('#projects', { opacity: 1, duration: 1 })
      gsap.to('#ghost', { opacity: 0, duration: 0.51 })
      gsap.to('#lmaois', { duration: 0.7, opacity: '1', filter: "blur(0px)", delay:0.2, transform:"scale(100%)" });
      gsap.to('#navdiv', { background: "rgba(30, 31, 33, 0)", backdropFilter: 'blur(0px)', boxShadow: '0px 0px 0px black' })
      gsap.to('#proj', { opacity: 0, duration: 0.6 })
    }
  }
