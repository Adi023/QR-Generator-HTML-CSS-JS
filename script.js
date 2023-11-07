function generateQRCode() {
    const text = document.getElementById("text-input").value;
    const qrcodeDiv = document.getElementById("qrcode");

    // Clear the previous QR code, if any
    qrcodeDiv.innerHTML = "";

    if (text) {
        // Create a QR code generator instance
        const qrcode = new QRCode(qrcodeDiv, {
            text: text,
            width: 250,
            height: 250,
        });
    }
}
