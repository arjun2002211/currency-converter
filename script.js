let dropdown = document.querySelectorAll('select');
let btn = document.querySelector("#btn");
let input = document.querySelector("#input");
let fromCurrency = document.querySelector("#from select");
let toCurrency = document.querySelector("#to select");
let BaseURL = "https://v6.exchangerate-api.com/v6/546996dc5afcaf285a358929/pair";
let text = document.querySelector("#result");

let num = 0;
for (select of dropdown) {
    for (let currencyCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currencyCode;
        newOption.value = currencyCode;
        if (newOption.value === "USD" && select.name === "from") {
            newOption.selected = "selected";
        }
        else if (newOption.value === "INR" && select.name === "to") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (e) => {
        let element = e.target;
        updateFlag(element);
    })
}
function updateFlag(element) {
    currencyCode = element.value;
    // console.log(imgSrc);
    countryCode = countryList[currencyCode];
    imgUrl = `https://flagsapi.com/${countryCode}/flat/64.png`;
    img = element.parentElement.querySelector('img');
    img.src = imgUrl;
    // console.log(imgSrc);
}

btn.addEventListener("click", async(evt) => {
    evt.preventDefault();
    inputVal = input.value;
    if (inputVal == "" || inputVal < 1) {
        inputVal = 1;
        input.value = 1;
    }
    console.log(inputVal);
    // console.log(fromCurrency.value, toCurrency.value);
    customUrl = `${BaseURL}/${fromCurrency.value}/${toCurrency.value}/${inputVal}`;
    let response = await fetch(customUrl);
    // console.log(response);
    let data = await response.json();
    let finalVal = data.conversion_result;
    console.log(finalVal);
    text.innerText = `${inputVal}${fromCurrency.value} = ${finalVal}${toCurrency.value}`;
    text.style.color ="red";
    text.style.visibility = "visible";

    
});









