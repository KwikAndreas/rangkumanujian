# Rangkuman Ujian

Platform website untuk menyimpan dan membaca rangkuman materi kuliah dengan pemisahan antara UTS (Ujian Tengah Semester) dan UAS (Ujian Akhir Semester).

## 🚀 Fitur

- ✅ Pemisahan materi UTS dan UAS
- ✅ Render markdown dengan styling yang rapi
- ✅ Dark mode support
- ✅ Responsive design
- ✅ Navigasi yang intuitif
- ✅ Tampilan modern dengan Tailwind CSS

## 📦 Teknologi

- [Next.js 16](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS 4](https://tailwindcss.com/) - Styling
- [react-markdown](https://github.com/remarkjs/react-markdown) - Markdown rendering
- [remark-gfm](https://github.com/remarkjs/remark-gfm) - GitHub Flavored Markdown support

## 🛠️ Instalasi

1. Clone repository ini
2. Install dependencies:
   ```bash
   npm install
   ```
3. Jalankan development server:
   ```bash
   npm run dev
   ```
4. Buka [http://localhost:3000](http://localhost:3000) di browser

## 📁 Struktur Folder

```
rangkumanujian/
├── public/
│   └── ujian/
│       ├── uts/           # File markdown untuk UTS
│       │   └── UIUXDesign.md
│       └── uas/           # File markdown untuk UAS
├── src/
│   ├── app/
│   │   ├── ujian/
│   │   │   └── [type]/
│   │   │       ├── [subject]/
│   │   │       │   └── page.tsx
│   │   │       └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   └── MarkdownRenderer.tsx
│   └── types/
│       └── globals.d.ts
```

## 📝 Cara Menambahkan Materi

1. **Untuk UTS:** Buat file markdown di `public/ujian/uts/NamaMataKuliah.md`
2. **Untuk UAS:** Buat file markdown di `public/ujian/uas/NamaMataKuliah.md`

### Format Nama File

Gunakan PascalCase untuk nama file, contoh:

- `UIUXDesign.md`
- `PemrogramanWeb.md`
- `BasisData.md`

Nama file akan otomatis dikonversi menjadi format yang lebih readable di interface.

### Format Konten Markdown

Gunakan format markdown standar dengan GitHub Flavored Markdown:

```markdown
# Judul Materi

## Topik 1

Isi materi...

### Sub-topik 1.1

Detail materi...

## Topik 2

- Poin 1
- Poin 2

**Bold text** untuk penekanan
_Italic text_ untuk penekanan ringan

> Blockquote untuk kutipan penting
```

## 🎨 Styling Markdown

Website ini sudah dilengkapi dengan styling khusus untuk markdown yang mencakup:

- **Typography:** Hierarki heading yang jelas
- **Lists:** Spacing yang optimal untuk bullet dan numbered lists
- **Code blocks:** Syntax highlighting ready
- **Blockquotes:** Design yang menarik untuk kutipan
- **Tables:** Styling tabel yang responsive
- **Links:** Hover effects yang smooth
- **Dark mode:** Otomatis menyesuaikan dengan system preference

## 🚀 Build untuk Production

```bash
npm run build
npm start
```

## 📄 License

MIT License - Silakan gunakan untuk keperluan pribadi atau pendidikan.

---

Dibuat dengan ❤️ untuk memudahkan belajar
