const BASE_URL = "https://allratestoday.com/api/rate?";
const URL_SOURCE = "source="
const URL_TARGET = "&target="
const URL_KEY = "&key=art_live_nNie3u8jxOy2NhL2bNahXBM8yOhuSgxs"
const fromCurr = document.querySelector(".from select")
const toCurr = document.querySelector(".to select")
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button")


for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "PKR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target)
  })
}

const updateExchangeRate = async() =>{
  let amount = document.querySelector(".amount input")
  let amtVal = amount.value
  console.log(amtVal)
  if (amtVal === "" || isNaN(amtVal) || amtVal <= 0) {
    amtVal = 1
    amount.value = "1"
  }
  const URL = `${BASE_URL}${URL_SOURCE}${fromCurr.value}${URL_TARGET}${toCurr.value}${URL_KEY}`
  let response = await fetch(URL)
  let data = await response.json()
  console.log(data)
  let exchangeRate = data.rate
  let convertedRate = (amtVal * exchangeRate).toFixed(2)
  console.log(exchangeRate)
  const msgEl = document.getElementById("msg")
  msgEl.textContent = `${amtVal} ${fromCurr.value} = ${convertedRate} ${toCurr.value}`
}

const updateFlag = (element) => {
  let currCode = element.value
  let countryCode = countryList[currCode]
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
  let img = element.parentElement.querySelector("img")
  img.src = newSrc
}


btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate()
})
window.addEventListener("load", ()=>{
  updateExchangeRate()
})