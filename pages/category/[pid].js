import { useRouter } from "next/router";
import React from "react";
import Head from "../../components/common/Head";
import Product from "../../components/common/Product";
import Layout from "../../components/layout/Layout";
import Filter from "../../components/shop/Filter";
import { ProductsData } from "../../data/ProductsData";

const Category = () => {
  const { pid } = useRouter().query;
  const products = ProductsData.filter((val) => val.type === pid);

  return (
    <Layout>
      <div className="min-h-screen container mx-auto px-6 my-6">
        <Head title={pid} />
        <Filter total={products?.length} />
        <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {products.map((p) => (
            <Product bg={true} key={p._id} product={p} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Category;
