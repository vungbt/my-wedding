import clsx from 'clsx';
import { IconProps } from '.';

export default function Ring({ className, transform, ...reset }: Readonly<IconProps>) {
  return (
    <svg
      fill="currentColor"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      className={clsx('h-6 w-6 ', className)}
      transform={transform}
      {...reset}
    >
      <g>
        <g>
          <rect x="248.282" width="15.437" height="55.646" />
        </g>
      </g>
      <g>
        <g>
          <rect
            x="301.818"
            y="37.505"
            transform="matrix(0.4198 -0.9076 0.9076 0.4198 150.2104 325.4243)"
            width="55.645"
            height="15.436"
          />
        </g>
      </g>
      <g>
        <g>
          <rect
            x="352.888"
            y="94.013"
            transform="matrix(0.9051 -0.4251 0.4251 0.9051 -7.1327 171.4971)"
            width="55.644"
            height="15.437"
          />
        </g>
      </g>
      <g>
        <g>
          <rect
            x="123.564"
            y="73.921"
            transform="matrix(0.4252 -0.9051 0.9051 0.4252 -16.6274 177.3064)"
            width="15.437"
            height="55.646"
          />
        </g>
      </g>
      <g>
        <g>
          <rect
            x="174.632"
            y="17.401"
            transform="matrix(0.9076 -0.4198 0.4198 0.9076 -2.1385 80.7295)"
            width="15.436"
            height="55.645"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M290.936,186.543v-6.118h1.686l35.049-49.114c0.269-0.375,0.487-0.77,0.682-1.175c0.557-1.074,0.877-2.292,0.877-3.583
			v-3.216l-32.892-32.611h-80.676l-32.891,32.611v3.216c0,1.27,0.311,2.467,0.851,3.529c0.199,0.419,0.422,0.828,0.698,1.213
			l35.059,49.13h1.686v6.118C147.03,202.608,91.399,268.625,91.399,347.399C91.399,438.16,165.24,512,256,512
			S420.6,438.16,420.6,347.399C420.602,268.625,364.972,202.608,290.936,186.543z M288.649,159.42l-17.874-25.047h35.747
			L288.649,159.42z M275.499,180.425v2.374h-38.997v-2.374H275.499z M238.344,164.987l17.657-24.743l17.657,24.743H238.344z
			 M222.019,106.164h67.964l12.882,12.772h-93.726L222.019,106.164z M205.48,134.372h35.747l-17.874,25.047L205.48,134.372z
			 M256.001,496.563c-82.249,0-149.163-66.915-149.163-149.163s66.915-149.163,149.163-149.163s149.163,66.915,149.163,149.163
			S338.25,496.563,256.001,496.563z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M256.001,221.877c-69.213,0-125.523,56.309-125.523,125.523s56.31,125.523,125.523,125.523
			s125.523-56.309,125.523-125.523S325.214,221.877,256.001,221.877z M256.001,457.485c-60.701,0-110.086-49.384-110.086-110.086
			s49.384-110.086,110.086-110.086s110.086,49.384,110.086,110.086C366.087,408.102,316.702,457.485,256.001,457.485z"
          />
        </g>
      </g>
    </svg>
  );
}
