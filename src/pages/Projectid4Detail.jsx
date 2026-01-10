import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './Projectid4Detail.css';

import fig1 from '../assets/Figure_1.png';
import fig2 from '../assets/Figure_2.png';
import fig3 from '../assets/Figure_3.png';

export default function Projectid4Detail() {
  const { lang } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    tr: {
      backBtn: "Projelere Dön",
      mainTitle: "Veri Analizi Teknik Raporu",
      subtitle: "Algoritma Performans ve Kümeleme Karşılaştırması",

      // Bölüm 1
      section1Title: "1. Kümeleme Analizi (K-Means vs DBSCAN)",
      section1Desc: "Bu analizde, mekansal veri noktalarının gruplandırılması incelenmiştir. <strong>K-Means</strong> algoritması veriyi önceden belirlenen 5 merkeze göre bölümlerken, <strong>DBSCAN</strong> yoğunluk tabanlı yaklaşımı sayesinde gürültülü verileri (outliers) başarıyla ayıklamıştır.",
      fig1Alt: "Kümeleme Analizi",

      // Bölüm 2
      section2Title: "2. Çalışma Süresi ve Bellek Tüketimi",
      section2Desc: "Performans testlerinde <strong>DBSCAN</strong> algoritmasının 1.34MB ile en yüksek bellek kullanımına sahip olduğu görülmüştür. Çalışma süresi bakımından <strong>K-Means</strong> 1.55 saniye ile en maliyetli algoritma olurken, grafik tabanlı algoritmalar çok daha hızlı sonuç vermiştir.",
      fig2Alt: "Performans Grafiği",

      // Bölüm 3
      section3Title: "3. Ağ Optimizasyonu (Prim's MST)",
      section3Desc: "<strong>Prim's MST</strong> algoritması kullanılarak 5 stratejik nokta arasındaki minimum bağlantı maliyeti hesaplanmıştır. Bu model, polis devriye ağının en verimli (en kısa toplam mesafe) şekilde nasıl kurulabileceğini matematiksel olarak kanıtlar.",
      fig3Alt: "Minimum Spanning Tree"
    },
    en: {
      backBtn: "Back to Projects",
      mainTitle: "Data Analysis Technical Report",
      subtitle: "Algorithm Performance and Clustering Comparison",

      // Section 1
      section1Title: "1. Clustering Analysis (K-Means vs DBSCAN)",
      section1Desc: "In this analysis, the grouping of spatial data points was examined. The <strong>K-Means</strong> algorithm partitions the data according to 5 predetermined centers, while <strong>DBSCAN</strong> successfully filters out noisy data (outliers) thanks to its density-based approach.",
      fig1Alt: "Clustering Analysis",

      // Section 2
      section2Title: "2. Execution Time and Memory Consumption",
      section2Desc: "In performance tests, the <strong>DBSCAN</strong> algorithm was found to have the highest memory usage at 1.34MB. In terms of execution time, <strong>K-Means</strong> was the most expensive algorithm at 1.55 seconds, while graph-based algorithms produced much faster results.",
      fig2Alt: "Performance Graph",

      // Section 3
      section3Title: "3. Network Optimization (Prim's MST)",
      section3Desc: "Using <strong>Prim's MST</strong> algorithm, the minimum connection cost between 5 strategic points was calculated. This model mathematically proves how the police patrol network can be established in the most efficient way (shortest total distance).",
      fig3Alt: "Minimum Spanning Tree"
    }
  };

  const t = content[lang] || content.tr;

  return (
    <div className="project-detail-container">
      {/* Geri Butonu */}
      <Link to="/projeler" className="project-detail-back-btn">
        <FaArrowLeft /> {t.backBtn}
      </Link>

      {/* Ana Başlık */}
      <h1 className="project-detail-title">{t.mainTitle}</h1>
      <p className="project-detail-subtitle">{t.subtitle}</p>

      {/* Bölüm 1: Kümeleme Analizi */}
      <section className="project-detail-section glass-card">
        <h2 className="section-title">{t.section1Title}</h2>
        <div className="figure-image-container">
          <img src={fig1} className="figure-image" alt={t.fig1Alt} />
        </div>
        <p
          className="section-desc"
          dangerouslySetInnerHTML={{ __html: t.section1Desc }}
        />
      </section>

      {/* Bölüm 2: Performans Analizi */}
      <section className="project-detail-section glass-card">
        <h2 className="section-title">{t.section2Title}</h2>
        <div className="figure-image-container">
          <img src={fig2} className="figure-image" alt={t.fig2Alt} />
        </div>
        <p
          className="section-desc"
          dangerouslySetInnerHTML={{ __html: t.section2Desc }}
        />
      </section>

      {/* Bölüm 3: Ağ Optimizasyonu */}
      <section className="project-detail-section glass-card">
        <h2 className="section-title">{t.section3Title}</h2>
        <div className="figure-image-container">
          <img src={fig3} className="figure-image" alt={t.fig3Alt} />
        </div>
        <p
          className="section-desc"
          dangerouslySetInnerHTML={{ __html: t.section3Desc }}
        />
      </section>
    </div>
  );
}