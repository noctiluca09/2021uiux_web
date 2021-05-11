$(document).ready(function(){
  //1menuㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
//   const oneTop = $("#v01s").offset().top;
//   const oneTwo = $("#v02s").offset().top;
//   const oneThree = $("#v03s").offset().top;
//
// $(".menu > a").eq(0).on("click",function(){});
// $(".menu > a").eq(0).click(function(){
//     $("html,body").animate({scrollTop:oneTop})
// });
// $(".menu > a").eq(1).click(function(){
//     $("html,body").animate({scrollTop:oneTwo})
// });
// $(".menu > a").eq(2).click(function(){
//     $("html,body").animate({scrollTop:oneThree})
// });

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ2st for 구문ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// for(let i=0; i<$(".menu > a").length;i++){
//   $(".menu > a").eq(i).click(function(){
//     $("html,body").animate({scrollTop:$(".scene").eq(i).offset().top})
//   });
// }
//
//3stㅡㅡㅡㅡㅡㅡㅡ $(this).index() 구문.ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// $(".menu > a").click(function(){
//   let i = $(this).index();
//   const st = $(".scene").eq(i).offset().top;
//   $("html,body").animate({scrollTop:st});
// });

//4stㅡㅡㅡㅡㅡㅡㅡㅡ hash 구문ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
$(".menu>a").click(function(){
  let target = $(this.hash);
  const st = target.offset().top;
  $("html,body").animate({scrollTop:st})
  // console.log(target);
  });



$(window).scroll(function(){
  let scrollY = $(window).scrollTop();
  for(let i=0; i<$(".scene").length;i++){
    if(scrollY >= $(".scene").eq(i).offset().top){
      $(".menu >a ").removeClass("active").eq(i).addClass("active")
  };
};
  //
  // let scrollY = $(window).scrollTop();
  // if(scrollY >= $(".scene").eq(0).offset().top){
  //   $(".menu >a ").removeClass("active").eq(0).addClass("active");
  // }
  // if(scrollY >= $(".scene").eq(1).offset().top){
  //   $(".menu >a ").removeClass("active").eq(1).addClass("active");
  // }
  // if(scrollY >= $(".scene").eq(2).offset().top){
  //   $(".menu >a ").removeClass("active").eq(2).addClass("active");
  // }
$(".scene").each(function(index){
  //if(scrollY >= $(".scene").eq(index).offset().top){}
  if(scrollY >= $(this).offset().top){
    $(".menu>a").removeClass("active").eq(index).addClass("active");
  }
});

});//scro


}); //jquery ready
