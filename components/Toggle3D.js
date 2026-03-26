'use client';
import { usePortfolio } from './PortfolioContext';

export default function Toggle3D() {
  const { is3DMode, toggle3D } = usePortfolio();

  return (
    <div className="toggle-3d-wrap">
      <style>{`
        .toggle-btn {
          background: var(--zinc-900);
          border: 1px solid var(--border);
          color: var(--zinc-400);
          padding: 8px 16px;
          border-radius: 100px;
          font-family: var(--font-mono);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        .toggle-btn:hover {
          border-color: var(--zinc-600);
          color: var(--foreground);
          transform: translateY(-2px);
        }
        .toggle-btn.active {
          background: var(--foreground);
          color: var(--background);
          border-color: var(--foreground);
        }
        .toggle-indicator {
          width: 6px; height:6px;
          border-radius: 50%;
          background: var(--zinc-700);
          transition: background 0.3s;
        }
        .toggle-btn.active .toggle-indicator {
          background: var(--accent);
          box-shadow: 0 0 10px var(--accent);
        }
      `}</style>
      <button 
        className={`toggle-btn ${is3DMode ? 'active' : ''}`}
        onClick={toggle3D}
      >
        <div className="toggle-indicator"></div>
        {is3DMode ? 'Exit 3D Experience' : 'Enter 3D Experience'}
      </button>
    </div>
  );
}
