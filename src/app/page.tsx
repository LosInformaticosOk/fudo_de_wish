import { FoodCard } from "@/components/FoodCard";
import { FoodContainer } from "@/components/FoodContainer";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <FoodContainer />
      <FoodCard
        foodName="lomito"
        foodPrice={5000}
        foodIngredients="pan y lechuga"
      />
    </div>
  );
}
