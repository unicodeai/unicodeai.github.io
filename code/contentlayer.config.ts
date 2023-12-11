// contentlayer.config.ts
import { defineDocumentType, defineNestedType, makeSource,ComputedFields } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'

/** @typed {import('contentlayer/source-files').ComputedFields}*/
const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
}

const Author = defineNestedType(() => ({
  name: 'Author',
  fields: {
    name: {
      type: 'string',
    },
    image: {
      type: 'string',
    },
    designation: {
      type: 'string',
    },
  },
}))


export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `blogs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    id: {
      type: "number",
      required: true,
    },
    title: {
      type: "string",
      required: true,
    },
    paragraph: {
      type: "string",
      required: true,
      default: "paragraph",
    },
    keywords: {
      type: "string",
      required: true,
      default: "",
    },
    description: {
      type: "string",
      required: true,
      default: "",
    },
    tags: {
      type: "list",
      of: { type: "string" },
      required: false,
    },
    author: {
      type: 'nested',
      of: Author,
    },
  },
  computedFields
}))



export default makeSource({ 
  contentDirPath: 'content', 
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
  }
})
