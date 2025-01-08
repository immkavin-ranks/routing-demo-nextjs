

import Link from "next/link";


export default async function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang: string }>;
}) {

    const articleId = (await params).articleId;
    const {lang = 'en'} = await searchParams;

    return (
      <>
        <h1>News article {articleId}</h1>
        <p>Reading in {lang}</p>

        <div>
          <Link href={`/articles/${articleId}?lang=en`}>English</Link>
          <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
          <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
        </div>
      </>
    );
}
