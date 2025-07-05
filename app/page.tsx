import Banner from "@/components/Banner";
import NavBar from "@/components/NavBar";
import NavMenu from "@/components/NavMenu";
import NavSub from "@/components/NavSub";
import ProductsMain from "@/components/ProductsMain";

export default function Page() {
  return (
    <>
      <NavBar />
      <NavMenu />
      <NavSub />
      <Banner />
      <ProductsMain />
    </>
  );
}