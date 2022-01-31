module.exports = {
    siteUrl: process.env.SITE_URL || "https://terryzstudio.com",
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        additionalSitemaps: [
            `${process.env.SITE_URL}/sitemap.xml`,
            `${process.env.SITE_URL}/server-sitemap.xml`,
        ],
    },
};
