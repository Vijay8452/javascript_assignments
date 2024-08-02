function toCelsius(f = 0) {
    return (5 / 9) * (f - 32);
}

let value = toCelsius(70);
document.getElementById("demo").innerHTML = value;
