//Check off specific todos by clicking

// on keyword will add listners for all potential future elements
// hence it's very useful in case of new dynamically created elements
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//click on X to delete Todo
// Event bubbling occurs triggering to li ul container and body
$("ul").on("click", "span", function(event) {
	//To stop event bubbling
	// here this refers to the span clicked
	$(this).parent().fadeOut(500, function() { 
		// here this refers to li not the span
		$(this).remove();
	});
	event.stopPropagation(); // a jquery method
});

$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		//grabbing new todo text
		var todoText = $(this).val();
		//alert(todoText);
		if(todoText != "") {
		$(this).val(""); // acts as setter
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");

		}
	}
});

$(".fa-edit").click(function(){
	$("input[type='text']").fadeToggle();
});