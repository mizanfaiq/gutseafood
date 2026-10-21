/* =====================================================
   PENGATURAN – EDIT BAGIAN INI SAJA
   ===================================================== */
const CONFIG = {
  nama: "Guts'Sea Food",
  tagline: "Rajanya Udang",

  // Nomor WhatsApp tanpa +, tanpa spasi, awali 62. Contoh: "6281234567890"
  whatsapp: "6285601252006",

  // Link sosmed. Kosongkan ("") untuk menyembunyikan.
  sosmed: [
    { label: "Instagram", url: "https://instagram.com/gutssea.food" },
    { label: "TikTok",    url: "https://www.tiktok.com/@gutssea.food" },
    { label: "Facebook",  url: "" }
  ],

  // Peta: buka Google Maps > Bagikan > Sematkan peta > salin isi src="..."
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d247.48521310910203!2d110.42833016498057!3d-7.0370687257116185!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708da482c251ed%3A0xa76dead46ec123df!2sKos%20Putra%20Fosil%2022!5e0!3m2!1sen!2sid!4v1791565352681!5m2!1sen!2sid",  // contoh: "https://www.google.com/maps/embed?pb=..."
  mapsLink:  "https://maps.app.goo.gl/BLdqu7TmTVbMeK67A",   // link biasa "Buka di Google Maps"

  alamat: "view, Jl. Jrobang Raya, RT.4/RW.8, Ngesrep, Kec. Banyumanik, Kota Semarang, Jawa Tengah 50261",
  jamAmbil: "Jam ambil / antar: siang 13.00 dan malam 18.30",
  catatanPO: "Pesan minimal H-1 sebelum jam 18.00 untuk pengambilan besok.",
  catatanPO1: "SEMUA MENU SUDAH TERMASUK NASI.",

  /* ATURAN PRE-ORDER (dipaksa oleh website, bukan sekadar teks) */
  minHariPO: 1,              // tanggal ambil minimal berapa hari dari hari ini. 0 = boleh hari ini, 1 = mulai besok, 2 = lusa
  /* JAM AMBIL / ANTAR: hanya pilihan di bawah ini yang bisa dipilih pelanggan (berlaku untuk ambil sendiri dan antar).
     value = jam format 24 jam "HH:MM" (ikut tertulis di pesan WA), label = tulisan di pilihan.
     Tambah/hapus/ubah baris sesukamu. */
  slotJam: [
    { value: "13:00", label: "Siang – 13.00" },
    { value: "18:30", label: "Malam – 18.30" }
  ],

  /* PENGANTARAN: teks yang tampil saat pelanggan memilih "Antar" */
  catatanOngkir: "Ongkir menyesuaikan jarak, dikonfirmasi admin."
};

/* Harga: isi angka (rupiah). null = tampil "Menyusul".
   Cara cepat: tulis di PRICES berdasarkan nama menu, contoh:
   "udang kungpao": 35000                                    */
const PRICES = {
  "udang kungpao": 35000,
  "udang pedas manis": 35000,
  "udang asam manis": 35000,
  "oseng udang pete": 35000,
  "oseng udang bawang": 35000,

  "udang lada hitam": 35000,
  "udang balur": 35000,
  "udang sambal ijo": 35000,
  "udang sambal kemangi": 35000,
  "udang goreng asam jawa": 35000,

  "udang buttermilk": 35000,
  "udang goreng mayonaise": 35000,
  "udang saus mentega": 35000,
  "udang goreng bawang": 35000,

  "lobster saus mentega": 75000,
  "lobster lada hitam": 75000,
  "lobster asam manis": 75000,
  "lobster sambal ijo": 75000,
  "lobster goreng bawang": 75000,

  "cumi asin pedas": 35000,
  "cumi asam manis": 35000,
  "cumi pedas bawang": 35000,
  "cumi saus lada": 35000,
  "cumi sambal pecit": 35000,

  "cumi kungpao": 35000,
  "cumi sambal pete": 35000,
  "cumi sambal ijo": 35000,
  "cumi sambal kemangi": 35000,
  "cumi goreng asam jawa": 35000,

  "cumi buttermilk": 35000,
  "cumi tepung mayonaise": 35000,
  "cumi saus mentega": 35000,
  "cumi goreng bawang": 35000,

  "tongkol asin pedas": 25000,
  "tongkol asam manis": 25000,
  "tongkol pedas bawang": 25000,
  "tongkol saus lada": 25000,
  "tongkol sambal pecit": 25000,

  "cakalang kungpao": 25000,
  "cakalang sambal pete": 25000,
  "cakalang sambal ijo": 25000,
  "cakalang sambal kemangi": 25000,
  "cakalang goreng asam jawa": 25000,
};

/* Daftar menu. Tambah/ubah/hapus nama di dalam array. */
const MENU = {
  Udang: [
    { g: "Ini Udang",  i: ["Udang Kungpao","Udang Pedas Manis","Udang Asam Manis","Oseng Udang Pete","Oseng Udang Bawang"] },
    { g: "Udang Lagi", i: ["Udang Lada Hitam","Udang Balur","Udang Sambal Ijo","Udang Sambal Kemangi","Udang Goreng Asam Jawa"] },
    { g: "Udang Juga", i: ["Udang Buttermilk","Udang Goreng Mayonaise","Udang Saus Mentega","Udang Goreng Bawang"] }
  ],
  Lobster: [  /* Contoh sementara, ganti sesuai menu aslimu */
    { g: "Lobster", i: ["Lobster Saus Mentega","Lobster Lada Hitam","Lobster Asam Manis","Lobster Sambal Ijo","Lobster Goreng Bawang"] }
  ],
  Cumi: [
    { g: "Awas Cumi",  i: ["Cumi Asin Pedas","Cumi Asam Manis","Cumi Pedas Bawang","Cumi Saus Lada","Cumi Sambal Pecit"] },
    { g: "Cumi Lagi",  i: ["Cumi Kungpao","Cumi Sambal Pete","Cumi Sambal Ijo","Cumi Sambal Kemangi","Cumi Goreng Asam Jawa"] },
    { g: "Cumi Juga",  i: ["Cumi Buttermilk","Cumi Tepung Mayonaise","Cumi Saus Mentega","Cumi Goreng Bawang"] }
  ],
  Ikan: [
    { g: "Awas Ikan", i: ["Tongkol Asin Pedas","Tongkol Asam Manis","Tongkol Pedas Bawang","Tongkol Saus Lada","Tongkol Sambal Pecit"] },
    { g: "Ikan Lagi", i: ["Cakalang Kungpao","Cakalang Sambal Pete","Cakalang Sambal Ijo","Cakalang Sambal Kemangi","Cakalang Goreng Asam Jawa"] }
  ]
};
/* Siluet di ujung kiri tiap grup menu. Kunci = nama kategori di MENU, isi = id di sprite SVG.
   Pilihan: s-udang, s-lobster, s-cumi, s-ikan. Jika menambah kategori baru, tambahkan di sini. */
const SILUET = { Udang: "s-udang", Lobster: "s-lobster", Cumi: "s-cumi", Ikan: "s-ikan" };

/* ===================== AKHIR PENGATURAN ===================== */


/* =====================================================
   LOGIKA WEBSITE (aman diabaikan jika hanya mengubah isi)
   ===================================================== */

/* HELPER: singkatan untuk mengambil elemen, format rupiah, dan membaca harga */
const $ = s => document.querySelector(s);
const rp = n => "Rp" + n.toLocaleString("id-ID");                       // 35000 -> "Rp35.000"
const priceOf = name => {                                               // cari harga di PRICES (huruf kecil), null = belum ada
  const p = PRICES[name.toLowerCase()];
  return typeof p === "number" ? p : null;
};

/* STATE: cart = { "Nama Menu": jumlah }, tab = kategori yang sedang dibuka */
const cart = {};
let tab = Object.keys(MENU)[0];

/* ISI TEKS DARI CONFIG: judul, alamat, jam, footer, sosmed, dan peta */
document.title = CONFIG.nama + " – " + CONFIG.tagline;
$("#h-brand").textContent = CONFIG.nama;
$("#notice").textContent = CONFIG.catatanPO;
$("#notice1").textContent = CONFIG.catatanPO1;
$("#addr").textContent = CONFIG.alamat;
$("#hours").textContent = CONFIG.jamAmbil;
// isi pilihan jam dari CONFIG.slotJam
$("#f-time").innerHTML = '<option value="">Pilih jam</option>'
  + CONFIG.slotJam.map(s => `<option value="${s.value}">${s.label}</option>`).join("");
$("#ongkir-note").textContent = CONFIG.catatanOngkir;
$("#foot").textContent = "© " + new Date().getFullYear() + " " + CONFIG.nama + " · Pre-order & take away";
// tombol sosmed (yang url-nya kosong dilewati) + tombol WhatsApp selalu ada
$("#socials").innerHTML = CONFIG.sosmed.filter(s => s.url)
  .map(s => `<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`).join("")
  + `<a href="https://wa.me/${CONFIG.whatsapp}" target="_blank" rel="noopener">WhatsApp</a>`;
// peta: iframe jika mapsEmbed diisi, jika kosong tampil pesan pengingat
$("#map").innerHTML = CONFIG.mapsEmbed
  ? `<iframe src="${CONFIG.mapsEmbed}" loading="lazy" title="Peta lokasi"></iframe>`
  : `<p style="padding:24px">Peta belum diisi. Tempel link embed di CONFIG.mapsEmbed.</p>`;
if (CONFIG.mapsLink) $("#socials").insertAdjacentHTML("beforeend", `<a href="${CONFIG.mapsLink}" target="_blank" rel="noopener">Google Maps</a>`);

/* renderTabs(): menggambar tombol tab kategori (Udang, Lobster, Cumi, Ikan) dari kunci MENU */
function renderTabs(){
  $("#tabs").innerHTML = Object.keys(MENU).map(k =>
    `<button class="tab" role="tab" aria-selected="${k===tab}" data-t="${k}">${k}</button>`).join("");
}

/* renderMenu(): menggambar grup + item untuk tab aktif.
   Setiap grup mendapat siluet .edge di kiri (diambil dari SILUET[tab]);
   harga "Menyusul" jika belum ada di PRICES. */
function renderMenu(){
  $("#menu-list").innerHTML = MENU[tab].map(grp =>
    `<div class="group"><svg class="edge" aria-hidden="true"><use href="#${SILUET[tab]||'s-udang'}"/></svg><h3>${grp.g}</h3>` + grp.i.map(n => {
      const p = priceOf(n);
      return `<div class="item"><span class="n">${n}</span>
        <span class="price ${p===null?'soon':''}">${p===null?'Menyusul':rp(p)}</span>
        <span class="qty"><button data-m="${n}" aria-label="Kurangi ${n}">−</button><span>${cart[n]||0}</span><button data-p="${n}" aria-label="Tambah ${n}">+</button></span></div>`;
    }).join("") + `</div>`).join("");
}

/* EVENT TAB: klik tab -> ganti kategori lalu gambar ulang */
$("#tabs").addEventListener("click", e => {
  const t = e.target.dataset.t;
  if (t) { tab = t; renderTabs(); renderMenu(); }
});

/* EVENT TOMBOL +/-: ubah jumlah item di cart (data-p = tambah, data-m = kurang), hapus jika 0 */
$("#menu-list").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  const n = b.dataset.p || b.dataset.m; if (!n) return;
  cart[n] = Math.max(0, (cart[n]||0) + (b.dataset.p ? 1 : -1));
  if (!cart[n]) delete cart[n];
  renderMenu(); updateBar();
});

/* total(): jumlah seluruh item di keranjang */
const total = () => Object.values(cart).reduce((a,b) => a+b, 0);

/* updateBar(): tampilkan/sembunyikan tombol keranjang melayang dan update jumlah item */
function updateBar(){
  $("#cartbar").classList.toggle("on", total() > 0);
  $("#open-cart").textContent = "Lihat pesanan (" + total() + " item)";
}

/* renderLines(): isi daftar pesanan di popup (jumlah x nama + subtotal) */
function renderLines(){
  $("#lines").innerHTML = Object.entries(cart).map(([n,q]) => {
    const p = priceOf(n);
    return `<div class="line"><span>${q} × ${n}</span><span>${p===null?'Menyusul':rp(p*q)}</span></div>`;
  }).join("");
}

/* metode(): isi pilihan metode saat ini ("Ambil sendiri" atau "Antar") */
const metode = () => (document.querySelector('input[name="metode"]:checked') || {value:"take away"}).value;

/* EVENT PILIHAN METODE: tampilkan kolom alamat + catatan ongkir hanya jika memilih Antar */
document.querySelectorAll('input[name="metode"]').forEach(r => {
  r.onchange = () => { $("#antar-box").hidden = metode() !== "delivery"; };
});

/* tanggalMinimal(): tanggal ambil paling awal = hari ini + CONFIG.minHariPO, format YYYY-MM-DD (waktu lokal) */
function tanggalMinimal(){
  const d = new Date();
  d.setDate(d.getDate() + CONFIG.minHariPO);
  const p = n => String(n).padStart(2, "0");
  return d.getFullYear() + "-" + p(d.getMonth()+1) + "-" + p(d.getDate());
}

/* BUKA POPUP: tampilkan daftar, reset pesan error, batasi tanggal ambil minimal hari ini */
$("#open-cart").onclick = () => {
  renderLines(); $("#err").textContent = ""; $("#status").hidden = true;
  $("#f-date").min = tanggalMinimal();                 // tanggal sebelum ini tidak bisa dipilih
  if (!$("#f-date").value || $("#f-date").value < tanggalMinimal()) $("#f-date").value = tanggalMinimal();  // isi default agar kolom tidak kosong di HP
  $("#dlg").showModal();
};

/* TUTUP POPUP */
$("#close").onclick = () => $("#dlg").close();

/* KIRIM PESANAN: validasi form, susun teks pesan, lalu buka WhatsApp.
   Format pesan bisa diubah di variabel `msg`. */
$("#send").onclick = () => {
  const name = $("#f-name").value.trim(), date = $("#f-date").value, time = $("#f-time").value;
  $("#status").hidden = true;
  // CEK NOMOR: jangan lanjut jika nomor WhatsApp di CONFIG belum diisi
  if (!/^62\d{8,13}$/.test(CONFIG.whatsapp)) { $("#err").textContent = "Nomor WhatsApp belum diisi dengan benar di CONFIG.whatsapp (script.js). Contoh: 6281234567890"; return; }
  if (!name || !date || !time) { $("#err").textContent = "Isi nama, tanggal ambil, dan jam ambil dulu."; return; }
  // DELIVERY: alamat wajib diisi
  const delivery = metode() === "delivery", addr = $("#f-addr").value.trim();
  if (delivery   && !addr) { $("#err").textContent = "Isi alamat pengantaran dulu."; return; }
  // ATURAN PRE-ORDER: tolak tanggal terlalu dekat dan jam di luar jam ambil
  if (date < tanggalMinimal()) { $("#err").textContent = "Pre-order minimal H-" + CONFIG.minHariPO + ". Pilih tanggal ambil mulai " + tanggalMinimal() + "."; return; }
  if (!CONFIG.slotJam.some(s => s.value === time)) { $("#err").textContent = "Pilih salah satu jam yang tersedia."; return; }
  let sum = 0, unknown = false;                       // unknown = ada item yang harganya belum diisi
  const list = Object.entries(cart).map(([n,q]) => {
    const p = priceOf(n); if (p === null) unknown = true; else sum += p*q;
    return `- ${q} x ${n}`;
  }).join("\n");
  const msg = `Halo ${CONFIG.nama}, saya mau pre-order.\n\n${list}\n\n`
    + `Nama: ${name}\nMetode: ${metode()}\n`
    + (delivery ? `Alamat: ${addr}\n` : "")
    + `Tanggal & jam: ${date} jam ${time}\n`
    + ($("#f-note").value.trim() ? `Catatan: ${$("#f-note").value.trim()}\n` : "")
    + (unknown ? "Total: mohon info harga\n" : `Total: ${rp(sum)}\n`)
    + `\nTerima kasih!`;
  // BUKA WHATSAPP: coba tab baru; jika diblokir (preview editor / popup blocker), tampilkan link manual
  const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
  $("#err").textContent = "";
  const w = window.open(url, "_blank");
  $("#status").hidden = false;
  $("#status").innerHTML = (w ? "Membuka WhatsApp… " : "Tab baru diblokir browser. ")
    + `jika WhatsApp belum terbuka, <a href="${url}" target="_blank" rel="noopener">klik di sini</a>.`;
};

/* START: gambar tab, menu, dan tombol keranjang saat halaman pertama dibuka */
renderTabs(); renderMenu(); updateBar();
