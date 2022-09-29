import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import Product from "../components/common/Product";
import Layout from "../components/layout/Layout";
import CategoriesSildes from "../components/shop/CategoriesSildes";
import Filter from "../components/shop/Filter";
import { ProductsData } from "../data/ProductsData";

const Shop = () => {
  const maxPage = 10;
  const [page, setPage] = useState(maxPage);
  const [products, setProducts] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const searchKey = router.query?.search;
    const resultProducts = searchKey
      ? ProductsData.filter((el) => el.title.toLowerCase().includes(searchKey))
      : ProductsData;
    setProducts(resultProducts);
  }, [router.query]);

  const HandleLoadMore = () => {
    setPage(page + maxPage);
  };
  return (
    <Layout>
      <div className="min-h-screen container mx-auto px-4 my-6">
        <CategoriesSildes />
        <Filter total={products?.length} />
        <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {products.slice(0, page)?.map((p) => (
            <Product bg={true} key={p._id} product={p} />
          ))}
        </div>
        <div className="w-full flex-colo my-12">
          <button
            onClick={HandleLoadMore}
            className="flex-rows gap-3 text-white py-3 px-8 rounded font-semibold bg-subMain"
          >
            Load More <CgSpinner className="animate-spin inline-block" />
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
