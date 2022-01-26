import { gql } from "@apollo/client";

export const GET_ENTRY_BY_SLUG = (entrySlug) => {
  return (gql`
        {
            projectsCollection(where: {handle: "${entrySlug}"}) {
                items {
                  title
                  titleHtml
                  description
                  logo {
                    url
                  }
                  featureImage {
                    url
                  }
                  mockupImage {
                    url
                  }
                  contentData
                  perspectiveShowcaseImage {
                    url
                  }
                }
            }
        }
    `)
};

export const GET_PROJECTS = gql`
  {
    projectsCollection {
      items {
        title
        handle
        sys {
          id
        }
      }
    }
  }
`;

export const GET_FEATURE_PROJECTS = gql`
  {
    projectsCollection (where: {isCollection: true}, order: order_DESC) {
      items {
        sys {
          id
        }
        title
        titleHtml
        description
        handle
        logo {
          url
        }
        featureImage {
          url
        }
      }
    }
  }
`;
