export function AnimatedIcons() {
  return (
    <>
      <style>{`
        .ai-icon, .ai-trail {
          fill: #2b48e8;
          transform-origin: center;
          transform-box: fill-box;
        }

        /* 1. SQUIGGLE */
        .ai-squiggle {
          fill: none; stroke: #2b48e8; stroke-width: 14;
          stroke-linecap: round; stroke-linejoin: round;
          stroke-dasharray: 600; stroke-dashoffset: 600;
          animation: aiSquiggleDraw 6s ease-in-out infinite;
        }
        @keyframes aiSquiggleDraw {
          0%   { stroke-dashoffset: 600; }
          20%  { stroke-dashoffset: 0; }
          55%  { stroke-dashoffset: 0; }
          68%  { stroke-dashoffset: 0; opacity: 1; }
          70%  { stroke-dashoffset: 0; opacity: 0; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        .ai-squiggle-trail {
          fill: none; stroke: #2b48e8; stroke-width: 2;
          stroke-linecap: round; stroke-linejoin: round;
          stroke-dasharray: 600; stroke-dashoffset: 0;
          animation: aiSquiggleTrail 6s ease-in-out infinite;
        }
        @keyframes aiSquiggleTrail {
          0%, 68%  { opacity: 0; stroke-dashoffset: 0; }
          70%      { opacity: 1; stroke-dashoffset: 0; }
          95%      { opacity: 1; stroke-dashoffset: -600; }
          100%     { opacity: 0; stroke-dashoffset: -600; }
        }

        /* 2. BLOB */
        .ai-blob { animation: aiBlobLife 6s ease-in-out infinite; }
        @keyframes aiBlobLife {
          0%   { transform: scale(0) rotate(-20deg); opacity: 0; }
          12%  { transform: scale(1.1) rotate(0deg); opacity: 1; }
          20%  { transform: scale(0.97) rotate(2deg); }
          40%  { transform: scale(1.03) rotate(-2deg); }
          55%  { transform: scale(1) rotate(0deg); opacity: 1; }
          70%, 100% { transform: scale(0) rotate(15deg); opacity: 0; }
        }
        .ai-blob-trail { animation: aiBlobTrail 6s ease-in-out infinite; }
        @keyframes aiBlobTrail {
          0%, 62%  { opacity: 0; transform: translate(0,0) scale(0); }
          70%      { opacity: 1; transform: translate(0,0) scale(1); }
          90%      { opacity: 1; transform: translate(0,-40px) scale(0.9); }
          100%     { opacity: 0; transform: translate(0,-55px) scale(0.2); }
        }

        /* 3. CLOUD */
        .ai-cloud { animation: aiCloudDrift 6s ease-in-out infinite; }
        @keyframes aiCloudDrift {
          0%   { transform: translateX(-120px) scale(0.8); opacity: 0; }
          15%  { transform: translateX(0) scale(1); opacity: 1; }
          35%  { transform: translateX(5px) translateY(-3px); }
          55%  { transform: translateX(-5px) translateY(3px); }
          65%  { transform: translateX(0); opacity: 1; }
          75%, 100% { transform: translateX(120px) scale(0.8); opacity: 0; }
        }
        .ai-rain-1 { animation: aiRainFall 6s ease-in-out infinite; }
        .ai-rain-2 { animation: aiRainFall 6s ease-in-out infinite -0.15s; }
        .ai-rain-3 { animation: aiRainFall 6s ease-in-out infinite -0.3s; }
        @keyframes aiRainFall {
          0%, 62%  { opacity: 0; transform: translateY(-10px); }
          68%      { opacity: 1; transform: translateY(0); }
          90%      { opacity: 1; transform: translateY(45px); }
          100%     { opacity: 0; transform: translateY(60px); }
        }

        /* 4. PEANUT */
        .ai-peanut { animation: aiPeanutRoll 6s cubic-bezier(.5,.1,.5,1) infinite; }
        @keyframes aiPeanutRoll {
          0%   { transform: translateX(-150px) rotate(-360deg); opacity: 0; }
          18%  { transform: translateX(0) rotate(0deg); opacity: 1; }
          35%  { transform: rotate(-8deg) scale(1.05); }
          55%  { transform: rotate(8deg) scale(0.95); }
          65%  { transform: rotate(0deg); opacity: 1; }
          75%, 100% { transform: translateX(150px) rotate(360deg); opacity: 0; }
        }
        .ai-peanut-trail {
          animation: aiPeanutTrail 6s cubic-bezier(.5,.1,.5,1) infinite;
          transform-origin: center; transform-box: fill-box;
        }
        @keyframes aiPeanutTrail {
          0%, 65%  { opacity: 0; transform: translateX(-50px) rotate(-180deg) scale(0); }
          72%      { opacity: 1; transform: translateX(-25px) rotate(-30deg) scale(1); }
          90%      { opacity: 1; transform: translateX(60px) rotate(540deg) scale(1); }
          100%     { opacity: 0; transform: translateX(95px) rotate(720deg) scale(0.3); }
        }

        /* 5. CHARACTER */
        .ai-character-body {
          animation: aiCharacterBody 6s ease-in-out infinite;
          transform-origin: bottom center;
        }
        @keyframes aiCharacterBody {
          0%   { transform: translateY(100%) scaleY(0.3); opacity: 0; }
          18%  { transform: translateY(0) scaleY(1); opacity: 1; }
          35%  { transform: translateY(-3px) scaleY(1.02); }
          55%  { transform: translateY(2px) scaleY(0.98); }
          65%  { transform: translateY(0) scaleY(1); opacity: 1; }
          70%  { transform: translateY(0) scaleY(0.1); opacity: 0; }
          100% { opacity: 0; }
        }
        .ai-character-head {
          animation: aiCharacterHead 6s ease-in-out infinite;
          transform-origin: center; transform-box: fill-box;
        }
        @keyframes aiCharacterHead {
          0%   { transform: translateY(70px) scale(0); opacity: 0; }
          18%  { transform: translateY(0) scale(1); opacity: 1; }
          65%  { transform: translateY(0) scale(1); opacity: 1; }
          72%  { transform: translateY(35px) scale(1,0.85); opacity: 1; }
          76%  { transform: translateY(18px) scale(1); opacity: 1; }
          80%  { transform: translateY(35px) scale(1,0.9); opacity: 1; }
          84%  { transform: translateY(25px) scale(1); opacity: 1; }
          88%  { transform: translateY(35px) scale(1,0.95); opacity: 1; }
          100% { transform: translateY(-90px) scale(0.5); opacity: 0; }
        }

        /* 6. SUNBURST */
        .ai-sunburst { animation: aiSunburstLife 6s ease-in-out infinite; }
        @keyframes aiSunburstLife {
          0%   { transform: scale(0) rotate(0deg); opacity: 0; }
          13%  { transform: scale(1.15) rotate(45deg); opacity: 1; }
          22%  { transform: scale(1) rotate(60deg); }
          45%  { transform: scale(1.06) rotate(180deg); }
          65%  { transform: scale(1) rotate(300deg); opacity: 1; }
          72%, 100% { transform: scale(0) rotate(360deg); opacity: 0; }
        }
        .ai-sunburst-trail { animation: aiSunburstTrail 6s ease-in-out infinite; }
        @keyframes aiSunburstTrail {
          0%, 68%  { opacity: 0; transform: rotate(0deg) scale(0.8); }
          74%      { opacity: 1; transform: rotate(20deg) scale(1); }
          82%      { opacity: 1; transform: rotate(80deg) scale(1.15); }
          90%      { opacity: 1; transform: rotate(140deg) scale(1); }
          100%     { opacity: 0; transform: rotate(220deg) scale(0.6); }
        }

        /* 7. DROP */
        .ai-drop {
          animation: aiDropFall 6s cubic-bezier(.5,0,.5,1) infinite;
          transform-origin: top center;
        }
        @keyframes aiDropFall {
          0%   { transform: translateY(-120%) scaleY(1.4) scaleX(0.7); opacity: 0; }
          16%  { transform: translateY(0) scaleY(1) scaleX(1); opacity: 1; }
          30%  { transform: translateY(0) scaleY(0.95) scaleX(1.05); }
          50%  { transform: translateY(0) scaleY(1.03) scaleX(0.97); }
          65%  { transform: translateY(0) scaleY(1); opacity: 1; }
          72%  { transform: translateY(120%) scaleY(0.2) scaleX(1.3); opacity: 0; }
          100% { transform: translateY(120%); opacity: 0; }
        }
        .ai-drop-puddle {
          animation: aiDropPuddle 6s cubic-bezier(.5,0,.5,1) infinite;
          transform-origin: center; transform-box: fill-box;
        }
        @keyframes aiDropPuddle {
          0%, 68%  { opacity: 0; transform: scaleX(0) scaleY(0.5); }
          72%      { opacity: 1; transform: scaleX(1.2) scaleY(0.8); }
          78%      { opacity: 1; transform: scaleX(1) scaleY(1); }
          90%      { opacity: 1; transform: scaleX(0.5) scaleY(0.8); }
          100%     { opacity: 0; transform: scaleX(0.1) scaleY(0.5); }
        }

        /* 8. FLOWER */
        .ai-flower-petals { animation: aiFlowerBloom 6s ease-in-out infinite; }
        .ai-flower-center {
          animation: aiFlowerCenter 6s ease-in-out infinite;
          transform-origin: center; transform-box: fill-box;
        }
        @keyframes aiFlowerBloom {
          0%   { transform: scale(0) rotate(-180deg); opacity: 0; }
          18%  { transform: scale(1.1) rotate(0deg); opacity: 1; }
          35%  { transform: scale(1) rotate(20deg); }
          55%  { transform: scale(1.04) rotate(-20deg); }
          65%  { transform: scale(1) rotate(0deg); opacity: 1; }
          72%  { transform: scale(1.15) rotate(0deg); opacity: 1; }
          78%  { transform: scale(0.9) rotate(0deg); opacity: 0.7; }
          84%  { transform: scale(1.1) rotate(0deg); opacity: 0.4; }
          95%, 100% { transform: scale(0.3) rotate(0deg); opacity: 0; }
        }
        @keyframes aiFlowerCenter {
          0%   { transform: scale(0); opacity: 0; }
          18%  { transform: scale(1); opacity: 1; }
          65%  { transform: scale(1); opacity: 1; }
          72%, 100% { transform: scale(0); opacity: 0; }
        }

        /* 9. ASTERISK */
        .ai-asterisk { animation: aiAsteriskSpin 6s ease-in-out infinite; }
        @keyframes aiAsteriskSpin {
          0%   { transform: scale(0) rotate(0deg); opacity: 0; }
          12%  { transform: scale(1.25) rotate(30deg); opacity: 1; }
          22%  { transform: scale(1) rotate(45deg); }
          45%  { transform: scale(1.08) rotate(180deg); }
          65%  { transform: scale(1) rotate(315deg); opacity: 1; }
          72%, 100% { transform: scale(0) rotate(360deg); opacity: 0; }
        }
        .ai-asterisk-trail { animation: aiAsteriskTrail 6s ease-in-out infinite; }
        @keyframes aiAsteriskTrail {
          0%, 68%  { opacity: 0; transform: scale(0) translate(0,0); }
          74%      { opacity: 1; transform: scale(1) translate(0,0); }
          88%      { opacity: 1; transform: scale(1) translate(0,-30px); }
          100%     { opacity: 0; transform: scale(0.3) translate(0,-55px); }
        }

        /* 10. RING */
        .ai-ring { animation: aiRingBlink 6s ease-in-out infinite; }
        @keyframes aiRingBlink {
          0%   { transform: scaleY(0); opacity: 0; }
          13%  { transform: scaleY(1); opacity: 1; }
          28%  { transform: scaleY(1); }
          34%  { transform: scaleY(0.1); }
          40%  { transform: scaleY(1); }
          58%  { transform: scaleY(1); }
          64%  { transform: scaleY(0.1); }
          65%  { transform: scaleY(1); opacity: 1; }
          72%, 100% { transform: scaleY(0); opacity: 0; }
        }
        .ai-ring-pupil {
          animation: aiRingPupil 6s ease-in-out infinite;
          transform-origin: center; transform-box: fill-box;
        }
        @keyframes aiRingPupil {
          0%, 68%  { opacity: 0; transform: scale(0) translate(0,0) rotate(0deg); }
          73%      { opacity: 1; transform: scale(1) translate(0,0) rotate(0deg); }
          80%      { opacity: 1; transform: scale(2.2) translate(0,0) rotate(45deg); }
          92%      { opacity: 1; transform: scale(2.2) translate(40px,0) rotate(180deg); }
          100%     { opacity: 0; transform: scale(0.8) translate(70px,0) rotate(270deg); }
        }

        /* 11. ARCH */
        .ai-arch {
          stroke-dasharray: 500; stroke-dashoffset: 500;
          animation: aiArchDraw 6s ease-in-out infinite;
        }
        @keyframes aiArchDraw {
          0%   { stroke-dashoffset: 500; opacity: 0; }
          18%  { stroke-dashoffset: 0; opacity: 1; }
          45%  { stroke-dashoffset: 0; }
          65%  { stroke-dashoffset: 0; opacity: 1; }
          75%, 100% { stroke-dashoffset: -500; opacity: 0; }
        }
        .ai-arch-trail { animation: aiArchTrail 6s ease-in-out infinite; }
        @keyframes aiArchTrail {
          0%, 65%  { opacity: 0; transform: translate(0,0) scale(0); }
          72%      { opacity: 1; transform: translate(0,0) scale(1); }
          90%      { opacity: 1; transform: translate(0,40px) scale(1); }
          100%     { opacity: 0; transform: translate(0,60px) scale(0.3); }
        }

        /* 12. PILLS */
        .ai-pill-1 { animation: aiPill1Bounce 6s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
        .ai-pill-2 { animation: aiPill2Bounce 6s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
        .ai-pill-3 { animation: aiPill3Bounce 6s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
        @keyframes aiPill1Bounce {
          0%   { transform: translateY(40px) scale(0); opacity: 0; }
          15%  { transform: translateY(0) scale(1); opacity: 1; }
          28%  { transform: translateY(-6px) scale(1.05); }
          40%  { transform: translateY(0) scale(1); }
          52%  { transform: translateY(-6px) scale(1.05); }
          65%  { transform: translateY(0) scale(1); opacity: 1; }
          70%  { transform: translateY(40px) scale(0); opacity: 0; }
          100% { transform: translateY(40px) scale(0); opacity: 0; }
        }
        @keyframes aiPill2Bounce {
          0%   { transform: translateY(40px) scale(0); opacity: 0; }
          15%  { transform: translateY(0) scale(1); opacity: 1; }
          28%  { transform: translateY(-6px) scale(1.05); }
          40%  { transform: translateY(0) scale(1); }
          52%  { transform: translateY(-6px) scale(1.05); }
          65%  { transform: translateY(0) scale(1); opacity: 1; }
          72%  { transform: translateY(-18px) scale(1) rotate(-15deg); opacity: 1; }
          92%  { transform: translate(-60px,-40px) scale(1) rotate(-60deg); opacity: 1; }
          100% { transform: translate(-85px,-55px) scale(0.3) rotate(-90deg); opacity: 0; }
        }
        @keyframes aiPill3Bounce {
          0%   { transform: translateY(40px) scale(0); opacity: 0; }
          15%  { transform: translateY(0) scale(1); opacity: 1; }
          28%  { transform: translateY(-6px) scale(1.05); }
          40%  { transform: translateY(0) scale(1); }
          52%  { transform: translateY(-6px) scale(1.05); }
          65%  { transform: translateY(0) scale(1); opacity: 1; }
          72%  { transform: translateY(-18px) scale(1) rotate(15deg); opacity: 1; }
          92%  { transform: translate(60px,-40px) scale(1) rotate(60deg); opacity: 1; }
          100% { transform: translate(85px,-55px) scale(0.3) rotate(90deg); opacity: 0; }
        }
      `}</style>

      <section className="w-full bg-white py-16 px-6 sm:px-10 lg:px-12">
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">

          {/* 1. Squiggle */}
          <div className="aspect-square bg-white rounded-2xl flex items-center justify-center  overflow-hidden">
            <svg viewBox="-10 -10 120 120" className="w-[70%] h-[70%] overflow-visible">
              <path className="ai-squiggle" d="M 10 50 Q 20 20, 30 50 T 50 50 T 70 50 T 90 50"/>
              <path className="ai-squiggle-trail" d="M 10 50 Q 20 20, 30 50 T 50 50 T 70 50 T 90 50"/>
            </svg>
          </div>

          {/* 2. Blob */}
          <div className="aspect-square bg-white rounded-2xl flex items-center justify-center  overflow-hidden">
            <svg viewBox="-10 -40 120 140" className="w-[70%] h-[70%] overflow-visible">
              <path className="ai-icon ai-blob" d="M50 8 C75 8, 92 28, 88 55 C84 80, 62 92, 42 88 C18 83, 8 60, 14 38 C20 18, 35 8, 50 8 Z"/>
              <circle className="ai-trail ai-blob-trail" cx="50" cy="50" r="7"/>
            </svg>
          </div>

          {/* 3. Cloud */}
          <div className="aspect-square bg-white rounded-2xl flex items-center justify-center  overflow-hidden">
            <svg viewBox="-10 -10 120 140" className="w-[70%] h-[70%] overflow-visible">
              <path className="ai-icon ai-cloud" d="M20 55 C10 55, 8 40, 20 38 C18 25, 35 20, 42 30 C48 18, 68 22, 68 35 C82 33, 88 50, 78 58 C82 70, 68 78, 58 72 C52 82, 32 80, 28 70 C14 72, 10 60, 20 55 Z"/>
              <path className="ai-trail ai-rain-1" d="M35 68 C35 68, 30 76, 32 82 C34 88, 42 88, 42 80 C42 74, 35 68, 35 68 Z"/>
              <path className="ai-trail ai-rain-2" d="M52 70 C52 70, 47 78, 49 84 C51 90, 59 90, 59 82 C59 76, 52 70, 52 70 Z"/>
              <path className="ai-trail ai-rain-3" d="M69 68 C69 68, 64 76, 66 82 C68 88, 76 88, 76 80 C76 74, 69 68, 69 68 Z"/>
            </svg>
          </div>

          {/* 4. Peanut */}
          <div className="aspect-square bg-white rounded-2xl flex items-center justify-center  overflow-hidden">
            <svg viewBox="-30 -10 160 120" className="w-[70%] h-[70%] overflow-visible">
              <path className="ai-icon ai-peanut" d="M20 50 C18 30, 38 28, 45 42 C52 56, 72 52, 80 62 C86 74, 70 84, 55 78 C40 72, 22 72, 20 50 Z"/>
              <path className="ai-trail ai-peanut-trail" d="M35 75 C34 68, 44 67, 47 72 C50 77, 58 75, 61 80 C63 85, 55 89, 48 87 C41 85, 36 82, 35 75 Z" transform="scale(0.45)" transformOrigin="50 80"/>
            </svg>
          </div>

          {/* 5. Character */}
          <div className="aspect-square bg-white rounded-2xl flex items-center justify-center  overflow-hidden">
            <svg viewBox="-10 -30 120 140" className="w-[70%] h-[70%] overflow-visible">
              <g className="ai-icon ai-character-body">
                <rect x="25" y="50" width="50" height="40" rx="2"/>
                <path d="M25 90 A25 25 0 0 1 75 90 Z"/>
              </g>
              <circle className="ai-icon ai-character-head" cx="50" cy="30" r="20"/>
            </svg>
          </div>

          {/* 6. Sunburst */}
          <div className="aspect-square bg-white rounded-2xl flex items-center justify-center  overflow-hidden">
            <svg viewBox="-10 -10 120 120" className="w-[70%] h-[70%] overflow-visible">
              <path className="ai-icon ai-sunburst" d="M50 5 L56 18 L68 10 L68 24 L82 22 L76 34 L90 38 L80 48 L92 55 L80 62 L90 72 L76 76 L82 88 L68 86 L68 100 L56 92 L50 105 L44 92 L32 100 L32 86 L18 88 L24 76 L10 72 L20 62 L8 55 L20 48 L10 38 L24 34 L18 22 L32 24 L32 10 L44 18 Z" transform="scale(0.85) translate(9,3)"/>
              <g className="ai-trail ai-sunburst-trail">
                {Array.from({ length: 18 }, (_, i) => (
                  <polygon key={i} points="50,6 46,18 54,18" transform={i === 0 ? undefined : `rotate(${i * 20} 50 50)`}/>
                ))}
              </g>
            </svg>
          </div>

          {/* 7. Drop */}
          <div className="aspect-square bg-white rounded-2xl flex items-center justify-center  overflow-hidden">
            <svg viewBox="-10 -10 120 130" className="w-[70%] h-[70%] overflow-visible">
              <path className="ai-icon ai-drop" d="M50 8 C50 8, 20 45, 22 68 C24 88, 76 88, 78 68 C80 45, 50 8, 50 8 Z"/>
              <ellipse className="ai-trail ai-drop-puddle" cx="50" cy="90" rx="30" ry="5"/>
            </svg>
          </div>

          {/* 8. Flower */}
          <div className="aspect-square bg-white rounded-2xl flex items-center justify-center  overflow-hidden">
            <svg viewBox="-10 -10 120 120" className="w-[70%] h-[70%] overflow-visible">
              <g className="ai-icon ai-flower-petals">
                <ellipse cx="50" cy="20" rx="12" ry="18"/>
                <ellipse cx="50" cy="80" rx="12" ry="18"/>
                <ellipse cx="20" cy="50" rx="18" ry="12"/>
                <ellipse cx="80" cy="50" rx="18" ry="12"/>
                <ellipse cx="28" cy="28" rx="12" ry="14" transform="rotate(-45 28 28)"/>
                <ellipse cx="72" cy="28" rx="12" ry="14" transform="rotate(45 72 28)"/>
                <ellipse cx="28" cy="72" rx="12" ry="14" transform="rotate(45 28 72)"/>
                <ellipse cx="72" cy="72" rx="12" ry="14" transform="rotate(-45 72 72)"/>
              </g>
              <circle className="ai-icon ai-flower-center" cx="50" cy="50" r="14"/>
            </svg>
          </div>

          {/* 9. Asterisk */}
          <div className="aspect-square bg-white rounded-2xl flex items-center justify-center  overflow-hidden">
            <svg viewBox="-10 -10 120 120" className="w-[70%] h-[70%] overflow-visible">
              <g className="ai-icon ai-asterisk">
                <rect x="44" y="8" width="12" height="84" rx="6"/>
                <rect x="44" y="8" width="12" height="84" rx="6" transform="rotate(45 50 50)"/>
                <rect x="44" y="8" width="12" height="84" rx="6" transform="rotate(90 50 50)"/>
                <rect x="44" y="8" width="12" height="84" rx="6" transform="rotate(135 50 50)"/>
              </g>
              <circle className="ai-trail ai-asterisk-trail" cx="50" cy="50" r="8"/>
            </svg>
          </div>

          {/* 10. Ring */}
          <div className="aspect-square bg-white rounded-2xl flex items-center justify-center  overflow-hidden">
            <svg viewBox="-10 -10 120 120" className="w-[70%] h-[70%] overflow-visible">
              <path className="ai-icon ai-ring" fillRule="evenodd" d="M50 12 C78 12, 90 32, 88 52 C86 78, 60 92, 36 84 C14 76, 8 50, 18 32 C26 18, 38 12, 50 12 Z M50 38 C40 38, 34 46, 36 56 C38 66, 52 68, 60 60 C66 52, 62 38, 50 38 Z"/>
              <g className="ai-ring-pupil">
                <rect className="ai-icon" x="46" y="38" width="8" height="24" rx="4"/>
                <rect className="ai-icon" x="46" y="38" width="8" height="24" rx="4" transform="rotate(45 50 50)"/>
                <rect className="ai-icon" x="46" y="38" width="8" height="24" rx="4" transform="rotate(90 50 50)"/>
                <rect className="ai-icon" x="46" y="38" width="8" height="24" rx="4" transform="rotate(135 50 50)"/>
              </g>
            </svg>
          </div>

          {/* 11. Arch */}
          <div className="aspect-square bg-white rounded-2xl flex items-center justify-center  overflow-hidden">
            <svg viewBox="-10 -10 120 120" className="w-[70%] h-[70%] overflow-visible">
              <path className="ai-arch" fill="none" stroke="#2b48e8" strokeWidth="22" strokeLinecap="round" d="M20 85 L20 45 A25 25 0 0 1 70 45 L70 55"/>
              <circle className="ai-trail ai-arch-trail" cx="70" cy="55" r="10"/>
            </svg>
          </div>

          {/* 12. Pills */}
          <div className="aspect-square bg-white rounded-2xl flex items-center justify-center  overflow-hidden">
            <svg viewBox="-40 -30 180 150" className="w-[70%] h-[70%] overflow-visible">
              <ellipse className="ai-icon ai-pill-2" cx="25" cy="55" rx="14" ry="20"/>
              <ellipse className="ai-icon ai-pill-1" cx="50" cy="55" rx="14" ry="20"/>
              <ellipse className="ai-icon ai-pill-3" cx="75" cy="55" rx="14" ry="20"/>
            </svg>
          </div>

        </div>
      </section>
    </>
  );
}
