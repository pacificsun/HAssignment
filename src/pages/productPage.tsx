import React, { useState, useEffect } from "react";

import { Loader } from "../components/loder";
import { Button } from "../components/button";
import { useActions } from "../hooks/useActions";
import { CardComponent } from "../components/card";
import { Breadcrumbs } from "../components/breadcrumbs";
import { useTypedSelector } from "../hooks/useTypedSelector";

import styles from "./productPage.module.scss";

export const ProductPage: React.FC = () => {
  const [productCount, setProductCount] = useState(6);
  const { getProducts } = useActions();
  const { data, loading } = useTypedSelector((state) => state.productsList);

  useEffect(() => {
    getProducts(productCount);
  }, [productCount]);

  const showMoreItem = () => {
    setProductCount((preValue) => preValue + 6);
  };

  return (
    <div className="mainContainer">
      <div className={styles.productContainer}>
        <Breadcrumbs productTitle="Beers" />
        <div className={styles.cardItemWrapper}>
          {data?.map((beer: any) => (
            <CardComponent
              id={beer.id}
              key={beer.id}
              name={beer.name}
              imageUrl={beer.image_url}
              tagline={beer.tagline}
              description={beer.description}
            />
          ))}
        </div>
        <div className={styles.buttonWrapper}>
          {loading ? (
            <Loader />
          ) : (
            <Button onClick={showMoreItem} buttonName="Load More" />
          )}
        </div>
      </div>
    </div>
  );
};
