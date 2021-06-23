import React, { Component } from "react";

class Logo extends Component {
  render() {
    return (
      <svg
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        width="25px"
        height="30px"
        viewBox="0 0 2400 2800"
        style={{enableBackground: 'new 0 0 2400 2800'}}
      >
        <g>
          <polygon
            fill="#fff"
            points="2200,1300 1800,1700 1400,1700 1050,2050 1050,1700 600,1700 600,200 2200,200 	"
          />
          <g>
            <g id="Layer_1-2">
              <path
                fill="#9146FF"
                d="M500,0L0,500v1800h600v500l500-500h400l900-900V0H500z M2200,1300l-400,400h-400l-350,350v-350H600V200h1600
				V1300z"
              />
              <rect x="1700" y="550" fill="#9146FF" width="200" height="600" />
              <rect x="1150" y="550" fill="#9146FF" width="200" height="600" />
            </g>
          </g>
        </g>
      </svg>
    );
  }
}

export default Logo;
