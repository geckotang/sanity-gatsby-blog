export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cfddf07d615fb80e066f71c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-9ospt229',
                  apiId: '323cea79-08f1-470d-90b4-9656f884137a'
                },
                {
                  buildHookId: '5cfddf07ccb6acdb510208ef',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-tmdzm8ot',
                  apiId: '71344aca-7746-4524-a2b2-f4170989d1f9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/geckotang/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-tmdzm8ot.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
