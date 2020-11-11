import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export const SEO = ({ description, lang, meta = [], title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            titleTemplate
            description
            author
            lang
            image
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaLang = lang || site.siteMetadata.lang

  return (
    <Helmet
      defaultTitle={site.siteMetadata.author}
      titleTemplate={site.siteMetadata.titleTemplate}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `author`,
          content: site.siteMetadata.author,
        },
        {
          name: `og: url`,
          content: site.siteMetadata.siteUrl,
        },
        {
          name: `og: image`,
          content: site.siteMetadata.image,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <script>
        {`(function (w, d, s, l, i) {
          w[l] = w[l] || []
          w[l].push({
            "gtm.start": new Date().getTime(),
            event: "gtm.js",
          })
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != "dataLayer" ? "&l=" + l : ""
          j.async = true
          j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl
          f.parentNode.insertBefore(j, f)
        })(window, document, "script", "dataLayer", "GTM-KK74JP")`}
      </script>
      <html lang={metaLang} />
      <title>{title}</title>
    </Helmet>
  )
}
