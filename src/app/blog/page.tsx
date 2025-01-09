import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "My Blog",
  },
};

export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Intentional delay");
    }, 2000);
  });

  return <h1>My Blog</h1>;
}
