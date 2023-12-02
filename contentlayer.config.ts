// contentlayer.config.ts
import { defineDocumentType, defineNestedType, makeSource,ComputedFields } from 'contentlayer/source-files'

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
    },
    image: {
      type: "string",
      required: true,
    },
    publishDate: {
      type: "date",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
    author: {
      type: 'nested',
      of: Author,
    },
  },
  computedFields
}))



export default makeSource({ contentDirPath: 'content', documentTypes: [Blog] })