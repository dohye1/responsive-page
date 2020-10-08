import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

// nav는 flex로 만듦
const Nav = () => {
    const [IsClicked, setIsClicked] = useState(false);
    const [Title, setTitle] = useState('DESK TOP');

    const getTitle = () => {
        if (window.innerWidth >= 1024) {
            setTitle('DESK TOP');
        } else if (window.innerWidth >= 720) {
            setTitle('TABLET');
        } else {
            setTitle('MOBILE');
        }
    };

    window.addEventListener('resize', getTitle);

    return (
        <nav className="nav-container">
            <div className="logo">RESPONSIBLE - {Title}</div>
            <div
                className="toggle-btn"
                onClick={() =>
                    IsClicked ? setIsClicked(false) : setIsClicked(true)
                }
            ></div>
            <div className={`toggle-menu ${IsClicked ? 'show' : 'hide'}`}>
                <p>
                    <Link to="/" onClick={() => setIsClicked(false)}>
                        FLEX
                    </Link>
                </p>
                <p>
                    <Link to="/grid" onClick={() => setIsClicked(false)}>
                        GRID
                    </Link>
                </p>
            </div>
            <ul>
                <li>
                    <Link to="/">FLEX</Link>
                </li>
                <li>
                    <Link to="/grid">GRID</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
