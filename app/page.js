import Image from "next/image";
import PriceCard from "../app/components/PriceCards/PriceCrads";
import EntirePrice from "./components/PriceCards/EntirePrices";
import LinkedInConnect from "./components/integrations/LinkedInConnect";

export default function Home() {
  return (
    <main>
      <EntirePrice />
      <LinkedInConnect />
    </main>
  );
}
