import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { eqoContent } from '../context/eqoContent';
import heroImg from '../assets/eqo-go-app-1.jpg';
import driverImg from '../assets/eqo-go-app-2.jpg';
import '../styles/EqoGo.css';

const EqoGo = () => {
    const { language } = useLanguage();
    const c = eqoContent[language] || eqoContent.ar;
    const isRTL = language === 'ar';

    return (
        <div className={`eqo-page ${isRTL ? 'eqo-rtl' : 'eqo-ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Hero */}
            <section className="eqo-hero">
                <div className="eqo-wrap eqo-hero-grid">
                    <div className="eqo-hero-copy">
                        <span className="eqo-eyebrow">{c.hero.eyebrow}</span>
                        <h1>{c.hero.title}</h1>
                        <p className="eqo-lead">{c.hero.lead}</p>
                        <div className="eqo-pills">
                            {c.hero.pills.map((pill) => (
                                <span key={pill} className="eqo-pill">{pill}</span>
                            ))}
                        </div>
                        <a href="/#contact" className="eqo-btn">{c.cta.button}</a>
                    </div>
                    <div className="eqo-shot">
                        <img src={heroImg} alt={c.hero.imageAlt} loading="lazy" />
                    </div>
                </div>
            </section>

            {/* Stats strip */}
            <div className="eqo-strip">
                <div className="eqo-wrap eqo-strip-grid">
                    {c.stats.map((stat) => (
                        <div key={stat.label}>
                            <b>{stat.value}</b>
                            <small>{stat.label}</small>
                        </div>
                    ))}
                </div>
            </div>

            {/* About */}
            <section className="eqo-section">
                <div className="eqo-wrap eqo-two">
                    <div>
                        <h2>{c.about.title}</h2>
                        <p className="eqo-sub">{c.about.sub}</p>
                        {c.about.paragraphs.map((paragraph) => (
                            <p key={paragraph} className="eqo-para">{paragraph}</p>
                        ))}
                        <div className="eqo-values">
                            {c.about.values.map((value) => (
                                <span key={value}>{value}</span>
                            ))}
                        </div>
                    </div>
                    <div className="eqo-card eqo-card-primary">
                        <h3>{c.about.cardTitle}</h3>
                        <ul className="eqo-facts">
                            {c.about.cardRows.map(([label, value]) => (
                                <li key={label}>
                                    <b>{label}:</b> {value}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="eqo-section eqo-alt">
                <div className="eqo-wrap">
                    <h2>{c.vision.title}</h2>
                    <div className="eqo-vm">
                        <div className="eqo-vm-box eqo-vm-vision">
                            <h3>{c.vision.visionTitle}</h3>
                            <p>{c.vision.visionText}</p>
                            <small>{c.vision.visionSmall}</small>
                        </div>
                        <div className="eqo-vm-box eqo-vm-mission">
                            <h3>{c.vision.missionTitle}</h3>
                            <p>{c.vision.missionText}</p>
                            <small>{c.vision.missionSmall}</small>
                        </div>
                    </div>

                    <h3 className="eqo-subhead">{c.vision.futureTitle}</h3>
                    <div className="eqo-grid">
                        {c.vision.futureCards.map((card) => (
                            <div key={card.title} className={`eqo-card eqo-card-${card.accent}`}>
                                <h3>{card.title}</h3>
                                <p>{card.text}</p>
                            </div>
                        ))}
                    </div>

                    <h3 className="eqo-subhead">{c.vision.ambitionTitle}</h3>
                    <ul className="eqo-list">
                        {c.vision.ambitions.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>

                    <h3 className="eqo-subhead">{c.vision.missionCardsTitle}</h3>
                    <div className="eqo-grid">
                        {c.vision.missionCards.map((card) => (
                            <div key={card.title} className={`eqo-card eqo-card-${card.accent}`}>
                                <h3>{card.title}</h3>
                                <p>{card.text}</p>
                            </div>
                        ))}
                    </div>

                    <h3 className="eqo-subhead">{c.vision.promisesTitle}</h3>
                    <div className="eqo-grid eqo-grid-2">
                        {c.vision.promises.map((promise) => (
                            <div key={promise.title} className="eqo-card eqo-card-dark">
                                <h3>{promise.title}</h3>
                                <p>{promise.text}</p>
                            </div>
                        ))}
                    </div>

                    <h3 className="eqo-subhead">{c.vision.valuesTitle}</h3>
                    <div className="eqo-table-wrap">
                        <table className="eqo-table">
                            <tbody>
                                {c.vision.valuesTable.map(([value, meaning]) => (
                                    <tr key={value}>
                                        <td>{value}</td>
                                        <td className="eqo-td-muted">{meaning}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h3 className="eqo-subhead">{c.vision.rootsTitle}</h3>
                    <p className="eqo-sub eqo-roots">{c.vision.rootsText}</p>
                </div>
            </section>

            {/* Services */}
            <section className="eqo-section">
                <div className="eqo-wrap">
                    <h2>{c.services.title}</h2>
                    <p className="eqo-sub">{c.services.sub}</p>
                    <div className="eqo-grid">
                        {c.services.cards.map((card) => (
                            <div key={card.title} className={`eqo-card eqo-card-${card.accent}`}>
                                <h3>
                                    {card.title}
                                    <span className={`eqo-tag ${card.status === 'available' ? 'eqo-tag-on' : 'eqo-tag-dev'}`}>
                                        {card.status === 'available' ? c.services.available : c.services.dev}
                                    </span>
                                </h3>
                                <p>{card.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Rider app */}
            <section className="eqo-section eqo-alt">
                <div className="eqo-wrap">
                    <h2>{c.rider.title}</h2>
                    <p className="eqo-sub">{c.rider.sub}</p>
                    <ul className="eqo-list eqo-list-2">
                        {c.rider.items.map(([bold, text]) => (
                            <li key={bold}>
                                <b>{bold}:</b> {text}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Driver app */}
            <section className="eqo-section">
                <div className="eqo-wrap eqo-two eqo-flip">
                    <div>
                        <h2>{c.driver.title}</h2>
                        <p className="eqo-sub">{c.driver.sub}</p>
                        <ul className="eqo-list eqo-list-driver">
                            {c.driver.items.map(([bold, text]) => (
                                <li key={bold}>
                                    <b>{bold}:</b> {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="eqo-shot">
                        <img src={driverImg} alt={c.driver.imageAlt} loading="lazy" />
                    </div>
                </div>
            </section>

            {/* Goals */}
            <section className="eqo-section eqo-alt">
                <div className="eqo-wrap">
                    <h2>{c.goals.title}</h2>
                    <div className="eqo-goals">
                        {c.goals.items.map(([title, text], index) => (
                            <div key={title} className="eqo-goal">
                                <span className="eqo-goal-n">{index + 1}</span>
                                <div>
                                    <h3>{title}</h3>
                                    <p>{text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h3 className="eqo-subhead">{c.goals.addedTitle}</h3>
                    <ul className="eqo-list">
                        {c.goals.added.map(([bold, text]) => (
                            <li key={bold}>
                                <b>{bold}:</b> {text}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Challenges */}
            <section className="eqo-section">
                <div className="eqo-wrap">
                    <h2>{c.challenges.title}</h2>
                    <p className="eqo-sub">{c.challenges.sub}</p>
                    <div className="eqo-table-wrap">
                        <table className="eqo-table">
                            <thead>
                                <tr>
                                    {c.challenges.headers.map((header) => (
                                        <th key={header}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {c.challenges.rows.map(([challenge, what, solution]) => (
                                    <tr key={challenge}>
                                        <td>{challenge}</td>
                                        <td className="eqo-td-muted">{what}</td>
                                        <td className="eqo-td-muted">{solution}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h3 className="eqo-subhead">{c.challenges.kpiTitle}</h3>
                    <div className="eqo-chips">
                        {c.challenges.kpis.map((kpi) => (
                            <span key={kpi}>{kpi}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners */}
            <section className="eqo-section eqo-alt">
                <div className="eqo-wrap">
                    <h2>{c.partners.title}</h2>
                    <p className="eqo-sub">{c.partners.sub}</p>
                    <div className="eqo-grid">
                        {c.partners.cards.map((card) => (
                            <div key={card.title} className="eqo-card eqo-card-primary">
                                <h3>{card.title}</h3>
                                <p>{card.text}</p>
                            </div>
                        ))}
                    </div>

                    <h3 className="eqo-subhead">{c.partners.commercialTitle}</h3>
                    <div className="eqo-logos">
                        {c.partners.commercial.map((partner) => (
                            <div key={partner.name} className="eqo-placeholder">
                                <span className="eqo-avatar">{partner.initial}</span>
                                <h3>{partner.name}</h3>
                                <p>{c.partners.commercialRole}</p>
                            </div>
                        ))}
                    </div>

                    <div className="eqo-stack">
                        {c.partners.stack.map((tech, index) => (
                            <span key={tech} className={index < 2 ? 'eqo-stack-key' : ''}>{tech}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="eqo-section">
                <div className="eqo-wrap">
                    <h2>{c.team.title}</h2>
                    <p className="eqo-sub">{c.team.sub}</p>
                    <div className="eqo-grid">
                        {c.team.members.map((member) => (
                            <div key={member.name} className="eqo-placeholder">
                                <span className="eqo-avatar">{member.initial}</span>
                                <h3 className="eqo-member-name">{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="eqo-section eqo-alt">
                <div className="eqo-wrap">
                    <h2>{c.faq.title}</h2>
                    <div className="eqo-faq">
                        {c.faq.items.map(([question, answer]) => (
                            <details key={question} className="eqo-details">
                                <summary>{question}</summary>
                                <p>{answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Implementation status */}
            <section className="eqo-section">
                <div className="eqo-wrap">
                    <h2>{c.status.title}</h2>
                    <p className="eqo-sub">{c.status.sub}</p>
                    <div className="eqo-bars">
                        {c.status.bars.map((bar) => (
                            <div key={bar.label} className="eqo-bar">
                                <div className="eqo-bar-row">
                                    <span>{bar.label}</span>
                                    <em>{bar.note}</em>
                                </div>
                                <div className="eqo-track">
                                    <div
                                        className={`eqo-fill ${bar.accent === 'accent' ? 'eqo-fill-accent' : ''}`}
                                        style={{ width: `${bar.value}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="eqo-note">{c.status.note}</p>
                </div>
            </section>

            {/* CTA */}
            <div className="eqo-cta">
                <div className="eqo-wrap">
                    <h2>{c.cta.title}</h2>
                    <p>{c.cta.text}</p>
                    <div className="eqo-cta-links">
                        <a href="tel:00962781058132" className="eqo-cta-link">00962781058132</a>
                        <a href="mailto:info@pickum.jo" className="eqo-cta-link">info@pickum.jo</a>
                    </div>
                    <a href="/#contact" className="eqo-btn eqo-btn-light">{c.cta.button}</a>
                </div>
            </div>
            <div className="eqo-page-footer">
                <div className="eqo-wrap">
                    <span className="eqo-brand">EQO GO</span>
                    <span>{c.cta.footer}</span>
                </div>
            </div>
        </div>
    );
};

export default EqoGo;
