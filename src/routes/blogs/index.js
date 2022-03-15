// import { h } from 'preact';
// import { Link } from "react-router-dom";
import React from 'react';
import style from "./style.module.css";
import posts from "../../posts.json";
// import { Axios } from "@data-provider/axios";

const blogs = (props) => {
	const [data] = posts;
	console.log(posts);
	return (
		<div className={style.pageBlogs}>
			<h1 className={style.pageTitle}>My Blogs</h1>
			{getBlogsListing(data, false)}
			{posts.length &&
				posts.map((post)=>{
					return (<div key={post.id} className='post-card'>
						<h2>{post.title}</h2>
						<p>{post.author}</p>
						<p>{post.date}</p>
					</div>)
				})
			}
			<p></p>
		</div>
	);
};

function getBlogsListing(data, isLoading) {
	if (isLoading) {
		return (
			<article className={style.loadingPlaceholder}>
				<h2 className={`${style.blogtitle} loading`}>&nbsp;</h2>
				<div className={`${style.loadingBody} loading`}>&nbsp;</div>
				<div className={`${style.loadingBody} loading`}>&nbsp;</div>
				<div className={`${style.loadingBody} loading`}>&nbsp;</div>
			</article>
		);
	}

	// if (data && data.data) {
	// 	const { data: blogs } = data;
	// 	return (
	// 		<>
	// 			{blogs.edges.map(blog => (
	// 			<Link href={`/blog/${blog.id}`}>
	// 				<article>
	// 					<h2>{blog.details.title}</h2>
	// 					<div>
	// 						{
	// 							(blog.details.tags.substr(1, blog.details.tags.length - 2).split(',') || []).map(tag => <span className={style.tag}>{tag}</span>)
	// 						}
	// 					</div>
	// 					<p className={style.preview}>
	// 						{blog.preview}
	// 					</p>
	// 				</article>
	// 			</Link>
	// 		))}
	// 		</>
	// 	);
	// }
}

export default blogs;