//back-end
function mrBooper(number) {
  var resultArray = [];
  for (count = 0; count < number +1; count++) {
    var inputString = count.toString();
    if (inputString.includes("3")) {
      resultArray.push("<li>Won't you be my neighbor?</li>");
    } else if (inputString.includes("2")) {
      resultArray.push("<li>Boop</li>");
    } else if (inputString.includes("1")) {
      resultArray.push("<li>Beep</li>");
    } else {
      resultArray.push("<li>" + inputString + "</li>");
    }
  }
  return resultArray;
}





//front-end
$(document).ready(function() {
  $("#numWords").submit(function(event) {
    event.preventDefault();
    $("#result").text("");
    var inputNum = parseInt($("#converter").val());
    var mrBooperArray = mrBooper(inputNum);
    mrBooperArray.forEach(function(item){
      $("#result").append(item);
    }) 
  });
});