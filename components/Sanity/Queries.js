import sanityClient from "../Sanity/SanityClient";

// Projects Queries

export const SA_GET_FEATURE_PROJECTS = sanityClient.fetch(`
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
        `);

export const SA_GET_PROJECTS_SLUG = sanityClient.fetch(
    `*[_type == "project" && defined(tabs.slug.current)][].tabs.slug.current`
);

export const SA_GET_PROJECT_BY_SLUG = (slug) =>
    sanityClient.fetch(`
            *[_type == "project" && tabs.slug.current == "${slug}"][0] {
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
        `);

// Blogs Queries

export const SA_GET_BLOGS = sanityClient.fetch(
    `*[_type == "blog"] | order(_createdAt desc) {
        title,
        "slug": slug.current,
        "featureImage": {
          "url": featureImage.asset->url,
        },
        _createdAt,
        _updatedAt,
        bio
      }`
);

export const SA_GET_BLOG_BY_SLUG = (slug) =>
    sanityClient.fetch(`
            *[_type == "blog" && slug.current == "${slug}"][0] {
                title,
                "slug": slug.current,
                "featureImage": {
                    "url": featureImage.asset->url,
                },
                _createdAt,
                _updatedAt,
                bio
            }
        `);
