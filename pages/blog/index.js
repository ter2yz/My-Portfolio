import React, { useCallback } from "react";
import { SA_GET_BLOGS } from "../../components/Sanity/Queries";

const BlogPage = ({ blogs }) => {
    const render = useCallback(() => {
        return blogs.map((blog) => <div key={blog.slug}>{blog?.title}</div>);
    }, [blogs]);

    return <div className="flex flex-col">{render()}</div>;
};

export const getStaticProps = async () => {
    const blogs = await SA_GET_BLOGS;

    return {
        props: { blogs },
    };
};

export default BlogPage;
