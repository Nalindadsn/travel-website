// const md = new MarkdownIt();

export default async function Post({ params, searchParams }: any) {
  const slug = (await params).slug;
  console.log(slug);
  console.log(searchParams);

  return <div></div>;
}
