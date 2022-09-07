//Background Images
import bitcoinTexture from "../assets/bitcoinBG.svg";
import etherTexture from "../assets/etherBG.svg";
import shibaTexture from "../assets/shibaBG.svg";
import solanaTexture from "../assets/solanaBG.svg";

//Required Icons
import BitcoinIcon from "../assets/bitcoin.svg";
import Solana from "../assets/solana.svg";
import EthereumIcon from "../assets/ethereum.svg";
import Binance from "../assets/binance.svg";
import Shiba from "../assets/shiba.svg";

//Card Interface
export interface IAssetCard {
  assetIcon: string;
  backgroundIcon: string;
  name: string;
  price: number;
  profit: boolean;
  percentageChangeOfPrice: number;
  totalLockedValue: number;
  popularPairing: string[];
}

//Assets Cards Configuration
export const ASSET_CARDS: IAssetCard[] = [
  {
    assetIcon: BitcoinIcon,
    backgroundIcon: bitcoinTexture,
    name: "Bitcoin (BTC)",
    price: 31812.8,
    percentageChangeOfPrice: 10,
    profit: true,
    totalLockedValue: 60000,
    popularPairing: [Solana, EthereumIcon, Binance],
  },
  {
    assetIcon: Solana,
    backgroundIcon: solanaTexture,
    name: "Solana (SOL)",
    price: 32.83,
    percentageChangeOfPrice: 12.32,
    profit: false,
    totalLockedValue: 60000,
    popularPairing: [BitcoinIcon, EthereumIcon, Binance],
  },
  {
    assetIcon: EthereumIcon,
    backgroundIcon: etherTexture,
    name: "Ethereum (ETH)",
    price: 1466.45,
    percentageChangeOfPrice: 11.93,
    profit: false,
    totalLockedValue: 60000,
    popularPairing: [Solana, BitcoinIcon, Binance],
  },
  {
    assetIcon: Binance,
    backgroundIcon: bitcoinTexture,
    name: "Binance USD (BUSD)",
    price: 1.0,
    percentageChangeOfPrice: 0.26,
    profit: true,
    totalLockedValue: 60000,
    popularPairing: [Solana, EthereumIcon, Binance],
  },
  {
    assetIcon: Shiba,
    backgroundIcon: shibaTexture,
    name: "Shiba Inu (SHIB)",
    price: 0.00000001948,
    percentageChangeOfPrice: 8.1,
    profit: false,
    totalLockedValue: 60000,
    popularPairing: [Solana, EthereumIcon, Binance],
  },
];
