$(document).ready(function(){
   $(".big").mouseenter(function(){
   	$(this).css("background"," #fafafa");
   	$(".ch-info-front").css({'transform' : 'rotate('+ 360 +'deg)'});


   });
   $(".big").mouseleave(function(){
   	 	$(this).css("background"," white");
   	 	$(".ch-info-front").css({'transform' : 'rotate('+ -360 +'deg)'});
   	 })
   $(".fa-cogs").click(function(){
   	$("#style-switcher").css("left","0");
   })
   $(".green").click(function(){
   	$(".changeColor").addClass("green-c");
   	$(".change-back-color").addClass("green");
   })
   $(".blue").click(function(){
   	$(".changeColor").addClass("blue-c");
   	$(".change-back-color").addClass("blue");
   })
   $(".orange").click(function(){
   	$(".changeColor").addClass("orange-c");
   	$(".change-back-color").addClass("orange");
   })
   $(".purple").click(function(){
   	$(".changeColor").addClass("purple-c");
   	$(".change-back-color").addClass("purple");
   })
   $(".red").click(function(){
   	$(".changeColor").addClass("red-c");
   	$(".change-back-color").addClass("red");
   })
   $(".magenta").click(function(){
   	$(".changeColor").addClass("magenta-c");
   	$(".change-back-color").addClass("magenta");
   })
   $(".brown").click(function(){
   	$(".changeColor").addClass("brown-c");
   	$(".change-back-color").addClass("brown");
   })
   $(".gray").click(function(){
   	$(".changeColor").addClass("gray-c");
   	$(".change-back-color").addClass("gray");
   })
   $(".golden").click(function(){
   	$(".changeColor").addClass("golden-c");
   	$(".change-back-color").addClass("golden");
   })
   $(".teal").click(function(){
   	$(".changeColor").addClass("teal-c");
   	$(".change-back-color").addClass("teal");
   })
// $('.selDiv option[value="SEL1"]')
   $("#layout-style").val(["2"]).click(function(){
   	$(".change-contain").addClass("container")
   })
   // $(".fa-cogs").click(function(){
   // 	if ($("#style-switcher").left == '-206px') {
   // 		$("#style-switcher").css("<le></le>ft","0");
   // 	}
   // })
   // $(".fa-cogs").toggle(
   // 	function(){$("#style-switcher").css("left","-206px");}
   // 	function(){$("#style-switcher").css("left","0");}
   // 	)
});