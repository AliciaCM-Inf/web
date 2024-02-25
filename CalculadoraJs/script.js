function convertNumber() {
    const inputNumber = document.getElementById("inputNumber").value;
    const baseSelector = document.getElementById("baseSelector");
    const selectedBase = baseSelector.value;
  
    let result;
  
    switch (selectedBase) {
      case "2":
        result = convertToBase(inputNumber, 2);
        break;
      case "4":
        result = convertToBase(inputNumber, 4);
        break;
      case "8":
        result = convertToBase(inputNumber, 8);
        break;
      case "16":
        result = convertToBase(inputNumber, 16);
        break;
      default:
        result = "Selecciona una base válida.";
    }
  
    document.getElementById("result").textContent = `Resultado: ${result}`;
  }
  
  function convertToBase(number, base) {
    return parseInt(number, 10).toString(base).toUpperCase();
  }
  