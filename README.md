# Kişisel Portfolyo Web Sitesi

Bu proje, React JS kullanılarak geliştirilmiş kişisel portfolyo web sitesidir. Site, yazılım/bilişim alanında kariyer hedefleyen bir öğrencinin profesyonel kimliğini yansıtmaktadır.

## 🚀 Teknolojiler

- **React JS** (Vite ile kurulum)
- **React Router** (Sayfa yönlendirmeleri)
- **Context API** (Tema ve dil yönetimi)
- **CSS** (Vanilla CSS - Glassmorphism tasarım)
- **Local Storage** (Kullanıcı tercihlerini saklama)

## 📁 Proje Yapısı

```
src/
├── assets/                    # Görseller ve CV dosyası
│   ├── ben.jpeg              # Profil fotoğrafı
│   ├── CV.pdf                # İndirilebilir CV
│   └── [proje görselleri]    # Proje ekran görüntüleri
│
├── components/               # Yeniden kullanılabilir bileşenler
│   ├── Layout.jsx           # Sayfa düzeni wrapper'ı
│   ├── Navbar.jsx           # Navigasyon çubuğu
│   ├── Footer.jsx           # Alt bilgi bölümü
│   ├── ProjectCard.jsx      # Proje önizleme kartı
│   ├── SkillBar.jsx         # Yetenek seviye çubuğu
│   ├── Modal.jsx            # Proje detay modalı
│   ├── ContactForm.jsx      # İletişim formu
│   ├── SocialLinks.jsx      # Sosyal medya ikonları
│   ├── ThemeToggle.jsx      # Tema değiştirme butonu
│   └── LanguageSwitcher.jsx # Dil değiştirme butonu
│
├── context/                  # React Context dosyaları
│   ├── ThemeContext.jsx     # Dark/Light tema yönetimi
│   └── LanguageContext.jsx  # TR/EN dil yönetimi
│
├── data/                     # Mock veri dosyaları
│   ├── profile.json         # Kişisel bilgiler
│   ├── skills.json          # Teknik yetenekler
│   ├── projects.json        # Proje bilgileri
│   ├── about.json           # Hakkımda bilgileri
│   └── locales/             # Çeviri dosyaları
│       ├── tr.json          # Türkçe metinler
│       └── en.json          # İngilizce metinler
│
├── pages/                    # Sayfa bileşenleri
│   ├── Homes.jsx            # Ana sayfa (Hero section)
│   ├── About.jsx            # Hakkımda sayfası
│   ├── Skills.jsx           # Yetenekler sayfası
│   ├── Projects.jsx         # Projeler sayfası
│   ├── Contact.jsx          # İletişim sayfası
│   └── Projectid4Detail.jsx # Proje detay sayfası
│
├── App.jsx                   # Ana uygulama bileşeni
├── main.jsx                  # Uygulama giriş noktası
└── index.css                 # Global stiller ve tema değişkenleri
```

## ⚙️ Kurulum

### Gereksinimler
- Node.js (v18 veya üzeri)
- npm veya yarn

### Adımlar

1. **Projeyi klonlayın veya indirin:**
```bash
cd Portfolyom
```

2. **Bağımlılıkları yükleyin:**
```bash
npm install
```

3. **Geliştirme sunucusunu başlatın:**
```bash
npm run dev
```

4. **Tarayıcıda açın:**
```
http://localhost:5173
```

### Production Build

```bash
npm run build
```

Build çıktısı `dist/` klasöründe oluşturulur.

## 🎨 Özellikler

### Tema Değiştirme (Dark/Light Mode)
- Navbar'da ay/güneş ikonu ile tema değiştirme
- Tüm sayfalarda tutarlı tema uygulaması
- Tema tercihi Local Storage'da saklanır
- Sayfa yenilendiğinde tercih korunur

### Çoklu Dil Desteği (TR/EN)
- TR/EN toggle butonu ile dil değiştirme
- Tüm statik metinler iki dilde
- Dil tercihi Local Storage'da saklanır
- Sayfa yenilendiğinde tercih korunur

### Responsive Tasarım
- Mobil uyumlu tasarım
- Hamburger menü (mobil görünümde)
- Esnek grid yapısı

## 📄 Sayfalar

| Route | Sayfa |
|-------|-------|
| `/` | Ana Sayfa (Hero Section) |
| `/hakkimda` | Hakkımda |
| `/yetenekler` | Yetenekler |
| `/projeler` | Projeler |
| `/iletisim` | İletişim |

## 👤 Geliştirici

**Umut Arda Tansever**
- GitHub: [@umutardatansever](https://github.com/umutardatansever)
- LinkedIn: [Umut Arda Tansever](https://www.linkedin.com/in/umut-arda-tansever-15606a369)

## 📝 Lisans

Bu proje eğitim amaçlı geliştirilmiştir.

---
İstanbul Rumeli Üniversitesi - Bilgisayar Mühendisliği  
BLG331 Web Teknolojileri - Dönem Projesi (2025-2026)
