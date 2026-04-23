const numberbuttons = document.querySelectorAll("[number]")
const operationButtons = document.querySelectorAll("[operator]")
const equalsButton = document.querySelectorAll("[equals]")
const deleteButton = document.querySelectorAll("[delete]")
const allclearButton = document.querySelectorAll("[allclear]")
const percentButton = document.querySelectorAll("[percent]")
const previousOperandTextElement = document.querySelectorAll("[previousOperand]")
const currentOperandTextElement = document.querySelectorAll("[currentOperand]")

class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.clear();
    }
    formaDisplayNumber(number){
        if(number ==="") return "";
        const stringNumber = number.toString();
        const endsWithDot = stringNumber.endwith(".");
        const integerPart = stringNumber.split(".")[0];
        const decimalPart = stringNumber.split(".")[1];
        const integerDigits = parseFloat (integerPart);

        let integerDisplay; 

        if (isNaN(integerDigits)){
            integerDisplay = "";
        }

        else{
            integerDisplay = integerDigits.toLocaleString("pt-BR", {
                maximumFractionDigits: 0,
            });
            
        }

        if (endsWithDot) {
            return `${integerDisplay}`;
        }
        
        if (decimalPart != null) {
            return`${integerDisplay}.${decimalPart}`;
        }
          
        return integerDisplay;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);

    }

    calculate() {

        let result;
        
        const previous = parseFloat(this.previousOperand);
       
        const current = parseFloat(this.currentOperand);

        if (isNaN(previous) || isNaN(current)) return;

        switch (this.operation) {

            case "+";

                result = previous + current;
            
                break;

            case "-";
            // Subtrai o valor atual do valor anterior.
            result = previous - current;
            
            break;


        }
    }
    
}