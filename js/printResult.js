export const printResult = (text) => {
    
    const resultField = document.getElementById('dateCalc_result');
    resultField.innerText = text;
    resultField.style.color = 'red';

}