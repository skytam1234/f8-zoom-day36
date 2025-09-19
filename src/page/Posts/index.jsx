import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";
import styles from "./Posts.module.scss";
function Posts() {
    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = parseInt(searchParams.get("page")) || 1;
    const postsPerPage = 20;
    const handlePageChange = (newPage) => {
        setSearchParams({ page: newPage });
    };
    useEffect(() => {
        fetch(
            `https://jsonplaceholder.typicode.com/posts?_limit=${postsPerPage}&_page=${currentPage}`
        )
            .then((res) => {
                if (res.ok) {
                    const tPages = Number(res.headers.get("x-total-count"));
                    setTotalPages(Math.ceil(tPages / postsPerPage));
                }
                return res.json();
            })
            .then((res) => {
                setPosts(res);
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            });
    }, [currentPage, totalPages]);
    return (
        <div className={`${styles.postsPage} container`}>
            <h1>Posts List</h1>

            {loading && <Loading />}
            {/* {error && <p className={styles.error}>{error}</p>} */}

            {!loading && (
                <>
                    <div className={styles.postList}>
                        {posts.map((post) => (
                            <div key={post.id} className={styles.postItem}>
                                <h2>
                                    <Link to={`/posts/${post.id}`}>
                                        {post.title}
                                    </Link>
                                </h2>
                                <p>{post.body.substring(0, 100)}...</p>
                                <Link
                                    to={`/posts/${post.id}`}
                                    className={styles.readMore}
                                >
                                    Read More
                                </Link>
                            </div>
                        ))}
                    </div>

                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </>
            )}
        </div>
    );
}
export default Posts;
