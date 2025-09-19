import styles from "./PostDetail.module.scss";
import Loading from "../../components/Loading";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function PostDetail() {
    const { postId } = useParams();
    let navigate = useNavigate();
    const [post, setPost] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [comments, setComments] = React.useState([]);
    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    if (res.status === 404) {
                        navigate("/posts", { replace: true });
                    }
                    return;
                }
            })
            .then((res) => {
                setPost(res);
            });
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then((res) => {
                setComments(res);
            });
    }, [postId, navigate]);

    return (
        <>
            {loading && <Loading />}
            {!loading && (
                <div className={`${styles.postDetail} container`}>
                    <h1 className={styles.postTitle}>{post.title}</h1>
                    <p className={styles.postBody}>{post.body}</p>
                    <p className={styles.postMeta}>
                        Author ID: <span>{post.userId}</span>
                    </p>

                    <h2 className={styles.commentsTitle}>
                        Comments ({comments.length})
                    </h2>
                    <div className={styles.commentsList}>
                        {comments.map((comment) => (
                            <div
                                key={comment.id}
                                className={styles.commentItem}
                            >
                                <p className={styles.commentName}>
                                    <strong>{comment.name}</strong> (
                                    {comment.email})
                                </p>
                                <p className={styles.commentBody}>
                                    {comment.body}
                                </p>
                            </div>
                        ))}
                        {comments.length === 0 && (
                            <p>No comments for this post.</p>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
export default PostDetail;
