import React from 'react';
import Red from '../img/red.svg';
import Orange from '../img/orange.svg';
import Yellow from '../img/yellow.svg';
import Aqua from '../img/aqua.svg';
import Blue from '../img/blue.svg';
import Violet from '../img/violet.svg';
import Pink from '../img/pink.svg';
import './chromaticvar.css';

const ChomaticVar = () => {
  return (
    <div className="chromatic-section">
      <p>Hot</p>
      <img src={Red} className="chromatic-var" alt="chromaticvar"></img>
      <img src={Orange} className="chromatic-var" alt="chromaticvar"></img>
      <img src={Yellow} className="chromatic-var" alt="chromaticvar"></img>
      <img src={Aqua} className="chromatic-var" alt="chromaticvar"></img>
      <img src={Blue} className="chromatic-var" alt="chromaticvar"></img>
      <img src={Violet} className="chromatic-var" alt="chromaticvar"></img>
      <img src={Pink} className="chromatic-var" alt="chromaticvar"></img>
      <p>Cold</p>
    </div>
  );
};

export default ChomaticVar;
