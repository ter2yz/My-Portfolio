import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import { SA_GET_FEATURE_PROJECTS } from "../../components/Sanity/Queries";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const entries: any[] = await SA_GET_FEATURE_PROJECTS;

    const fields: ISitemapField[] = entries.map((entry) => ({
        loc: `https://terryzstudio.com/project/${entry.content.slug}`,
        lastmod: new Date().toISOString(),
    }));

    return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
