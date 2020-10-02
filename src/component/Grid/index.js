import React from 'react';

import './styles.scss';

const Grid = () => {
    return (
        <div className="grid-container">
            <div className="grid-desktop grid-box">
                <section></section>
                <section></section>
                <section></section>
                <section></section>
                <section></section>
                <section></section>
                <section></section>
                <section></section>
                <section></section>
                <section></section>
                <section></section>
                <section></section>
            </div>
            <div className="grid-tablet grid-box">
                <section></section>
                <section></section>
                <section></section>
                <section></section>
                <section></section>
                <section></section>
                <section></section>
                <section></section>
            </div>
            <div className="grid-mobile grid-box">
                <section></section>
                <section></section>
                <section></section>
                <section></section>
            </div>
            <div className="col-box">
                <div>col</div>
                <div>col</div>
                <div>col</div>
                <div>col</div>
                <div>col</div>
                <div>col</div>
                <div>col</div>
                <div>col</div>
            </div>
        </div>
    );
};

export default Grid;
