import React, { useState, useMemo, createContext, useEffect } from "react";

// create context
export const SidebarContext = createContext();

export const PopUpProvider = ({ children, productsInCart, setProductsInCart }) => {
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  useEffect(() => {
    const localStorageProducts = JSON.parse(localStorage.getItem("productsInCart")) || [];
    setProductsInCart(localStorageProducts);
  }, []);

  const toggleCartDrawer = () => setCartDrawerOpen(!cartDrawerOpen);
  const closeCartDrawer = () => setCartDrawerOpen(false);

  const toggleMobileDrawer = () => setMobileDrawerOpen(!mobileDrawerOpen);
  const closeMobileDrawer = () => setMobileDrawerOpen(false);

  const handleChangeQuatity = (_id, quantity) => {
    const idx = productsInCart.findIndex((el) => el._id === _id);
    if (idx > -1) {
      const cloneProducts = [...productsInCart];
      cloneProducts[idx].quantity = quantity;
      setProductsInCart(cloneProducts);
      localStorage.setItem("productsInCart", JSON.stringify(cloneProducts));
    }
  };

  const handDeleteProduct = (_id) => {
    const idx = productsInCart.findIndex((el) => el._id === _id);
    if (idx > -1) {
      const cloneProducts = [...productsInCart];
      cloneProducts.splice(idx, 1);
      setProductsInCart(cloneProducts);
      localStorage.setItem("productsInCart", JSON.stringify(cloneProducts));
    }
  };

  const handleAddToCart = (productAdded) => {
    const idx = productsInCart.findIndex((el) => el._id === productAdded._id);
    const cloneProducts = [...productsInCart];
    idx > -1
      ? (cloneProducts[idx].quantity += 1)
      : cloneProducts.push({ ...productAdded, quantity: 1 });
    setProductsInCart(cloneProducts);
    localStorage.setItem("productsInCart", JSON.stringify(cloneProducts));
  };

  const value = useMemo(
    () => ({
      cartDrawerOpen,
      toggleCartDrawer,
      closeCartDrawer,
      mobileDrawerOpen,
      toggleMobileDrawer,
      closeMobileDrawer,
      productsInCart,
      setProductsInCart,
      handleChangeQuatity,
      handDeleteProduct,
      handleAddToCart,
    }),

    [cartDrawerOpen, mobileDrawerOpen, productsInCart]
  );

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
};
