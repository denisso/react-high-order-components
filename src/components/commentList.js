import Comment from "./comment";
import WithSubscription from "./withSubscription"

function CommentList(props) {
    return (
        <div>
            {props
                .data
                .map((comment) => (<Comment comment={comment} key={comment.id}/>))}
        </div>
    );
}

export default CommentList = WithSubscription(CommentList, (DataSource) => DataSource.getComments());