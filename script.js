function BMI(weight, height) {
  let result = weight / (height * height);
  return result;
}

console.log(BMI(70, 1.8));

function Status(bodymass) {
  if (bodymass < 18.5) {
    return "لديك نقص في الوزن";
  } else if (bodymass >= 18.5 && bodymass <= 25) {
    return "وزنك صحي";
  } else {
    return " لديك زيادة في الوزن";
  }
}

function calculate() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let bmi_value = BMI(weight, height);
  let desc = Status(bmi_value);
  let box = document.getElementById("result");
  box.innerText = bmi_value + " == " + desc;
}
