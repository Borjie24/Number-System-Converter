const entryDropdown1 = document.getElementById('entry-dropdown1');
const entryDropdown2 = document.getElementById("entry-dropdown2");
const numberInput = document.getElementById('number-input');
const result = document.getElementById('result');
const convertBtn = document.getElementById('convert-btn');
const res = document.querySelector(".result");

/* Decimal to Binary */
const decimalToBinary  = (input) => {
  if(input === 0 || input === 1){
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input/2)) + (input % 2);
  }
}

/* Decimal  to Octal */
const decimalToOctal = (input) => {
  if(input < 8){
    return String(input);
  } else {
    return decimalToOctal(Math.floor(input/8)) + (input % 8);
  }
}

/* Decimal  to Hexadecimal */
const decimalToHexa = (input) => {
  if(input < 16){
    return input < 10 ? String(input) : String.fromCharCode(input + 55);
    
  } else {
    return decimalToHexa(Math.floor(input/16)) + (input % 16 < 10 ? input % 16 : String.fromCharCode(input % 16 + 55));
  }
}

/* Binary to Decimal */
const binaryToDecimal = (input) => {
  return parseInt(input, 2);
}

/*Binary to Octal */
const binaryToOctal = (input) => {
  const number = binaryToDecimal(input);
  return decimalToOctal(number);

}

/*Binary to Hexadecimal */
const binaryToHexa = (input) => {
  const number = binaryToDecimal(input);
  return decimalToHexa(number);

}


/* Octal to Decimal */
const octalToDecimal = (input) => {
  return parseInt(input, 8);
}

/* Octal to Binary */
const octalToBinary = (input) => {
  const number = octalToDecimal(input);
  return decimalToBinary(number);
}

/* Octal to Hexadecimal */
const octalToHexa = (input) => {
  const number = octalToDecimal(input);
  return decimalToHexa(number);
}


/* Hexadecimal to Decimal */
const hexaToDecimal = (input) => {
  return parseInt(input, 16);
}

/* Hexadecimal to Binary */
const hexaToBinary = (input) => {
  const number = hexaToDecimal(input);
  return decimalToBinary(number);
}

/* Hexadecimal to Octal*/
const hexaToOctal = (input) => {
  const number = hexaToDecimal(input);
  return decimalToOctal(number);
}



/* Print the Result */
const checkUserInput = () => {

  let inputInt;

  if(entryDropdown1.value === "Hexadecimal"){
    inputInt = numberInput.value
  } else {
    inputInt = parseInt(numberInput.value);
  }
  
   

  if (!numberInput.value) {
    alert("Please provide a number");
    return;
  }

  switch(`${entryDropdown1.value}-${entryDropdown2.value}`){
    case "decimal-Binary":
      result.textContent = decimalToBinary(inputInt);
      break;
    case "decimal-Octal":
      result.textContent = decimalToOctal(inputInt);
      break;
    case "decimal-Hexadecimal":
      result.textContent = decimalToHexa(inputInt);
      break;
    case "Binary-decimal":
      result.textContent = binaryToDecimal(inputInt);
      break;
    case "Binary-Octal":
      result.textContent = binaryToOctal(inputInt);
      break;
    case "Binary-Hexadecimal":
      result.textContent = binaryToHexa(inputInt);
      break;
    case "Octal-decimal":
      result.textContent = octalToDecimal(inputInt);
      break;
    case "Octal-Binary":
      result.textContent = octalToBinary(inputInt);
      break;
    case "Octal-Hexadecimal":
      result.textContent = octalToHexa(inputInt);
      break;
    case "Hexadecimal-decimal":
      result.textContent = hexaToDecimal(inputInt);
      break;
    case "Hexadecimal-Binary":
      result.textContent = hexaToBinary(inputInt);
      break;
    case "Hexadecimal-Octal":
      result.textContent = hexaToOctal(inputInt);
        break;
    default:
      alert("It has the same conversion");
      break; 
  }


  /*if(entryDropdown1.value === "decimal" && entryDropdown2.value === "Binary"){
    result.textContent = decimalToBinary(inputInt);
  } else if(entryDropdown1.value === "decimal" && entryDropdown2.value === "Octal"){
    result.textContent = decimalToOctal(inputInt);
  } else if(entryDropdown1.value === "decimal" && entryDropdown2.value === "Hexadecimal"){
    result.textContent = decimalToHexa(inputInt);
  } else if(entryDropdown1.value === "Binary" && entryDropdown2.value === "decimal"){
    result.textContent = binaryToDecimal(inputInt);
  } else if(entryDropdown1.value === "Binary" && entryDropdown2.value === "Octal"){
    result.textContent = binaryToOctal(inputInt);
  } else if(entryDropdown1.value === "Binary" && entryDropdown2.value === "Hexadecimal"){
    result.textContent = binaryToHexa(inputInt);
  } else if(entryDropdown1.value === "Octal" && entryDropdown2.value === "decimal"){
    result.textContent = octalToDecimal(inputInt);
  } else if(entryDropdown1.value === "Octal" && entryDropdown2.value === "Binary"){
    result.textContent = octalToBinary(inputInt);
  } else if(entryDropdown1.value === "Octal" && entryDropdown2.value === "Hexadecimal"){
    result.textContent = octalToHexa(inputInt);
  } else if(entryDropdown1.value === "Hexadecimal" && entryDropdown2.value === "decimal"){
    result.textContent = hexaToDecimal(inputInt);
  } else if(entryDropdown1.value === "Hexadecimal" && entryDropdown2.value === "Binary"){
    result.textContent = hexaToBinary(inputInt);
  } else if(entryDropdown1.value === "Hexadecimal" && entryDropdown2.value === "Octal"){
    result.textContent = hexaToOctal(inputInt);
  } else{
    alert("It has the same conversion");
  }*/

  numberInput.value = "";
};


convertBtn.addEventListener("click", () => {
    res.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
    checkUserInput();
});

numberInput.addEventListener("keydown", (e)=>{
  if (e.key === "Enter"){
    res.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
    checkUserInput();
  }
});



/* Dark Mode */

const icon = document.getElementById("icon");
const moon = document.querySelector(".icon");
icon.onclick = () => {
  document.body.classList.toggle("dark-mode");
  if(document.body.classList.contains("dark-mode")){
    icon.className = "ri-contrast-2-fill icon";
    moon.style.border = "2px solid rgba(255,255,255,0.5)"
    moon.style.color = "#f8f9fa"
  } else {
    icon.className = "ri-sun-fill icon";
    moon.style.border = "2px solid rgba(0,0,0,0.5)"
    moon.style.color = "var(--border)"
  }
}
