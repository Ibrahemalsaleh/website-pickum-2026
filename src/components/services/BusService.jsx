import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const BusService = () => {
    const { t } = useLanguage();
    const [activeService, setActiveService] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 300);
        return () => clearTimeout(timer);
    }, []);

    const services = [
        {
            id: 'heavy-cargo',
            title: "نقل البضائع الثقيلة",
            description: "خدمة متخصصة لنقل البضائع الثقيلة والكبيرة الحجم باستخدام باصات مجهزة خصيصاً لضمان النقل الآمن",
            icon: "fas fa-truck-loading",
            color: "#f44336",
            gradient: "linear-gradient(135deg, #f44336 0%, #ff7043 100%)",
            features: [
                "باصات مجهزة خصيصاً للأحمال الثقيلة",
                "نقل آمن مع ضمانات شاملة",
                "تتبع مباشر طوال الرحلة",
                "خدمة سريعة ومنتظمة",
                "معدات رفع وتحميل متطورة",
                "فريق فني متخصص ومدرب"
            ],
            process: [
                {
                    step: "1",
                    title: "التقييم والمعاينة",
                    description: "نقوم بمعاينة البضائع وتحديد نوع الباص المناسب"
                },
                {
                    step: "2",
                    title: "التجهيز والإعداد",
                    description: "نجهز الباص والمعدات اللازمة للنقل"
                },
                {
                    step: "3",
                    title: "التحميل الآمن",
                    description: "نحمل البضائع بعناية باستخدام معدات متخصصة"
                },
                {
                    step: "4",
                    title: "النقل والتسليم",
                    description: "ننقل البضائع بأمان ونسلمها في الموقع المحدد"
                }
            ],
            pricing: {
                basic: {
                    name: "نقل محلي",
                    price: "150-300 دينار",
                    features: ["باص مخصص", "تحميل وتفريغ", "تأمين أساسي", "مسافة محدودة"]
                },
                premium: {
                    name: "نقل متكامل",
                    price: "400-600 دينار",
                    features: ["باص مجهز كاملاً", "معدات رفع متطورة", "تأمين شامل", "مسافات طويلة", "فريق متخصص"]
                }
            },
            specifications: {
                capacity: "حتى 15 طن",
                size: "12 متر طول",
                coverage: "جميع المحافظات",
                equipment: "رافعة هيدروليكية"
            },
            image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop"
        },
        {
            id: 'medium-cargo',
            title: "نقل البضائع المتوسطة",
            description: "نقل البضائع متوسطة الحجم بكفاءة عالية وأمان تام مع توفير مساحة تخزين واسعة ومرنة",
            icon: "fas fa-boxes",
            color: "#ff9800",
            gradient: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)",
            features: [
                "مساحة تخزين واسعة ومرنة",
                "حماية متقدمة للبضائع",
                "مواعيد دقيقة ومنتظمة",
                "أسعار تنافسية ومدروسة",
                "تنظيم ذكي للشحن",
                "خدمة تتبع متطورة"
            ],
            process: [
                {
                    step: "1",
                    title: "حجز المساحة",
                    description: "احجز المساحة المناسبة لبضائعك"
                },
                {
                    step: "2",
                    title: "تنظيم الشحن",
                    description: "ننظم البضائع بطريقة ذكية ومحكمة"
                },
                {
                    step: "3",
                    title: "النقل المنظم",
                    description: "ننقل البضائع وفق جدولة محكمة"
                },
                {
                    step: "4",
                    title: "التسليم المرن",
                    description: "نسلم البضائع حسب المواعيد المتفق عليها"
                }
            ],
            pricing: {
                basic: {
                    name: "نقل منتظم",
                    price: "80-150 دينار",
                    features: ["مساحة محدودة", "جدولة عادية", "تأمين أساسي", "خدمة قياسية"]
                },
                premium: {
                    name: "نقل مخصص",
                    price: "200-300 دينار",
                    features: ["مساحة مرنة", "جدولة مخصصة", "تأمين شامل", "خدمة متميزة", "أولوية عالية"]
                }
            },
            specifications: {
                capacity: "حتى 8 طن",
                size: "8 متر طول",
                coverage: "المنطقة المحلية",
                equipment: "نظام تثبيت متطور"
            },
            image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop"
        },
        {
            id: 'express-transport',
            title: "النقل السريع",
            description: "خدمة النقل السريع للبضائع العاجلة بأقل وقت ممكن مع ضمان الوصول في المواعيد المحددة",
            icon: "fas fa-shipping-fast",
            color: "#4caf50",
            gradient: "linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)",
            features: [
                "توصيل عاجل خلال ساعات",
                "خدمة 24/7 للحالات الطارئة",
                "فريق محترف ومدرب جيداً",
                "تأمين شامل ضد جميع المخاطر",
                "أولوية قصوى في النقل",
                "تتبع فوري ومباشر"
            ],
            process: [
                {
                    step: "1",
                    title: "طلب فوري",
                    description: "اطلب الخدمة فوراً عبر التطبيق أو الهاتف"
                },
                {
                    step: "2",
                    title: "استجابة سريعة",
                    description: "نستجيب لطلبك خلال دقائق معدودة"
                },
                {
                    step: "3",
                    title: "نقل مباشر",
                    description: "ننقل البضائع مباشرة دون توقف"
                },
                {
                    step: "4",
                    title: "تسليم فوري",
                    description: "نسلم البضائع في أسرع وقت ممكن"
                }
            ],
            pricing: {
                basic: {
                    name: "نقل سريع",
                    price: "50-100 دينار",
                    features: ["نقل مباشر", "خلال 6 ساعات", "تأمين أساسي", "تتبع مباشر"]
                },
                premium: {
                    name: "نقل فوري",
                    price: "120-200 دينار",
                    features: ["نقل فوري", "خلال 2-3 ساعات", "تأمين شامل", "أولوية قصوى", "خدمة VIP"]
                }
            },
            specifications: {
                capacity: "حتى 5 طن",
                size: "6 متر طول",
                coverage: "تغطية شاملة",
                equipment: "نظام GPS متطور"
            },
            image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop"
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
                <div className="service-badge">
                    <span>خدمة باصات متخصصة</span>
                </div>
            </div>

            <div className="card-body">
                {/* Service Overview */}
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
                        <h4>نظرة عامة على الخدمة</h4>
                        <p>نحن نقدم {service.title} بأعلى معايير الجودة والاحترافية. خدماتنا مصممة لتلبية جميع احتياجاتكم بكفاءة عالية وأسعار تنافسية.</p>
                        
                        {/* Specifications */}
                        <div className="specifications">
                            <h5>المواصفات التقنية</h5>
                            <div className="specs-grid">
                                {Object.entries(service.specifications).map(([key, value], idx) => (
                                    <div key={idx} className="spec-item">
                                        <span className="spec-label">
                                            {key === 'capacity' && 'السعة القصوى'}
                                            {key === 'size' && 'الحجم'}
                                            {key === 'coverage' && 'التغطية'}
                                            {key === 'equipment' && 'المعدات'}
                                        </span>
                                        <span className="spec-value">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="quick-stats">
                            <div className="stat">
                                <span className="stat-number">500+</span>
                                <span className="stat-label">عميل راض</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">24/7</span>
                                <span className="stat-label">خدمة مستمرة</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">5★</span>
                                <span className="stat-label">تقييم العملاء</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="features-section">
                    <h4>مميزات الخدمة</h4>
                    <div className="features-grid">
                        {service.features.map((feature, idx) => (
                            <div key={idx} className="feature-item">
                                <i className="fas fa-check-circle"></i>
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Process Section */}
                <div className="process-section">
                    <h4>خطوات تنفيذ الخدمة</h4>
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

                {/* Pricing Section */}
                <div className="pricing-section">
                    <h4>خطط الأسعار</h4>
                    <div className="pricing-cards">
                        <div className="pricing-card basic">
                            <div className="pricing-header">
                                <div className="pricing-icon" style={{ background: service.color }}>
                                    <i className="fas fa-bus"></i>
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
                            <button className="order-btn basic" style={{ borderColor: service.color, color: service.color }}>
                                طلب عرض سعر
                            </button>
                        </div>

                        <div className="pricing-card premium">
                            <div className="popular-badge" style={{ background: service.gradient }}>الأكثر طلباً</div>
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
                            <button className="order-btn premium" style={{ background: service.gradient }}>
                                طلب الخدمة المتقدمة
                            </button>
                        </div>
                    </div>
                </div>

                {/* Equipment Section */}
                <div className="equipment-section">
                    <h4>المعدات والباصات</h4>
                    <div className="equipment-grid">
                        <div className="equipment-item">
                            <i className="fas fa-truck"></i>
                            <h6>باصات حديثة</h6>
                            <p>أسطول من الباصات الحديثة والمجهزة بأحدث التقنيات</p>
                        </div>
                        <div className="equipment-item">
                            <i className="fas fa-cogs"></i>
                            <h6>معدات رفع</h6>
                            <p>رافعات هيدروليكية ومعدات رفع متطورة</p>
                        </div>
                        <div className="equipment-item">
                            <i className="fas fa-satellite-dish"></i>
                            <h6>نظام تتبع</h6>
                            <p>أنظمة GPS متطورة لتتبع الشحنات</p>
                        </div>
                        <div className="equipment-item">
                            <i className="fas fa-shield-alt"></i>
                            <h6>أنظمة أمان</h6>
                            <p>أنظمة أمان متقدمة لحماية البضائع</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section id="bus-service" className={`service-detail-section ${isVisible ? 'visible' : ''}`}>
            <div className="container">
                {/* Enhanced Page Header */}
                <div className="page-header reveal">
                    <div className="breadcrumb">
                        <a href="/">الرئيسية</a>
                        <i className="fas fa-chevron-left"></i>
                        <span>خدمات النقل بالباصات</span>
                    </div>
                    <h1>{t('services.card5.title')}</h1>
                    <p className="page-description">
                        {t('services.card5.p')} - خدمات نقل متخصصة بباصات مجهزة لجميع أنواع البضائع
                    </p>
                </div>

                {/* Service Navigation */}
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

                {/* Service Cards */}
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

                {/* Fleet Information */}
                <div className="fleet-section reveal">
                    <div className="fleet-card">
                        <div className="fleet-header">
                            <i className="fas fa-truck-moving"></i>
                            <h3>أسطولنا من الباصات</h3>
                        </div>
                        <p>نمتلك أسطولاً حديثاً من الباصات المتخصصة في نقل البضائع بجميع أنواعها</p>
                        <div className="fleet-stats">
                            <div className="fleet-stat">
                                <span className="stat-number">25+</span>
                                <span className="stat-label">باص متخصص</span>
                            </div>
                            <div className="fleet-stat">
                                <span className="stat-number">15</span>
                                <span className="stat-label">طن حمولة قصوى</span>
                            </div>
                            <div className="fleet-stat">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">معدل الوصول</span>
                            </div>
                        </div>
                        <div className="fleet-features">
                            <div className="fleet-feature">
                                <i className="fas fa-calendar-check"></i>
                                <span>صيانة دورية منتظمة</span>
                            </div>
                            <div className="fleet-feature">
                                <i className="fas fa-gas-pump"></i>
                                <span>استهلاك وقود اقتصادي</span>
                            </div>
                            <div className="fleet-feature">
                                <i className="fas fa-leaf"></i>
                                <span>صديق للبيئة</span>
                            </div>
                            <div className="fleet-feature">
                                <i className="fas fa-award"></i>
                                <span>معايير عالمية</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Emergency Service */}
                <div className="emergency-section reveal">
                    <div className="emergency-card">
                        <div className="emergency-header">
                            <i className="fas fa-exclamation-triangle"></i>
                            <h3>خدمة الطوارئ</h3>
                        </div>
                        <p>نحن متاحون على مدار الساعة لخدمة الطوارئ ونقل البضائع العاجلة</p>
                        <div className="emergency-contact">
                            <a href="tel:00962781068132" className="emergency-btn">
                                <i className="fas fa-phone"></i>
                                اتصال طوارئ: 00962781068132
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusService;