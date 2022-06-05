import { printResult } from "./printResult.js";
import calculateTime from "./calculateTime.js";


function timer() {
    const form = document.getElementById('timer');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        let hoursInput = +formData.get('hoursInput');
        let minutesInput = +formData.get('minutesInput');
        let secondsInput = +formData.get('secondsInput');

        if (minutesInput > 60 || minutesInput < 0) {
            printResult('Wrong time');
        }
        else if (secondsInput > 60 || secondsInput < 0) {
            printResult('Wrong time');
        } else if (secondsInput > 60 || secondsInput < 0) {
            printResult('Wrong time');
        } else {
            printResult(`Hours ${hoursInput}, minutes ${minutesInput}, seconds ${secondsInput}`)
        }

        const timeConfig = {
            h: hoursInput,
            m: minutesInput,
            s: secondsInput
        }


        let interval;

        stopButton.addEventListener('click', () => {
            clearInterval(interval);
            printResult(`Hours ${timeConfig.h}, minutes ${timeConfig.m}, seconds ${timeConfig.s}`);
        })

        startButton.addEventListener('click', () => {
            interval = setInterval(() => {
                if (timeConfig.h <= 0 && timeConfig.m <= 0 && timeConfig.s < 0) clearInterval(interval)

                timeConfig.h = calculateTime(timeConfig).h;;
                timeConfig.m = calculateTime(timeConfig).m;
                timeConfig.s = calculateTime(timeConfig).s;

                timeConfig.s -= 1;

                printResult(`Hours ${timeConfig.h}, minutes ${timeConfig.m}, seconds ${timeConfig.s}`);

            }, 1000)

        })


    })
}

export default timer;