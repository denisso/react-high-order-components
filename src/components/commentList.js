import React from "react";
import DataSource from "../dataSource";
import Comment from "./comment";

export default class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this
            .handleChange
            .bind(this);
        this.state = {
            // "DataSource" -- произвольный глобальный источник данных
            comments: DataSource.getComments()
        };
    }
    componentDidMount() {
        // Подписаться на оповещения
        DataSource.addChangeListener(this.handleChange);
    }
    componentWillUnmount() {
        // Отписаться от оповещений
        DataSource.removeChangeListener(this.handleChange);
    }
    handleChange() {
        // Получать обновления комментариев из внешнего источника в локальном состоянии
        this.setState({
            comments: DataSource.getComments()
        });
    }
    render() {
        return (
            <div>
                {this
                    .state
                    .comments
                    .map((comment) => (<Comment comment={comment} key={comment.id}/>))}
            </div>
        );
    }
}
