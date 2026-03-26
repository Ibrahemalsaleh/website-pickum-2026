import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import './HomeService.css';

const HomeService = () => {
    const navigate = useNavigate();
    const { t, language } = useLanguage();
    const [activeService, setActiveService] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const services = [
        {
            id: 'gas-delivery',
            title: t('homeService.services.gasDelivery.title'),
            description: t('homeService.services.gasDelivery.description'),
            icon: "fas fa-fire",
            color: "#ff6b35",
            gradient: "linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)",
            features: t('homeService.services.gasDelivery.features'),
            process: t('homeService.services.gasDelivery.process'),
            pricing: {
                basic: {
                    name: t('homeService.services.gasDelivery.pricing.basic.name'),
                    price: t('homeService.services.gasDelivery.pricing.basic.price'),
                    features: t('homeService.services.gasDelivery.pricing.basic.features')
                },
                premium: {
                    name: t('homeService.services.gasDelivery.pricing.premium.name'),
                    price: t('homeService.services.gasDelivery.pricing.premium.price'),
                    features: t('homeService.services.gasDelivery.pricing.premium.features'),
                    isPopular: true
                }
            },
            image: "https://mimg6cdn.haraj.com.sa/userfiles30/2025-09-21/730x730_30F196DA-C466-4181-975E-4EFAA174999F.jpg"
        },
        {
            id: 'water-delivery',
            title: t('homeService.services.waterDelivery.title'),
            description: t('homeService.services.waterDelivery.description'),
            icon: "fas fa-tint",
            color: "#4fc3f7",
            gradient: "linear-gradient(135deg, #4fc3f7 0%, #29b6f6 100%)",
            features: t('homeService.services.waterDelivery.features'),
            process: t('homeService.services.waterDelivery.process'),
            pricing: {
                basic: {
                    name: t('homeService.services.waterDelivery.pricing.basic.name'),
                    price: t('homeService.services.waterDelivery.pricing.basic.price'),
                    features: t('homeService.services.waterDelivery.pricing.basic.features')
                },
                premium: {
                    name: t('homeService.services.waterDelivery.pricing.premium.name'),
                    price: t('homeService.services.waterDelivery.pricing.premium.price'),
                    features: t('homeService.services.waterDelivery.pricing.premium.features'),
                    isPopular: true
                },
                premium1: {
                    name: t('homeService.services.waterDelivery.pricing.premium1.name'),
                    price: t('homeService.services.waterDelivery.pricing.premium1.price'),
                    features: t('homeService.services.waterDelivery.pricing.premium1.features'),
                    isPopular: true
                }
            },
            image: "https://assets.kenzz.com/processed/104582/001_1bottle_1200.webp"
        }
    ];

    const ServiceCard = ({ service, isActive }) => (
        <div className={`service-detail-card ${isActive ? 'active' : ''} ${isVisible ? 'visible' : ''}`}>
            <div className="card-header" style={{ background: service.gradient }}>
                <div className="header-background-pattern"></div>
                <div className="service-icon-large">
                    <i className={service.icon}></i>
                </div>
                <div className="header-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </div>
                <div className="header-image">
                    <img src={service.image} alt={service.title} />
                </div>
            </div>

            <div className="card-body">
                <div className="features-section">
                    <div className="section-header">
                        <h4>{t('homeService.common.featuresTitle')}</h4>
                        <div className="section-divider" style={{ background: service.color }}></div>
                    </div>
                    <div className="features-grid">
                        {service.features.map((feature, idx) => (
                            <div key={idx} className="feature-item" style={{ '--delay': `${idx * 0.1}s` }}>
                                <div className="feature-icon">
                                    <i className="fas fa-check-circle" style={{ color: service.color }}></i>
                                </div>
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="process-section">
                    <div className="section-header">
                        <h4>{t('homeService.common.howItWorks')}</h4>
                        <div className="section-divider" style={{ background: service.color }}></div>
                    </div>
                    <div className="process-timeline">
                        {service.process.map((step, idx) => (
                            <div key={idx} className="timeline-item" style={{ '--delay': `${idx * 0.2}s` }}>
                                <div className="timeline-connector"></div>
                                <div className="timeline-marker" style={{ background: service.gradient }}>
                                    <span>{step.step}</span>
                                </div>
                                <div className="timeline-content">
                                    <h5>{step.title}</h5>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pricing-section">
                    <div className="section-header">
                        <h4>{t('homeService.common.pricingTitle')}</h4>
                        <div className="section-divider" style={{ background: service.color }}></div>
                    </div>
                    <div className="pricing-cards">
                        {Object.keys(service.pricing).map((planKey, idx) => {
                            const plan = service.pricing[planKey];
                            const isPremium = plan.isPopular || planKey !== 'basic';

                            return (
                                <div
                                    key={planKey}
                                    className={`pricing-card ${isPremium ? 'premium' : ''}`}
                                    style={{ '--delay': `${(idx * 0.2) + 0.1}s` }}
                                >
                                    {isPremium && (
                                        <div className="popular-badge" style={{ background: service.gradient }}>
                                            <i className="fas fa-crown"></i>
                                            {t('homeService.common.mostPopular')}
                                        </div>
                                    )}
                                    <div className="pricing-header">
                                        <h5>{plan.name}</h5>
                                        <div className="price" style={{ color: service.color }}>
                                            {plan.price}
                                        </div>
                                    </div>
                                    <ul className="pricing-features">
                                        {plan.features.map((feature, featureIdx) => (
                                            <li key={featureIdx}>
                                                <i className="fas fa-check" style={{ color: service.color }}></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        className={`order-btn ${isPremium ? 'premium-btn' : ''}`}
                                        style={{
                                            background: service.gradient,
                                            '--hover-color': service.color
                                        }}
                                        onClick={() => {
                                            window.open("https://play.google.com/store/apps/details?id=com.pickum.delivery", "_blank");
                                        }}
                                    >
                                        <span>{t('homeService.common.orderNow')}</span>
                                        <i className={`fas fa-arrow-${language === 'ar' ? 'left' : 'right'}`}></i>
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section id="home-service" className="service-detail-section">
            <div className="container">
                <div className={`page-header ${isVisible ? 'reveal' : ''}`}>
                    <div className="breadcrumb">
                        <button onClick={() => navigate('/')} className="breadcrumb-link">
                            <i className="fas fa-home"></i>
                            {t('homeService.breadcrumb.home')}
                        </button>
                        <i className={`fas fa-chevron-${language === 'ar' ? 'left' : 'right'} separator`}></i>
                        <span className="current-page">{t('homeService.breadcrumb.services')}</span>
                    </div>
                    <h1 className="page-title">{t('homeService.pageTitle')}</h1>
                    <p className="page-description">
                        {t('homeService.pageDescription')}
                    </p>
                </div>

                <div className="service-navigation">
                    {services.map((service, index) => (
                        <button
                            key={service.id}
                            className={`service-nav-btn ${activeService === index ? 'active' : ''}`}
                            onClick={() => setActiveService(index)}
                            style={{
                                '--service-color': service.color,
                                '--service-gradient': service.gradient,
                                '--delay': `${index * 0.1}s`
                            }}
                        >
                            <div className="nav-btn-background"></div>
                            <div className="nav-btn-content">
                                <i className={service.icon}></i>
                                <span>{service.title.split(' ').slice(language === 'ar' ? 1 : 0, language === 'ar' ? 3 : 2).join(' ')}</span>
                            </div>
                        </button>
                    ))}
                </div>

                <div className="services-container">
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

export default HomeService;