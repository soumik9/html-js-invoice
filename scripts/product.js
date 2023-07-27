
// Array to store the data
let products = [];

// Function to handle the "Add" button click
function handleAddButtonClick() {
    // Get input values
    const productCode = document.getElementById('productCode').value;
    const productName = document.getElementById('productName').value;
    const qty = document.getElementById('qty').value;
    const unitPrice = document.getElementById('unitPrice').value;

    console.log(productCode);

    // Add the data to the products
    products.push({
        code: productCode,
        name: productName,
        quantity: qty,
        unitPrice: unitPrice,
        totalPrice: qty * unitPrice,
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
function updateTable() {
    const tableBody = document.getElementById('tableBody');

    // Clear existing rows
    tableBody.innerHTML = '';

    console.log(products);

    // Loop through the products and append rows to the table
    products.forEach((data, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td class="px-4 py-2">${index + 1}</td>
        <td class="px-4 py-2">${data.code}</td>
        <td class="px-4 py-2" colspan="2">${data.name}</td>
        <td class="px-4 py-2 text-center">${data.quantity}</td>
        <td class="px-4 py-2 text-center">${data.unitPrice}</td>
        <td class="px-4 py-2 text-center">${data.unitPrice}</td>
        <td class="px-4 py-2">$${data.totalPrice}</td>
      `;
        tableBody.appendChild(row);
    });
}

// Add click event listener to the "Add" button
document.getElementById('addButton').addEventListener('click', handleAddButtonClick);

