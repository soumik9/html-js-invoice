const inputFields = {
    date: {
        input: document.getElementById("date"),
        display: document.getElementById("dateDisplay")
    },
    customerName: {
        input: document.getElementById("customerName"),
        display: document.getElementById("customerNameDisplay")
    },
    customerMobile: {
        input: document.getElementById("customerMobile"),
        display: document.getElementById("customerMobileDisplay")
    },
    customerAddress: {
        input: document.getElementById("customerAddress"),
        display: document.getElementById("customerAddressDisplay")
    },
    attention: {
        input: document.getElementById("attention"),
        display: document.getElementById("attentionDisplay")
    },
    salePerson: {
        input: document.getElementById("salePerson"),
        display: document.getElementById("salePersonDisplay")
    },
    creditLimit: {
        input: document.getElementById("creditLimit"),
        display: document.getElementById("creditLimitDisplay")
    },

};

const updateDisplay = (inputField) => {
    inputField.display.textContent = inputField.input.value;
}

// Attach event listeners to each input field
for (const fieldKey in inputFields) {
    const field = inputFields[fieldKey];
    field.input.addEventListener("input", () => updateDisplay(field));
}