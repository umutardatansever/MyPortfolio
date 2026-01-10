import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './Projectid1Detail.css';

// Hareket Tanıma Görselleri
import ellerAsagi from '../assets/Eller Aşağı.png';
import ellerYukari from '../assets/Eller Yukarı.png';
import sagElYukari from '../assets/Sağ el Yukarı.png';
import solElYukari from '../assets/Sol el yukarı.png';

export default function Projectid1Detail() {
    const { lang } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const content = {
        tr: {
            backBtn: "Projelere Dön",
            mainTitle: "Kural Tabanlı Hareket Tanımlama Algoritması",
            subtitle: "Rule-Based Gesture Recognition - MATLAB Implementasyonu",

            // Bölüm 1
            section1Title: "1. Algoritma Mimarisi",
            section1Desc: `Sistem, iskelet çıkarımı sonucunda elde edilen eklem noktalarının (keypoints) koordinatlarını analiz ederek kullanıcının hareketlerini sınıflandırmaktadır. MATLAB ortamında geliştirilen algoritma, burun (nose), omuzlar (shoulder) ve bilekler (wrist) arasındaki dikey (Y-ekseni) konum ilişkisini temel almaktadır.`,
            coordNote: `Görüntü işleme koordinat sisteminde Y-ekseni yukarıdan aşağıya doğru arttığı için, fiziksel olarak "daha yukarıda" olan bir noktanın sayısal Y değeri "daha küçüktür".`,

            // Tablo
            tableTitle: "Hareket Tanımlama Mantığı",
            gestureHeader: "Hareket",
            conditionHeader: "Koşul",
            tableRows: [
                { gesture: "Eller Yukarı", condition: "Her iki bileğin Y koordinatı < Burun Y koordinatı" },
                { gesture: "Eller Aşağı", condition: "Her iki bileğin Y koordinatı > Omuz Y koordinatı" },
                { gesture: "Tek El Yukarı", condition: "İlgili elin bilek Y koordinatı < Burun Y koordinatı" }
            ],

            // Kod Bloğu
            codeTitle: "MATLAB Poz Sınıflandırma Kodu",

            // Bölüm 2 - Sonuçlar
            section2Title: "2. Deneysel Sonuçlar ve Sistem Doğrulaması",
            section2Desc: "Geliştirilen algoritmanın doğruluk testi, farklı senaryolar altında gerçekleştirilmiştir. Aşağıdaki şekillerde, sistemin kamera görüntüsü üzerine iskelet ağını (skeleton) başarıyla çizdiği ve if-else mantıksal bloklarını doğru tetikleyerek ilgili etiketi (label) ekrana yazdırdığı görülmektedir.",

            // Figür Açıklamaları
            analysisLabel: "Analiz:",
            fig1Title: "Şekil 1: Başlangıç Pozisyonu (Eller Aşağı)",
            fig1Analysis: "Algoritma, bilek koordinatlarının (l_wrist(2), r_wrist(2)) omuz koordinatlarından (l_shoulder(2), r_shoulder(2)) sayısal olarak daha büyük olduğunu tespit etmiş ve 'ELLER ASAGI' durumunu aktif hale getirmiştir.",

            fig2Title: "Şekil 2: Çift El Aktivasyonu (Eller Yukarı)",
            fig2Analysis: "Kullanıcı kollarını kaldırdığında, bileklerin Y koordinat değerleri burnun Y değerinin (nose(2)) altına düşmüştür. Kod bloğundaki ilk if koşulu sağlanmış ve sistem 'ELLER YUKARI' çıktısını vermiştir.",

            fig3Title: "Şekil 3: Asimetrik Hareket Tespiti (Sağ El Yukarı)",
            fig3Analysis: "Sağ bilek burun hizasının üzerindeyken, sol bilek omuz hizasının altında kalmıştır. Algoritma bu karmaşık durumu başarıyla ayrıştırarak 'SAG EL YUKARI' etiketini görüntüye işlemiştir.",

            fig4Title: "Şekil 4: Asimetrik Hareket Tespiti (Sol El Yukarı)",
            fig4Analysis: "Bir önceki durumun tersi olarak, sol bilek burun referans noktasını geçtiğinde sistem 'SOL EL YUKARI' durumunu tespit etmiştir."
        },
        en: {
            backBtn: "Back to Projects",
            mainTitle: "Rule-Based Gesture Recognition Algorithm",
            subtitle: "MATLAB Implementation for Human Pose Estimation",

            // Section 1
            section1Title: "1. Algorithm Architecture",
            section1Desc: `The system classifies user movements by analyzing the coordinates of joint points (keypoints) obtained from skeleton extraction. The algorithm developed in MATLAB is based on the vertical (Y-axis) position relationship between the nose, shoulders, and wrists.`,
            coordNote: `In the image processing coordinate system, the Y-axis increases from top to bottom, so a point that is physically "higher" has a numerically "smaller" Y value.`,

            // Table
            tableTitle: "Gesture Recognition Logic",
            gestureHeader: "Gesture",
            conditionHeader: "Condition",
            tableRows: [
                { gesture: "Hands Up", condition: "Both wrists' Y coordinate < Nose Y coordinate" },
                { gesture: "Hands Down", condition: "Both wrists' Y coordinate > Shoulder Y coordinate" },
                { gesture: "Single Hand Up", condition: "Respective wrist Y coordinate < Nose Y coordinate" }
            ],

            // Code Block
            codeTitle: "MATLAB Pose Classification Code",

            // Section 2 - Results
            section2Title: "2. Experimental Results and System Validation",
            section2Desc: "The accuracy test of the developed algorithm was performed under different scenarios. In the figures below, you can see that the system successfully draws the skeleton mesh on the camera image and triggers the if-else logical blocks correctly to print the relevant label on the screen.",

            // Figure Descriptions
            analysisLabel: "Analysis:",
            fig1Title: "Figure 1: Initial Position (Hands Down)",
            fig1Analysis: "The algorithm detected that the wrist coordinates (l_wrist(2), r_wrist(2)) are numerically larger than the shoulder coordinates (l_shoulder(2), r_shoulder(2)) and activated the 'HANDS DOWN' state.",

            fig2Title: "Figure 2: Dual Hand Activation (Hands Up)",
            fig2Analysis: "When the user raised their arms, the Y coordinate values of the wrists dropped below the nose Y value (nose(2)). The first if condition in the code block was satisfied and the system produced 'HANDS UP' output.",

            fig3Title: "Figure 3: Asymmetric Motion Detection (Right Hand Up)",
            fig3Analysis: "While the right wrist was above the nose level, the left wrist remained below the shoulder level. The algorithm successfully distinguished this complex situation and processed the 'RIGHT HAND UP' label on the image.",

            fig4Title: "Figure 4: Asymmetric Motion Detection (Left Hand Up)",
            fig4Analysis: "As the reverse of the previous situation, when the left wrist passed the nose reference point, the system detected the 'LEFT HAND UP' state."
        }
    };

    const t = content[lang] || content.tr;

    const matlabCode = `% Keypoints Coordinates Analysis
% (1) represents X-axis, (2) represents Y-axis

% Check if keypoints are detected in the frame
if nose(1)>0 && l_wrist(1)>0 && r_wrist(1)>0
    
    % CASE 1: BOTH HANDS UP
    % Wrist points are numerically smaller (physically higher) than the nose point
    if (l_wrist(2) < nose(2)) && (r_wrist(2) < nose(2))
        gesture_text = 'ELLER YUKARI';

    % CASE 2: BOTH HANDS DOWN
    % Wrist points are numerically larger (physically lower) than shoulder points
    elseif (l_wrist(2) > l_shoulder(2)) && (r_wrist(2) > r_shoulder(2))
        gesture_text = 'ELLER ASAGI';

    % CASE 3: RIGHT HAND UP
    % Only right wrist is above nose, left is below shoulder
    elseif (r_wrist(2) < nose(2)) && (l_wrist(2) > l_shoulder(2))
        gesture_text = 'SAG EL YUKARI';

    % CASE 4: LEFT HAND UP
    % Only left wrist is above nose, right is below shoulder
    elseif (l_wrist(2) < nose(2)) && (r_wrist(2) > r_shoulder(2))
        gesture_text = 'SOL EL YUKARI';
    end
end`;

    return (
        <div className="project-detail-container">
            {/* Geri Butonu */}
            <Link to="/projeler" className="project-detail-back-btn">
                <FaArrowLeft /> {t.backBtn}
            </Link>

            {/* Ana Başlık */}
            <h1 className="project-detail-title">{t.mainTitle}</h1>
            <p className="project-detail-subtitle">{t.subtitle}</p>

            {/* Bölüm 1: Algoritma Mimarisi */}
            <section className="project-detail-section glass-card">
                <h2 className="section-title">{t.section1Title}</h2>
                <p className="section-desc">{t.section1Desc}</p>

                {/* Koordinat Notu */}
                <div className="coord-note-box">
                    <p className="coord-note-text">⚠️ {t.coordNote}</p>
                </div>

                {/* Hareket Tanımlama Tablosu */}
                <h3 className="table-title">{t.tableTitle}</h3>
                <div className="table-wrapper">
                    <table className="gesture-table">
                        <thead>
                            <tr>
                                <th>{t.gestureHeader}</th>
                                <th>{t.conditionHeader}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {t.tableRows.map((row, index) => (
                                <tr key={index}>
                                    <td className="gesture-cell">{row.gesture}</td>
                                    <td className="condition-cell">{row.condition}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* MATLAB Kod Bloğu */}
                <h3 className="code-title">{t.codeTitle}</h3>
                <div className="code-block">
                    <pre>
                        <code>{matlabCode}</code>
                    </pre>
                </div>
            </section>

            {/* Bölüm 2: Deneysel Sonuçlar */}
            <section className="project-detail-section glass-card">
                <h2 className="section-title">{t.section2Title}</h2>
                <p className="section-desc">{t.section2Desc}</p>

                {/* Şekil 1: Eller Aşağı */}
                <div className="figure-block">
                    <h3 className="figure-title">{t.fig1Title}</h3>
                    <div className="figure-image-container">
                        <img src={ellerAsagi} alt="Eller Aşağı" className="figure-image" />
                    </div>
                    <div className="analysis-box">
                        <p className="analysis-text">
                            <strong className="analysis-label">{t.analysisLabel}</strong> {t.fig1Analysis}
                        </p>
                    </div>
                </div>

                {/* Şekil 2: Eller Yukarı */}
                <div className="figure-block">
                    <h3 className="figure-title">{t.fig2Title}</h3>
                    <div className="figure-image-container">
                        <img src={ellerYukari} alt="Eller Yukarı" className="figure-image" />
                    </div>
                    <div className="analysis-box">
                        <p className="analysis-text">
                            <strong className="analysis-label">{t.analysisLabel}</strong> {t.fig2Analysis}
                        </p>
                    </div>
                </div>

                {/* Şekil 3: Sağ El Yukarı */}
                <div className="figure-block">
                    <h3 className="figure-title">{t.fig3Title}</h3>
                    <div className="figure-image-container">
                        <img src={sagElYukari} alt="Sağ El Yukarı" className="figure-image" />
                    </div>
                    <div className="analysis-box">
                        <p className="analysis-text">
                            <strong className="analysis-label">{t.analysisLabel}</strong> {t.fig3Analysis}
                        </p>
                    </div>
                </div>

                {/* Şekil 4: Sol El Yukarı */}
                <div className="figure-block">
                    <h3 className="figure-title">{t.fig4Title}</h3>
                    <div className="figure-image-container">
                        <img src={solElYukari} alt="Sol El Yukarı" className="figure-image" />
                    </div>
                    <div className="analysis-box">
                        <p className="analysis-text">
                            <strong className="analysis-label">{t.analysisLabel}</strong> {t.fig4Analysis}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
