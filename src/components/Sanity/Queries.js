import sanityClient from "../Sanity/SanityClient"

export const SA_GET_FEATURE_PROJECTS =
    sanityClient
        .fetch(`
            *[_type == "project"] | order(priority desc) {
                "content": tabs {
                    titleHtml,
                    "slug": slug.current,
                    "logo": {
                        "url": logo.asset->url
                    },
                    description,
                    "featureImage": {
                        "url": featureImage.asset->url
                    }
                }
            }
        `)

export const SA_GET_PROJECT_BY_SLUG = (slug) =>
    sanityClient
        .fetch(`
            *[_type == "project" && tabs.slug.current == "${slug}"] | order(priority desc) {
                "content": tabs {
                    title,
                    titleHtml,
                    description,
                    "logo": {
                        "url": logo.asset->url
                    },
                    "featureImage": {
                        "url": featureImage.asset->url
                    },
                    "mockupImage": {
                        "url": mockupImage.asset->url
                    },
                    "showcaseImage": {
                    "url": showcaseImage.asset->url
                    },
                    overview,
                    overviewInfo,
                    contentBlock
                }
            }
        `)


