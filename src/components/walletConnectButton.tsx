/* eslint-disable @next/next/no-img-element */
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "animate.css";

const WalletConnectBtn = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-[32px] animate__animated animate__fadeIn">
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks
          const ready = mounted && authenticationStatus !== "loading";
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === "authenticated");

          return (
            <div
              {...(!ready && {
                "aria-hidden": true,
                style: {
                  opacity: 0,
                  pointerEvents: "none",
                  userSelect: "none",
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <button
                      onClick={openConnectModal}
                      type="button"
                      className="text-white text-[18px] font-bold uppercase bg-gradient-to-r from-[#667EEA] to-[#fe2bf3] px-[24px] py-[11px] border-b-[3px] border-t-[1px] border-black border-opacity-30
                      rounded-full hover:bg-gradient-to-r  duration-300 transition-all
                   "
                    >
                      <p
                        style={{
                          textShadow: "0 1px 0px rgba(0, 25, 66, 0.4)",
                        }}
                      >
                        Connect Wallet
                      </p>
                    </button>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <button onClick={openChainModal} type="button">
                      Wrong network
                    </button>
                  );
                }

                return (
                  <div className="flex items-center gap-[15px]">
                    <button
                      onClick={openChainModal}
                      type="button"
                      className="flex items-center px-5 py-3 font-bold uppercase transition-all duration-300 bg-white rounded-lg hover:bg-gray-150"
                    >
                      {chain.hasIcon && (
                        <div
                          style={{
                            background: chain.iconBackground,
                            width: 15,
                            height: 15,
                            borderRadius: 999,
                            overflow: "hidden",
                            marginRight: 4,
                          }}
                          className="flex items-center justify-center"
                        >
                          {chain.iconUrl && (
                            <img
                              alt={chain.name ?? "Chain icon"}
                              src={chain.iconUrl}
                              style={{ width: 15, height: 15 }}
                            />
                          )}
                        </div>
                      )}
                    </button>

                    <button
                      onClick={openAccountModal}
                      type="button"
                      className="text-white text-[18px] font-bold uppercase"
                    >
                      {account.displayName}
                      {account.displayBalance
                        ? ` (${account.displayBalance})`
                        : ""}
                    </button>
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
    </div>
  );
};

export default WalletConnectBtn;
