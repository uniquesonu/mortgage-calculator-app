const purchasePrice = document.querySelector('#purchase-price');
const downPayment = document.querySelector('#down-payment');
const rePayment = document.querySelector('#repayment')
const interestRate = document.querySelector('#interest-rate')

const price = document.querySelector('#price')
const dPay = document.querySelector('#dpay')
const year = document.querySelector('#year');
const interest = document.querySelector('#interest')

const rangeInputs = document.querySelector('.price-range')

const amount = document.querySelector('#amount');
const perMonth = document.querySelector('#per-month')


const updateUI = () => {
    interest.innerHTML = interestRate.value;
    year.innerHTML = rePayment.value;
    price.innerHTML = purchasePrice.value;
    downPayment.setAttribute("max",purchasePrice.value);
    dPay.innerHTML = downPayment.value;
    let p = purchasePrice.value - downPayment.value;
    amount.innerHTML = p

    perMonth.innerHTML = Math.round((p + (p*rePayment.value * interestRate.value)/100)/(rePayment.value * 12))

}

rangeInputs.addEventListener('input', updateUI)
updateUI()