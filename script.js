// This script handles box clicks and shows payment modals with PIX and credit card options.

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', function() {
        // Show payment modal
        const paymentModal = document.getElementById('payment-modal');
        paymentModal.style.display = 'block';
    });
});

function showPixModal() {
    // Logic to show PIX payment options
    const pixModal = document.getElementById('pix-modal');
    pixModal.style.display = 'block';
}

function showCreditCardModal() {
    // Logic to show credit card payment options
    const creditCardModal = document.getElementById('credit-card-modal');
    creditCardModal.style.display = 'block';
}