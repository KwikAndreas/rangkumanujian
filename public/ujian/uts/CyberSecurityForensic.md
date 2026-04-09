# Rangkuman Materi Kisi-kisi Cybersecurity Forensic

## 1. Apa perbedaan Data Recovery dan Data Acquisition?

### Data Recovery

Fokus utama data recovery adalah untuk mengembalikan data yang hilang, terhapus, atau tidak dapat diakses (misalnya karena kerusakan perangkat keras) agar dapat digunakan kembali oleh pengguna. Dalam digital forensics, dinyatakan dengan tegas bahwa digital forensics tidak sama dengan data recovery.

### Data Acquisition

Acquisition adalah tugas pertama dalam investigasi digital forensics yang bertujuan untuk membuat salinan (copy) dari original drive. Proses ini dilakukan menggunakan metode forensik (seperti bit-stream copy) untuk memastikan integritas data sebagai barang bukti yang sah untuk kepentingan investigasi atau persidangan, tanpa mengubah isi dari media aslinya.

---

## 2. Baca UU ITE kaitannya dengan penyitaan bukti digital, prosesnya, hukum, penyimpanan, layak digunakan, rusak tidak, dll.

(Catatan: Detail pasal tidak tercantum lengkap di dalam slide, sehingga materi ini didasarkan pada Undang-Undang Nomor 11 Tahun 2008 jo. UU Nomor 19 Tahun 2016 tentang ITE).

- Keabsahan Bukti: Berdasarkan Pasal 5 ayat (1) dan (2) UU ITE, Informasi Elektronik dan/atau Dokumen Elektronik dan/atau hasil cetaknya merupakan alat bukti hukum yang sah dan merupakan perluasan dari alat bukti yang sah sesuai dengan Hukum Acara yang berlaku di Indonesia.
- Syarat Penyitaan: Berdasarkan Pasal 43 UU ITE, tata cara penggeledahan dan penyitaan Sistem Elektronik (termasuk digital evidence) yang terkait dengan dugaan tindak pidana harus dilakukan sesuai dengan ketentuan hukum acara pidana. Secara formil, penyitaan sistem elektronik memerlukan izin dari ketua pengadilan negeri setempat, serta prosesnya harus tetap menjaga terpeliharanya kepentingan pelayanan umum.

---

## 3. Bit Stream imaging yang menggunakan tools FTK Imager

- **_ Definisi: _** Bit-stream copy adalah salinan bit-by-bit (dikenal juga sebagai forensic copy) dari original drive atau media penyimpanan yang merupakan duplikat sama persis (exact duplicate). Semakin persis salinan tersebut, semakin besar peluang penyelidik untuk menemukan bukti yang dibutuhkan.
- Keunggulan: Berbeda dengan perangkat lunak backup biasa yang hanya bisa menyalin file dalam folder aktif, bit-stream copy dapat menyalin deleted files, e-mails, serta memulihkan file fragments.
- FTK Imager: FTK Imager adalah perangkat lunak forensik digital yang digunakan untuk akuisisi data, pencitraan (imaging), dan pratinjau bukti digital secara aman tanpa mengubah data aslinya. Fungsi utamanya meliputi pembuatan salinan forensik (E01/Raw), menangkap RAM, menganalisis file terhapus, dan memverifikasi integritas data melalui hash (MD5/SHA1)

---

## 4. Apa perbedaannya antara pelajari Network Forensic, Private Sector, Public Sector. gimana cara penanganannya?

- Public Sector Investigation
  - Krakteristik: Melibatkan lembaga pemerintah dan penegak hukum, seperti kepolisian atau badan penegak hukum federal.
  - Cara penanganan: Penanganannya lebih ketat karena investigasi di sektor publik umumnya memerlukan surat perintah penggeledahan (search warrant) dari pengadilan sebelum investigator diizinkan untuk menyita digital evidence.
- Private Sector Investigation
  - Krakteristik: Melibatkan perusahaan atau organisasi non-pemerintah dan lebih fokus pada kasus perdata (civil case) atau pelanggaran kebijakan internal (policy violations) oleh karyawan (misal: pelecehan siber atau akses pornografi di tempat kerja).
  - Cara penanganan: Investigasi insiden dan pengendalian barang bukti di lingkungan private-sector jauh lebih mudah dibandingkan di tempat kejadian kejahatan umum (crime scenes). Lokasi insiden biasanya adalah tempat kerja tertutup. Investigator internal seringkali sudah memiliki akses ke proxy server logs, IP address, dan aplikasi, sehingga mereka dapat langsung memonitor jaringan tanpa memerlukan search warrant.

---

## 5. Kapan menggunakan Live Aqcuisition, kapan tidak menggunakan Live Aqcuisition?

- Kapan harus dilakukan (Live Acquisition)
  - Sangat berguna ketika Anda berhadapan dengan active network intrusions dan serangan yang sedang berlangsung.
  - Dibutuhkan ketika komputer suspect menggunakan encrypted drive dan sedang dalam keadaan menyala (dimana password/passphrase sedang aktif dan data dapat dibaca).
  - Diperlukan untuk menangkap data volatile yang jejak serangannya hanya ada di dalam RAM atau running processes, yang mana data ini akan hilang secara permanen apabila komputer dimatikan atau di-reboot.
- Kenapa Tidak Dilakukan (Static Acquisition)
  - Jangan lakukan live acquisition jika komputer tersangka tidak terenkripsi, dalam kondisi mati (offline), dan bisa disita untuk dianalisis di laboratorium forensik. Static acquisitions (menghubungkan drive ke write-blocker untuk di-image) selalu menjadi metode yang lebih disarankan (preferred way) untuk mengumpulkan digital evidence karena lebih terjamin integritasnya. Tindakan live acquisition dapat merubah informasi di sistem (memodifikasi RAM dan proses yang berjalan).

---

## 6. Jelaskan fungsi utama dari tools-tools seperti wireshark, ftk imager, dsb (masih ada beberapa) dan digunakan untuk melihat apa?

(Catatan: Fungsi tingkat lanjut ditambahkan dari hasil pencarian internet untuk melengkapi slide)

- Penjelasan Tools: Wireshark adalah network analysis tool (packet sniffer) berjenis open-source yang menangkap paket data secara real-time dan menampilkannya dalam format yang dapat dibaca manusia.
- Fungsi Utama:
  - Menghasilkan daftar top 10 web sites yang dikunjungi pengguna dalam jaringan.
  - Menghasilkan daftar aktivitas dari pengguna internal (Top 10 internal users) untuk melihat pola transmisi data, misalnya jika seorang karyawan mengakses situs terlarang saat jam kerja.
  - Troubleshooting & Network Forensics: Mendiagnosis masalah jaringan, mengecek tingkat keamanan jaringan, mendeteksi lalu lintas yang mencurigakan (seperti malware atau intrusion), dan memantau komunikasi secara menyeluruh (sniffing).
- Apa yang bisa dilihat (dianalisis):
  - Melihat secara rinci struktur header protokol, source dan destination IP address, MAC Address, serta port yang digunakan.
  - Melihat payload data (isi konten dari paket data tersebut). jika protokol yang digunakan tidak terenkripsi (seperti HTTP, atau FTP biasa), Wireshark dapat digunakan untuk melihat teks secara utuh (cleartext), termasuk menangkap jejak aktivitas atau credential (seperti username dan password).

---
