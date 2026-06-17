// Bot WhatsApp sederhana - auto reply
const prefix = "!";

function handleMessage(pesan, pengirim) {
  pesan = pesan.toLowerCase();

  if (pesan === prefix + "halo") {
    return `Halo ${pengirim}! Ada yang bisa dibantu? 😊`;
  }
  
  if (pesan === prefix + "menu") {
    return `*Menu Bot:*\n!halo - Sapa bot\n!menu - Lihat menu\n!harga - Cek harga`;
  }
  
  if (pesan === prefix + "harga") {
    return "Harga mulai dari Rp10.000 aja kak ✨";
  }
  
  return null; // kalau gak ada command yg cocok
}

// Contoh pakai
console.log(handleMessage("!menu", "Budi"));
console.log(handleMessage("!halo", "Sari"));