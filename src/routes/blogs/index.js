// import { h } from 'preact';
// import { Link } from "react-router-dom";
import React from 'react';
import style from "./style.module.css";
// import { Axios } from "@data-provider/axios";

const blogs = (props) => {
	console.log(props)
	return (
		<div className={style.pageBlogs}>
			<h1 className={style.pageTitle}>My Blogs</h1>
			<p></p>
		</div>
	);
};

// function getBlogsListing(data, isLoading) {
// 	if (isLoading) {
// 		return (
// 			<article class={style.loadingPlaceholder}>
// 				<h2 class={`${style.blogtitle} loading`}>&nbsp;</h2>
// 				<div class={`${style.loadingBody} loading`}>&nbsp;</div>
// 				<div class={`${style.loadingBody} loading`}>&nbsp;</div>
// 				<div class={`${style.loadingBody} loading`}>&nbsp;</div>
// 			</article>
// 		);
// 	}
// 	if (data && data.data) {
// 		const { data: blogs } = data;
// 		return (
// 			<>
// 				{blogs.edges.map(blog => (
// 				<Link href={`/blog/${blog.id}`}>
// 					<article>
// 						<h2>{blog.details.title}</h2>
// 						<div>
// 							{
// 								(blog.details.tags.substr(1, blog.details.tags.length - 2).split(',') || []).map(tag => <span class={style.tag}>{tag}</span>)
// 							}
// 						</div>
// 						<p class={style.preview}>
// 							{blog.preview}
// 						</p>
// 					</article>
// 				</Link>
// 			))}
// 			</>
// 		);
// 	}
// }

export default blogs;