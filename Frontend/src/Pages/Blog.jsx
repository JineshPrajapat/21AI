import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { blog } from '../data/blog';
import { getDate } from '../utils/getDate';
import BlogCard from '../Component/BlogCard';
import Heading from '../Component/Heading';

const Blog = () => {
    return (
        <section id="blog" className="py-10 lg:py-20 lg:mx-20 p-4">
            <Heading text={"Blogs"} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                {
                    blog.map((post) => {
                        return (
                            <BlogCard post={post} />
                        )
                    })
                }
            </div>

        </section>
    );
};

export default Blog;
