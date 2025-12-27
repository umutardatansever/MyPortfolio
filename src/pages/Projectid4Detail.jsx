import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import fig1 from '../assets/Figure_1.png'; 
import fig2 from '../assets/Figure_2.png';
import fig3 from '../assets/Figure_3.png';

export default function Projectid4Detail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px', color: 'white' }}>
      <Link to="/projeler" style={{ 
        display: 'inline-flex', alignItems: 'center', gap: '10px', 
        marginBottom: '40px', color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 
      }}>
        <FaArrowLeft /> Projelere Dön
      </Link>

      <h1 style={{ fontSize: '3rem', marginBottom: '10px', fontWeight: 800 }}>Veri Analizi Teknik Raporu</h1>
      <p style={{ opacity: 0.6, marginBottom: '50px' }}>Algoritma Performans ve Kümeleme Karşılaştırması</p>
      
      <section className="glass-card" style={{ padding: '40px', borderRadius: '25px', marginBottom: '50px', border: '1px solid var(--glass-border)' }}>
        <h2 style={{ marginBottom: '25px', color: 'var(--primary)', fontSize: '1.8rem' }}>1. Kümeleme Analizi (K-Means vs DBSCAN)</h2>
        <div style={{ background: '#1a1a1a', borderRadius: '15px', padding: '10px', marginBottom: '25px' }}>
          <img src={fig1} style={{ width: '100%', borderRadius: '10px', display: 'block' }} alt="Kümeleme Analizi" />
        </div>
        <p style={{ opacity: 0.8, lineHeight: '1.8', fontSize: '1.1rem' }}>
          Bu analizde, mekansal veri noktalarının gruplandırılması incelenmiştir. <strong>K-Means</strong> algoritması veriyi önceden belirlenen 5 merkeze göre bölümlerken, <strong>DBSCAN</strong> yoğunluk tabanlı yaklaşımı sayesinde gürültülü verileri (outliers) başarıyla ayıklamıştır.
        </p>
      </section>

      <section className="glass-card" style={{ padding: '40px', borderRadius: '25px', marginBottom: '50px', border: '1px solid var(--glass-border)' }}>
        <h2 style={{ marginBottom: '25px', color: 'var(--primary)', fontSize: '1.8rem' }}>2. Çalışma Süresi ve Bellek Tüketimi</h2>
        <div style={{ background: '#1a1a1a', borderRadius: '15px', padding: '10px', marginBottom: '25px' }}>
          <img src={fig2} style={{ width: '100%', borderRadius: '10px', display: 'block' }} alt="Performans Grafiği" />
        </div>
        <p style={{ opacity: 0.8, lineHeight: '1.8', fontSize: '1.1rem' }}>
          Performans testlerinde <strong>DBSCAN</strong> algoritmasının 1.34MB ile en yüksek bellek kullanımına sahip olduğu görülmüştür. Çalışma süresi bakımından <strong>K-Means</strong> 1.55 saniye ile en maliyetli algoritma olurken, grafik tabanlı algoritmalar çok daha hızlı sonuç vermiştir.
        </p>
      </section>

      <section className="glass-card" style={{ padding: '40px', borderRadius: '25px', border: '1px solid var(--glass-border)' }}>
        <h2 style={{ marginBottom: '25px', color: 'var(--primary)', fontSize: '1.8rem' }}>3. Ağ Optimizasyonu (Prim's MST)</h2>
        <div style={{ background: '#1a1a1a', borderRadius: '15px', padding: '10px', marginBottom: '25px' }}>
          <img src={fig3} style={{ width: '100%', borderRadius: '10px', display: 'block' }} alt="Minimum Spanning Tree" />
        </div>
        <p style={{ opacity: 0.8, lineHeight: '1.8', fontSize: '1.1rem' }}>
          <strong>Prim's MST</strong> algoritması kullanılarak 5 stratejik nokta arasındaki minimum bağlantı maliyeti hesaplanmıştır. Bu model, polis devriye ağının en verimli (en kısa toplam mesafe) şekilde nasıl kurulabileceğini matematiksel olarak kanıtlar.
        </p>
      </section>
    </div>
  );
}