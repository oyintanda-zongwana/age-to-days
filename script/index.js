function convertToDays() {
    const age = document.getElementById('Age').value;
    const days = (age * 365); //calculates the age to days
    document.getElementById('result').innerHTML = "Your age is equal to    " + days + " days"; //this is the result
}