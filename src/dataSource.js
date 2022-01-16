function Comments() {
    const handlers = new Set();
    const self = {
        comments: [
            {
                id: 1,
                comment: "comment 1"
            }, {
                id: 2,
                comment: "comment 2"
            }
        ],
        posts: [
            {
                id: 1,
                post: "post 1"
            }, {
                id: 2,
                post: "post 2"
            }
        ]
    };
    return {
        getComments: () => self.comments,
        getBlogPost: (id) => self.post[0 | Math.abs(id % self.post.length)],
        addChangeListener: (handler) => handlers.add(handler),
        removeChangeListener: (handler) => handlers.delete(handler)
    };
}
const DataSource = Comments();
export default DataSource;
