import React from "react";
import { notFound } from "next/navigation";
import { allBlogs } from "contentlayer/generated";
import { Metadata } from "next"
// import { serialize } from 'next-mdx-remote/serialize'
// import { MDXRemote } from 'next-mdx-remote'
import { useLiveReload, useMDXComponent, getMDXComponent } from "next-contentlayer/hooks";
import TagButton from "@/components/Blog/TagButton";
import SharePost from "@/components/Blog/SharePost";


interface BlogPageProps {
  params: {
    slug: string[]
  },
  // mdxSource: any; // 使用 any 类型
}


export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const post = await getBlogFromParams(params)

  if (!post) {
    return {}
  }


  return {
    title: post.title,
    description: post.description,
    authors: [],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      // url: absoluteUrl(post.slug),
      // images: [
      //   {
      //     url: "ogUrl.toString()",
      //     width: 1200,
      //     height: 630,
      //     alt: post.title,
      //   },
      // ],
    },
    // twitter: {
    //   card: "summary_large_image",
    //   title: post.title,
    //   description: "post.description",
    //   images: ["ogUrl.toString()"],
    // },
  }
}


export async function generateStaticParams(): Promise<BlogPageProps["params"][]> {
  let result = await Promise.all(allBlogs.map(async (post) => {
    return {
      slug: post.slugAsParams.split("/")
    };
  }));
  return await result;
}

const components = {
    // Define your other components as needed...
    // table: (props) => <table style={{ borderCollapse: 'collapse', width: '100%' }}>{props.children}</table>,
    // th: (props) => <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{props.children}</th>,
    // td: (props) => <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{props.children}</td>,
};


async function getBlogFromParams(params) {
  const slug = params?.slug?.join("/");
  const blog = allBlogs.find((blog) => blog.slugAsParams === slug);
  if (!blog) {
    null;
  }
  return blog;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const blog = await getBlogFromParams(params);
  // console.log("blog",blog)
  const MDXContent = getMDXComponent(blog.body.code);
  // const mdxSource = await serialize(blog.body.code);
  if (!blog) {
    notFound();
  }

  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <article>
                <h2
                  className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  { blog.title }
                </h2>
                <div>
                {/* <MDXRemote mdxSource={mdxSource} /> */}
                  {MDXContent && <MDXContent components={{ ...(components as any) }} />}
                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <h4 className="mb-3 text-sm font-medium text-body-color">
                        Popular Tags :
                      </h4>
                      <div className="flex items-center">
                        <TagButton text="Design" />
                        <TagButton text="Development" />
                        <TagButton text="Info" />
                      </div>
                    </div>
                    <div className="mb-5">
                      <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                        Share this post :
                      </h5>
                      <div className="flex items-center sm:justify-end">
                        <SharePost />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};



