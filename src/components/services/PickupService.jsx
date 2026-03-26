import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const PickupService = () => {
    // جلب كل ما نحتاجه من السياق
    const { t, translations, language } = useLanguage();
    const [activeService, setActiveService] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 300);
        return () => clearTimeout(timer);
    }, []);
    
    // سحب بيانات الخدمات من ملف الترجمة بناءً على اللغة الحالية
    const servicesData = translations.pickupServicePage.services;

    // بناء مصفوفة الخدمات مع دمج البيانات الثابتة (أيقونات، صور) مع النصوص المترجمة
    const services = [
        {
            id: 'small-packages',
            title: servicesData.smallPackages.title,
            description: servicesData.smallPackages.description,
            icon: "fas fa-box",
            color: "#c7ccceff",
            gradient: "linear-gradient(135deg, #c7ccceff 0%, #c7ccceff 100%)",
            features: servicesData.smallPackages.features,
            process: servicesData.smallPackages.process,
            pricing: servicesData.smallPackages.pricing,
            specifications: servicesData.smallPackages.specifications,
            image: "https://ar.semautomobile.com/uploads/202338980/changan-1-5t-mini-cargo-truck-light-truck7e59f955-f477-4578-8c70-57b586e4a2b9.jpg"
        },
        {
            id: 'furniture-moving',
            title: servicesData.furnitureMoving.title,
            description: servicesData.furnitureMoving.description,
            icon: "fas fa-couch",
            color: "#c7ccceff",
            gradient: "linear-gradient(135deg, #c7ccceff, #c7ccceff 100%)",
            features: servicesData.furnitureMoving.features,
            process: servicesData.furnitureMoving.process,
            pricing: servicesData.furnitureMoving.pricing,
            specifications: servicesData.furnitureMoving.specifications,
            image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgv9r9_T62eGIDpPmrohMKwK7H8eCQpoSISaSBHbL3vMxpjZ-oiI2jV5wkkNDorAUpIvMGX7OUvEBaQhSkWDRsfkeY75Y8RQcL8dXojzV_OHAu8qaLeS53wM5VdC_lu7bM_HhQDcGgeCbYW/s1600/%25D9%2586%25D9%2582%25D9%2584+%25D8%25B9%25D9%2581%25D8%25B4+%25D8%25A7%25D9%2584%25D8%25B9%25D8%25A7%25D9%2584%25D9%2585%25D9%258A%25D8%25A9.jpg"
        },
        {
            id: 'commercial-transport',
            title: servicesData.commercialTransport.title,
            description: servicesData.commercialTransport.description,
            icon: "fas fa-store",
            color: "red",
            gradient: "linear-gradient(135deg, red 0%, red 100%)",
            features: servicesData.commercialTransport.features,
            process: servicesData.commercialTransport.process,
            pricing: servicesData.commercialTransport.pricing,
            specifications: servicesData.commercialTransport.specifications,
            image: "https://rightway-logistics.com/wp-content/uploads/elementor/thumbs/%D9%83%D9%8A%D9%81-%D9%86%D8%B9%D9%85%D9%84-2-scaled-q83cd0pzrkt9prjrbas6hxmuwz1ngv4lh2xk8c7kjc.jpg"
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
                        <h4>{t('pickupServicePage.common.serviceDetails')}</h4>
                        <div className="specifications">
                            <p>{t('pickupServicePage.common.serviceOverview').replace('{service}', service.title)}</p>
                            <div className="specs-grid">
                                {Object.entries(service.specifications).map(([key, value]) => (
                                    <div key={key} className="spec-item">
                                        <span className="spec-label">
                                            {t(`pickupServicePage.specifications.${key}`)}
                                        </span>
                                        <span className="spec-value">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="features-section">
                    <h4>{t('pickupServicePage.common.featuresTitle')}</h4>
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
                    <h4>{t('pickupServicePage.common.processTitle')}</h4>
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
                     <h4>{t('pickupServicePage.common.pricingTitle')}</h4>
                    <div className="pricing-cards">
                        <div className="pricing-card">
                            <div className="pricing-header">
                                <div className="pricing-icon" style={{ background: service.color }}>
                                    <i className="fas fa-star"></i>
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
                                <span>{t('pickupServicePage.common.orderNow')}</span>
                                <i className={`fas fa-arrow-${language === 'ar' ? 'left' : 'right'}`}></i>
                            </button>
                        </div>
                        
                        <div className="pricing-card premium">
                            <div className="popular-badge" style={{ background: service.gradient }}>{t('pickupServicePage.common.mostPopular')}</div>
                            <div className="pricing-header">
                                <div className="pricing-icon premium" style={{ background: service.gradient }}>
                                    <i className="fas fa-crown"></i>
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
                                <span>{t('pickupServicePage.common.orderNow')}</span>
                                <i className={`fas fa-arrow-${language === 'ar' ? 'left' : 'right'}`}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section id="pickup-service" className={`service-detail-section ${isVisible ? 'visible' : ''}`}>
            <div className="container">
                <div className="page-header reveal">
                    <div className="breadcrumb">
                        <a href="/">{t('pickupServicePage.breadcrumb.home')}</a>
                        <i className={`fas fa-chevron-${language === 'ar' ? 'left' : 'right'}`}></i>
                        <span>{t('pickupServicePage.breadcrumb.services')}</span>
                    </div>
                    <h1>{t('pickupServicePage.pageTitle')}</h1>
                    <p className="page-description">
                        {t('pickupServicePage.pageDescription')}
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
        </section>
    );
};

export default PickupService;