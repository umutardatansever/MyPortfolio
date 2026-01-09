# Portfolyo - Umut Arda Tansever

Kişisel portfolyo web sitesi - React JS ile geliştirilmiş modern ve responsive tasarım.

## 📋 Proje Bilgileri

Bu proje, İstanbul Rumeli Üniversitesi Bilgisayar Mühendisliği bölümü Web Teknolojileri dersi kapsamında geliştirilmiş kişisel portfolyo web sitesidir.

## 🚀 Kurulum Talimatları

### Gereksinimler
- Node.js (v16 veya üzeri)
- npm veya yarn

### Kurulum Adımları

1. Projeyi klonlayın veya zip dosyasını çıkarın:
```bash
cd Portfolyom
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Tarayıcıda açın:
```
http://localhost:5173
```

### Production Build
```bash
npm run build
```

## 📁 Proje Yapısı

```
src/
├── assets/                     # Statik dosyalar (resimler, CV.pdf)
│   ├── ben.jpeg               # Profil fotoğrafı
│   ├── CV.pdf                 # İndirilebilir CV dosyası
│   └── [proje görselleri]     # Proje ekran görüntüleri
│
├── components/                 # React Component'ler
│   ├── Layout/                # Layout Component'leri
│   │   ├── Navbar.jsx         # Navigasyon barı (logo, menü, tema/dil butonları)
│   │   ├── Footer.jsx         # Alt bilgi (copyright, sosyal medya)
│   │   └── Layout.jsx         # Sayfa düzeni wrapper
│   │
│   ├── Sections/              # Section Component'leri (Sayfa içerikleri)
│   │   ├── Hero.jsx           # Ana sayfa hero bölümü
│   │   ├── About.jsx          # Hakkımda içeriği
│   │   ├── Skills.jsx         # Yetenekler bölümü
│   │   ├── Projects.jsx       # Projeler bölümü
│   │   └── Contact.jsx        # İletişim bölümü
│   │
│   └── UI/                    # UI Component'leri (Yeniden kullanılabilir)
│       ├── ProjectCard.jsx    # Proje önizleme kartı
│       ├── SkillBar.jsx       # Yetenek seviye çubuğu (progress bar)
│       ├── SocialLinks.jsx    # Sosyal medya ikonları
│       ├── ContactForm.jsx    # İletişim formu
│       ├── ThemeToggle.jsx    # Tema değiştirme butonu
│       ├── LanguageSwitcher.jsx # Dil değiştirme butonu
│       └── Modal.jsx          # Proje detay modalı
│
├── context/                   # React Context API
│   ├── ThemeContext.jsx       # Dark/Light mode yönetimi
│   └── LanguageContext.jsx    # TR/EN dil yönetimi
│
├── data/                      # Mock Data (JSON dosyaları)
│   ├── profile.json           # Kişisel bilgiler
│   ├── skills.json            # Yetenekler ve kategoriler
│   ├── projects.json          # Proje verileri
│   └── locales/               # Dil dosyaları
│       ├── tr.json            # Türkçe çeviriler
│       └── en.json            # İngilizce çeviriler
│
├── pages/                     # Route Sayfaları (Wrapper)
│   ├── Home.jsx               # / - Ana Sayfa
│   ├── AboutPage.jsx          # /hakkimda - Hakkımda
│   ├── SkillsPage.jsx         # /yetenekler - Yetenekler
│   ├── ProjectsPage.jsx       # /projeler - Projeler
│   ├── ContactPage.jsx        # /iletisim - İletişim
│   └── Projectid4Detail.jsx   # /project-detail/4 - Proje Detay
│
├── App.jsx                    # Ana uygulama bileşeni (Router yapısı)
├── main.jsx                   # React giriş noktası
├── index.css                  # Global CSS (tema değişkenleri)
└── App.css                    # Uygulama stilleri
```

## 🛠️ Kullanılan Teknolojiler

| Teknoloji | Açıklama |
|-----------|----------|
| **React JS** | UI framework (Vite ile kurulum) |
| **React Router** | Sayfa yönlendirmeleri |
| **Context API** | Tema ve dil yönetimi |
| **CSS Variables** | Dark/Light tema desteği |
| **Local Storage** | Kullanıcı tercihlerinin saklanması |
| **React Icons** | İkon kütüphanesi |

## ✨ Özellikler

### Fonksiyonel Özellikler
- ✅ **Tema Değiştirme**: Dark/Light mode (LocalStorage ile kalıcı)
- ✅ **Çoklu Dil Desteği**: Türkçe/İngilizce (LocalStorage ile kalıcı)
- ✅ **CV İndirme**: PDF formatında CV indirme
- ✅ **Responsive Tasarım**: Mobil uyumlu (hamburger menü)
- ✅ **Proje Filtreleme**: Kategoriye göre proje filtreleme
- ✅ **Proje Modalı**: Detaylı proje görüntüleme
- ✅ **İletişim Formu**: Form validasyonu ve gönderim simülasyonu

### Sayfalar (Routes)
| Route | Sayfa |
|-------|-------|
| `/` | Ana Sayfa (Hero) |
| `/hakkimda` | Hakkımda |
| `/yetenekler` | Yetenekler |
| `/projeler` | Projeler |
| `/iletisim` | İletişim |

## 📊 Veri Yapısı

### profile.json
```json
{
  "name": "Umut Arda Tansever",
  "title": "Bilgisayar Mühendisliği Öğrencisi & Frontend Developer",
  "email": "umutarda.tansever@stu.rumeli.edu.tr",
  "phone": "+90 505 815 82 51",
  "location": "İstanbul, Türkiye",
  "social": { "github", "linkedin", "twitter", "instagram" },
  "cvFile": "/src/assets/CV.pdf"
}
```

### skills.json
- 4 kategori: Frontend & Web, Programming & Data, Low-Level & Embedded, Backend & Tools
- 13 farklı yetenek (her biri seviye yüzdesi ile)

### projects.json
- 6 farklı proje
- Her proje: id, title, description, image, technologies, category, githubUrl, demoUrl, isFeatured

### locales/tr.json & en.json
- Tüm statik metinler hem Türkçe hem İngilizce

## 🔧 Context Yapısı

### ThemeContext
- `theme`: Aktif tema ('dark' | 'light')
- `toggleTheme()`: Tema değiştirme fonksiyonu
- LocalStorage: 'theme' key

### LanguageContext
- `lang`: Aktif dil ('tr' | 'en')
- `translations`: Çeviri objesi
- `toggleLanguage()`: Dil değiştirme fonksiyonu
- LocalStorage: 'language' key

## 👤 Geliştirici

**Umut Arda Tansever**
- GitHub: [umutardatansever](https://github.com/umutardatansever)
- LinkedIn: [Umut Arda Tansever](https://www.linkedin.com/in/umut-arda-tansever-15606a369)
- Email: umutarda.tansever@stu.rumeli.edu.tr

## 📄 Lisans

Bu proje eğitim amaçlı geliştirilmiştir.

---

**İstanbul Rumeli Üniversitesi - Bilgisayar Mühendisliği**  
Web Teknolojileri - Dönem Projesi  
2025-2026 Güz Dönemi
