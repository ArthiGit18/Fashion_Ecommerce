import Banner from "@/components/Banner";
import NavBar from "@/components/NavBar";
import NavSub from "@/components/NavSub";
import ProductsMain from "@/components/ProductsMain";
import SubscriptionSection from "@/components/Subscription";

export default function Page() {
  return (
    <>
      <NavBar />
      <NavSub />
      <Banner />
      <ProductsMain />
      <SubscriptionSection />
    </>
  );
}