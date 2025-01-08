// homework
let rezultatDiv = document.getElementById("rezultat");
let phonePrice = 119.95;
let taxRate = 5;
onePhonePrice = phonePrice + (phonePrice * taxRate / 100);
phonesPrice30 = 30 * onePhonePrice
console.log("The price of 30 phones is:");
console.log(phonesPrice30);
rezultatDiv.innerHTML = `<h2>Result from phone prices: ${phonesPrice30}</h2>`;