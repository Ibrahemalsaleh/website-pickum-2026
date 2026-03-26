import React, { useState, useEffect } from 'react';
// الخطوة 1: استيراد الهوك المخصص من ملف السياق
import { useLanguage } from '../../context/LanguageContext';

const TransportService = () => {
    // الخطوة 2: استخدام السياق للحصول على حالة اللغة ودوال الترجمة بشكل مركزي
    const { language: currentLanguage, changeLanguage, t, translations } = useLanguage();

    const [activeService, setActiveService] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    // تمت إزالة تعريفات اللغة والترجمة المكررة من هنا

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 300);
        return () => clearTimeout(timer);
    }, []);

    // الخطوة 3: سحب بيانات الخدمات مباشرة من كائن الترجمة المركزي
    const servicesData = translations.transportService.services;

    // بناء مصفوفة الخدمات بناءً على البيانات من السياق
    const services = [
        {
            id: 'heavy-machinery',
            title: servicesData.heavyMachinery.title,
            description: servicesData.heavyMachinery.description,
            icon: "fas fa-truck-pickup",
            color: "#deff22ff",
            gradient: "linear-gradient(135deg, #8dff22ff 0%, #fcff43ff 100%)",
            features: servicesData.heavyMachinery.features,
            process: servicesData.heavyMachinery.process,
            pricing: servicesData.heavyMachinery.pricing,
            specifications: {},
            image: "https://d9z1tpn605xsl.cloudfront.net/uploads/ckeditor/pictures/4485/content_blog-img.jpg"
        },
        {
            id: 'car-transport',
            title: servicesData.carTransport.title,
            description: servicesData.carTransport.description,
            icon: "fas fa-car-side",
            color: "#3f51b5",
            gradient: "linear-gradient(135deg, #3f51b5 0%, #5c6bc0 100%)",
            features: servicesData.carTransport.features,
            process: servicesData.carTransport.process,
            pricing: servicesData.carTransport.pricing,
            specifications: {},
            image: "https://d2pi0n2fm836iz.cloudfront.net/456627/0206202316065763e125a11268a.png"
        },
        {
            id: 'container-transport',
            title: servicesData.containerTransport.title,
            description: servicesData.containerTransport.description,
            icon: "fas fa-shipping-fast",
            color: "#004196ff",
            gradient: "linear-gradient(135deg, #004d96ff 0%, #2673a6ff 100%)",
            features: servicesData.containerTransport.features,
            process: servicesData.containerTransport.process,
            pricing: servicesData.containerTransport.pricing,
            specifications: servicesData.containerTransport.specifications || {},
            image: "https://hz-containers.com/wp-content/uploads/2024/08/preprava-lodnich-kontejneru-po-silnici.jpg"
        }
    ];

    const ServiceCard = ({ service, isActive }) => (
        <div className={`service-detail-card ${isActive ? 'active' : ''}`}>
            <div className="card-header" style={{ background: service.gradient }}>
                <div className="service-icon-large">
                    <i className={service.icon}></i>
                </div>
                <div className="header-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </div>
            </div>

            <div className="card-body">
                <div className="overview-section">
                    <div className="overview-image">
                        <img src={service.image} alt={service.title} />
                        <div className="image-overlay">
                            <div className="play-icon">
                                <i className="fas fa-play"></i>
                            </div>
                        </div>
                    </div>
                    <div className="overview-content">
                        <h4>{t('transportService.common.serviceDetails')}</h4>
                        <div className="specifications">
                           <p>{t('transportService.common.serviceOverview').replace('{service}', service.title)}</p>
                            {Object.keys(service.specifications).length > 0 && (
                                <div className="specs-grid">
                                    {Object.entries(service.specifications).map(([key, value]) => (
                                        <div key={key} className="spec-item">
                                            <span className="spec-label">{t(`transportService.specifications.${key}`)}</span>
                                            <span className="spec-value">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="features-section">
                    <h4>{t('transportService.common.featuresTitle')}</h4>
                    <div className="features-grid">
                        {service.features.map((feature, idx) => (
                            <div key={idx} className="feature-item">
                                <i className="fas fa-check-circle"></i>
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="process-section">
                    <h4>{t('transportService.common.processTitle')}</h4>
                    <div className="process-timeline">
                        {service.process.map((step, idx) => (
                            <div key={idx} className="timeline-item">
                                <div className="timeline-marker" style={{ background: service.color }}>
                                    {step.step}
                                </div>
                                <div className="timeline-content">
                                    <h5>{step.title}</h5>
                                    <p>{step.description}</p>
                                </div>
                                {idx < service.process.length - 1 && (
                                    <div className="timeline-connector" style={{ background: service.color }}></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pricing-section">
                    <div className="pricing-cards">
                        <div className="pricing-card">
                            <div className="pricing-header">
                                <div className="pricing-icon" style={{ background: service.color }}>
                                    <i className="fas fa-truck"></i>
                                </div>
                                <h5>{service.pricing.basic.name}</h5>
                                <div className="price">{service.pricing.basic.price}</div>
                            </div>
                            <ul className="pricing-features">
                                {service.pricing.basic.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <i className="fas fa-check"></i>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button
                                className="order-btn"
                                style={{ 
                                    background: service.gradient,
                                    '--hover-color': service.color 
                                }}
                                onClick={() => {
                                    window.open("https://play.google.com/store/apps/details?id=com.pickum.delivery", "_blank");
                                }}
                            >
                                <span>{t('transportService.common.orderNow')}</span>
                                <i className={`fas fa-arrow-${currentLanguage === 'ar' ? 'left' : 'right'}`}></i>
                            </button>
                        </div>

                        <div className="pricing-card premium">
                            <div className="popular-badge" style={{ background: service.gradient }}>
                                {t('transportService.common.mostPopular')}
                            </div>
                            <div className="pricing-header">
                                <div className="pricing-icon premium" style={{ background: service.gradient }}>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h5>{service.pricing.premium.name}</h5>
                                <div className="price">{service.pricing.premium.price}</div>
                            </div>
                            <ul className="pricing-features">
                                {service.pricing.premium.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <i className="fas fa-check"></i>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button
                                className="order-btn premium-btn"
                                style={{ 
                                    background: service.gradient,
                                    '--hover-color': service.color
                                }}
                                onClick={() => {
                                    window.open("https://play.google.com/store/apps/details?id=com.pickum.delivery", "_blank");
                                }}
                            >
                                <span>{t('transportService.common.orderNow')}</span>
                                <i className={`fas fa-arrow-${currentLanguage === 'ar' ? 'left' : 'right'}`}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section id="transport-service" className={`service-detail-section ${isVisible ? 'visible' : ''}`} dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}>
            <div className="container">
                {/* الخطوة 4: استخدام دالة تغيير اللغة من السياق */}
                <div className="language-toggle">
                    <button 
                        onClick={() => changeLanguage(currentLanguage === 'ar' ? 'en' : 'ar')}
                        className="lang-btn"
                    >
                        {currentLanguage === 'ar' ? 'English' : 'العربية'}
                    </button>
                </div>

                <div className="page-header reveal">
                    <div className="breadcrumb">
                        {/* الخطوة 5: التأكد من أن مفاتيح الترجمة كاملة وصحيحة */}
                        <a href="/">{t('transportService.breadcrumb.home')}</a>
                        <i className={`fas fa-chevron-${currentLanguage === 'ar' ? 'left' : 'right'}`}></i>
                        <span>{t('transportService.breadcrumb.services')}</span>
                    </div>
                    <h1>{t('transportService.pageTitle')}</h1>
                    <p className="page-description">
                        {t('transportService.pageDescription')}
                    </p>
                </div>

                <div className="service-navigation reveal-scale">
                    {services.map((service, index) => (
                        <button
                            key={service.id}
                            className={`service-nav-btn ${activeService === index ? 'active' : ''}`}
                            onClick={() => setActiveService(index)}
                            style={{ '--service-color': service.color }}
                        >
                            <i className={service.icon}></i>
                            <span>{service.title}</span>
                        </button>
                    ))}
                </div>

                <div className="services-container reveal">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            isActive={activeService === index}
                        />
                    ))}
                </div>
            </div>

            <style>{`
                /* ... لم يتم تغيير أي شيء في CSS ... */
                .service-detail-section {
                    min-height: 100vh;
                    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                    padding: 100px 0 60px;
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.8s ease;
                }

                .service-detail-section.visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                }

                .language-toggle {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    z-index: 1000;
                }

                .lang-btn {
                    padding: 10px 20px;
                    background: linear-gradient(135deg, #1e5631 0%, #2a7d46 100%);
                    color: white;
                    border: none;
                    border-radius: 25px;
                    cursor: pointer;
                    font-size: 1rem;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(30, 86, 49, 0.3);
                }

                .lang-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(30, 86, 49, 0.4);
                }

                .page-header {
                    text-align: center;
                    margin-bottom: 60px;
                }

                .breadcrumb {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    margin-bottom: 20px;
                    font-size: 0.9rem;
                    color: #666;
                }

                .breadcrumb a {
                    color: #1e5631;
                    text-decoration: none;
                    transition: color 0.3s;
                }

                .breadcrumb a:hover {
                    color: #a4de02;
                }

                .page-header h1 {
                    font-size: 3rem;
                    font-weight: 700;
                    color: #1e5631;
                    margin-bottom: 15px;
                }

                .page-description {
                    font-size: 1.2rem;
                    color: #666;
                    max-width: 800px;
                    margin: 0 auto;
                }

                .service-navigation {
                    display: flex;
                    gap: 15px;
                    justify-content: center;
                    margin-bottom: 40px;
                    flex-wrap: wrap;
                }

                .service-nav-btn {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 15px 30px;
                    background: white;
                    border: 2px solid #e0e0e0;
                    border-radius: 50px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-size: 1rem;
                    font-weight: 600;
                    color: #333;
                }

                .service-nav-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                }

                .service-nav-btn.active {
                    background: var(--service-color);
                    color: white;
                    border-color: var(--service-color);
                    transform: scale(1.05);
                }

                .service-nav-btn i {
                    font-size: 1.2rem;
                }

                .services-container {
                    position: relative;
                    min-height: 600px;
                }

                .service-detail-card {
                    display: none;
                    background: white;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
                    animation: fadeIn 0.5s ease;
                }

                .service-detail-card.active {
                    display: block;
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .card-header {
                    padding: 40px;
                    color: white;
                    display: flex;
                    align-items: center;
                    gap: 30px;
                }

                .service-icon-large {
                    width: 100px;
                    height: 100px;
                    background: rgba(255,255,255,0.2);
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 3rem;
                }

                .header-content h3 {
                    font-size: 2.5rem;
                    margin-bottom: 10px;
                }

                .header-content p {
                    font-size: 1.2rem;
                    opacity: 0.9;
                }

                .card-body {
                    padding: 40px;
                }

                .overview-section {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 40px;
                    margin-bottom: 60px;
                }

                .overview-image {
                    position: relative;
                    border-radius: 15px;
                    overflow: hidden;
                    height: 400px;
                }

                .overview-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .image-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.3);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.3s;
                }

                .overview-image:hover .image-overlay {
                    opacity: 1;
                }

                .play-icon {
                    width: 80px;
                    height: 80px;
                    background: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 2rem;
                    color: #1e5631;
                    cursor: pointer;
                }

                .overview-content h4 {
                    font-size: 1.8rem;
                    color: #1e5631;
                    margin-bottom: 20px;
                }

                .overview-content p {
                    color: #666;
                    line-height: 1.8;
                    margin-bottom: 20px;
                }

                .specs-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 15px;
                    margin-top: 20px;
                }

                .spec-item {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    padding: 15px;
                    background: #f8f9fa;
                    border-radius: 10px;
                }

                .spec-label {
                    font-size: 0.9rem;
                    color: #666;
                }

                .spec-value {
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: #1e5631;
                }

                .features-section {
                    margin-bottom: 60px;
                }

                .features-section h4 {
                    font-size: 1.8rem;
                    color: #1e5631;
                    margin-bottom: 30px;
                }

                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 20px;
                }

                .feature-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 15px;
                    padding: 20px;
                    background: #f8f9fa;
                    border-radius: 10px;
                    transition: transform 0.3s;
                }

                .feature-item:hover {
                    transform: translateX(-5px);
                }

                .feature-item i {
                    color: #a4de02;
                    font-size: 1.5rem;
                    flex-shrink: 0;
                    margin-top: 2px;
                }

                .feature-item span {
                    color: #333;
                    line-height: 1.6;
                }

                .process-section {
                    margin-bottom: 60px;
                }

                .process-section h4 {
                    font-size: 1.8rem;
                    color: #1e5631;
                    margin-bottom: 30px;
                }

                .process-timeline {
                    position: relative;
                    padding: 20px 0;
                }

                .timeline-item {
                    position: relative;
                    display: flex;
                    gap: 20px;
                    margin-bottom: 40px;
                }

                .timeline-marker {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 1.5rem;
                    font-weight: 700;
                    flex-shrink: 0;
                }

                .timeline-content {
                    flex: 1;
                    padding-top: 5px;
                }

                .timeline-content h5 {
                    font-size: 1.3rem;
                    color: #1e5631;
                    margin-bottom: 10px;
                }

                .timeline-content p {
                    color: #666;
                    line-height: 1.6;
                }

                .timeline-connector {
                    position: absolute;
                    left: 30px;
                    top: 60px;
                    width: 3px;
                    height: calc(100% - 60px);
                }

                .pricing-section h4 {
                    font-size: 1.8rem;
                    color: #1e5631;
                    margin-bottom: 30px;
                    text-align: center;
                }

                .pricing-cards {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 30px;
                }

                .pricing-card {
                    position: relative;
                    background: white;
                    border: 2px solid #e0e0e0;
                    border-radius: 15px;
                    padding: 40px 30px;
                    transition: all 0.3s;
                }

                .pricing-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 15px 40px rgba(0,0,0,0.1);
                }

                .pricing-card.premium {
                    border-color: #a4de02;
                    box-shadow: 0 10px 30px rgba(164,222,2,0.2);
                }

                .popular-badge {
                    position: absolute;
                    top: -15px;
                    left: 50%;
                    transform: translateX(-50%);
                    padding: 8px 20px;
                    border-radius: 20px;
                    color: white;
                    font-weight: 600;
                    font-size: 0.9rem;
                }

                .pricing-header {
                    text-align: center;
                    margin-bottom: 30px;
                }

                .pricing-icon {
                    width: 80px;
                    height: 80px;
                    margin: 0 auto 20px;
                    border-radius: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 2rem;
                }

                .pricing-icon.premium {
                    animation: pulse 2s infinite;
                }

                @keyframes pulse {
                    0%, 100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.05);
                    }
                }

                .pricing-header h5 {
                    font-size: 1.5rem;
                    color: #1e5631;
                    margin-bottom: 15px;
                }

                .price {
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: #a4de02;
                }

                .pricing-features {
                    list-style: none;
                    margin-bottom: 30px;
                }

                .pricing-features li {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 12px 0;
                    border-bottom: 1px solid #f0f0f0;
                    color: #666;
                }

                .pricing-features li:last-child {
                    border-bottom: none;
                }

                .pricing-features i {
                    color: #a4de02;
                }

                .order-btn {
                    width: 100%;
                    padding: 15px;
                    border: none;
                    border-radius: 10px;
                    color: white;
                    font-size: 1.1rem;
                    font-weight: 600;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    transition: all 0.3s;
                }

                .order-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
                }

                .reveal {
                    animation: revealUp 0.8s ease forwards;
                }

                .reveal-scale {
                    animation: revealScale 0.6s ease forwards;
                }

                @keyframes revealUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes revealScale {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                @media (max-width: 768px) {
                    .service-detail-section {
                        padding: 80px 0 40px;
                    }

                    .page-header h1 {
                        font-size: 2rem;
                    }

                    .page-description {
                        font-size: 1rem;
                    }

                    .service-navigation {
                        gap: 10px;
                    }

                    .service-nav-btn {
                        padding: 12px 20px;
                        font-size: 0.9rem;
                    }

                    .card-header {
                        flex-direction: column;
                        text-align: center;
                        padding: 30px 20px;
                    }

                    .service-icon-large {
                        width: 80px;
                        height: 80px;
                        font-size: 2.5rem;
                    }

                    .header-content h3 {
                        font-size: 1.8rem;
                    }

                    .header-content p {
                        font-size: 1rem;
                    }

                    .card-body {
                        padding: 20px;
                    }

                    .overview-section {
                        grid-template-columns: 1fr;
                        gap: 30px;
                    }

                    .overview-image {
                        height: 250px;
                    }

                    .specs-grid {
                        grid-template-columns: 1fr;
                    }

                    .features-grid {
                        grid-template-columns: 1fr;
                    }

                    .pricing-cards {
                        grid-template-columns: 1fr;
                    }

                    .timeline-marker {
                        width: 50px;
                        height: 50px;
                        font-size: 1.2rem;
                    }

                    .timeline-connector {
                        left: 25px;
                        top: 50px;
                    }

                    .language-toggle {
                        top: 10px;
                        right: 10px;
                    }

                    .lang-btn {
                        padding: 8px 16px;
                        font-size: 0.9rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default TransportService;