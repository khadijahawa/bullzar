import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "next-themes";
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  embeddedWallet,
  safeWallet,
  localWallet,
  smartWallet,
  trustWallet,
} from "@thirdweb-dev/react";
import "./styles/globals.css";
import "./styles/theme.css";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import enMessages from "./locales/en/messages";
import frMessages from "./locales/fr/messages";
import arMessages from "./locales/ar-EG/messages";

i18n.load("en", enMessages);
i18n.load("fr", frMessages);
i18n.load("ar-EG", arMessages);
i18n.activate("en");

const smartWalletOptions = {
  factoryAddress: "0xe5fC23e2c82BAfFD1516861043a9eFD31eE9b0C5",
  gasless: false,
};

const activeChain = "base";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ThemeProvider attribute="class">
      <ThirdwebProvider
        activeChain={activeChain}
        clientId={process.env.REACT_APP_TEMPLATE_CLIENT_ID}
        supportedWallets={[
          metamaskWallet(),
          coinbaseWallet({ recommended: true }),
          walletConnect(),
          trustWallet(),
          safeWallet({
            personalWallets: [
              smartWallet(metamaskWallet(), smartWalletOptions),
              smartWallet(
                coinbaseWallet({
                  recommended: true,
                }),
                smartWalletOptions
              ),
              smartWallet(walletConnect(), smartWalletOptions),
              smartWallet(localWallet(), smartWalletOptions),
              smartWallet(trustWallet(), smartWalletOptions),
            ],
          }),
          smartWallet(localWallet(), smartWalletOptions),
          smartWallet(
            embeddedWallet({
              auth: {
                options: ["email", "google", "facebook"],
              },
            }),
            smartWalletOptions
          ),
        ]}
      >
        <Router>
          <I18nProvider i18n={i18n}>
            <App />
          </I18nProvider>
        </Router>
      </ThirdwebProvider>
    </ThemeProvider>
  </React.StrictMode>
);
