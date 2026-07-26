import { colors } from "../tokens";

export interface TickerItem {
  symbol: string;
  price: number;
  change24h: number;
}

export interface StatusTickerProps {
  /** Items to display in the scrolling ticker. */
  items: TickerItem[];
  /** Optional trailing label after the items. */
  trailingLabel?: string;
}

function fmt(n: number): string {
  if (n >= 100) return `$${n.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
  if (n >= 1) return `$${n.toFixed(2)}`;
  return `$${n.toFixed(4)}`;
}

export default function StatusTicker({ items, trailingLabel }: StatusTickerProps) {
  const sep = `<span style="color:rgba(0,217,255,0.4);padding:0 0.8rem">◆</span>`;

  const buildHtml = () => {
    const segs = items.map((item) => {
      const ch = item.change24h || 0;
      const arrow = ch > 0 ? "▲" : ch < 0 ? "▼" : "";
      const color = ch > 0 ? "#00FF88" : ch < 0 ? "#FF4444" : colors.dim;
      return `<span style="display:inline-block;padding:0 0.6rem"><span style="color:${colors.accent};font-weight:600">${item.symbol}</span> <span style="color:#fff">${fmt(item.price)}</span> <span style="color:${color};font-size:0.6rem">${arrow} ${Math.abs(ch).toFixed(1)}%</span></span>`;
    });

    let html = segs.join(sep);
    if (trailingLabel) {
      html += `${sep}<span style="display:inline-block;padding:0 0.6rem;color:rgba(255,255,255,0.3);font-size:0.6rem">${trailingLabel}</span>`;
    }
    return html;
  };

  const content = buildHtml();

  return (
    <div
      style={{
        position: "relative",
        zIndex: 20,
        width: "100%",
        height: 36,
        background: "#0A0A0A",
        borderBottom: "1px solid rgba(0,217,255,0.1)",
        overflow: "hidden",
        fontFamily: "'Chakra Petch', monospace",
      }}
    >
      <style>{`
        @keyframes tickerScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .ticker-inner:hover { animation-play-state: paused; }
      `}</style>
      <div
        className="ticker-inner"
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          lineHeight: "36px",
          animation: "tickerScroll 30s linear infinite",
          fontSize: "0.7rem",
          letterSpacing: "0.06em",
        }}
        dangerouslySetInnerHTML={{ __html: content + content }}
      />
    </div>
  );
}
