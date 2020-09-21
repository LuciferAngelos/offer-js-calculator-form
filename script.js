const plusButtons = document.querySelectorAll('.plus-button');
const minusButtons = document.querySelectorAll('.minus-button');
const inputSecure = document.querySelector('#secure');
const itService = document.querySelector('#it-service');
let inputValue = document.querySelectorAll('.configuration-variants-params__value');
let outputValues = document.querySelectorAll('.configuration-result-block__value');
let outputInfosec = document.querySelector('#configuration-result-block__infosecure');
let outputItServ = document.querySelector('#configuration-result-block__itservice');

let result = [
    ['outputCore', ''],
    ['outputIpv4', ''],
    ['outputVlan', ''],
    ['outputSilver', ''],
    ['outputGold', ''],
    ['outputPlatinum', ''],
    ['outputRds', ''],
    ['outputSstandart', ''],
    ['outputSenterprise', ''],
    ['outputBaas', ''],
    ['outputInfosecure', ''],
    ['outputItservice', ''],
    ['isSecured', false],
    ['isService', false]
];

for (let i = 0; i < plusButtons.length; i++) {
    plusButtons[i].addEventListener('click', function () {
        inputValue[i].value++;
        outputValues[i].value = inputValue[i].value;
        result[i][1] = inputValue[i].value;
    })

}

for (let i = 0; i < minusButtons.length; i++) {
    minusButtons[i].addEventListener('click', function () {
        inputValue[i].value--;

        if (inputValue[i].value < 0) {
            inputValue[i].value = 0;
        }

        outputValues[i].value = inputValue[i].value;
        result[i][1] = inputValue[i].value;
    })
}


inputSecure.addEventListener('change', function () {
    if (inputSecure.checked) {
        result[12][1] = true;
        outputInfosec.innerText = "Да";
    } else {
        result[12][1] = false;
        outputInfosec.innerText = "Нет";
    }
})
itService.addEventListener('change', function () {
    if (itService.checked) {
        result[13][1] = true;
        outputItServ.innerText = "Да";
    } else {
        result[13][1] = false;
        outputItServ.innerText = "Нет";
    }
})









