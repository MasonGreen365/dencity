import Link from "next/link";
import HousingCard from "./components/HousingCard";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto relative">
        <img src="https://cdn12.picryl.com/photo/2016/12/31/building-plan-floor-plan-architectural-architecture-buildings-8fef84-1024.jpg" alt="Housing" className="w-full" />
        <h1 className="text-4xl font-bold text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Welcome to Dencity</h1>
      </div>
    </main>
  );
}