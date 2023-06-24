$(document).ready(function() {
 

    $("#stream1_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
       $(".stream2").removeClass('highlight_stream');
       $(".stream3").removeClass('highlight_stream');
         $(".stream1").addClass('highlight_stream');
   });
   $("#stream2_btn").on("click", function() {
       $(".stream1").removeClass('highlight_stream');
       $(".stream2").removeClass('highlight_stream');
       $(".stream3").removeClass('highlight_stream');
         $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
       $(".stream1").removeClass('highlight_stream');
       $(".stream2").removeClass('highlight_stream');
       $(".stream3").removeClass('highlight_stream');
         $(".stream3").addClass('highlight_stream');
   });


}); 

/* 
$ ('p').css("background-color");
"rgba(0, 0, 0, 0)"
$ ('p').css("background-color", "red"); // to change the color to red

$ ('ul').css("border", "solid 1px #ccc"); //adds a 1px border to all lists

$ ('#my_footer').html(" "); // retrieves the html from id "footer"
$ ('#my_footer').html("<h1>This is new</h1>"); // adds new text
$ ('#my_footer').append("<span>&copy; 2017</span>"); // adds new text
*/