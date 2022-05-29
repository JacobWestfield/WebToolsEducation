import { printResult } from "./printResult.js";
import getDateDiff from "./getDateDiff.js";

function dateCalc(){
    const form = document.getElementById('dateCalc');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const firstDate = formData.get('firstDate');
        const secondDate = formData.get('secondDate');

        if (!firstDate || !secondDate) {
            printResult('Empty date fields')
        } else {
            const result = firstDate > secondDate ? getDateDiff(secondDate, firstDate) : getDateDiff(firstDate, secondDate);

            //походу в исходном коде луксона разработчики где-то словили баг
            console.log(result) //не работает
        };
    })
}

export default dateCalc;