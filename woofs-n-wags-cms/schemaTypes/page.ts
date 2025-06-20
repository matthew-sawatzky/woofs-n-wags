import {Rule} from 'sanity'

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Page Title',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule: Rule) => Rule.required(),
    },
    {
        name: 'textSection',
        type: 'text',
        title: 'Text Paragraph 1',
        description: 'Main paragraph content that appears on the home page'
      },
    {
      name: 'content',
      type: 'array',
      title: 'Page Content',
      of: [
        {type: 'block'},
        {type: 'image', options: {hotspot: true}},
        {
          type: 'object',
          name: 'callToAction',
          title: 'Call To Action',
          fields: [
            {name: 'text', type: 'string', title: 'Button Text'},
            {name: 'url', type: 'url', title: 'URL'},
          ],
        },
      ],
    },
  ],
}
