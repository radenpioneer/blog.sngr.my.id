import { config, fields, collection, singleton } from '@keystatic/core'

export default config({
  storage: {
    kind: 'github',
    repo: 'radenpioneer/sngr.my.id',
    pathPrefix: 'blog.sngr.my.id',
  },
  ui: {
    brand: {
      name: 'blog.sngr.my.id',
    },
  },
  singletons: {
    settings: singleton({
      label: 'Site Settings',
      path: 'src/content/site/site',
      schema: {
        title: fields.text({ label: 'Site Title' }),
        description: fields.text({
          label: 'Site Description',
          multiline: true,
        }),
        logo: fields.image({
          label: 'Logo',
          directory: 'src/assets/site',
          publicPath: '~/assets/site',
        }),
      },
    }),
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        date: fields.date({
          label: 'Published Date',
          defaultValue: { kind: 'today' },
        }),
        category: fields.relationship({
          label: 'Category',
          collection: 'categories',
        }),
        image: fields.image({
          label: 'Featured Image',
          directory: 'src/assets/posts',
          publicPath: '~/assets/posts',
        }),
        draft: fields.checkbox({ label: 'Draft', defaultValue: true }),
        hidden: fields.checkbox({
          label: 'Hide this post',
          defaultValue: false,
        }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'src/assets/posts',
            publicPath: '~/assets/posts',
          },
        }),
      },
    }),
    categories: collection({
      label: 'Category',
      slugField: 'title',
      path: 'src/content/categories/*',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
      },
    }),
  },
})
