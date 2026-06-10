import { motion } from 'framer-motion';

interface LogoProps {
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ showText = true, size = 'md' }: LogoProps) {
  const iconSizes = { sm: 28, md: 36, lg: 48 };
  const textSizes = { sm: 'text-base', md: 'text-xl', lg: 'text-2xl' };
  const iconSize = iconSizes[size];

  return (
    <a href="#hero" className="flex items-center gap-3 group">
      {/* Icon mark */}
      <div className="relative">
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="50%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
          </defs>
          {/* Hexagon shape */}
          <motion.path
            d="M24 2 L44 13 L44 35 L24 46 L4 35 L4 13 Z"
            stroke="url(#logo-grad)"
            strokeWidth="2.5"
            fill="rgba(79, 70, 229, 0.08)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
          {/* Inner tech lines */}
          <line x1="24" y1="8" x2="24" y2="18" stroke="#4F46E5" strokeWidth="1.5" opacity="0.5" />
          <line x1="24" y1="30" x2="24" y2="40" stroke="#A855F7" strokeWidth="1.5" opacity="0.5" />
          <line x1="10" y1="19" x2="18" y2="24" stroke="#06B6D4" strokeWidth="1.5" opacity="0.5" />
          <line x1="30" y1="24" x2="38" y2="19" stroke="#4F46E5" strokeWidth="1.5" opacity="0.5" />
          {/* CXL text */}
          <text
            x="24"
            y="29"
            textAnchor="middle"
            fill="url(#logo-grad)"
            fontSize="14"
            fontWeight="bold"
            fontFamily="Arial, sans-serif"
          >
            CXL
          </text>
          {/* Small dots at corners */}
          <circle cx="24" cy="2" r="1.5" fill="#4F46E5" />
          <circle cx="24" cy="46" r="1.5" fill="#A855F7" />
          <circle cx="44" cy="13" r="1.5" fill="#06B6D4" />
          <circle cx="4" cy="13" r="1.5" fill="#4F46E5" />
          <circle cx="44" cy="35" r="1.5" fill="#A855F7" />
          <circle cx="4" cy="35" r="1.5" fill="#06B6D4" />
        </svg>
        {/* Glow effect */}
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
      </div>

      {/* Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`${textSizes[size]} font-bold leading-tight text-gradient`}>
            陈晓乐团队
          </span>
          <span className="text-[10px] text-text-secondary tracking-[0.2em] uppercase">
            XHAgentOS
          </span>
        </div>
      )}
    </a>
  );
}
