import { config, fields, collection, singleton } from '@keystatic/core'

export default config({
  storage: import.meta.env.DEV
    ? {
        kind: 'local',
      }
    : {
        kind: 'github',
        repo: 'radenpioneer/blog.sngr.my.id',
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
        tags: fields.array(fields.slug({ name: { label: 'Tag' } }), {
          label: 'Tags',
          itemLabel: (props) => props.value.name,
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
      format: 'json',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
      },
    }),
  },

  singletons: {
    settings: singleton({
      label: 'Site Settings',
      path: 'src/content/site/site',
      format: 'json',
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
        icon: fields.image({
          label: 'Icon',
          directory: 'public',
          publicPath: '/',
        }),
        menu: fields.array(fields.slug({ name: { label: 'Title' } }), {
          label: 'Main Menu',
          itemLabel: (props) => props.value.name,
        }),
      },
    }),
  },
})
