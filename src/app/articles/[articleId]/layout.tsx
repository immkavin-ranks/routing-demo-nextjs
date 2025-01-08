"use client";

import { use } from "react";

// searchParams not accessible in layouts, but params available 👇
export default function ArticleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ articleId: string }>;
}) {
  const { articleId } = use(params);
  return (
    <>
      {children}
      <h6>
        <mark>
          article layout {articleId}
        </mark>
      </h6>
    </>
  );
}
