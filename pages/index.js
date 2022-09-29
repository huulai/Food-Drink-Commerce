import Banner from "../components/home/Banner";
import Categories from "../components/home/Categories";
import FlashDeals from "../components/home/FlashDeals";
import PopularProducts from "../components/home/PopularProducts";
import Promos from "../components/home/Promos";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen container mx-auto px-2 my-6">
        <Banner />
        <Categories />
        <PopularProducts />
        <Promos />
        <FlashDeals />
      </div>
    </Layout>
  );
}
