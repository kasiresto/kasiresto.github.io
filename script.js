const menu = {
    "Ayam": 15000,
    "Ayam & Nasi": 18000,
    "Kentang Goreng": 10000,
    "Cola": 10000,
    "Aqua": 5000,
    "Ice Cream": 8000
};

function updateQuantity(item, change) {
    const input = document.getElementById(item);
    let newValue = parseInt(input.value) + change;
    if (newValue < 0) {
        newValue = 0;
    }
    input.value = newValue;
}

function cetakStruk() {
    let pesanan = {};
    let totalHarga = 0;

    for (let item in menu) {
        let kuantitas = parseInt(document.getElementById(item).value);
        if (kuantitas && kuantitas > 0) {
            pesanan[item] = kuantitas;
            totalHarga += menu[item] * kuantitas;
        }
    }

    let outputStruk = document.getElementById("outputStruk");
    outputStruk.textContent = "";  // Clear previous struk

    for (let item in pesanan) {
        let harga = menu[item] * pesanan[item];
        outputStruk.textContent += `${item}: ${pesanan[item]} x Rp ${menu[item]} = Rp ${harga}\n`;
    }

    outputStruk.textContent += "========================================\n";
    outputStruk.textContent += `Total: Rp ${totalHarga}`;
}
