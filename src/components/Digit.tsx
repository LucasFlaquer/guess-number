interface Props {
  height: number;
  width: number;
  topLed: boolean;
  topLeftLed: boolean;
  topRightLed: boolean;
  middleLed: boolean;
  bottomLeftLed: boolean;
  bottomRightLed: boolean;
  bottomLed: boolean;
  trueColor: string;
}

export function Digit({
  width,
  height,
  topLed,
  trueColor,
  topLeftLed,
  topRightLed,
  bottomLed,
  bottomLeftLed,
  bottomRightLed,
  middleLed,
}: Props) {
  const falseColor = '#DDDDDD';
  return (
    <span>
      <svg
        width={width}
        height={height}
        viewBox="0 0 56 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.7895 10.9829H42.6233L52.945 1.18105C51.9896 0.442602 50.7944 8.58307e-06 49.495 8.58307e-06H5.65672C4.36523 8.58307e-06 3.17945 0.436294 2.2272 1.16449L12.7895 10.9829Z"
          fill={topLed ? trueColor : falseColor}
        />
        <path
          d="M1.27099 2.08519C0.477317 3.05953 0 4.30211 0 5.65594V44.0142C0 46.213 1.25678 48.1143 3.08948 49.05L11.7331 42.572V11.8105L1.27099 2.08519Z"
          fill={topLeftLed ? trueColor : falseColor}
        />
        <path
          d="M43.4178 12.0558V42.572L52.0614 49.05C53.8941 48.1143 55.1509 46.213 55.1509 44.0142V5.65594C55.1509 4.31001 54.6791 3.07689 53.8957 2.10649L43.4178 12.0558Z"
          fill={topRightLed ? trueColor : falseColor}
        />
        <path
          d="M12.7895 89.0075H42.6233L52.945 98.81C51.9896 99.5469 50.7944 99.9911 49.495 99.9911H5.65672C4.36523 99.9911 3.17945 99.5532 2.2272 98.825L12.7895 89.0075Z"
          fill={bottomLed ? trueColor : falseColor}
        />
        <path
          d="M1.27099 97.9044C0.477317 96.9308 0 95.689 0 94.3344V55.9761C0 53.7774 1.25678 51.8768 3.08948 50.9403L11.7331 57.4183V88.1799L1.27099 97.9044Z"
          fill={bottomLeftLed ? trueColor : falseColor}
        />
        <path
          d="M43.4178 87.9345V57.4183L52.0614 50.9403C53.8941 51.8768 55.1509 53.7773 55.1509 55.9761V94.3344C55.1509 95.6795 54.6791 96.9126 53.8957 97.8846L43.4178 87.9345Z"
          fill={bottomRightLed ? trueColor : falseColor}
        />
        <path
          d="M42.5475 43.9937H12.6033L4.62869 49.8721L12.6033 55.7513H24.0201H31.1308H42.5475L50.5221 49.8721L42.5475 43.9937Z"
          fill={middleLed ? trueColor : falseColor}
        />
      </svg>
    </span>
  );
}
