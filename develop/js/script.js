var today = moment();
$(document).ready(function(){
  $(".time-display").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));//displays time in header element

  $(".save-button").on("click", function (){
      console.log(this);
      var text = $(this).sibling('.user-input').val();//writes text to 
      var time = $(this).parent().attr("id");
      localStorage.setItem(time, text);//sets the text and time to local storage value
 
// each hour text field
$("#eight .user-input").val(localStorage.getItem("eight"));//does each need to have own ""?

$("#nine .user-input").val(localStorage.getItem("nine"));

$("#ten .user-input").val(localStorage.getItem("ten"));

$("#eleven .user-input").val(localStorage.getItem("eleven"));

$("#twelve .user-input").val(localStorage.getItem("twelve"));

$("#one .user-input").val(localStorage.getItem("one"));

$("#two .user-input").val(localStorage.getItem("two"));

$("#three .user-input").val(localStorage.getItem("three"));

$("#four .user-input").val(localStorage.getItem("four"));

$("#five .user-input").val(localStorage.getItem("five"));

function eachHour(){//sets moment so that hours are the increment. 
  var currentHour = moment().hour();

  $(".time-line").each(function(){//trying to use moment to add time to id 
      var hourLine = moment($(this).slice("class")[1]);
      if(hourLine > currentHour){
          $("class").addClass("past");
          $("class").removeClass("now");
          $("class").removeClass("soon");
      }//if else to handle adding classes for css event
      else if(hourLine === currentHour) {
          $("class").removeClass("past");
          $("class").addClass("now");
          $("class").removeClass("soon");
      }
      else {
          $("class").removeClass("past");
          $("class").removeClass("now");
          $("class").addClass("soon");
      }
      console.log(this);
      console.log(hourLine, currentHour)
  })
}
      eachHour();
      return;
    });
})

