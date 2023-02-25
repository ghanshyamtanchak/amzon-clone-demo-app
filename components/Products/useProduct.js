"use client";

import { useState } from "react";

const MAX_RATING = 5;
const MIN_RATING = 1;

const useProduct = () => {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  return {
    rating,
    hasPrime,
  };
};

export default useProduct;
