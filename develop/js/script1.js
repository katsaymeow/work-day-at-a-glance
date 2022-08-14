$(document).ready(function(){
  $(".time-display").text(moment().format("MMMM Do YYYY, h:mm:ss a"));//displays time in header element
  $(".save-button").on("click", function (){
      console.log(this);
      var text = $(this).siblings(".user-input").val();//writes text to 
      var time = $(this).parent().attr("id");
      localStorage.setItem(time, text);//sets the text and time to local storage value
  });
// each hour text field
$("#eight .user-input").val(localStorage.getItem("eight"));

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

  $(".time-line").each(function(){// parseInt to attribute
      var hourLine = parseInt($(this).attr("id").split("hour")[1]);
      console.log(hourLine, currentHour)

      if(hourLine < currentHour){
          $(this).addClass("past");
          $(this).removeClass("future");
          $(this).removeClass("present");
      }//if else to handle adding classes for css event
      else if(hourLine === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
          $(this).removeClass("future");
      }
      else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");
          console.log(this)
      }
  })
}
      eachHour();
      

})

