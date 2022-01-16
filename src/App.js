import CommentList from "./components/commentList";
import BlogPost from "./components/blogPost"

export default function App() {
    return (
        <div className="App">
            <CommentList/>
            <BlogPost id="23"/>
        </div>
    );
}
