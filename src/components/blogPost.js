import TextBlock from "./textBlock"
import WithSubscription from "./withSubscription"

function BlogPost(props) {
    return <TextBlock text={props.data}/>;
}
export default BlogPost = WithSubscription(BlogPost, (DataSource, props) => DataSource.getBlogPost(props.id));
