import React from 'react';

export const DwimitraLogo: React.FC<{ className?: string }> = ({ className = 'h-10' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 200 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        {/* d */}
        <text
          x="10"
          y="42"
          fontFamily="Inter, sans-serif"
          fontWeight="800"
          fontSize="34"
          fill="#800020"
          letterSpacing="-1"
        >
          d
        </text>
        {/* bottle representation */}
        <path
          d="M35 22h4v4h-4v-4zm-1 5h6v17h-6V27z"
          fill="#5c4033"
        />
        {/* w i m i t r a */}
        <text
          x="48"
          y="42"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
          fontSize="30"
          fill="#800020"
          letterSpacing="-1.5"
        >
          wimitra
        </text>
        {/* spoon representation on i */}
        <circle cx="118" cy="18" r="3" fill="#800020" />
        {/* group text */}
        <text
          x="110"
          y="54"
          fontFamily="Inter, sans-serif"
          fontWeight="500"
          fontSize="11"
          fill="#555"
          letterSpacing="2"
        >
          GROUP
        </text>
      </svg>
    </div>
  );
};

export const ArthaBogaLogo: React.FC<{ className?: string }> = ({ className = 'h-10' }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 280 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        {/* OT Group Spiral representation */}
        <g transform="translate(15, 10)">
          {/* Blue swirl */}
          <path
            d="M 25 30 C 25 15, 45 15, 45 30 C 45 40, 30 40, 25 30 C 20 20, 40 10, 50 20"
            stroke="#0a3e74"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Red swirl */}
          <path
            d="M 30 25 C 15 25, 15 45, 30 45 C 40 45, 40 30, 30 25 C 20 20, 10 40, 20 50"
            stroke="#d32f2f"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Orange/Yellow swirl */}
          <path
            d="M 35 35 C 35 45, 50 45, 55 35 C 55 25, 45 20, 35 25 C 25 30, 30 50, 45 55"
            stroke="#f57c00"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
        </g>
        
        {/* Text "artaboga" */}
        <text
          x="85"
          y="42"
          fontFamily="Inter, sans-serif"
          fontWeight="800"
          fontSize="26"
          fill="#0a3e74"
          letterSpacing="-1"
        >
          artaboga
        </text>
        
        {/* Swish Graphic */}
        <path
          d="M190 30 Q215 15 235 30 Q215 45 190 30 Z"
          fill="#f57c00"
          opacity="0.8"
        />
        <path
          d="M205 32 Q230 18 250 32 Q230 46 205 32 Z"
          fill="#0a3e74"
          opacity="0.9"
        />
        
        {/* text cemerlang */}
        <text
          x="85"
          y="58"
          fontFamily="Inter, sans-serif"
          fontWeight="600"
          fontSize="11"
          fill="#f57c00"
          letterSpacing="3"
        >
          DISTRIBUTION
        </text>
      </svg>
    </div>
  );
};

export const AlfamidiLogo: React.FC<{ className?: string }> = ({ className = 'h-10' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 160 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        {/* Rounded red container for the 'A' */}
        <rect x="10" y="5" width="60" height="55" rx="10" fill="#e31b23" />
        
        {/* The Stylized white 'A' */}
        <path
          d="M22 50 L38 18 L54 50"
          stroke="white"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30 38 L46 38"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M38 34 Q45 34 50 42"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />

        {/* Text "Alfamidi" */}
        <text
          x="10"
          y="74"
          fontFamily="Inter, sans-serif"
          fontWeight="800"
          fontSize="16"
          fill="#005691"
          fontStyle="italic"
        >
          Alfa
          <tspan fill="#e31b23">midi</tspan>
        </text>

        {/* Slogan line representation */}
        <path
          d="M75 15 L145 15"
          stroke="#ccc"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text
          x="75"
          y="30"
          fontFamily="Inter, sans-serif"
          fontSize="8"
          fill="#666"
          fontWeight="500"
        >
          Belanja lengkap,
        </text>
        <text
          x="75"
          y="42"
          fontFamily="Inter, sans-serif"
          fontSize="8"
          fill="#e31b23"
          fontWeight="600"
        >
          harga pas!
        </text>
      </svg>
    </div>
  );
};
