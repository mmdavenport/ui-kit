import { colors } from "../tokens";

export interface WalletInfo {
  name: string;
  icon?: string;
  rdns: string;
}

export interface WalletPickerProps {
  /** Wallets discovered via EIP-6963. Empty array = "no wallets detected" state. */
  wallets: WalletInfo[];
  /** Called when a discovered wallet is selected. */
  onSelect?: (wallet: WalletInfo) => void;
  /** Called when the external-connect fallback is clicked. */
  onExternalConnect?: () => void;
  /** Called when Cancel is clicked. */
  onCancel?: () => void;
  /** True while the external connection is in progress. */
  connecting?: boolean;
}

export default function WalletPicker({
  wallets,
  onSelect,
  onExternalConnect,
  onCancel,
  connecting = false,
}: WalletPickerProps) {
  return (
    <div
      onClick={onCancel}
      role="dialog"
      aria-modal="true"
      aria-labelledby="wp-title"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: colors.navy,
          border: `1px solid rgba(0,240,255,0.2)`,
          borderRadius: 12,
          padding: 24,
          maxWidth: 380,
          width: "100%",
          color: "white",
          fontFamily: "'Chakra Petch', system-ui, sans-serif",
        }}
      >
        <h2
          id="wp-title"
          style={{
            fontSize: "1rem",
            fontWeight: 700,
            color: colors.cyan,
            margin: "0 0 16px",
            textAlign: "center",
          }}
        >
          Choose Your Wallet
        </h2>

        {wallets.length === 0 ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <button
              onClick={onExternalConnect}
              disabled={connecting}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                padding: "14px 16px",
                background: "rgba(59,130,246,0.12)",
                border: "1px solid rgba(59,130,246,0.35)",
                borderRadius: 8,
                cursor: connecting ? "wait" : "pointer",
                width: "100%",
                fontFamily: "'Chakra Petch', system-ui, sans-serif",
                opacity: connecting ? 0.6 : 1,
                color: colors.blue,
                fontSize: "0.95rem",
                fontWeight: 600,
              }}
            >
              {connecting ? "Connecting…" : "Connect External Wallet"}
            </button>
            <p
              style={{
                color: colors.dim,
                fontSize: "0.65rem",
                lineHeight: 1.6,
                textAlign: "center",
                margin: 0,
              }}
            >
              Opens your mobile wallet app
            </p>
            <div
              style={{
                marginTop: 4,
                borderTop: "1px solid rgba(255,255,255,0.06)",
                paddingTop: 8,
              }}
            >
              <p
                style={{
                  color: colors.mutedForeground,
                  fontSize: "0.6rem",
                  textAlign: "center",
                  margin: 0,
                }}
              >
                On desktop? Install a browser extension and refresh.
              </p>
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {wallets.map((w) => (
              <button
                key={w.rdns}
                onClick={() => onSelect?.(w)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "12px 16px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 8,
                  cursor: "pointer",
                  width: "100%",
                  textAlign: "left",
                  fontFamily: "'Chakra Petch', system-ui, sans-serif",
                  color: "white",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                }}
              >
                {w.icon && (
                  <img
                    src={w.icon}
                    alt=""
                    width={32}
                    height={32}
                    style={{ borderRadius: 6, flexShrink: 0 }}
                  />
                )}
                {w.name}
              </button>
            ))}
            <div
              style={{
                marginTop: 4,
                borderTop: "1px solid rgba(255,255,255,0.06)",
                paddingTop: 8,
              }}
            >
              <p
                style={{
                  fontSize: "0.65rem",
                  color: colors.dim,
                  textAlign: "center",
                  marginBottom: 8,
                }}
              >
                Or connect a mobile wallet
              </p>
              <button
                onClick={onExternalConnect}
                disabled={connecting}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  padding: "12px 16px",
                  background: "rgba(59,130,246,0.08)",
                  border: "1px solid rgba(59,130,246,0.25)",
                  borderRadius: 8,
                  cursor: connecting ? "wait" : "pointer",
                  width: "100%",
                  fontFamily: "'Chakra Petch', system-ui, sans-serif",
                  opacity: connecting ? 0.6 : 1,
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: colors.blue,
                }}
              >
                {connecting ? "Connecting…" : "External Wallet"}
              </button>
            </div>
          </div>
        )}

        <button
          onClick={onCancel}
          style={{
            marginTop: 8,
            width: "100%",
            background: "none",
            border: "1px solid rgba(255,255,255,0.1)",
            color: colors.dim,
            padding: "8px",
            borderRadius: 6,
            fontSize: "0.75rem",
            cursor: "pointer",
            fontFamily: "'Chakra Petch', system-ui, sans-serif",
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
