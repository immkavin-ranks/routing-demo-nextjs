export default function ProductsListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      <h2>Featured products</h2>
    </>
  );
}
