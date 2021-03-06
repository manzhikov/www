/** @jsx m */

"use strict";
require("./Logo.scss");

var Logo = {};

Logo.view = function() {
  return (
    <svg className="Logo" x="0px" y="0px" viewBox="0 0 200 100">
      <g>
        <text transform="matrix(1 0 0 1 43.172913 47.784058)">Curate</text>
        <text transform="matrix(1 0 0 1 44.21344 68.784058)">Science</text>
        <path style={{"fill": "#85D3F5"}} d="M140,25c-6.296143,0-13.563904,1.90332-14.797791,10h18.509521
            c0.386719-0.881531,1.26532-1.5,2.288269-1.5c1.378906,0,2.5,1.121094,2.5,2.5s-1.121094,2.5-2.5,2.5
            c-1.022949,0-1.90155-0.618469-2.288269-1.5h-10.645325c0.071289,1.735107,0.486755,3.400757,4.750916,3.805725
            C138.242676,40.031738,139.055908,39.5,140,39.5c1.378906,0,2.5,1.121094,2.5,2.5s-1.121094,2.5-2.5,2.5
            c-1.026672,0-1.908691-0.622437-2.293213-1.509094c-5.858521-0.550781-6.720032-3.27533-6.798096-5.990906h-5.883362
            C125.02063,37.17041,125,37.324951,125,37.5c0,10.236755,8.096375,12.5,15,12.5v5c0,0,15-2.263245,15-17.5
            C155,27.263,146.903625,25,140,25z"/>
      </g>
    </svg>
  );
};

module.exports = Logo;