// Layanan Kami
document.addEventListener("DOMContentLoaded", function() {
    const whatsappBtns = document.querySelectorAll('.whatsapp-btn');
    
    whatsappBtns.forEach(function(btn) {
        btn.addEventListener('click', redirectToWhatsApp);
    });
});

function redirectToWhatsApp() {
    const phoneNumber = '687850683841'; // Ganti dengan nomor WhatsApp yang diinginkan
    const message = 'Halo! Saya tertarik dengan layanan Anda.';

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank').focus();
}
// Layanan Kami

//Form Hubungi Kami 
function redirectToWhatsApp() {
    const phoneNumber = '087850683841'; // Ganti dengan nomor WhatsApp yang diinginkan
    const message = 'Halo! Saya tertarik dengan layanan Anda.';

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappURL, '_blank');
}

function sendToWhatsapp(){
	let number = "+6285233942626";

	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let message = document.getElementById('message').value;

	var url = "https://wa.me/" + number + "?text="
	+ "Name : " +name+ "%0a"
	+ "Email : " +email+ "%0a"
	+ "Message : " +message+ "%0a%0a";

	window.open(url, '_blank').focus();
}
// Form Hubungi Kami 