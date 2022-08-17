$(document).ready(function(){
  $(".time-display").text(moment().format("MMMM Do YYYY, h:mm:ss a"));//displays time in header element
  $(moment().startOf('day').hour(1).minutes(0).seconds(0).milliseconds(0)).select("id");
  $(".save-button").on("click", function (){
      var text = $(this).siblings(".user-input").val();//writes text to 
      var time = $(this).parent().attr("id");//selects property id-the timeblocks-to adds the function of time to the textarea
      console.log(this);
      localStorage.setItem(time, text);//sets the text and time to local storage value
  });
// each hour text field for user input
$("#8 .user-input").val(localStorage.getItem("8"));

$("#9 .user-input").val(localStorage.getItem("9"));

$("#10 .user-input").val(localStorage.getItem("10"));

$("#11 .user-input").val(localStorage.getItem("11"));

$("#12 .user-input").val(localStorage.getItem("12"));

$("#13 .user-input").val(localStorage.getItem("13"));

$("#14 .user-input").val(localStorage.getItem("14"));

$("#15 .user-input").val(localStorage.getItem("15"));

$("#16 .user-input").val(localStorage.getItem("16"));

$("#17 .user-input").val(localStorage.getItem("17"));

function eachHour(){//sets moment so that hours are the increment. 

  $(".time-line").each(function(){
    var currentHour = moment().hour();
      var hourLine = parseInt($(this).attr("id"));//pase
      console.log(hourLine)
      if(hourLine < currentHour){
          $(this).addClass("past");
          $(this).removeClass("soon");
          $(this).removeClass("now");
      }//if else to handle adding classes for css event
      else if(hourLine === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("now");
          $(this).removeClass("soon");
      }
      else {
          $(this).removeClass("now");
          $(this).removeClass("past");
          $(this).addClass("soon");
          console.log(this)
      }
      console.log(currentHour)
  })
}
      eachHour();
     

})

