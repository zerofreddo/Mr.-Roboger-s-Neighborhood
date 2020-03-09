//back-end
function mrBooper(inputNumber) {
  var resultArray = [];
  for (count = 0; count <= inputNumber; count++) {
    var countString = count.toString();
    if (countString.includes("3")) {
      resultArray.push("<li>Won't you be my neighbor?</li>");
    } else if (countString.includes("2")) {
      resultArray.push("<li>Boop</li>");
    } else if (countString.includes("1")) {
      resultArray.push("<li>Beep</li>");
    } else {
      resultArray.push("<li>" + countString + "</li>");
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
    }); 
  });
});