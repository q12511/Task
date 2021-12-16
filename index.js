//const button = document.querySelector('input');
//button.addEventListener('click', updateButton);
var works = document.getElementById("works");

function updateButton() {
  var task = document.createElement("p");
  var button = document.createElement("input");
  var kazu = works.getElementsByTagName("p").length;
  var deadline = document.getElementById("deadline").value;
  var manager = document.getElementById("manager").value;
  var status = "not started yet";

  task.innerHTML = "work " + (kazu + 1) +
  "<br> deadline " + deadline +
  "<br> manager " + manager +
  "<br> status " + status + "<br>";
  button.setAttribute("type", "button");
  button.setAttribute("value", "delete");
  button.setAttribute("onclick", "updateButton()");
  task.appendChild(button);
  works.appendChild(task);
}

function deleteButton() {

}
