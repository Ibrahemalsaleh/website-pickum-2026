import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const GeneralService = () => {
    const { t, language } = useLanguage();
    const [activeService, setActiveService] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 300);
        return () => clearTimeout(timer);
    }, []);

    const services = [
        {
            id: 'septic-tanks',
            title: t('generalService.services.septicTanks.title'),
            description: t('generalService.services.septicTanks.description'),
            icon: "fas fa-truck-moving",
            color: "#bc9347ff",
            gradient: "linear-gradient(135deg, #aaa124ff 0%, #bc9347ff 100%)",
            features: t('generalService.services.septicTanks.features'),
            process: t('generalService.services.septicTanks.process'),
            pricing: {
                basic: {
                    name: t('generalService.services.septicTanks.pricing.basic.name'),
                    price: t('generalService.services.septicTanks.pricing.basic.price'),
                    features: t('generalService.services.septicTanks.pricing.basic.features')
                },
                premium: {
                    name: t('generalService.services.septicTanks.pricing.premium.name'),
                    price: t('generalService.services.septicTanks.pricing.premium.price'),
                    features: t('generalService.services.septicTanks.pricing.premium.features')
                }
            },
            image: "https://nazindustries.ae/wp-content/uploads/2024/11/Vacuum-Tank.webp"
        },
        {
            id: 'water-tanks',
            title: t('generalService.services.waterTanks.title'),
            description: t('generalService.services.waterTanks.description'),
            icon: "fas fa-water",
            color: "#1976d2",
            gradient: "linear-gradient(135deg, #1976d2 0%, #1e88e5 100%)",
            features: t('generalService.services.waterTanks.features'),
            process: t('generalService.services.waterTanks.process'),
            pricing: {
                basic: {
                    name: t('generalService.services.waterTanks.pricing.basic.name'),
                    price: t('generalService.services.waterTanks.pricing.basic.price') || '',
                    features: t('generalService.services.waterTanks.pricing.basic.features')
                },
                premium: {
                    name: t('generalService.services.waterTanks.pricing.premium.name'),
                    price: t('generalService.services.waterTanks.pricing.premium.price'),
                    features: t('generalService.services.waterTanks.pricing.premium.features')
                }
            },
            image: "https://s.alicdn.com/@sc04/kf/H960e3b9957d54b03970c25d5bc21afadf/Hot-Sale-Howo-Oil-Transportation-Fuel-StorageTankers-Trucks-8000-10000-Liter-Water-Tanker-Trucks-for-Sale.jpg"
        },
        {
            id: 'fuel-delivery',
            title: t('generalService.services.fuelDelivery.title'),
            description: t('generalService.services.fuelDelivery.description'),
            icon: "fas fa-gas-pump",
            color: "green",
            gradient: "linear-gradient(135deg, green 0%, green 100%)",
            features: t('generalService.services.fuelDelivery.features'),
            process: t('generalService.services.fuelDelivery.process'),
            pricing: {
                basic: {
                    name: t('generalService.services.fuelDelivery.pricing.basic.name'),
                    price: t('generalService.services.fuelDelivery.pricing.basic.price') || '',
                    features: t('generalService.services.fuelDelivery.pricing.basic.features')
                },
                premium: {
                    name: t('generalService.services.fuelDelivery.pricing.premium.name'),
                    price: t('generalService.services.fuelDelivery.pricing.premium.price'),
                    features: t('generalService.services.fuelDelivery.pricing.premium.features')
                }
            },
            image: "https://www.jppmc.jo/ar/image/homepage/Transport_cover.jpg"
        }
    ];

    const ServiceCard = ({ service, index, isActive }) => (
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
                        <h4>{t('generalService.common.overviewTitle')}</h4>
                        <p>
                            {t('generalService.common.overviewDescription').replace('{service}', service.title)}
                        </p>
                    </div>
                </div>

                <div className="features-section">
                    <h4>{t('generalService.common.featuresTitle')}</h4>
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
                    <h4>{t('generalService.common.processTitle')}</h4>
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
                                {idx < service.process.length - 1 && <div className="timeline-connector"></div>}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pricing-section">
                    <div className="pricing-cards">
                        <div className="pricing-card">
                            <div className="pricing-header">
                                <div className="pricing-icon" style={{ background: service.color }}>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h5>{service.pricing.basic.name}</h5>
                                {service.pricing.basic.price && (
                                    <div className="price">{service.pricing.basic.price}</div>
                                )}
                            </div>
                            {service.pricing.basic.features.length > 0 && (
                                <ul className="pricing-features">
                                    {service.pricing.basic.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <i className="fas fa-check"></i>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            )}
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
                                <span>{t('generalService.common.orderNow')}</span>
                                <i className={`fas fa-arrow-${language === 'ar' ? 'left' : 'right'}`}></i>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

    return (
        <section id="general-service" className={`service-detail-section ${isVisible ? 'visible' : ''}`}>
            <div className="container">
                <div className="page-header reveal">
                    <div className="breadcrumb">
                        <a href="/">{t('generalService.breadcrumb.home')}</a>
                        <i className={`fas fa-chevron-${language === 'ar' ? 'left' : 'right'}`}></i>
                        <span>{t('generalService.breadcrumb.services')}</span>
                    </div>
                    <h1>{t('generalService.pageTitle')}</h1>
                    <p className="page-description">
                        {t('generalService.pageDescription')}
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
                            <span>{service.title.split(' ').slice(language === 'ar' ? 1 : 0).join(' ')}</span>
                        </button>
                    ))}
                </div>

                <div className="services-container reveal">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            index={index}
                            isActive={activeService === index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GeneralService;