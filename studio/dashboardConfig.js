export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ce2f526a895bea38702f748',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-6z5z3cfk',
                  apiId: 'febac843-3707-4b25-926b-6d72a31b952e'
                },
                {
                  buildHookId: '5ce2f52617761b5e3d3c7d60',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-iwezr2wa',
                  apiId: '212925ea-52a5-4894-ae22-f1bebec72310'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/frozonice/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-iwezr2wa.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
