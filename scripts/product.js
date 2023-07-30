
// Array to store the data
let products = [];

// Function to handle the "Add" button click
const handleAddButtonClick = () => {
    // Get input values
    const productCode = document.getElementById('productCode').value;
    const productName = document.getElementById('productName').value;
    const qty = document.getElementById('qty').value;
    const unitPrice = document.getElementById('unitPrice').value;
    const discount = document.getElementById('discount').value;

    console.log(productCode);

    // Add the data to the products
    products.push({
        code: productCode,
        name: productName,
        quantity: qty,
        unitPrice: unitPrice,
        discount: discount,
        unitPriceAfterDiscount: (unitPrice - (unitPrice * (discount / 100))).toFixed(2),
        totalPrice: (qty * (unitPrice - (unitPrice * (discount / 100)))).toFixed(2),
    });

    // Clear input fields
    // document.getElementById('productCode').value = '';
    // document.getElementById('productName').value = '';
    // document.getElementById('qty').value = '';
    // document.getElementById('unitPrice').value = '';

    // Call function to update the table
    updateTable();
}

// Function to update the table with products values
const updateTable = () => {
    const tableBody = document.getElementById('tableBody');
    const totalElement = document.getElementById('total');

    // Clear existing rows
    tableBody.innerHTML = '';

    // Reset the total price
    let total = 0;

    // Loop through the products and append rows to the table
    products.forEach((data, index) => {
        total += data.totalPrice;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td class="px-4 py-2 text-center">${index + 1}</td>
        <td class="px-4 py-2">${data.code}</td>
        <td class="px-4 py-2" colspan="2">${data.name}</td>
        <td class="px-4 py-2 text-center">${data.quantity}</td>
        <td class="px-4 py-2 text-center">${data.unitPrice}</td>
        <td class="px-4 py-2 text-center">${data.discount}%</td>
        <td class="px-4 py-2 text-center">${data.unitPriceAfterDiscount}</td>
        <td class="px-4 py-2">${data.totalPrice} BDT</td>
      `;
        tableBody.appendChild(row);
    });

    // Update the total price
    totalElement.textContent = `${total.toFixed(2)} BDT`;
}

// Add click event listener to the "Add" button
document.getElementById('addButton').addEventListener('click', handleAddButtonClick);

