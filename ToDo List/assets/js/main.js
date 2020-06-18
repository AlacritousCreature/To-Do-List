$("ul").on("click","li",function(){
		$(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});

	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grab the entered text
		var newText = $(this).val();
		$(this).val("");
		//create a new li and append to list
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>"+ newText + "</li>");
	}
});

$(".fa-plus").click(function(){
   $("input[type='text']").fadeToggle();
});
