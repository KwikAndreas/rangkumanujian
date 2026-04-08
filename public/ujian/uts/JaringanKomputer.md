# Rangkuman Kisi Kisi Jaringan Komputer 2

## 1. VTP (VLAN Trunking Protocol)

### Definisi VTP

**VLAN Trunking Protocol (VTP)** adalah protokol yang mengurangi administrasi di dalam switched network dengan memungkinkan administrator jaringan untuk mengelola VLAN secara terpusat.

**Fungsi Utama:**

- Mengelola penambahan, penghapusan, dan penggantian nama VLAN di seluruh domain
- Mendistribusikan dan menyinkronkan informasi VLAN melalui trunk links
- Mengurangi konfigurasi manual VLAN di setiap switch

### Langkah-Langkah Konfigurasi VTP Dasar

**Langkah 1: Mengonfigurasi VTP Server**

```
S1> enable
S1# configure terminal
S1(config)# vtp mode server
```

**Langkah 2: Mengonfigurasi Domain & Password**

```
S1(config)# vtp domain CCNA
S1(config)# vtp password cisco12345
```

**Langkah 3: Membuat VLAN pada Server**

```
S1(config)# vlan 10
S1(config-vlan)# name SALES
S1(config-vlan)# exit
```

**Langkah 4: Mengonfigurasi VTP Client**

```
S2> enable
S2# configure terminal
S2(config)# vtp mode client
S2(config)# vtp domain CCNA
S2(config)# vtp password cisco12345
S2(config)# exit
```

## 2. Case Study Perusahaan - Analisa VTP

### Skenario Perusahaan

Sebuah perusahaan besar memiliki gedung 5 lantai dengan ratusan karyawan yang dibagi menjadi beberapa departemen (HRD, Finance, IT, dan Operasional). Perusahaan ini membutuhkan manajemen jaringan yang terpusat agar tidak perlu repot mengonfigurasi VLAN di setiap switch secara manual.

### Analisa Penggunaan VTP Server

Tipe VTP Server diterapkan pada Switch Core atau Switch Distribution yang berada di ruang Data Center IT. Alasannya: Administrator jaringan dapat memusatkan pembuatan, modifikasi, dan penghapusan VLAN (seperti VLAN HRD, VLAN Finance) hanya dari satu perangkat ini. Semua perubahan akan otomatis dikirimkan ke seluruh jaringan.

### Analisa Penggunaan VTP Client

Tipe VTP Client diterapkan pada seluruh Switch Access yang ada di setiap lantai gedung. Alasannya: Switch di setiap lantai hanya bertugas menerima database VLAN dari VTP Server dan menerapkannya ke port komputer karyawan. Mode ini mencegah teknisi lokal atau pihak tak berwenang membuat atau menghapus VLAN secara tidak sengaja di lantai tersebut.

### Analisa Penggunaan VTP Transparent

Tipe VTP Transparent diterapkan pada switch khusus di ruang R&D (Research and Development) yang membutuhkan jaringan terisolasi. Alasannya: Ruang R&D membutuhkan VLAN khusus (misalnya Extended VLAN) yang tidak boleh tersebar ke gedung lain. Dengan mode transparent, switch ini tetap meneruskan update VTP dari pusat ke switch lain, tetapi tidak ikut mengubah database VLAN-nya sendiri, sehingga privasinya tetap terjaga.

## 3. Routing

Secara garis besar, routing dibagi menjadi dua: Static Routing (dikonfigurasi manual oleh admin) dan Dynamic Routing (router saling bertukar informasi secara otomatis menggunakan Routing Protocol).

### Berikut adalah contoh dan cara kerja dari masing-masing Dynamic Routing Protocol yang paling sering digunakan

#### A. RIP (Routing Information Protocol)

- **Kategori:** Distance-Vector Protocol
- **Cara Kerja:** RIP menggunakan metrik **Hop Count** (jumlah lompatan/router yang harus dilewati). Router memilih jalur dengan hop paling sedikit. RIP memiliki batasan maksimal 15 lompatan; jika tujuan berada di lompatan ke-16, jaringan dianggap tidak dapat dijangkau (_unreachable_). Router RIP saling mengirim pembaruan tabel routing secara berkala (biasanya setiap 30 detik).
- **Contoh Penggunaan:** Cocok untuk jaringan berskala sangat kecil karena sederhana, tetapi kurang efisien untuk jaringan besar.

#### B. OSPF (Open Shortest Path First)

- **Kategori:** Link-State Protocol
- **Cara Kerja:** OSPF menggunakan algoritma **Dijkstra's Shortest Path First**. Alih-alih menghitung jumlah lompatan, OSPF memakai metrik **Cost** berdasarkan bandwidth (kecepatan kabel). Setiap router OSPF mengumpulkan informasi dari seluruh jaringan dan membentuk "peta" topologi secara mandiri, lalu memilih jalur tercepat meskipun melewati lebih banyak router.
- **Contoh Penggunaan:** Standar industri untuk jaringan berskala menengah hingga besar (misalnya jaringan antar gedung di kampus tingkat universitas).

#### C. EIGRP (Enhanced Interior Gateway Routing Protocol)

- **Kategori:** Advanced Distance-Vector Protocol (sering disebut Hybrid)
- **Cara Kerja:** EIGRP awalnya diciptakan khusus oleh Cisco. EIGRP menggunakan kombinasi **Bandwidth** dan **Delay** sebagai metrik utama. EIGRP menyimpan jalur terbaik (_Successor_) dan jalur cadangan (_Feasible Successor_). Jika jalur utama putus, traffic dapat dipindahkan ke jalur cadangan dalam hitungan milidetik tanpa menghitung ulang dari awal.
- **Contoh Penggunaan:** Sangat cocok untuk perusahaan berskala besar yang mayoritas perangkat jaringannya menggunakan Cisco (meskipun saat ini EIGRP mulai dibuka untuk non-Cisco).

#### D. BGP (Border Gateway Protocol)

- **Kategori:** Path-Vector Protocol
- **Cara Kerja:** BGP adalah protokol "kelas berat" yang menopang Internet global. BGP tidak digunakan untuk merutekan data antar komputer dalam satu gedung, melainkan antar **Autonomous System (AS)** atau antar penyedia layanan internet (ISP). Penentuan rute didasarkan pada kebijakan (_policy_) dan aturan lintas wilayah/negara.
- **Contoh Penggunaan:** Digunakan oleh perusahaan telekomunikasi (seperti Telkom, Biznet) untuk menghubungkan jaringan ke internet global, serta oleh perusahaan besar seperti Google dan Facebook.

### Analogi Sederhana

- **RIP:** Seperti supir yang memilih jalan dengan jumlah lampu merah paling sedikit, tanpa mempertimbangkan apakah jalannya sempit atau macet.
- **OSPF:** Seperti supir yang memakai Google Maps untuk mencari jalan paling lancar dan cepat, meskipun harus belok lebih banyak.

## 4. Case Study Universitas - Desain Jaringan Lab

### Skenario Universitas

Desain jaringan untuk 3 Laboratorium Komputer yang menggunakan model **Hierarki 3 Lapisan** (Core, Distribution, Access).

### Komponen Perangkat yang Dibutuhkan

**Core Layer:**

- **1 Unit Router** - Berfungsi sebagai gateway utama yang menghubungkan seluruh jaringan universitas ke Internet

**Distribution Layer:**

- **1 Unit Switch Layer 3** - Berfungsi sebagai jembatan antara Router dan Lab, menangani Inter-VLAN Routing antar laboratorium agar beban routing tidak menumpuk di Router utama

**Access Layer:**

- **3 Unit Switch Layer 2** - Dialokasikan 1 switch untuk masing-masing Lab (Lab A, Lab B, Lab C)

**End Devices:**

- **90 Unit PC** - Dialokasikan 30 PC untuk masing-masing Lab yang terhubung langsung ke Switch Access di ruangan tersebut

### Topologi Fisik

![Topologi Jaringan Lab Universitas - Hierarki 3 Lapisan](topologifisik.png)

### Keandalan Jaringan (Reliability)

**Alasan Keandalan Tinggi:**

1. **Isolasi Gangguan (Fault Isolation)**
   - Jika Switch Lab A mengalami kerusakan atau mati listrik, Lab B dan Lab C tetap dapat beroperasi normal dan mengakses internet

2. **Performa Optimal**
   - Switch Layer 3 mempercepat pertukaran data antar-VLAN (misalnya saat sharing file antar lab)
   - Tidak membebani Router utama dengan routing traffic lokal
   - Jaringan tidak mudah lambat atau down

## 5. VTP dalam Skala Jaringan Besar - Konfigurasi Multi-Mode

### Skenario Implementasi

Dalam jaringan skala besar dengan puluhan switch, diperlukan kombinasi mode VTP untuk fungsionalitas optimal. Skenario ini mengkonfigurasi:

- Satu Switch Distribution sebagai **VTP Server** (pusat manajemen)
- Satu Switch di lokasi terpencil sebagai **VTP Transparent** (untuk Extended VLAN terisolasi)
- Satu Switch Access sebagai **VTP Client** (penerima konfigurasi)

### Konfigurasi VTP Server Utama

**Perangkat:** Switch Distribution di pusat data

```
Switch> enable
Switch# configure terminal
Switch(config)# vtp version 2
Switch(config)# vtp mode server
Switch(config)# vtp domain KAMPUS_BESAR
Switch(config)# vtp password jaringan123

Switch(config)# vlan 10
Switch(config-vlan)# name DOSEN
Switch(config-vlan)# exit

Switch(config)# vlan 20
Switch(config-vlan)# name MAHASISWA
Switch(config-vlan)# exit
```

### Konfigurasi VTP Transparent - Cabang Khusus

**Perangkat:** Switch di lokasi terpencil/isolated

```
Switch> enable
Switch# configure terminal
Switch(config)# vtp version 2
Switch(config)# vtp mode transparent
Switch(config)# vtp domain KAMPUS_BESAR
Switch(config)# vtp password jaringan123

Switch(config)# vlan 2000
Switch(config-vlan)# name CCTV_TERSEMBUNYI
Switch(config-vlan)# exit
```

### Konfigurasi VTP Client - Gedung Mahasiswa

**Perangkat:** Switch Access di lokasi satelit

```
Switch> enable
Switch# configure terminal
Switch(config)# vtp version 2
Switch(config)# vtp mode client
Switch(config)# vtp domain KAMPUS_BESAR
Switch(config)# vtp password jaringan123
Switch(config)# exit

Switch# show vlan brief
```

**Verifikasi:** Perintah `show vlan brief` memastikan Switch Client sudah menerima VLAN DOSEN (10) dan MAHASISWA (20) dari Switch Server.

---

**Catatan:** Konfigurasi di atas adalah Command untuk Cisco Packet Tracer
