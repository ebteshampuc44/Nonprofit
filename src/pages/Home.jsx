import React from 'react';

const Home = () => {
    return (
        <div style={{ 
            fontFamily: "'Open Sans', sans-serif", 
            background: '#fff',
            margin: 0,
            padding: 0
        }}>
            {/* Google Fonts */}
            <link
                href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&family=Open+Sans:wght@400;600;700&display=swap"
                rel="stylesheet"
            />

            {/* NAVBAR */}
            <nav style={{
                position: 'absolute', top: 0, left: 0, right: 0, zIndex: 100,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '18px 40px',
                background: 'rgba(0,0,0,0.55)'
            }}>
                <div style={{
                    color: '#fff', fontFamily: "'Merriweather', serif",
                    fontSize: '22px', fontWeight: 700, letterSpacing: '0.5px'
                }}>
                    Goodwish
                </div>
                <ul style={{ display: 'flex', alignItems: 'center', gap: '28px', listStyle: 'none', margin: 0, padding: 0 }}>
                    {['Home', 'Causes', 'Events', 'Pages', 'Blog', 'Shop', 'Elements'].map((item) => (
                        <li key={item}>
                            <a href="#" style={{
                                color: item === 'Home' ? '#E8A020' : '#fff',
                                textDecoration: 'none', fontSize: '14px',
                                fontWeight: 600, letterSpacing: '0.3px'
                            }}>{item}</a>
                        </li>
                    ))}
                </ul>
                <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                        <circle cx="11" cy="11" r="6" /><line x1="16.65" y1="16.65" x2="21" y2="21" />
                    </svg>
                    <div style={{ position: 'relative' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18" />
                        </svg>
                        <div style={{
                            position: 'absolute', top: '-6px', right: '-6px',
                            background: '#E8A020', color: '#fff', borderRadius: '50%',
                            width: '16px', height: '16px', fontSize: '9px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700
                        }}>0</div>
                    </div>
                    <button style={{
                        background: 'transparent', border: '2px solid #fff',
                        color: '#fff', padding: '8px 22px', fontSize: '14px',
                        fontWeight: 700, cursor: 'pointer', letterSpacing: '0.5px'
                    }}>Donate</button>
                </div>
            </nav>

            {/* HERO SECTION */}
            <div style={{ 
                position: 'relative', 
                width: '100%', 
                height: '580px', 
                overflow: 'hidden' 
            }}>
                {/* Background Image */}
                <div style={{
                    position: 'absolute', 
                    inset: 0,
                    backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1400&q=80')",
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                    filter: 'brightness(0.72)'
                }} />

                {/* Gradient Overlay */}
                <div style={{
                    position: 'absolute', 
                    inset: 0,
                    background: 'linear-gradient(to right, rgba(0,0,0,0.55) 40%, transparent 80%)'
                }} />

                {/* Left Arrow */}
                <button style={{
                    position: 'absolute', 
                    left: '24px', 
                    top: '50%',
                    transform: 'translateY(-50%)', 
                    zIndex: 3,
                    width: '44px', 
                    height: '44px',
                    border: '2px solid rgba(255,255,255,0.7)',
                    borderRadius: '50%', 
                    background: 'transparent',
                    color: '#fff', 
                    fontSize: '20px',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.2)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                }}
                >
                    &#8592;
                </button>

                {/* Hero Content */}
                <div style={{ 
                    position: 'relative', 
                    zIndex: 2, 
                    padding: '160px 80px 0', 
                    maxWidth: '620px' 
                }}>
                    <h1 style={{
                        fontFamily: "'Merriweather', serif",
                        fontSize: '52px', 
                        lineHeight: 1.15,
                        color: '#fff', 
                        fontWeight: 900, 
                        marginBottom: '18px'
                    }}>
                        Help The<br />
                        <span style={{ color: '#E8A020' }}>Children</span> in Need
                    </h1>
                    <p style={{
                        color: 'rgba(255,255,255,0.88)',
                        fontSize: '14px', 
                        lineHeight: 1.7,
                        marginBottom: '32px', 
                        maxWidth: '440px'
                    }}>
                        Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil
                        expetendis in mei. Mei an pericula euripidis, hinc partem ei est.
                    </p>
                    <button style={{
                        border: '2px solid #fff', 
                        color: '#fff',
                        background: 'transparent',
                        padding: '12px 34px', 
                        fontSize: '14px',
                        fontWeight: 700, 
                        cursor: 'pointer',
                        letterSpacing: '0.6px', 
                        borderRadius: '30px',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.background = '#fff';
                        e.target.style.color = '#333';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.color = '#fff';
                    }}
                    >
                        View More
                    </button>
                </div>

                {/* Right Arrow */}
                <button style={{
                    position: 'absolute', 
                    right: '24px', 
                    top: '50%',
                    transform: 'translateY(-50%)', 
                    zIndex: 3,
                    width: '44px', 
                    height: '44px',
                    border: '2px solid rgba(255,255,255,0.7)',
                    borderRadius: '50%', 
                    background: 'transparent',
                    color: '#fff', 
                    fontSize: '20px',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.2)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                }}
                >
                    &#8594;
                </button>
            </div>

            {/* BOTTOM 3 CARDS */}
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr 1fr', 
                height: '220px' 
            }}>
                {[
                    {
                        bg: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=70',
                        overlay: 'rgba(180,130,20,0.72)',
                        text: 'Today is the day to reach out and lend a helping hand'
                    },
                    {
                        bg: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=70',
                        overlay: 'rgba(40,80,130,0.72)',
                        text: 'Even the smallest of donations can help change a life'
                    },
                    {
                        bg: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=70',
                        overlay: 'rgba(50,130,50,0.72)',
                        text: "Become a volunteer. You'll feel the benefits instantly"
                    }
                ].map((card, i) => (
                    <div key={i} style={{
                        position: 'relative', 
                        overflow: 'hidden',
                        display: 'flex', 
                        flexDirection: 'column',
                        justifyContent: 'flex-end', 
                        padding: '28px 32px'
                    }}>
                        {/* Card Background */}
                        <div style={{
                            position: 'absolute', 
                            inset: 0,
                            backgroundImage: `url('${card.bg}')`,
                            backgroundSize: 'cover', 
                            backgroundPosition: 'center',
                            transition: 'transform 0.3s ease'
                        }} />
                        {/* Card Overlay */}
                        <div style={{ 
                            position: 'absolute', 
                            inset: 0, 
                            background: card.overlay 
                        }} />
                        {/* Card Content */}
                        <div style={{ 
                            position: 'relative', 
                            zIndex: 2 
                        }}>
                            <h3 style={{
                                color: '#fff', 
                                fontSize: '18px',
                                fontWeight: 700, 
                                lineHeight: 1.35, 
                                marginBottom: '16px'
                            }}>
                                {card.text}
                            </h3>
                            <button style={{
                                background: '#fff', 
                                color: '#333',
                                border: 'none', 
                                padding: '9px 28px',
                                fontSize: '13px', 
                                fontWeight: 700,
                                borderRadius: '30px', 
                                cursor: 'pointer',
                                letterSpacing: '0.3px',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = '#E8A020';
                                e.target.style.color = '#fff';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = '#fff';
                                e.target.style.color = '#333';
                            }}
                            >
                                Donate
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* WHO WE ARE SECTION */}
            <div style={{ padding: '70px 80px 80px', background: '#fff' }}>

                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h2 style={{
                        fontFamily: "'Merriweather', serif",
                        fontSize: '36px', fontWeight: 700,
                        color: '#222', marginBottom: '14px'
                    }}>
                        Who We Are
                    </h2>
                    <p style={{ fontSize: '15px', color: '#888', marginBottom: '18px' }}>
                        Organization set up to provide help and raise money for those in need
                    </p>
                    <div style={{
                        width: '50px', height: '3px',
                        background: '#E8A020', margin: '0 auto'
                    }} />
                </div>

                {/* 3 Cards Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '36px' }}>
                    {[
                        {
                            img: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80',
                            title: 'Places To Get Lost',
                            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit hendrerit faucibus. Suspendisse hendrerit turpis dui, eget ultricies erat consequat ut. Sed ac velit iaculis, condimentum neqlu.'
                        },
                        {
                            img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80',
                            title: 'Healthy Food For All',
                            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit hendrerit faucibus. Suspendisse hendrerit turpis dui, eget ultricies erat consequat ut. Sed ac velit iaculis, condimentum neqlu.'
                        },
                        {
                            img: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80',
                            title: 'Green Organization',
                            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit hendrerit faucibus. Suspendisse hendrerit turpis dui, eget ultricies erat consequat ut. Sed ac velit iaculis, condimentum neqlu.'
                        }
                    ].map((item, i) => (
                        <div key={i}>
                            <div style={{ width: '100%', height: '230px', overflow: 'hidden', marginBottom: '20px' }}>
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    style={{
                                        width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                                        transition: 'transform 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                />
                            </div>
                            <h3 style={{
                                fontFamily: "'Merriweather', serif",
                                fontSize: '20px', fontWeight: 700,
                                color: '#222', marginBottom: '12px'
                            }}>
                                {item.title}
                            </h3>
                            <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.75 }}>
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* FUNDRAISING COMMUNITY SECTION */}
            <div style={{
                position: 'relative',
                width: '100%',
                minHeight: '420px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
            }}>
                {/* Background Image */}
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: "url('https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1400&q=80')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.45)'
                }} />

                {/* Content Row */}
                <div style={{
                    position: 'relative', zIndex: 2,
                    display: 'flex', alignItems: 'center',
                    width: '100%',
                    padding: '60px 80px',
                    gap: '60px'
                }}>
                    {/* Left: Video Thumbnail */}
                    <div style={{
                        flexShrink: 0,
                        width: '460px',
                        height: '300px',
                        position: 'relative',
                        borderRadius: '4px',
                        overflow: 'hidden',
                        cursor: 'pointer'
                    }}>
                        <img
                            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                            alt="Video thumbnail"
                            style={{
                                width: '100%', height: '100%',
                                objectFit: 'cover', display: 'block'
                            }}
                        />
                        {/* Play Button */}
                        <div style={{
                            position: 'absolute', inset: 0,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                            <div style={{
                                width: '72px', height: '72px',
                                borderRadius: '50%',
                                border: '3px solid rgba(255,255,255,0.9)',
                                background: 'rgba(255,255,255,0.15)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: 'pointer',
                                transition: 'background 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                            >
                                {/* Triangle play icon */}
                                <div style={{
                                    width: 0, height: 0,
                                    borderTop: '14px solid transparent',
                                    borderBottom: '14px solid transparent',
                                    borderLeft: '22px solid rgba(255,255,255,0.95)',
                                    marginLeft: '6px'
                                }} />
                            </div>
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div style={{ flex: 1 }}>
                        <h2 style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '36px', fontWeight: 700,
                            color: '#fff', marginBottom: '16px',
                            lineHeight: 1.2
                        }}>
                            Fundraising Community
                        </h2>
                        {/* Orange underline */}
                        <div style={{
                            width: '50px', height: '3px',
                            background: '#E8A020',
                            marginBottom: '22px'
                        }} />
                        <p style={{
                            fontSize: '15px', color: 'rgba(255,255,255,0.85)',
                            lineHeight: 1.8, marginBottom: '32px',
                            maxWidth: '460px'
                        }}>
                            Nulla fermentum turpis id nunc tincidunt, vitae hendrerit orci viverra.
                            Nulla facilisi. Duis tempor nisl nec dolor malesuada viverra. Morbi id
                            tempus nisi, a varius enim. Morbi eget augue neque, un in ligula.
                        </p>
                        <button style={{
                            background: '#fff', color: '#333',
                            border: 'none',
                            padding: '13px 36px',
                            fontSize: '15px', fontWeight: 600,
                            borderRadius: '30px', cursor: 'pointer',
                            letterSpacing: '0.3px',
                            transition: 'background 0.3s ease, color 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = '#E8A020';
                            e.target.style.color = '#fff';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = '#fff';
                            e.target.style.color = '#333';
                        }}
                        >
                            Read more
                        </button>
                    </div>
                </div>
            </div>

            {/* LATEST CAUSES SECTION */}
            <div style={{ padding: '70px 80px 80px', background: '#fff' }}>

                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h2 style={{
                        fontFamily: "'Merriweather', serif",
                        fontSize: '36px', fontWeight: 700,
                        color: '#222', marginBottom: '14px'
                    }}>
                        Latest Causes
                    </h2>
                    <p style={{ fontSize: '15px', color: '#888', marginBottom: '18px' }}>
                        Organization set up to provide help and raise money for those in need
                    </p>
                    <div style={{
                        width: '50px', height: '3px',
                        background: '#E8A020', margin: '0 auto'
                    }} />
                </div>

                {/* 3 Cause Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '30px' }}>
                    {[
                        {
                            img: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80',
                            category: 'Healthcare',
                            title: 'Childhood Development',
                            desc: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula est euripidis hinc',
                            percent: 13,
                            raised: '$57,157',
                            goal: '$60,000'
                        },
                        {
                            img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80',
                            category: 'Healthcare',
                            title: 'Community Center',
                            desc: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula est euripidis hinc',
                            percent: 13,
                            raised: '$151,831',
                            goal: '$70,000'
                        },
                        {
                            img: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80',
                            category: 'Healthcare',
                            title: 'Much Needed Help',
                            desc: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula est euripidis hinc',
                            percent: 9,
                            raised: '$54,508',
                            goal: '$85,000'
                        }
                    ].map((cause, i) => (
                        <div key={i} style={{
                            background: '#F7F5F0',
                            borderRadius: '4px',
                            overflow: 'hidden',
                            cursor: 'pointer'
                        }}>
                            {/* Card Image */}
                            <div style={{ width: '100%', height: '220px', overflow: 'hidden' }}>
                                <img
                                    src={cause.img}
                                    alt={cause.title}
                                    style={{
                                        width: '100%', height: '100%',
                                        objectFit: 'cover', display: 'block',
                                        transition: 'transform 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                />
                            </div>

                            {/* Card Body */}
                            <div style={{ padding: '24px 26px 28px' }}>
                                {/* Category */}
                                <p style={{
                                    color: '#E8A020', fontSize: '13px',
                                    fontWeight: 700, marginBottom: '8px',
                                    letterSpacing: '0.3px'
                                }}>
                                    {cause.category}
                                </p>
                                {/* Title */}
                                <h3 style={{
                                    fontFamily: "'Merriweather', serif",
                                    fontSize: '21px', fontWeight: 700,
                                    color: '#1a1a1a', marginBottom: '14px',
                                    lineHeight: 1.3
                                }}>
                                    {cause.title}
                                </h3>
                                {/* Description */}
                                <p style={{
                                    fontSize: '14px', color: '#777',
                                    lineHeight: 1.75, marginBottom: '20px'
                                }}>
                                    {cause.desc}
                                </p>

                                {/* Progress Bar */}
                                <div style={{ marginBottom: '14px' }}>
                                    <p style={{
                                        fontSize: '13px', fontWeight: 700,
                                        color: '#333', marginBottom: '7px'
                                    }}>
                                        {cause.percent}%
                                    </p>
                                    <div style={{
                                        width: '100%', height: '5px',
                                        background: '#ddd', borderRadius: '10px',
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{
                                            width: `${cause.percent}%`,
                                            height: '100%',
                                            background: '#E8A020',
                                            borderRadius: '10px'
                                        }} />
                                    </div>
                                </div>

                                {/* Raised / Goal */}
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    fontSize: '13px', color: '#888'
                                }}>
                                    <span>
                                        Raised: <strong style={{ color: '#333' }}>{cause.raised}</strong>
                                    </span>
                                    <span>
                                        Goal: <strong style={{ color: '#E8A020' }}>{cause.goal}</strong>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* STATS COUNTER SECTION */}
            <div style={{
                position: 'relative',
                width: '100%',
                overflow: 'hidden'
            }}>
                {/* Background Image */}
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1400&q=80')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                    filter: 'brightness(0.5)'
                }} />

                {/* Stats Row */}
                <div style={{
                    position: 'relative', zIndex: 2,
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr 1fr',
                    padding: '60px 80px'
                }}>
                    {[
                        { number: 168, label: 'Donations' },
                        { number: 97,  label: 'Volunteers' },
                        { number: 110, label: 'Projects' },
                        { number: 61,  label: 'Missions' }
                    ].map((stat, i) => (
                        <div key={i} style={{
                            textAlign: 'center',
                            borderRight: i < 3 ? '1px solid rgba(255,255,255,0.2)' : 'none',
                            padding: '10px 20px'
                        }}>
                            <div style={{
                                fontFamily: "'Merriweather', serif",
                                fontSize: '72px', fontWeight: 700,
                                color: '#fff', lineHeight: 1.1,
                                marginBottom: '10px'
                            }}>
                                {stat.number}
                            </div>
                            <div style={{
                                fontSize: '15px', fontWeight: 600,
                                color: '#fff', letterSpacing: '0.5px'
                            }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* FUNDRAISING PLANS SECTION */}
            <div style={{ padding: '70px 80px 80px', background: '#fff' }}>

                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h2 style={{
                        fontFamily: "'Merriweather', serif",
                        fontSize: '36px', fontWeight: 700,
                        color: '#222', marginBottom: '14px'
                    }}>
                        Fundraising Plans
                    </h2>
                    <p style={{ fontSize: '15px', color: '#888', marginBottom: '18px' }}>
                        Organization set up to provide help and raise money for those in need
                    </p>
                    <div style={{
                        width: '50px', height: '3px',
                        background: '#E8A020', margin: '0 auto'
                    }} />
                </div>

                {/* Two Column Banner */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    maxWidth: '980px',
                    margin: '0 auto'
                }}>
                    {/* Left: Yellow Panel */}
                    <div style={{
                        background: '#F5A623',
                        padding: '60px 50px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Decorative faint circle */}
                        <div style={{
                            position: 'absolute', bottom: '-40px', right: '-40px',
                            width: '220px', height: '220px',
                            borderRadius: '50%',
                            border: '40px solid rgba(255,255,255,0.12)'
                        }} />
                        <h3 style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '28px', fontWeight: 700,
                            color: '#fff', marginBottom: '20px',
                            lineHeight: 1.25
                        }}>
                            Become a VOLUNTEER
                        </h3>
                        <p style={{
                            fontSize: '14px', color: 'rgba(255,255,255,0.9)',
                            lineHeight: 1.8, marginBottom: '32px',
                            maxWidth: '340px'
                        }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                            blandit hendrerit faucibus. Suspendisse hendrerit turpis dui, eget
                            ultricies erat consequat ut. Sed ac velit iaculis, condimentum.
                        </p>
                        <div>
                            <button style={{
                                background: '#fff', color: '#333',
                                border: 'none',
                                padding: '13px 36px',
                                fontSize: '15px', fontWeight: 600,
                                borderRadius: '30px', cursor: 'pointer',
                                letterSpacing: '0.3px',
                                transition: 'background 0.3s ease, color 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = '#222';
                                e.target.style.color = '#fff';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = '#fff';
                                e.target.style.color = '#333';
                            }}
                            >
                                Sign In
                            </button>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div style={{
                        height: '340px',
                        overflow: 'hidden'
                    }}>
                        <img
                            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80"
                            alt="Volunteer"
                            style={{
                                width: '100%', height: '100%',
                                objectFit: 'cover', display: 'block',
                                transition: 'transform 0.4s ease'
                            }}
                            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                        />
                    </div>
                </div>
            </div>

            {/* TESTIMONIALS SECTION */}
            <div style={{
                background: '#F0EDE4',
                padding: '60px 80px 50px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Faint world map dots background */}
                <div style={{
                    position: 'absolute', inset: 0, opacity: 0.18,
                    backgroundImage: 'radial-gradient(circle, #999 1px, transparent 1px)',
                    backgroundSize: '18px 18px'
                }} />

                {/* 3 Testimonial Cards */}
                <div style={{
                    position: 'relative', zIndex: 2,
                    display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                    gap: '28px', marginBottom: '36px'
                }}>
                    {[
                        {
                            title: 'Kindness',
                            quote: '"Nullam metus nisi, cursus sit amet euismod eget, pretium ac nunc. Integer maximus ante in lectus imperdiet osed."',
                            name: 'Daniel Green',
                            org: 'Release International',
                            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80'
                        },
                        {
                            title: 'Humanity',
                            quote: '"Nullam metus nisi, cursus sit amet euismod eget, pretium ac nunc. Integer maximus ante in lectus imperdiet osed."',
                            name: 'Bess Palmer',
                            org: 'Unicef',
                            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80'
                        },
                        {
                            title: 'Humanity',
                            quote: '"Nullam metus nisi, cursus sit amet euismod eget, pretium ac nunc. Integer maximus ante in lectus imperdiet osed."',
                            name: 'Mia Owen',
                            org: 'Unicef',
                            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80'
                        }
                    ].map((t, i) => (
                        <div key={i}>
                            {/* White Quote Card */}
                            <div style={{
                                background: '#fff',
                                borderRadius: '4px',
                                padding: '28px 30px',
                                marginBottom: '0px',
                                position: 'relative'
                            }}>
                                <h4 style={{
                                    fontFamily: "'Merriweather', serif",
                                    fontSize: '18px', fontWeight: 700,
                                    color: '#222', marginBottom: '14px'
                                }}>
                                    {t.title}
                                </h4>
                                <p style={{
                                    fontSize: '14px', color: '#666',
                                    lineHeight: 1.75
                                }}>
                                    {t.quote}
                                </p>
                                {/* Downward arrow tip */}
                                <div style={{
                                    position: 'absolute', bottom: '-14px', left: '30px',
                                    width: 0, height: 0,
                                    borderLeft: '12px solid transparent',
                                    borderRight: '12px solid transparent',
                                    borderTop: '14px solid #E8A020'
                                }} />
                            </div>

                            {/* Author Row */}
                            <div style={{
                                display: 'flex', alignItems: 'center',
                                gap: '14px', marginTop: '28px'
                            }}>
                                <img
                                    src={t.avatar}
                                    alt={t.name}
                                    style={{
                                        width: '58px', height: '58px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        flexShrink: 0
                                    }}
                                />
                                <div>
                                    <p style={{
                                        fontSize: '15px', fontWeight: 700,
                                        color: '#222', marginBottom: '3px'
                                    }}>{t.name}</p>
                                    <p style={{
                                        fontSize: '13px', color: '#E8A020',
                                        fontWeight: 600
                                    }}>{t.org}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dots Navigation */}
                <div style={{
                    display: 'flex', justifyContent: 'center',
                    gap: '10px', marginTop: '40px', position: 'relative', zIndex: 2
                }}>
                    {[true, false, false, false].map((active, i) => (
                        <div key={i} style={{
                            width: active ? '12px' : '11px',
                            height: active ? '12px' : '11px',
                            borderRadius: '50%',
                            background: active ? '#E8A020' : i === 2 ? '#333' : '#bbb',
                            cursor: 'pointer'
                        }} />
                    ))}
                </div>
            </div>

            {/* NEWSLETTER SECTION */}
            <div style={{
                background: '#8DC63F',
                padding: '36px 80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <h3 style={{
                    fontFamily: "'Merriweather', serif",
                    fontSize: '26px', fontWeight: 700,
                    color: '#fff', maxWidth: '600px',
                    lineHeight: 1.3
                }}>
                    Subscribe and receive weekly our newsletter
                </h3>
                <button style={{
                    background: '#fff', color: '#333',
                    border: 'none',
                    padding: '15px 42px',
                    fontSize: '15px', fontWeight: 700,
                    borderRadius: '30px', cursor: 'pointer',
                    flexShrink: 0,
                    letterSpacing: '0.3px',
                    transition: 'background 0.3s ease, color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                    e.target.style.background = '#222';
                    e.target.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                    e.target.style.background = '#fff';
                    e.target.style.color = '#333';
                }}
                >
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default Home;