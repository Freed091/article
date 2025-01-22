document.getElementById('sendMessageBtn').addEventListener('click', function() {
    const message = document.getElementById('message').value;
    if (message.trim() === '') {
      alert('Please enter a message before sending.');
      return;
    }
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '09128162134'; // Your WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  });
  