function calculatePrice() {
    const pricePerPhoto = 20;
    let totalPhotos = 0;

    // Sprawdź, czy checkboxy są zaznaczone
    if (document.getElementById('zgoda1').checked) totalPhotos++;
    if (document.getElementById('zgoda2').checked) totalPhotos++;
    if (document.getElementById('zgoda3').checked) totalPhotos++;
    
    // Oblicz cenę i wyświetl ją w labelu
    const totalPrice = totalPhotos * pricePerPhoto;
    document.getElementById('price-label').textContent = `Cena: ${totalPrice} zł`;
}
