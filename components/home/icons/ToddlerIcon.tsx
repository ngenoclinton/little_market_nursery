export default function ToddlerIcon({ className = "w-24 h-24", color = "#ff6900" }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M18 4a5 5 0 0 0-5 5v4h1a2 2 0 0 1 0 4h-4a2 2 0 0 1 0-4h1V9A5 5 0 1 0 6 9v2" />
        <path d="M6 10h12" />
        <path d="M9 20l3-3 3 3" />
        <path d="M15 20l-3-3-3 3" />
      </svg>
    )
  }
  