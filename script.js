let cartItems = [];
let total = 0;

//Sepetteki Ürünlerin Toplam Fiyatını Hesaplar
function addToCart(itemName, itemPrice) {
    cartItems.push({ name: itemName, price: itemPrice });
    total += itemPrice;
    updateCart();
}

//Sepete Siparişleri Ücretleriyle Birlikte Yazar ve Toplam Tutarı Gösterir
function updateCart() {
    const cartItemsElement = document.getElementById("cartItems");
    cartItemsElement.innerHTML = "";
    cartItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - ${item.price.toFixed(2)}₺`;
        cartItemsElement.appendChild(listItem);
    });
    document.getElementById("total").textContent = `Toplam: ${total.toFixed(2)}₺`;
}

//Sipariş Verildikten Sonra Bilgilendirmek İçin Alert Verir ve Sepeti Boşaltır
function checkout() {

    var ad = document.getElementById("name").value;
    var soyad = document.getElementById("surname").value;
    var adres = document.getElementById("address").value;
    var telno = document.getElementById("phone").value;

    if(total==0){
        alert('Sepetiniz boş. Lütfen sepete ürün ekleyin.')
    }
    else if (ad.length==0 || soyad.length==0 || adres.length==0) {
        alert('Öncelikle Sipariş Bilgilerinizi Eksiksiz Bir Şekilde Giriniz')
    }
    else if (telno.length!=11) {
        alert('Telefon Numarası 11 Haneli Olmalıdır')
    }
    else{
        alert('Sayın '+ad+" "+soyad+` siparişiniz alınmıştır. Toplam tutar: ${total.toFixed(2)}₺
Adresiniz: `+adres);
        cartItems = [];
        total = 0;
    updateCart();
    }
}
;
