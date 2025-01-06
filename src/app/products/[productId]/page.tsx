import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const productId = (await params).productId;

  const product = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${productId}`);
    }, 100);
  });

  return {
    title: `Product ${product}`,
  };
};

export default async function ProductDetails({ params }: Props) {
  const productId = (await params).productId;

  return <h1>Details about Product {productId}</h1>;
}
