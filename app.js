gsap.registerPlugin('ScrollTrigger')
gsap.registerPlugin('ScrollTo')
if(window.scrollY != 0){
  gsap.to('#lmaois', { duration: 0.5, opacity: '0', filter: "blur(50px)", transform: "scale(110%) translate(0%,0%)"});
  gsap.to('#up', { opacity: 1, duration: 0.2, pointerEvents: "all" })
}
const imgg = Math.floor(Math.random() * 12)
const img = "assets/" + imgg + '.jpeg'
if (imgg === 0 || imgg === 11){
  document.getElementById('attr').innerHTML = 'Photo by <a href=\"https://unsplash.com/@aldebarans?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Aldebaran S</a> on <a href=\"https://unsplash.com/s/photos/nebula?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>'
}
if (imgg == 1) {
  document.getElementById('attr').innerHTML = 'Photo by <a href=\"https://unsplash.com/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">NASA</a> on <a href=\"https://unsplash.com/s/photos/nebula?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>'
}
else if (imgg === 2) {
  document.getElementById("attr").innerHTML = 'Photo by <a href=\"https://unsplash.com/@cadop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Mathew Schwartz</a> on <a href=\"https://unsplash.com/images/nature/space?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>'
}
else if (imgg === 3) {
  document.getElementById("attr").innerHTML = 'Photo by <a href=\"https://unsplash.com/@androwv?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Andrei R. Popescu</a> on <a href=\"https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>'
}
else if (imgg === 4) {
  document.getElementById("attr").innerHTML = 'Photo by <a href=\"https://unsplash.com/@alex_gruber?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Alex Gruber</a> on <a href=\"https://unsplash.com/@alex_gruber?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>'
}
else if (imgg === 5) {
  document.getElementById("attr").innerHTML = 'Photo by <a href=\"https://unsplash.com/@wistomsin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Tom Barrett</a> on <a href=\"https://unsplash.com/images/nature/space?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>'
}
else if (imgg === 6) {
  document.getElementById("attr").innerHTML = 'Photo by <a href=\"https://unsplash.com/@elliottengelmann?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Elliott Engelmann</a> on <a href=\"https://unsplash.com/wallpapers/colors/dark?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>'
}
else if (imgg === 7) {
  document.getElementById("attr").innerHTML = 'Photo by <a href=\"https://unsplash.com/@alexis_antonio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Alexis Antonio</a> on <a href=\"https://unsplash.com/images/nature/moon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>'
}
else if (imgg === 8) {
  document.getElementById("attr").innerHTML = '' // couldnt find attribution for this
}
else if (imgg === 9) {
  document.getElementById("attr").innerHTML = 'Photo by <a href=\"https://unsplash.com/@jeremybishop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Jeremy Bishop</a> on <a href=\"https://unsplash.com/wallpapers/colors/dark?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>'
}
else if (imgg === 10) {
  document.getElementById("attr").innerHTML = 'Photo by <a href=\"https://unsplash.com/es/@withluke?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Luke Stackpoole</a> on <a href=\"https://unsplash.com/images/nature/star?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>'
}
var width = window.innerWidth || document.documentElement.clientWidth ||
  document.body.clientWidth;
document.getElementById('lmaois').src = img
var colors = []
document.getElementById('lmaois').addEventListener('load', function () {
  gsap.to("#lmaois", { filter: "blur(0px)", transform: "scale(100%) translate(0%,0%)" })
  var vibrant = new Vibrant(document.getElementById('lmaois'));
  var swatches = vibrant.swatches()
  for (var swatch in swatches)
    if (swatches.hasOwnProperty(swatch) && swatches[swatch])
      colors.push(swatches[swatch].getHex())
});
if (imgg === 10) { document.getElementById('lmaois').addEventListener('load', function () { gsap.to("#projects", { backgroundColor: colors[0], duration: 1 }); gsap.to("a", { color: colors[4], duration: 1 }); }) }
else {
  document.getElementById('lmaois').addEventListener('load', function () { gsap.to("#projects", { backgroundColor: colors[0], duration: 1, color: '#ffffff' }); gsap.to("a", { color: colors[4], duration: 1 }); })
}
window.mobileCheck = function () {
  let check = false;
  (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};
ScrollTrigger.create({
  start: 0,
  end: "max",
  onUpdate: updateValues
});
var scr = false
gsap.to('#name', { opacity: 1, duration: 0 })
function updateValues() {
  if (ScrollTrigger.isInViewport('#ghost') && document.getElementById('ghost').style.opacity == 0) { // you can use selector text
    document.getElementById("bdiv").style.pointerEvents = 'none'
    if (window.mobileCheck() == false) {
      gsap.to(window, { duration: 0.5, scrollTo: "#rule" });
      scr = true;
      gsap.to('#lmaois', { duration: 0.5, opacity: '0', filter: "blur(50px)", transform: "scale(110%) translate(0%,0%)" });
      gsap.to('#name', { opacity: 0, duration: 0.6, top: "100%" })
      gsap.to('#projects', { opacity: 0, duration: 0.2 })
      gsap.to('#navdiv', { background: "rgba(29, 34, 57, 0.8)", backdropFilter: 'blur(20px)', boxShadow: '0px 0px 15px black' })
    }
    else {
      gsap.to(window, { duration: 0.5, scrollTo: "#rule" });
      gsap.to('#lmaois', { duration: 0.5, opacity: '0', filter: "blur(0px)" });
      gsap.to('#name', { opacity: 1, duration: 0.6 })
      gsap.to('#projects', { opacity: 0, duration: 0.2 })
      gsap.to('#navdiv', { background: "rgba(29, 34, 57, 0.8)", backdropFilter: 'blur(20px)', boxShadow: '0px 0px 15px black' })
    }
    gsap.to('#ghost', { opacity: 1, duration: 0.6 })
    gsap.to('#proj', { opacity: 1, duration: 0.6 })
    gsap.to('#up', { opacity: 1, duration: 0.2, pointerEvents: "all" })
  }
  if (ScrollTrigger.isInViewport('#sdiv') && document.getElementById('ghost').style.opacity == 1) { // you can use selector text
    if (window.mobileCheck() === false) {
      //gsap.to(window, {duration: 1, scrollTo:0});
    }
    gsap.to('#lmaois', { duration: 0.5, opacity: '0.6' });
    if (width >= 1150) { document.getElementById("bdiv").style.pointerEvents = 'all' }
    gsap.to(window, { duration: 0.5, scrollTo: 0 });
    gsap.to('#name', { opacity: 1, duration: 2, top: '50%' })
    gsap.to('#name', { duration: 0, top: '50%' })
    gsap.to('#projects', { opacity: 1, duration: 1 })
    gsap.to('#ghost', { opacity: 0, duration: 0.51 })
    gsap.to('#lmaois', { duration: 0.7, opacity: '1', filter: "blur(0px)", delay: 0.2, transform: "scale(100%) translate(0%,0%)" });
    gsap.to('#navdiv', { background: "rgba(39, 44, 67, 0)", backdropFilter: 'blur(0px)', boxShadow: '0px 0px 0px black' })
    gsap.to('#proj', { opacity: 0, duration: 0.6 })
    gsap.to('#up', { opacity: 0, duration: 0.7, pointerEvents: "none", delay: 0.2 })
    setTimeout(function(){scr = false}, 200)
  }
}
function up() { gsap.to(window, { duration: 0.5, scrollTo: 0, onComplete: function () { document.querySelector('html').scrollLeft = 0 } }); }
gsap.to("#contbold", {
  scrollTrigger: "#contbold", // start the animation when ".box" enters the viewport (once)
  color:"#ffffff",
  duration:2,
  delay:0.1
})

function isInViewport(element) {
  var myElement = element;
  var bounding = myElement.getBoundingClientRect();
  var myElementHeight = myElement.offsetHeight;
  var myElementWidth = myElement.offsetWidth;
    var bounding = myElement.getBoundingClientRect();

    if (bounding.top >= -myElementHeight 
        && bounding.left >= -myElementWidth
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {

        return true
    } else {

        return false
    }
}
// I'm so fucking sorry
document.getElementById('up').addEventListener('mouseover', function(){
  document.getElementById('upsvg').setAttribute("stroke","rgb(0,0,0)")
  // welcome to satan's godawful conditionals
  if(isInViewport(document.getElementById('rule3'))){
  gsap.to('#up', { backgroundColor: "#f8d98b", delay:0, duration:0})
  }
  else if(isInViewport(document.getElementById('rule2'))){
    gsap.to('#up', { backgroundColor: "#47f2e9", delay:0, duration:0})
    }
    else if(isInViewport(document.getElementById('rule'))){
      gsap.to('#up', { backgroundColor: "#ff8772", delay:0, duration:0})
      }
})
document.getElementById('up').addEventListener('mouseleave', function(){
  document.getElementById('upsvg').setAttribute("stroke","rgb(255,255,255)")
  gsap.to('#up', {backgroundColor: "#272c43", delay:0, duration:0})
})
gsap.to('#name', {backdropFilter:"blur(0px)", duration:1, delay:1, transform:"translate(-50%, -50%) scale(100%)",  ease: "expo.out", onComplete:function(){
  document.getElementById("bdy").addEventListener("mousemove", function(event){
    w = window.innerWidth;
    h = window.innerHeight;
    Xx = -50 - ((event.x - w/2)/750)
    Yy = -50 - ((event.y - h/2)/750)
    Xxx = ((event.x - w/2)/7000)
    Yyy = ((event.y - h/2)/7000)
    gsap.to("#name", {transform: "translate("+Xx+"%,"+Yy+"%) scale(100%)", duration:1.1})
    if (scr == false){
    gsap.to("#lmaois", {transform: "translate("+Xxx+"%,"+Yyy+"%) scale(100%)", duration:1.1})
    }
  })
}})
//gsap.to('#name', {backdropFilter:"blur(0px)", duration:2, delay:1, transform:"translate(-50%, -50%) scale(110%)",  ease: "elastic.out( 1, 0.3)"})
var i = 0;
var txt = 'COMPANY NAME'; /* The text */
var speed = 75; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {

    document.getElementById("moon").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
setTimeout(function(){window.scroll(0,0)}, 100)
setTimeout(typeWriter, 2000);