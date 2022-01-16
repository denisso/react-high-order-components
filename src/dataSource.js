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
            }, {
                id: 3,
                comment: "comment 3"
            }, {
                id: 4,
                comment: "comment 4"
            }, {
                id: 5,
                comment: "comment 5"
            }, {
                id: 6,
                comment: "comment 6"
            }
        ]
    };
    return {
        getComments: () => self.comments,
        addChangeListener: (handler) => handlers.add(handler),
        removeChangeListener: (handler) => handlers.delete(handler)
    };
}
const DataSource = Comments();
export default DataSource;
