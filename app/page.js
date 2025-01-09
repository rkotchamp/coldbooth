import Image from "next/image";
import PriceCard from "../app/components/PriceCards/PriceCrads";
import EntirePrice from "./components/PriceCards/EntirePrices";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <EntirePrice />
    </main>
  );
}
