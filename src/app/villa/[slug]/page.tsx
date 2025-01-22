// const md = new MarkdownIt();

export default async function Post({ params, searchParams }: any) {
  const slug = (await params).slug;
  console.log(slug);

  return <div></div>;
}
