import React from 'react';

const Footer = () => {
    return (
        <div style={{ fontFamily: "'Open Sans', sans-serif" }}>
            <link
                href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&family=Open+Sans:wght@400;600;700&display=swap"
                rel="stylesheet"
            />

            {/* MAIN FOOTER */}
            <footer style={{
                background: '#1a1a1a',
                padding: '60px 80px 50px',
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1.1fr 1fr 0.8fr 1.2fr',
                    gap: '50px'
                }}>

                    {/* Column 1: About Us */}
                    <div>
                        <h4 style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px', fontWeight: 700,
                            color: '#fff', marginBottom: '24px'
                        }}>
                            About Us
                        </h4>
                        <p style={{
                            fontSize: '14px', color: '#aaa',
                            lineHeight: 1.85, marginBottom: '22px'
                        }}>
                            Alienum phaedrum torquatos nec eu, vis
                            detraxit periculis ex, nihil expet endis in.
                            Meinan an pericula.
                        </p>
                        <p style={{ fontSize: '14px', color: '#ccc', marginBottom: '10px' }}>
                            <strong style={{ color: '#fff' }}>Call us</strong>{' '}
                            <a href="tel:+61546403304" style={{ color: '#E8A020', textDecoration: 'none' }}>
                                +615 4640 3304
                            </a>
                        </p>
                        <p style={{ fontSize: '14px', color: '#ccc' }}>
                            <strong style={{ color: '#fff' }}>Visit us</strong>{' '}
                            <a href="#" style={{ color: '#E8A020', textDecoration: 'none' }}>
                                2976 Washington St San Francisco,<br />
                                <span style={{ marginLeft: '52px' }}>CA 94115</span>
                            </a>
                        </p>
                    </div>

                    {/* Column 2: Latest Posts */}
                    <div>
                        <h4 style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px', fontWeight: 700,
                            color: '#fff', marginBottom: '24px'
                        }}>
                            Latest Posts
                        </h4>
                        {[
                            { title: 'Care for All People', date: 'April 19, 2017' },
                            { title: 'Find a Project',      date: 'March 28, 2017' },
                            { title: 'Being Volunteer',     date: 'March 28, 2017' },
                        ].map((post, i, arr) => (
                            <div key={i} style={{
                                paddingBottom: '16px',
                                marginBottom: '16px',
                                borderBottom: i < arr.length - 1 ? '1px solid #333' : 'none'
                            }}>
                                <a href="#" style={{
                                    fontSize: '15px', fontWeight: 700,
                                    color: '#fff', textDecoration: 'none',
                                    display: 'block', marginBottom: '5px',
                                    transition: 'color 0.2s'
                                }}
                                onMouseEnter={(e) => e.target.style.color = '#E8A020'}
                                onMouseLeave={(e) => e.target.style.color = '#fff'}
                                >
                                    {post.title}
                                </a>
                                <span style={{ fontSize: '13px', color: '#E8A020' }}>
                                    {post.date}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Column 3: Links */}
                    <div>
                        <h4 style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px', fontWeight: 700,
                            color: '#fff', marginBottom: '24px'
                        }}>
                            Links
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {['Partners', 'Recent Causes', 'Latest Events', 'News', 'Who We Are?'].map((link, i) => (
                                <li key={i} style={{ marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    {/* Arrow triangle */}
                                    <span style={{
                                        width: 0, height: 0,
                                        borderTop: '5px solid transparent',
                                        borderBottom: '5px solid transparent',
                                        borderLeft: '7px solid #E8A020',
                                        flexShrink: 0
                                    }} />
                                    <a href="#" style={{
                                        fontSize: '14px', color: '#aaa',
                                        textDecoration: 'none',
                                        transition: 'color 0.2s'
                                    }}
                                    onMouseEnter={(e) => e.target.style.color = '#E8A020'}
                                    onMouseLeave={(e) => e.target.style.color = '#aaa'}
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Worldwide Organisations */}
                    <div>
                        <h4 style={{
                            fontFamily: "'Merriweather', serif",
                            fontSize: '18px', fontWeight: 700,
                            color: '#fff', marginBottom: '24px'
                        }}>
                            Worldwide Organisations
                        </h4>
                        {/* SVG World Map */}
                        <svg viewBox="0 0 400 220" style={{ width: '100%', opacity: 0.85 }}>
                            {/* Simple stylized world map */}
                            <rect width="400" height="220" fill="transparent"/>

                            {/* North America */}
                            <path d="M30 50 Q50 40 80 45 Q100 42 110 55 Q120 65 115 80 Q110 95 100 100 Q85 105 70 98 Q55 90 45 78 Q32 65 30 50Z"
                                fill="#444" stroke="#555" strokeWidth="0.5"/>
                            {/* Greenland */}
                            <path d="M105 25 Q120 18 135 22 Q140 30 135 38 Q125 42 112 38 Q105 33 105 25Z"
                                fill="#444" stroke="#555" strokeWidth="0.5"/>
                            {/* South America */}
                            <path d="M80 110 Q95 105 105 115 Q112 128 110 148 Q107 165 98 175 Q88 180 78 172 Q68 162 65 145 Q62 128 68 115 Q73 110 80 110Z"
                                fill="#444" stroke="#555" strokeWidth="0.5"/>
                            {/* Europe */}
                            <path d="M175 38 Q190 32 205 36 Q215 42 218 52 Q215 60 205 62 Q195 64 185 60 Q175 55 173 47 Q173 42 175 38Z"
                                fill="#444" stroke="#555" strokeWidth="0.5"/>
                            {/* Africa */}
                            <path d="M178 68 Q195 62 210 66 Q222 72 225 88 Q228 108 222 128 Q215 145 202 152 Q190 156 178 148 Q167 138 164 118 Q160 98 164 80 Q168 70 178 68Z"
                                fill="#444" stroke="#555" strokeWidth="0.5"/>
                            {/* Asia */}
                            <path d="M218 30 Q255 22 295 28 Q330 34 345 48 Q355 60 350 75 Q340 88 320 92 Q295 96 268 90 Q242 84 228 72 Q215 60 215 46 Q215 36 218 30Z"
                                fill="#444" stroke="#555" strokeWidth="0.5"/>
                            {/* Southeast Asia */}
                            <path d="M295 90 Q315 88 325 98 Q330 110 322 120 Q312 126 300 120 Q290 112 290 100 Q292 93 295 90Z"
                                fill="#444" stroke="#555" strokeWidth="0.5"/>
                            {/* Australia */}
                            <path d="M305 135 Q328 128 348 135 Q362 144 360 160 Q356 174 340 178 Q322 182 308 173 Q295 162 295 148 Q297 138 305 135Z"
                                fill="#444" stroke="#555" strokeWidth="0.5"/>

                            {/* Location pins - yellow */}
                            {[
                                [62, 68], [85, 58], [105, 72],   // North America
                                [270, 58], [300, 52],             // Asia
                                [340, 78],                        // East Asia
                                [195, 90],                        // Africa
                                [385, 155],                       // Australia area
                            ].map(([cx, cy], i) => (
                                <g key={i}>
                                    <circle cx={cx} cy={cy - 6} r="5" fill="#E8A020"/>
                                    <path d={`M${cx} ${cy + 2} L${cx - 4} ${cy - 4} A5 5 0 0 1 ${cx + 4} ${cy - 4} Z`} fill="#E8A020"/>
                                    <circle cx={cx} cy={cy - 6} r="2.5" fill="#1a1a1a"/>
                                </g>
                            ))}
                        </svg>
                    </div>
                </div>
            </footer>

            {/* BOTTOM BAR */}
            <div style={{
                background: '#111',
                padding: '18px 80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                {/* Copyright */}
                <p style={{ fontSize: '13px', color: '#888' }}>
                    © 2017 Qode Interactive
                </p>

                {/* Social Icons */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    {/* Instagram */}
                    <a href="#" style={{ color: '#888', transition: 'color 0.2s' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#E8A020'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#888'}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                        </svg>
                    </a>
                    {/* Twitter */}
                    <a href="#" style={{ color: '#888', transition: 'color 0.2s' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#E8A020'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#888'}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                        </svg>
                    </a>
                    {/* Facebook */}
                    <a href="#" style={{ color: '#888', transition: 'color 0.2s' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#E8A020'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#888'}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                        </svg>
                    </a>
                    {/* Dribbble */}
                    <a href="#" style={{ color: '#888', transition: 'color 0.2s' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#E8A020'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#888'}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/>
                        </svg>
                    </a>
                    {/* Pinterest */}
                    <a href="#" style={{ color: '#888', transition: 'color 0.2s' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#E8A020'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#888'}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                        </svg>
                    </a>
                    {/* LinkedIn */}
                    <a href="#" style={{ color: '#888', transition: 'color 0.2s' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#E8A020'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#888'}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
                        </svg>
                    </a>
                </div>

                {/* All Rights Reserved */}
                <p style={{ fontSize: '13px', color: '#888' }}>
                    All Rights Reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;