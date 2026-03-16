import React, { useState } from 'react';

const Navbar = () => {
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <div style={{ fontFamily: "'Open Sans', sans-serif" }}>
            <link
                href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&family=Open+Sans:wght@400;600;700&display=swap"
                rel="stylesheet"
            />

            <nav style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 40px',
                height: '70px',
                background: 'rgba(20, 16, 10, 0.82)',
                position: 'relative',
                zIndex: 100,
            }}>

                {/* Logo */}
                <div style={{
                    color: '#fff',
                    fontFamily: "'Merriweather', serif",
                    fontSize: '22px',
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2px'
                }}>
                    Goodwi
                    <span style={{ color: '#E8A020' }}>s</span>
                    h
                </div>

                {/* Nav Links */}
                <ul style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '32px',
                    listStyle: 'none',
                    margin: 0,
                    padding: 0
                }}>
                    {['Home', 'Causes', 'Events', 'Pages', 'Blog', 'Shop', 'Elements'].map((item) => (
                        <li key={item}>
                            <a
                                href="#"
                                style={{
                                    color: item === 'Home' ? '#E8A020' : '#fff',
                                    textDecoration: 'none',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    letterSpacing: '0.3px',
                                    transition: 'color 0.2s',
                                    paddingBottom: '4px',
                                    borderBottom: item === 'Home' ? '2px solid #E8A020' : '2px solid transparent'
                                }}
                                onMouseEnter={(e) => {
                                    if (item !== 'Home') {
                                        e.target.style.color = '#E8A020';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (item !== 'Home') {
                                        e.target.style.color = '#fff';
                                    }
                                }}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Right Side: Search + Cart + Donate */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>

                    {/* Search Icon */}
                    <button style={{
                        background: 'transparent', border: 'none',
                        cursor: 'pointer', padding: '4px',
                        display: 'flex', alignItems: 'center'
                    }}
                    onMouseEnter={(e) => e.currentTarget.querySelector('svg').style.stroke = '#E8A020'}
                    onMouseLeave={(e) => e.currentTarget.querySelector('svg').style.stroke = '#fff'}
                    >
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
                            stroke="#fff" strokeWidth="2.2" strokeLinecap="round"
                            style={{ transition: 'stroke 0.2s' }}>
                            <circle cx="11" cy="11" r="7"/>
                            <line x1="16.5" y1="16.5" x2="22" y2="22"/>
                        </svg>
                    </button>

                    {/* Cart Icon with Badge */}
                    <div style={{ position: 'relative', cursor: 'pointer' }}
                        onClick={() => setCartOpen(!cartOpen)}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                            <line x1="3" y1="6" x2="21" y2="6"/>
                            <path d="M16 10a4 4 0 01-8 0"/>
                        </svg>
                        {/* Badge */}
                        <div style={{
                            position: 'absolute',
                            top: '-7px', right: '-7px',
                            background: '#E8A020',
                            color: '#fff',
                            borderRadius: '50%',
                            width: '17px', height: '17px',
                            fontSize: '10px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontWeight: 700,
                            lineHeight: 1
                        }}>
                            0
                        </div>

                        {/* Cart Dropdown */}
                        {cartOpen && (
                            <div style={{
                                position: 'absolute', top: '34px', right: 0,
                                background: '#fff', borderRadius: '6px',
                                boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                                padding: '16px 20px',
                                minWidth: '200px',
                                zIndex: 200
                            }}>
                                <p style={{ fontSize: '14px', color: '#555', marginBottom: '8px' }}>
                                    Your cart is empty
                                </p>
                                <button style={{
                                    width: '100%', background: '#E8A020',
                                    color: '#fff', border: 'none',
                                    padding: '8px', borderRadius: '4px',
                                    fontSize: '13px', fontWeight: 700, cursor: 'pointer'
                                }}>
                                    View Cart
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Donate Button */}
                    <button style={{
                        background: 'transparent',
                        border: '2px solid #fff',
                        color: '#fff',
                        padding: '8px 22px',
                        fontSize: '14px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        letterSpacing: '0.5px',
                        transition: 'background 0.2s, border-color 0.2s, color 0.2s'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.background = '#E8A020';
                        e.target.style.borderColor = '#E8A020';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.borderColor = '#fff';
                    }}
                    >
                        Donate
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;