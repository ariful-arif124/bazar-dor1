import Image from "next/image";
import Banner from "@/components/Bannar";
import PriceIncrease from "@/components/PriceIncrease";
import PriceDecrease from "@/components/PriceDecrease";
import AllProducts from "@/components/AllProducts";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
    <Banner></Banner>
    <PriceIncrease></PriceIncrease>
    <PriceDecrease></PriceDecrease>
    <AllProducts></AllProducts>
    </div>
  );
}
