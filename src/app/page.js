import CategorySection from "@/components/home/categorySection";
import HeroSection from "@/components/home/heroSection";
import NewArrival from "@/components/home/newArrival";
import Cart from "@/components/layout/cart";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="max-w-screen">
        <HeroSection />
        <NewArrival />
        <CategorySection />
      </div>
    </main>
  );
}
