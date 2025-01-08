// homework with zodiac
let input = prompt("Enter year of your birthday");
let parsedyear = parseInt(input);

let resultDiv = document.getElementById("result");
let zodiacSign = "";

// cheak number validity
if (parsedyear > 0 && parsedyear < 2025) {
    let zodiac = (parsedyear - 4) % 12

    if (zodiac > 10) {
        zodiacSign="PIG";
        alert("Your Chinese Zodiac is PIG");
    } else if (zodiac > 9) {
        zodiacSign="DOG";
        alert("Your Chinese Zodiac is DOG");
    } else if (zodiac > 8) {
        zodiacSign="ROSTER";
        alert("Your Chinese Zodiac is ROSTER");
    } else if (zodiac > 7) {
        zodiacSign="MONKEY";
        alert("Your Chinese Zodiac is MONKEY");
    } else if (zodiac > 6) {
        zodiacSign="GOAT";
        alert("Your Chinese Zodiac is GOAT");
    } else if (zodiac > 5) {
        zodiacSign="HORSE";
        alert("Your Chinese Zodiac is HORSE");
    } else if (zodiac > 4) {
        zodiacSign="SNAKE";
        alert("Your Chinese Zodiac is SNAKE");
    } else if (zodiac > 3) {
        zodiacSign="DRAGON";
        alert("Your Chinese Zodiac is DRAGON");
    } else if (zodiac > 2) {
        zodiacSign="RABBIT";
        alert("Your Chinese Zodiac is RABBIT");
    } else if (zodiac > 1) {
        zodiacSign="TIGER";
        alert("Your Chinese Zodiac is TIGER");
    } else if (zodiac > 0) {
        zodiacSign="OX";
        alert("Your Chinese Zodiac is OX");
    } else {
        (alert("Your Chinese Zodiac is RAT") )
        zodiacSign="RAT";
    };
} else (alert("You enter wrong number \, please enter YEAR as xxxx"));
resultDiv.innerHTML = `<h2>Your Chinese Zodiac is: ${zodiacSign}</h2>`;