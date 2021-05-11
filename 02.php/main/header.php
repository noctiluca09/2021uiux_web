<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/style.css">
  <title>homepage</title>
  <script>
  let num = location.href.indexOf("=") + 1; //번호찾기
  let string = location.href.substring(num); //문자열자르기
  console.log(string);

  if(location.href.indexOf("=") > 0 ){
    view(string);
  }else{
    view(0)
  }

  function view(menu){
    $(".listWrap li").removeClass("active").eq(menu).addClass("active");
    $(".conWrap > div").hide().eq(menu).show();
  }
  $(".listWrap li").click(function(){
    var menu = $(this).index();
    view(menu);
  });
  </script>
</head>
<body>
  <header id="header">
    <h1><a href="./">logo</a></h1>
    <nav class="gnb">
      <ul class="clearfix">
        <li <? if($location=="company"){ echo 'class="active"';}?>><a href="company.php">menu1</a></li>
        <li <? if($location=="product"){?> class="active" <?}?>><a href="product.php">menu2</a></li>
        <li><a href="#">menu3</a></li>
        <li><a href="#">menu4</a></li>
        <li><a href="#">menu5</a></li>
      </ul>
    </nav>
  </header>
