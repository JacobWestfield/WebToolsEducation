import dateCalc from "./dateCalc.js";
import timer from "./timer.js";

//рендер страницы в зависимости от переключения приложений

const switchButton = document.getElementById('switchButton');
const container = document.getElementById('container');


switchButton.addEventListener('click', () => {
    if (switchButton.getAttribute('toggle') === 'calc') {
        switchButton.setAttribute('toggle', 'timer')
        container.innerHTML = `
            <form id="dateCalc">
                <h3>Date Calculator</h3>
                <label>
                    <strong>First date</strong>
                    <input type="date" name="firstDate">
                </label>
                <label>
                    <strong>Second date</strong>
                    <input type="date" name="secondDate">
                </label>
                <button type="submit">Calculate date range</button>
                <p style="font-size: 50px;" id="dateCalc_result"></p>
            </form>`;
        dateCalc();
    } else {
        switchButton.setAttribute('toggle', 'calc')
        container.innerHTML = `
            <form id="timer">
                <h3>Timer</h3>
                <label>
                    <strong>Set hours</strong>
                    <input type="text" name="hoursInput">
                </label>
                <label>
                    <strong>Set minutes</strong>
                    <input type="text" name="minutesInput">
                </label>
                <label>
                    <strong>Set seconds</strong>
                    <input type="text" name="secondsInput">
                </label>
                <button type="submit">Set Timer</button>
                
                <p style="font-size: 50px;" id="dateCalc_result"></p>
            </form>
            <button id="startButton">Start</button>
                <button id="stopButton">Stop</button>`
        timer();
    }
})