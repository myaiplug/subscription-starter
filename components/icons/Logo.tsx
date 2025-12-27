const Logo = ({ ...props }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#7C4DFF', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#00C2FF', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <circle cx="16" cy="16" r="16" fill="url(#logoGradient)" />
    <path
      d="M16 8 L20 14 L16 20 L12 14 Z"
      fill="white"
      opacity="0.9"
    />
    <circle cx="16" cy="16" r="3" fill="white" />
  </svg>
);

export default Logo;
