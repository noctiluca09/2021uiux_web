// alert("확인");
$(document).ready(function(){
  // $(".wrapper li").eq(0).animate({left:"-100%"},1000);
  // $(".wrapper li").eq(1).animate({left:0},1000);

// ----------------------------left slider---------------------------
 let current = 0;
  const banner = $(".wrapper li");
function slider(){
  banner.eq(current).css("left",0).stop().animate({left:"-100%"},1000);
  current++;
  if(current == 5){current = 0}
  banner.eq(current).css({left:"100%"}).animate({left:0},1000)
}
setInterval(slider,3000)

});
// -----------------------------top slider ------------------------------
// let current = 0;
// const banner = $(".wrapper li");
//
// function slider(){
//   move(current,0,"-100%");//0
//   current++;
//   if(current == 5){current =0}
//
//   move(current,"100%",0); //1
// }
//
// setInterval(slider,3000);
// function move(i,start,end) {
//   banner.eq(i).css({top:start}).stop().animate({top:end},1000);
// }
// });
// ---------------------------------------------------------------------
