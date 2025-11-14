class Counter extends React.Component {
  state = {
    count: 0,
  };
  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render(){
    return this.props.render(this.state.count, this.incrementCount)
  }

}
