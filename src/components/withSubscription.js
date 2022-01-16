import React from "react"
import DataSource from "../dataSource"

// Эта функция принимает компонент...
export default function WithSubscription(WrappedComponent, selectData) {
    // ...и возвращает другой компонент...
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
          data: selectData(DataSource, props)
        };
      }
  
      componentDidMount() {
        // ...который подписывается на оповещения...
        DataSource.addChangeListener(this.handleChange);
      }
  
      componentWillUnmount() {
        DataSource.removeChangeListener(this.handleChange);
      }
  
      handleChange() {
        this.setState({
          data: selectData(DataSource, this.props)
        });
      }
  
      render() {
        // ... и рендерит оборачиваемый компонент со свежими данными!
        // Обратите внимание, что мы передаём остальные пропсы
        return <WrappedComponent data={this.state.data} {...this.props} />;
      }
    };
  }