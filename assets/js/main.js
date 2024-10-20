let inputresult = [];
function inputs_data() {
  const data_input = document.querySelectorAll("input, textarea");
  const Error = document.querySelector("#error");
  const obj = {};
  let check = true;
  for (let i = 0; i < data_input.length; i++) {
    if (data_input[i].value == "") {
      data_input[i].style.border = "2px solid #e74c3c";
      Error.style.display = "flex";
      check = false;
    } else {
      data_input[i].style.border = "";
      obj[data_input[i].id] = data_input[i].value;
    }
  }
  if (check === true) {
    Error.style.display = "none";
    inputresult.push(obj);
    console.log(inputresult);
    for (let i = 0; i < data_input.length; i++) {
      data_input[i].value = "";
    }
  }
}
