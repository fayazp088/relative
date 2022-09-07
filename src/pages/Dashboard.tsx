//Data & AssetInterface
import { ASSET_CARDS, IAssetCard } from "./DashboardData";

//Components
import AssetCard from "../components/AssetsCard";

//Required Icons
import TrendingIcon from "../assets/activity.svg";

const Dashboard = () => {
  return (
    <div className="text-white font-Tomorrow w-full h-screen ml-20 mr-20">
      <div className="flex mt-20">
        <img src={TrendingIcon} className="mr-10" alt={TrendingIcon} />
        <p>Trending Assets</p>
      </div>
      <div className="mt-28 grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-y-32">
        {ASSET_CARDS.map((card: IAssetCard) => {
          return <AssetCard {...card} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
