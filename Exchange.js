const CurrencyEl1 = document.getElementById("Currency-one");
const CurrencyEl2 = document.getElementById("Currency-two");
const amountEl1 = document.getElementById("amount-one");
const amountEl2 = document.getElementById("amount-two");
const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap")

CurrencyEl1.addEventListener("change", calculate);
CurrencyEl2.addEventListener("change", calculate);
amountEl1.addEventListener("input", calculate);
amountEl2.addEventListener("input", calculate);

function calculate() {
    const currency_one = CurrencyEl1.value;
    const currency_two = CurrencyEl2.value;
  
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        const rate = data.rates[currency_two];
        rateEl.textContent = `1 ${currency_one} = ${rate} ${currency_two}`;

        amountEl2.value = (amountEl1.value * rate).toFixed(2)
  
      });
    }

    swap.addEventListener("click", function() {
        const temp = CurrencyEl1.value
        CurrencyEl1.value = CurrencyEl2.value;
        CurrencyEl2.value = temp
        calculate()
    })
calculate()