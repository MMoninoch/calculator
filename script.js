document.getElementById('add-item').addEventListener('click', addItem);
document.getElementById('calculate-total').addEventListener('click', calculateTotal);

function addItem() {
    // Create a new input group for an additional item price input
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('input-group', 'mb-2');
    itemContainer.innerHTML = '<input type="number" class="form-control price-input" placeholder="Enter price" min="0" step="0.01">';
    
    // Append the new input group to the item list
    document.getElementById('item-list').appendChild(itemContainer);
}

function calculateTotal() {
    const priceInputs = document.querySelectorAll('.price-input');
    let total = 0;

    // Loop through each input to add up the total
    priceInputs.forEach(input => {
        const value = parseFloat(input.value);
        if (!isNaN(value)) {
            total += value;
        }
    });

    // Display the total in the specified HTML element
    document.getElementById('total-price').textContent = total;
}
