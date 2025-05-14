window.onload = () => {
    // The function called when Calculate button is clicked.
    document.querySelector('#calculate').onclick = calculateTip;
};

function calculateTip() {
    // Assign values of ID : amount, person, and service to variables for further calculations.
    let amount = document.querySelector('#amount').value;
    let persons = document.querySelector('#persons').value;
    let service = document.querySelector('#services').value;

    // If statement will work when user presses calculate without entering values.
    if (amount === '' || service === 'Select') {
        alert("Please enter valid values");
        return;
    }

    // Checking number of persons 
    if (persons === '1') {
        // If there is only one person, then we need not display 'each'.
        document.querySelector('#each').style.display = 'none';
    } else {
        // If there are more than one person, we will display 'each'.  
        document.querySelector('#each').style.display = 'block';
    }

    // Calculating the tip by multiplying total-bill and type of service; then dividing it by number of persons.
    let total = (amount * service) / persons;
    total = total.toFixed(2);

    // Finally displaying the tip value 
    document.querySelector('.tip').style.display = 'block';
    document.querySelector('#total').innerHTML = total;
}
