/**
 * @jsx React.DOM
 */

"use strict";

var React = require("react/addons");

var RegistrationIcon = React.createClass({
  getDefaultProps: function() {
    return {
      size: "small"
    };
  },
  /*jshint ignore:start */
  render: function() {
    if (this.props.size === "small") {
      return (
        <g className="svg_icon">
          <rect x="5.999983" y="20.999958" width="19.999973" height="4.999993"/>
          <rect x="5.999983" y="16.999956" width="19.999973" height="2.999996"/>
          <path d="M22.040009,11.999983h-0.040039V8.338244c0-3.249141-2.433712-6.160637-5.678337-6.329826
            C12.861188,1.827877,9.999986,4.57885,9.999986,7.997913v4.00207H9.959947c-2.187008,0-3.959955,1.772946-3.959955,3.959955
            v0.040039h19.999973v-0.040039C25.999966,13.772929,24.227018,11.999983,22.040009,11.999983z M19.499973,11.999983h-6.99999
            V7.998035c0-1.928709,1.570311-3.498043,3.499995-3.498043s3.499995,1.569334,3.499995,3.498043V11.999983z"/>
        </g>
      );
    } else {
      return (
        <g className="svg_icon">
          <path d="M25.306641,17.333334V16c0-1.458008-1.181967-2.639974-2.639975-2.639974V9.619792
            c0-3.481771-2.545572-6.591309-6.011799-6.921875C12.67863,2.318685,9.333333,5.435221,9.333333,9.333333v4.026693
            c-1.458007,0-2.639974,1.181966-2.639974,2.639974v1.333334H25.306641z M12,9.333333c0-2.205566,1.794434-4,4-4
            c2.205648,0,4,1.794434,4,4v4.026693h-8V9.333333z"/>
          <path d="M6.693359,22v4c0,0.368164,0.298502,0.666666,0.666667,0.666666h17.279949
            c0.368164,0,0.666666-0.298502,0.666666-0.666666v-4H6.693359z"/>
          <rect x="6.693359" y="18.000021" width="18.613281" height="3.333333"/>
        </g>
      );
    }
  }
  /*jshint ignore:end */
});

module.exports = RegistrationIcon;