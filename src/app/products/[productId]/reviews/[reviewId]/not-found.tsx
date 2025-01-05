"use client"

import { usePathname } from "next/navigation";


export default function NotFound() {

  const pathName = usePathname();

  // http://localhost:3000/products/1/reviews/1001

  const productId = pathName.split('/')[2];
  const reviewId = pathName.split('/')[4];

  return (
    <>
      <h2>Review {reviewId} not found for product {productId}</h2>
    </>
  );
}
