function convertToDays() {
    const age = document.getElementById('Age').value;
    const days = (age * 365);
    document.getElementById('result').innerHTML = "Your age is equal to    " + days + " days";
}