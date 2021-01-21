const fs = require('fs-extra');
const path = require('path');

const rawSVGTSX = `
import * as React from 'react';

export const VeterinarianLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="1066.6667" height="800" viewBox="0 0 1066.6667 800">
      <defs id="defs6">
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath22">
          <path d="M 0,600 H 800 V 0 H 0 Z" id="path20" />
        </clipPath>
      </defs>
      <g id="g10" transform="matrix(1.3333333,0,0,-1.3333333,0,800)">
        <g id="g12" transform="translate(116.0566,506.7451)">
          <path
            d="m 0,0 22.389,-402.523 509.142,-24.531 36.356,440.617 z"
            style="fill:#a1dfed;fill-opacity:1;fill-rule:nonzero;stroke:none"
            id="path14"
          />
        </g>
        <g id="g16">
          <g id="g18" clipPath="url(#clipPath22)">
            <g id="g24" transform="translate(412.0239,391.3867)">
              <path
                d="m 0,0 14.163,-8.807 c 0,0 1.128,0.446 -2.97,-2.706 -4.098,-3.151 -14.393,0.722 -14.393,0.722 l 3.973,1.984 9.144,-1.984 4.388,-4.867 c 0,0 -2.917,-3.398 -5.649,-3.395 -2.733,0.003 -7.026,3.395 -7.026,3.395 l 11.977,-3.395 c 0,0 -1.453,-4.094 -3.69,-4.829 -2.237,-0.735 -9.144,-1.122 -9.144,-1.122 0,0 0.119,-5.873 0,-9.085 -0.118,-3.213 -12.991,-9.101 -12.991,-9.101 l -5.081,22.131 9.959,19.571 z"
                style="fill:#eda1a1;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path26"
              />
            </g>
            <g id="g28" transform="translate(385.623,357.2979)">
              <path
                d="m 0,0 5.516,24.474 14.49,14.783 c 0,0 10.961,-4.486 14.536,-4.875 3.576,-0.391 7.93,-0.586 7.93,-0.586 0,0 -1.171,-5.644 -3.513,-6.202 -2.341,-0.559 -16.758,1.568 -16.758,1.568 L 17.038,18.431 20.528,8.496 C 22.627,2.517 21.3,-4.131 17.065,-8.845 l -2.035,-2.264 z"
                style="fill:#ffe0c4;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path30"
              />
            </g>
            <g id="g32" transform="translate(420.165,391.6797)">
              <path
                d="m 0,0 v -3.611 c 0,0 2.651,-0.183 3.829,0.504 1.178,0.687 1.669,2.656 1.669,2.656"
                style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path34"
              />
            </g>
            <g id="g36" transform="translate(385.623,358.3809)">
              <path
                d="M 0,0 -18.014,-19.54 -1.506,-34.38 17.065,-9.928 Z"
                style="fill:#ffe0c4;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path38"
              />
            </g>
            <g id="g40" transform="translate(420.2651,386.3418)">
              <path
                d="M 0,0 -7.254,-3.001 V -8.254 L 0.722,-9.88 Z"
                style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path42"
              />
            </g>
            <g id="g44" transform="translate(426.2549,397.5576)">
              <path
                d="m 0,0 -7.366,-11.841 0.626,-9.38 7.378,-8.482 z"
                style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path46"
              />
            </g>
            <g id="g48" transform="translate(425.1904,399.0977)">
              <path
                d="M 0,0 0.952,-32.541 H 3.329 L 2.381,0 Z"
                style="fill:#bcebf5;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path50"
              />
            </g>
            <g id="g52" transform="translate(138.0156,490.5732)">
              <path
                d="m 0,0 0.992,-157.917 304.84,1.053 3.472,157.203 z"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path54"
              />
            </g>
            <g id="g56" transform="translate(436.1499,419.7451)">
              <path
                d="m 0,0 1.037,62.46 h -291.044 l 1.162,-61.693 z"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path58"
              />
            </g>
            <g id="g60" transform="translate(145.6924,409.4727)">
              <path
                d="m 0,0 2.396,-68.376 286.789,2.023 1.1,66.223 z"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path62"
              />
            </g>
            <g id="g64" transform="translate(156.4731,458.2646)">
              <path
                d="M 0,0 1.061,-37.655 H 23.602 L 24.662,0 Z"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path66"
              />
            </g>
            <g id="g68" transform="translate(161.2466,458.2646)">
              <path
                d="M 0,0 0.088,15.911 15.292,16.088 15.38,0 Z"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path70"
              />
            </g>
            <g id="g72" transform="translate(159.6553,451.7676)">
              <path
                d="M 0,0 1.591,-24.661 H 16.972 L 18.563,0 Z"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path74"
              />
            </g>
            <g id="g76" transform="translate(156.4731,378.916)">
              <path
                d="M 0,0 1.061,-37.656 H 23.602 L 24.662,0 Z"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path78"
              />
            </g>
            <g id="g80" transform="translate(161.2466,378.916)">
              <path
                d="M 0,0 0.088,15.911 15.292,16.088 15.38,0 Z"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path82"
              />
            </g>
            <g id="g84" transform="translate(159.6553,372.4189)">
              <path
                d="M 0,0 1.591,-24.662 H 16.972 L 18.563,0 Z"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path86"
              />
            </g>
            <g id="g88" transform="translate(187.3687,378.916)">
              <path
                d="m 0,0 1.061,-37.656 h 22.54 L 24.662,0 Z"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path90"
              />
            </g>
            <g id="g92" transform="translate(192.1416,378.916)">
              <path
                d="M 0,0 0.088,15.911 15.292,16.088 15.381,0 Z"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path94"
              />
            </g>
            <g id="g96" transform="translate(190.5508,372.4189)">
              <path
                d="M 0,0 1.591,-24.662 H 16.972 L 18.563,0 Z"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path98"
              />
            </g>
            <g id="g100" transform="translate(190.1514,445.4482)">
              <path
                d="M 0,0 -0.302,7.911 H 27.265 L 26.651,0 Z"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path102"
              />
            </g>
            <g id="g104" transform="translate(192.1406,445.4482)">
              <path
                d="M 0,0 H -3.978 L -4.243,-24.839 H 27.181 L 26.386,0 Z"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path106"
              />
            </g>
            <g id="g108" transform="translate(192.6709,439.4375)">
              <path
                d="M 0,0 0.562,-12.817 H 22.143 V 0 Z"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path110"
              />
            </g>
            <path
              d="m 226.614,440.498 h 11.271 v -19.889 h -11.271 z"
              style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              id="path112"
            />
            <g id="g114" transform="translate(224.8906,440.498)">
              <path
                d="M 0,0 H 14.32 V 5.612 L 0,4.773 Z"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path116"
              />
            </g>
            <path
              d="m 230.349,425.14 h 3.801 v 12.017 h -3.801 z"
              style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              id="path118"
            />
            <path
              d="m 216.537,361.937 h 11.271 v -19.89 h -11.271 z"
              style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              id="path120"
            />
            <g id="g122" transform="translate(214.8135,361.9365)">
              <path
                d="M 0,0 H 14.32 V 5.612 L 0,4.772 Z"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path124"
              />
            </g>
            <path
              d="m 220.272,346.577 h 3.801 v 12.018 h -3.801 z"
              style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              id="path126"
            />
            <path
              d="m 234.561,361.937 h 11.271 v -19.89 h -11.271 z"
              style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              id="path128"
            />
            <g id="g130" transform="translate(232.8369,361.9365)">
              <path
                d="M 0,0 H 14.32 V 5.612 L 0,4.772 Z"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path132"
              />
            </g>
            <path
              d="m 238.295,346.577 h 3.801 v 12.018 h -3.801 z"
              style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
              id="path134"
            />
            <g id="g136" transform="translate(374.3315,461.2148)">
              <path
                d="M 0,0 V 10.479 L 33.027,10.328 33.692,0.006 29.103,-0.01 28.579,6.406 H 3.728 l 0.348,-6.4 z"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path138"
              />
            </g>
            <g id="g140" transform="translate(357.9082,450.9746)">
              <path
                d="M 0,0 0.374,-31.04 65.075,-31.079 66.338,0 Z"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path142"
              />
            </g>
            <g id="g144" transform="translate(356.0034,461.2207)">
              <path
                d="m 0,0 v -10.268 l 69.734,0.316 v 9.929 z"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path146"
              />
            </g>
            <g id="g148" transform="translate(364.7529,445.1357)">
              <path
                d="M 0,0 1.523,-19.207 51.542,-19.83 52.499,0.312 Z"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path150"
              />
            </g>
            <g id="g152" transform="translate(475.3936,490.9785)">
              <path
                d="m 0,0 4.164,-244.296 168.369,-4.344 5.785,247.489 z"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path154"
              />
            </g>
            <g id="g156" transform="translate(484.4199,481.749)">
              <path
                d="M 0,0 V -224.68 L 155.123,-230.181 160.266,0 Z"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path158"
              />
            </g>
            <g id="g160" transform="translate(493.6978,474.3525)">
              <path
                d="M 0,0 V -81.381 L 76.002,-84.49 V 0 Z"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path162"
              />
            </g>
            <g id="g164" transform="translate(493.6978,302.041)">
              <path
                d="M 0,0 V -36.525 H 137.374 V -1.228 Z"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path166"
              />
            </g>
            <g id="g168" transform="translate(493.6978,383.5918)">
              <path
                d="m 0,0 v -71.073 l 35.936,-1.052 v 70.7 z"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path170"
              />
            </g>
            <g id="g172" transform="translate(580.1738,311.4668)">
              <path
                d="m 0,0 v 70.073 l -35.936,2.052 V 0.426 Z"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path174"
              />
            </g>
            <g id="g176" transform="translate(631.0713,311.4668)">
              <path
                d="M 0,0 V 72.073 L -35.936,71.125 V 1.426 Z"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path178"
              />
            </g>
            <g id="g180" transform="translate(636.8569,474.3525)">
              <path
                d="M 0,0 H -56.683 V -5.924 L 0,-7.853 Z"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path182"
              />
            </g>
            <g id="g184" transform="translate(580.1738,456.8262)">
              <path
                d="M 0,0 H 56.683"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path186"
              />
            </g>
            <g id="g188" transform="translate(580.1738,444.4062)">
              <path
                d="M 0,0 56.683,-3.579"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path190"
              />
            </g>
            <g id="g192" transform="translate(636.8569,424.9678)">
              <path
                d="M 0,0 H -56.683"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path194"
              />
            </g>
            <g id="g196" transform="translate(580.1738,407.3896)">
              <path
                d="M 0,0 H 34.505"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path198"
              />
            </g>
            <g id="g200" transform="translate(585.1416,315.8477)">
              <path
                d="m 0,0 -0.442,80.784 c 0,0 9.102,3.413 21.049,0 L 18.332,0 Z"
                style="fill:none;stroke:#bec3c4;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path202"
              />
            </g>
            <g id="g204" transform="translate(579.3369,401.373)">
              <path
                d="M 0,0 1.759,-19.723 H 29.446 V 0 C 29.446,0 15.687,1.517 0,0"
                style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path206"
              />
            </g>
            <g id="g208" transform="translate(686.8174,276.9297)">
              <path
                d="m 0,0 v -40.392 l 9.146,1.433 0.525,37.885 z"
                style="fill:#bec3c4;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path210"
              />
            </g>
            <g id="g212" transform="translate(503.0615,276.9297)">
              <path
                d="m 0,0 v -40.392 l -9.146,1.433 -0.525,37.885 z"
                style="fill:#bec3c4;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path214"
              />
            </g>
            <g id="g216" transform="translate(681.4009,273.3467)">
              <path
                d="m 0,0 -7.384,73.272 c -75.664,11.169 -161.126,0 -161.126,0 l -3.641,-74.336 -11.024,-1.691 v -14.303 h 10.24 174.654 10.24 v 15.521 z"
                style="fill:#d83636;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path218"
              />
            </g>
            <g id="g220" transform="translate(693.3599,256.2891)">
              <path
                d="m 0,0 v 2.54 l -174.552,88.482 c -3.823,-0.418 -5.917,-0.692 -5.917,-0.692 l -3.641,-74.338 -11.024,-1.689 V 0 h 10.24 L -10.24,0 Z"
                style="fill:#a32323;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path222"
              />
            </g>
            <g id="g224" transform="translate(683.1196,256.1738)">
              <path
                d="m 0,0 h -174.654 -10.24 v -15.521 l 11.959,-1.538 7.384,-73.271 H -4.425 l 3.641,74.337 11.024,1.689 0,14.304 z"
                style="fill:#f9f1dd;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path226"
              />
            </g>
            <g id="g228" transform="translate(526.8726,334.1055)">
              <path
                d="m 0,0 -5.038,-76.963 8.861,-78.349 c 0,0 80.458,-3.982 132.797,0 l 6.827,78.233 L 134.913,0 C 134.913,0 58.515,5.12 0,0"
                style="fill:#bec3c4;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path230"
              />
            </g>
            <g id="g232" transform="translate(534.4277,325.6553)">
              <path
                d="m 0,0 -4.488,-68.562 7.893,-69.794 c 0,0 71.675,-3.547 118.3,0 l 6.082,69.692 L 120.185,0 C 120.185,0 52.126,4.561 0,0"
                style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path234"
              />
            </g>
            <g id="g236" transform="translate(550.5649,330.9756)">
              <path
                d="M 0,0 V -147.988"
                style="fill:none;stroke:#bec3c4;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path238"
              />
            </g>
            <g id="g240" transform="translate(573.6055,330.9756)">
              <path
                d="M 0,0 V -147.988"
                style="fill:none;stroke:#bec3c4;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path242"
              />
            </g>
            <g id="g244" transform="translate(596.646,330.9756)">
              <path
                d="M 0,0 V -147.988"
                style="fill:none;stroke:#bec3c4;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path246"
              />
            </g>
            <g id="g248" transform="translate(619.6865,330.9756)">
              <path
                d="M 0,0 V -147.988"
                style="fill:none;stroke:#bec3c4;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path250"
              />
            </g>
            <g id="g252" transform="translate(642.7275,330.9756)">
              <path
                d="M 0,0 V -147.988"
                style="fill:none;stroke:#bec3c4;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path254"
              />
            </g>
            <g id="g256" transform="translate(666.0522,303.0625)">
              <path
                d="M 0,0 H -138.812"
                style="fill:none;stroke:#bec3c4;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path258"
              />
            </g>
            <g id="g260" transform="translate(666.0522,280.0225)">
              <path
                d="M 0,0 H -138.812"
                style="fill:none;stroke:#bec3c4;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path262"
              />
            </g>
            <g id="g264" transform="translate(666.0522,256.9814)">
              <path
                d="M 0,0 H -138.812"
                style="fill:none;stroke:#bec3c4;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path266"
              />
            </g>
            <g id="g268" transform="translate(666.0522,233.9404)">
              <path
                d="M 0,0 H -138.812"
                style="fill:none;stroke:#bec3c4;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path270"
              />
            </g>
            <g id="g272" transform="translate(666.0522,210.9004)">
              <path
                d="M 0,0 H -138.812"
                style="fill:none;stroke:#bec3c4;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path274"
              />
            </g>
            <g id="g276" transform="translate(498.2256,268.1436)">
              <path
                d="m 0,0 13.44,1.569 5.299,74.645 c 0,0 83.638,8.718 153.355,-2.231 L 180.739,1.569 193.428,0"
                style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path278"
              />
            </g>
            <g id="g280" transform="translate(325.4351,302.7578)">
              <path
                d="M 0,0 52.143,57.991 78.694,36.575 c 0,0 -63.547,-82.215 -67.424,-81.805 -27.228,2.876 -87.151,51.717 -91.89,61.267 -4.738,9.55 6.976,46.613 6.976,46.613 0,0 19.298,-0.485 26.601,-4.659 7.302,-4.174 55.407,-58.479 55.407,-58.479 z"
                style="fill:#bcebf5;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path282"
              />
            </g>
            <g id="g284" transform="translate(465.8154,321.0459)">
              <path
                d="m 0,0 c 0,0 9.982,-34.271 18.16,-40.957 8.177,-6.686 54.348,-41.681 67.394,-63.069 L 71.25,-155.495 H 11.155 c 0,0 -28.122,51.841 -51.126,71.008 -23.003,19.168 6.63,75.947 6.63,75.947 z"
                style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path286"
              />
            </g>
            <g id="g288" transform="translate(455.1997,361.1953)">
              <path
                d="m 0,0 -24.532,-4.114 c 0,0 -3.275,-10.597 -7.399,-13.925 -4.124,-3.327 -38.456,-7.029 -38.456,-7.029 0,0 0.089,-18.828 5.998,-23.733 5.909,-4.904 25.76,-7.089 37.345,-7.947 10.479,-0.776 28.541,-1.004 41.048,9.04 12.508,10.043 15.102,41.906 15.102,41.906 z"
                style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path290"
              />
            </g>
            <g id="g292" transform="translate(455.1997,361.1953)">
              <path
                d="m 0,0 -21.697,-3.639 c -1.392,-4.324 -4.295,-12.363 -7.51,-15.455 -4.492,-4.319 -14.722,-9.001 -16.732,-13.264 -1.113,-2.359 -2.921,-12.705 -4.314,-21.48 7.743,-1.542 16.757,-2.432 23.209,-2.91 10.479,-0.776 28.541,-1.004 41.048,9.04 12.508,10.043 15.102,41.906 15.102,41.906 z"
                style="fill:#d07a40;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path294"
              />
            </g>
            <g id="g296" transform="translate(549.23,209.3213)">
              <path
                d="m 0,0 2.139,7.698 c -13.045,21.389 -59.217,56.384 -67.394,63.07 -3.431,2.804 -7.176,10.464 -10.371,18.412 -8.475,-10.061 -20.977,-26.528 -22.166,-37.377 -1.816,-16.554 69.794,-67.172 69.794,-67.172 z"
                style="fill:#52392d;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path298"
              />
            </g>
            <g id="g300" transform="translate(385.3145,328.3242)">
              <path
                d="m 0,0 12.429,8.963 c 0,0 -12.233,1.321 -13.58,-0.247 C -2.499,7.147 0,0 0,0"
                style="fill:#52392d;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path302"
              />
            </g>
            <g id="g304" transform="translate(455.1997,361.1953)">
              <path
                d="m 0,0 c 0,0 -5.229,-21.676 -4.827,-30.018 0.403,-8.342 12.599,-21.229 14.092,-26.73 1.869,-6.895 3.343,-18.908 3.343,-18.908 0,0 20.222,5.788 24.884,19.457 4.662,13.668 -8.386,50.397 -8.386,50.397 z"
                style="fill:#a45536;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path306"
              />
            </g>
            <g id="g308" transform="translate(430.7891,343.083)">
              <path
                d="m 0,0 c 0,0 1.892,6.604 3.77,7.039 1.878,0.434 2.139,-7.995 2.139,-7.995 0,0 -1.755,5.822 -2.442,5.822 C 2.781,4.866 0,0 0,0"
                style="fill:#52392d;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path310"
              />
            </g>
            <g id="g312" transform="translate(542.187,227.5322)">
              <path
                d="m 0,0 c 0,0 -40.887,29.186 -52.067,17.277 -11.181,-11.908 14.693,-72.281 14.693,-72.281 0,0 -37.349,12.229 -41.035,8.67 -3.685,-3.559 -3.382,-15.647 -3.382,-15.647 h 99.999 c 0,0 7.027,40.639 -18.208,61.981"
                style="fill:#d07a40;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path314"
              />
            </g>
            <g id="g316" transform="translate(421.0581,264.1758)">
              <path
                d="m 0,0 c 0,0 7.963,-64.02 9.177,-91.647 0,0 -18.253,21.299 -22.888,-6.978 h 37.139 c 0,0 7.585,54.038 8.655,62.74 C 35.321,-9.529 26.603,17.427 0,0"
                style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path318"
              />
            </g>
            <g id="g320" transform="translate(444.4863,165.5508)">
              <path
                d="M 0,0 C 0,0 15.904,92.069 0.14,99.421"
                style="fill:none;stroke:#52392d;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path322"
              />
            </g>
            <g id="g324" transform="translate(538.1787,228.541)">
              <path
                d="m 0,0 c 0,0 -40.179,25.305 -51.429,17.686 -11.25,-7.62 17.08,-80.327 17.08,-80.327"
                style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path326"
              />
            </g>
            <g id="g328" transform="translate(560.7417,179.2041)">
              <path
                d="m 0,0 v -3.083 c 0,0 -45.182,4.589 -76.48,18.12 0,0 -7.612,-28.341 18.568,-28.341 H 7.104 c 0,0 4.486,9.399 -7.104,13.304"
                style="fill:#52392d;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path330"
              />
            </g>
            <g id="g332" transform="translate(415.3135,165.4512)">
              <path
                d="M 0,0 4.58,12.538"
                style="fill:none;stroke:#52392d;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path334"
              />
            </g>
            <g id="g336" transform="translate(470.6787,165.3213)">
              <path
                d="M 0,0 2.571,12.668"
                style="fill:none;stroke:#52392d;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path338"
              />
            </g>
            <g id="g340" transform="translate(457.8213,361.1953)">
              <path
                d="m 0,0 c 0,0 -6.119,-23.044 -4.037,-32.871 2.082,-9.826 12.217,-14.613 14.076,-22.053 1.858,-7.439 2.471,-19.881 2.471,-19.881 0,0 20.597,5.463 24.776,17.733 4.178,12.269 -9.322,52.875 -9.322,52.875"
                style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path342"
              />
            </g>
            <g id="g344" transform="translate(487.0713,194.6504)">
              <path
                d="m 0,0 c 0,0 -4.398,-15.697 6.319,-22.995 10.717,-7.298 74.455,-5.755 74.455,-5.755"
                style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path346"
              />
            </g>
            <g id="g348" transform="translate(412.4072,291.0029)">
              <path
                d="m 0,0 -36.294,-4.175 2.448,-25.68 36.56,7.675 z"
                style="fill:#ffe0c4;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path350"
              />
            </g>
            <g id="g352" transform="translate(302.1738,469.9512)">
              <path
                d="m 0,0 c 0,0 15.07,0.241 22.744,-2.917 7.674,-3.157 17.804,-21.07 17.804,-21.07 0,0 -7.609,-28.663 -7.369,-48.146 0.24,-19.482 12.494,-37.87 -8.986,-51.15 l -14.685,-10.709 -35.45,52.606 z"
                style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path354"
              />
            </g>
            <g id="g356" transform="translate(278.835,418.6504)">
              <path
                d="m 0,0 -12.092,-43.839 34.361,-24.396 0.721,56.184 z"
                style="fill:#eda1a1;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path358"
              />
            </g>
            <g id="g360" transform="translate(317.6118,362.9463)">
              <path
                d="m 0,0 -0.936,0.698 c 0.081,0.109 8.068,10.858 9.125,15.017 1.06,4.171 -1.76,31.649 -1.789,31.927 l 1.162,0.121 C 7.679,46.622 10.431,19.798 9.32,15.428 8.207,11.045 0.334,0.449 0,0"
                style="fill:#bec3c4;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path362"
              />
            </g>
            <g id="g364" transform="translate(292.8481,459.8154)">
              <path
                d="m 0,0 c 19.735,8.253 43.59,-3.442 43.843,-16.238 0.43,-21.803 -9.369,-59.675 -14.864,-62.135 -5.489,-2.457 -34.081,6.648 -40.7,25.727 C -18.339,-33.567 -21.36,-8.933 0,0"
                style="fill:#ffe0c4;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path366"
              />
            </g>
            <g id="g368" transform="translate(284.2837,423.8096)">
              <path
                d="m 0,0 c 0,0 -13.847,18.557 -16.598,15.556 -2.751,-3.002 -2.251,-16.499 1.501,-20.506 3.751,-4.006 13.913,-6.339 13.913,-6.339 z"
                style="fill:#ffe0c4;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path370"
              />
            </g>
            <g id="g372" transform="translate(270.437,428.0713)">
              <path
                d="m 0,0 c 0,0 -1.751,5.063 0,5.427 1.751,0.364 10.676,-11.263 10.676,-11.263 0,0 -1.832,-5.006 -3.065,-5.006 -1.233,0 -3.609,3.251 -3.609,3.251 0,0 2.716,-0.57 3.609,-0.535 0.893,0.035 0.344,2.699 0.344,2.699 0,0 -5.704,7.966 -6.455,7.966 C 0.75,2.539 0,0 0,0"
                style="fill:#eda1a1;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path374"
              />
            </g>
            <g id="g376" transform="translate(309.5718,405.541)">
              <path
                d="m 0,0 c 0,0 9.223,2.368 10.741,-1.401 0,0 2.488,2.412 4.605,-1.644 0,0 -2.983,-5.09 -7.915,-4.651 C 2.5,-7.258 0,0 0,0"
                style="fill:#eda1a1;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path378"
              />
            </g>
            <g id="g380" transform="translate(325.7183,402.8672)">
              <path
                d="M 0,0 C 0,0 -7.455,0.21 -17.431,3.718 -17.431,3.718 -9.647,-8.76 0,0"
                style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path382"
              />
            </g>
            <g id="g384" transform="translate(308.2876,408.7705)">
              <path
                d="m 0,0 c 0,0 -2.631,0.555 -3.289,-1.418 0,0 -0.327,4.772 3.289,1.418"
                style="fill:#eda1a1;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path386"
              />
            </g>
            <g id="g388" transform="translate(317.5527,426.6572)">
              <path
                d="m 0,0 c 0,0 -0.562,6.57 -11.932,2.067 0,0 6.677,5.686 10.536,3.185 C 0.954,3.729 0,0 0,0"
                style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path390"
              />
            </g>
            <g id="g392" transform="translate(328.9932,424.7686)">
              <path
                d="M 0,0 C 0,0 3.015,3.188 5.822,0 5.822,0 4.627,4.189 2.438,3.744 0.928,3.437 0,0 0,0"
                style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path394"
              />
            </g>
            <g id="g396" transform="translate(320.9795,435.3359)">
              <path
                d="m 0,0 c 0,0 -3.735,5.654 -11.202,5.012 -5.463,-0.47 -8.451,-2.296 -8.451,-2.296 0,0 3.664,3.971 10.356,4.662 C 0.348,8.376 0,0 0,0"
                style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path398"
              />
            </g>
            <g id="g400" transform="translate(321.8647,434.71)">
              <path
                d="M 0,0 1.69,2.205 C 1.69,2.205 2.376,-0.125 0,0"
                style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path402"
              />
            </g>
            <g id="g404" transform="translate(329.2495,433.7148)">
              <path
                d="M 0,0 C 0,0 4.063,2.778 7.223,-0.375 6.393,2.096 2.901,6.713 0,0"
                style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path406"
              />
            </g>
            <g id="g408" transform="translate(325.3662,426.6572)">
              <path
                d="m 0,0 c 0,0 -1,-5.546 2.751,-14.175 l -6.753,-1.582 c 0,0 4.752,-1.044 10.005,1.082 0,0 -4.878,6.964 -6.003,14.675"
                style="fill:#eda1a1;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path410"
              />
            </g>
            <g id="g412" transform="translate(347.2241,178.4893)">
              <path
                d="m 0,0 c -1,20.678 -8.676,107.15 -8.676,107.15 2.758,5.763 5.042,11.453 4.542,13.633 -1.16,5.054 -42.234,65.522 -42.234,65.522 l -32.027,18.798 c 0,0 -25.495,-14.558 -30.498,-34.645 -3.309,-13.289 1.063,-64.127 4.402,-97.019 l -17.681,-172.237 h 117.67 c 0,0 5.502,78.12 4.502,98.798"
                style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path414"
              />
            </g>
            <g id="g416" transform="translate(259.8076,377.3906)">
              <path
                d="M 0,0 9.851,15.581 46.031,0.214 44.83,-18.185 61.173,-26.976 75.007,-63.872 c 0,0 -37.075,42.341 -41.784,44.949 C 28.513,-16.313 0,0 0,0"
                style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path418"
              />
            </g>
            <g id="g420" transform="translate(235.9731,79.6914)">
              <path
                d="m 0,0 c 4.355,35.139 15.438,121.141 20.207,126.291 6.003,6.482 55.039,16.027 55.039,16.027 l -45.28,9.632 c 0,0 -16.105,88.999 -17.263,105.308 -1.157,16.307 11.131,40.44 11.131,40.441 C 15.981,291.601 5.396,281.451 2.358,269.256 -0.951,255.967 3.421,205.129 6.76,172.237 L -10.921,0 Z"
                style="fill:#bcebf5;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path422"
              />
            </g>
            <g id="g424" transform="translate(256.0059,368.0264)">
              <path
                d="m 0,0 c 0,0 14.647,-3.35 21.27,-9.651 6.624,-6.302 42.348,-71.985 42.348,-71.985 l 83.583,10.808 5.982,-34.905 c 0,0 -100.612,-23.478 -108.866,-22.007 -8.254,1.471 -59.944,71.46 -60.319,88.809 C -16.378,-21.581 0,0 0,0"
                style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path426"
              />
            </g>
            <g id="g428" transform="translate(409.1885,262.293)">
              <path
                d="m 0,0 -0.78,4.55 -99.941,-19.131 8.778,30.433 -17.323,-16.239 c -36.622,27.953 -52.562,61.334 -58.525,77.427 -0.922,-3.447 -1.466,-6.919 -1.394,-10.237 0.375,-17.35 52.066,-87.339 60.32,-88.81 C -100.611,-23.478 0,0 0,0"
                style="fill:#bcebf5;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path430"
              />
            </g>
            <g id="g432" transform="translate(277.2759,358.375)">
              <path
                d="m 0,0 c 6.624,-6.302 42.348,-71.984 42.348,-71.984 l 83.583,10.807 5.982,-34.905 c 0,0 -100.612,-23.478 -108.866,-22.007 -5.031,0.897 -26.206,27.257 -42.056,51.632 -6.061,9.321 -11.343,18.352 -14.647,25.557"
                style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path434"
              />
            </g>
            <g id="g436" transform="translate(276.9019,265.5156)">
              <path
                d="M 0,0 C 0,0 -22.732,19.18 -32.232,31.858"
                style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path438"
              />
            </g>
            <g id="g440" transform="translate(319.624,286.3906)">
              <path
                d="m 0,0 c 0,0 -11.024,-4.99 -14.473,-10.424 -3.449,-5.433 -7.839,-23.942 -7.839,-23.942 0,0 8.218,14.439 22.312,29.981"
                style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path442"
              />
            </g>
            <g id="g444" transform="translate(331.0933,185.4922)">
              <path
                d="M 0,0 -60.654,-7.503"
                style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path446"
              />
            </g>
            <g id="g448" transform="translate(259.8076,377.3906)">
              <path
                d="m 0,0 c 0,0 30.101,-15.216 36.748,-19.767 6.647,-4.55 40.135,-51.352 40.135,-51.352"
                style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path450"
              />
            </g>
            <g id="g452" transform="translate(412.4072,290.9951)">
              <path
                d="m 0,0 c 0,0 7.896,12.119 11.333,13.369 3.439,1.25 20.442,9.064 20.442,9.064 0,0 2.24,-3.177 0.395,-6.303 C 30.326,13.004 18.991,4.535 18.991,4.535 L 1.312,-10.719 Z"
                style="fill:#ffe0c4;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path454"
              />
            </g>
            <g id="g456" transform="translate(412.4072,290.9951)">
              <path
                d="m 0,0 18.991,8.768 c 0,0 16.688,-0.094 19.065,-0.159 2.378,-0.064 12.341,2.437 14.939,2.437 2.598,0 3.861,-1.231 4.317,-3.209 0,0 -17.102,-7.262 -19.256,-7.887 C 35.902,-0.675 26.635,-1.166 26.635,-1.166 L 48.56,2.28 c 0,0 5.057,2.475 9.422,3.931 2.08,0.693 3.651,-0.827 5.118,-2.661 0,0 -14.241,-10.363 -16.813,-10.967 -2.571,-0.604 -19.196,-4.091 -19.196,-4.091 l 17.184,4.895 c 0,0 11.934,8.782 14.131,8.893 2.196,0.112 3.907,-2.799 3.907,-2.799 0,0 -10.784,-11.408 -12.659,-12.346 -1.875,-0.938 -15.784,-5.469 -15.784,-5.469 0,0 9.134,7.303 10.137,7.615 1.003,0.313 8.499,2.066 10.062,2.066 3.282,0 4.409,-3.242 4.409,-3.242 0,0 -7.103,-2.003 -14.39,-4.95 -5.807,-2.349 -13.694,-4.943 -18.194,-5.884 -2.254,-0.47 -23.18,0.557 -23.18,0.557 z"
                style="fill:#ffe0c4;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path458"
              />
            </g>
            <g id="g460" transform="translate(442.2515,312.5781)">
              <path
                d="m 0,0 c 0,0 0.711,-2.6 0.711,-3.355 0,-0.757 -2.443,-2.385 -2.443,-2.385 l -1.286,4.364"
                style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path462"
              />
            </g>
            <g id="g464" transform="translate(467.8604,298.0459)">
              <path
                d="M 0,0 C 0,0 -0.987,2.489 -2.081,2.724 -3.175,2.958 -4.738,2.177 -4.738,2.177 l 1.363,-3.599"
                style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path466"
              />
            </g>
            <g id="g468" transform="translate(317.0562,362.7187)">
              <path
                d="m 0,0 c -1.094,0.166 -26.831,4.217 -31.399,15.65 -4.478,11.207 -7.712,49.556 -7.847,51.184 l 1.163,0.096 c 0.033,-0.397 3.354,-39.801 7.768,-50.846 C -25.993,5.268 -0.085,1.193 0.176,1.153 Z"
                style="fill:#bec3c4;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path470"
              />
            </g>
            <g id="g472" transform="translate(349.9956,294.1191)">
              <path
                d="M 0,0 C -0.562,0 -1.127,0.088 -1.697,0.268 -17.336,5.21 -32.769,66.432 -33.418,69.035 l 1.133,0.282 c 0.157,-0.63 15.919,-63.189 30.94,-67.937 8.983,-2.819 18.217,24.789 25.625,46.993 5.079,15.225 9.467,28.374 13.543,32.718 10.511,11.204 27.326,5.524 27.495,5.465 L 64.935,85.453 C 64.772,85.51 48.662,90.937 38.674,80.292 34.773,76.136 30.214,62.471 25.387,48.003 17.506,24.382 9.371,0 0,0"
                style="fill:#bec3c4;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path474"
              />
            </g>
            <g id="g476" transform="translate(312.9019,364.1113)">
              <path
                d="m 0,0 c 0,0 1.525,2.29 6.48,2.301 0,0 -0.315,-4.154 -1.197,-7.089 0,0 -3.775,2.006 -5.283,4.788"
                style="fill:#bec3c4;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path478"
              />
            </g>
            <g id="g480" transform="translate(333.3037,455.9277)">
              <path
                d="m 0,0 c 0,0 -7.639,-11.282 -21.622,-16.861 -13.982,-5.579 -18.651,-6.522 -18.651,-6.522 0,0 -9.845,-43.448 -18.953,-52.821 -9.107,-9.373 -29.408,-18.528 -29.408,-18.528 0,0 10.635,36.503 13.636,48.769 3.002,12.267 -0.555,28.4 11.353,46.408 11.909,18.009 33.928,17.98 33.928,17.98 z"
                style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path482"
              />
            </g>
            <g id="g484" transform="translate(324.918,458.2705)">
              <path
                d="m 0,0 c 0,0 -28.349,-17.332 -49.932,-18.577 -21.583,-1.245 35.733,14.901 39.987,19.931 4.255,5.031 -27.839,-4.482 -41.058,-3.995"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path486"
              />
            </g>
            <path
              d="M 117.024,79.691 H 682.095 V 155.7 H 117.024 Z"
              style="fill:#bec3c4;fill-opacity:1;fill-rule:nonzero;stroke:none"
              id="path488"
            />
            <g id="g490" transform="translate(682.0957,145.9482)">
              <path
                d="M 0,0 -565.071,-22.282 V 9.752 L 0,9.752 Z"
                style="fill:#98a4a5;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path492"
              />
            </g>
            <path
              d="m 87.774,145.948 h 623.571 v 19.503 H 87.774 Z"
              style="fill:#bec3c4;fill-opacity:1;fill-rule:nonzero;stroke:none"
              id="path494"
            />
            <g id="g496" transform="translate(84.2026,159.2852)">
              <path
                d="M 0,0 H 631.595"
                style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path498"
              />
            </g>
            <g id="g500" transform="translate(178.3486,238.21)">
              <path
                d="M 0,0 V 30.997 L 54.53,30.697 56.158,0 H 48.724 L 47.185,22.841 H 6.155 L 7.18,0 Z"
                style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path502"
              />
            </g>
            <g id="g504" transform="translate(151.166,234.5205)">
              <path
                d="m 0,0 0.684,-68.99 106.825,-0.079 2.394,71.443 z"
                style="fill:#d83636;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path506"
              />
            </g>
            <g id="g508" transform="translate(258.7192,166.7686)">
              <path
                d="m 0,0 -107.202,67.76 -0.351,-0.007 0.683,-68.991 106.826,-0.079 z"
                style="fill:#a32323;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path510"
              />
            </g>
            <g id="g512" transform="translate(148.0884,248.2295)">
              <path
                d="m 0,0 v -20.566 l 115.133,0.63 v 19.89 z"
                style="fill:#d83636;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path514"
              />
            </g>
            <g id="g516" transform="translate(222.5107,191.6455)">
              <path
                d="M 0,0 -0.664,9.634 -11.577,9.597 V 21.211 L -21.21,20.546 -21.173,9.564 -32.787,9.525 V 0 h 11.646 l 0.039,-11.576 h 9.525 V 0 Z"
                style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path518"
              />
            </g>
            <g id="g520" transform="translate(148.0884,227.6631)">
              <path
                d="M 0,0 115.133,0.631"
                style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path522"
              />
            </g>
            <g id="g524" transform="translate(157.8384,221.4502)">
              <path
                d="m 0,0 2.787,-49.179 91.53,-1.595 1.752,51.573 z"
                style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path526"
              />
            </g>
            <path
              d="m 364.178,200.213 h 18.763 v -33.11 h -18.763 z"
              style="fill:#f9f1dd;fill-opacity:1;fill-rule:nonzero;stroke:none"
              id="path528"
            />
            <g id="g530" transform="translate(361.3091,200.2129)">
              <path
                d="M 0,0 H 23.839 V 9.345 L 0,7.946 Z"
                style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path532"
              />
            </g>
            <path
              d="m 370.396,174.644 h 6.328 v 20.007 h -6.328 z"
              style="fill:#d83636;fill-opacity:1;fill-rule:nonzero;stroke:none"
              id="path534"
            />
            <g id="g536" transform="translate(644.6177,478.6377)">
              <path
                d="m 0,0 v 0 c 0.539,-4.535 -2.977,-8.535 -7.543,-8.582 l -230.131,-2.394 c -4.535,-0.047 -8.123,3.827 -7.728,8.345 l 0.037,0.414 c 0.344,3.94 3.626,6.974 7.581,7.007 L -7.689,6.771 C -3.774,6.804 -0.462,3.887 0,0"
                style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path538"
              />
            </g>
            <g id="g540" transform="translate(390.269,474.1689)">
              <path
                d="M 0,0 4.471,21.857 H 259.364 L 263.132,2.572 Z"
                style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path542"
              />
            </g>
            <g id="g544" transform="translate(430.0083,485.0977)">
              <path
                d="m 0,0 3.02,18 h 8.822 l 4.687,-20.571 z"
                style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path546"
              />
            </g>
            <g id="g548" transform="translate(597.1328,485.0977)">
              <path
                d="m 0,0 3.02,18 h 8.822 l 4.687,-20.571 z"
                style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path550"
              />
            </g>
            <g id="g552" transform="translate(438.2729,488.9551)">
              <path
                d="M 0,0 V 31.354"
                style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path554"
              />
            </g>
            <g id="g556" transform="translate(605.3975,488.9551)">
              <path
                d="M 0,0 V 31.354"
                style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path558"
              />
            </g>
            <g id="g560" transform="translate(391.6211,488.9551)">
              <path
                d="M 0,0 H 261.78"
                style="fill:none;stroke:#ffffff;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path562"
              />
            </g>
            <g id="g564" transform="translate(316.5771,363.1543)">
              <path
                d="m 0,0 c 0,0 18.994,-66.906 33.994,-66.53 15,0.376 24.528,100.823 63.157,84.778"
                style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path566"
              />
            </g>
            <g id="g568" transform="translate(385.623,357.2979)">
              <path
                d="m 0,0 c 0,0 7.07,16.368 8.607,20.211 0,0 11.375,4.522 12.936,5.523 1.562,1 8.706,5.037 8.706,5.037 0,0 2.574,-4.919 0.691,-8.271 -1.882,-3.352 -11.692,-9.343 -11.692,-9.343 0,0 0.312,-10.927 -5.065,-22.259 z"
                style="fill:#ffe0c4;fill-opacity:1;fill-rule:nonzero;stroke:none"
                id="path570"
              />
            </g>
            <g id="g572" transform="translate(415.8716,388.0684)">
              <path
                d="M 0,0 C 0,0 -12.538,-8.177 -21.642,-10.56"
                style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path574"
              />
            </g>
            <g id="g576" transform="translate(413.4141,386.6729)">
              <path
                d="m 0,0 c 0,0 0.707,-3.093 0,-3.885 -0.708,-0.791 -2.474,-1.871 -2.474,-1.871 l -0.85,3.672"
                style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                id="path578"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default { VeterinarianLogo };

`;

function UpperSubChar(value){
    const process = value.split('-');
    if(process.length==1){
        return value
    }

    let result = process[0];

    for (let index = 1; index < process.length; index++) {
        result = result + `${process[index]}`.substring(0,1).toUpperCase() + `${process[index]}`.substring(1)
    }
    
    return result;
}

function Parse() {
    let result = rawSVGTSX.replace(/style=".+"/g, (value)=>{
        let processString = `${value}`;
        processString = processString.replace('style="','')
        processString = processString.replace('"','')

        processString = processString.split(';')

        const results = [];

        for (const iterator of processString) {
            let [key, value] = iterator.split(':');
            key = UpperSubChar(key)

            if((+value - +value) === 0){
                results.push(`${key}:${value}`);
                continue
            } 

            results.push(`${key}:'${value}'`);
        }

        return `style={{${results.join(',')}}}`;
    });

    result = result.replace(/id=".+"/g, '');

    return result;
}


fs.writeFile(path.join(process.cwd(), 'dev_temp', 'svg.tsx'), Parse());