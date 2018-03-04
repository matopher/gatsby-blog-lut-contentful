module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    desc: 'The Best Site in the Universe.'
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "hrpdr3ttozjx",
        accessToken: "9bf2a9ad036a21f60fe9f3cb218793ada72bd37575f9056e637713635fb19d67"
      }
    },
    'gatsby-plugin-react-helmet', `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/static/assets`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`
  ],
};
