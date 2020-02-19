class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', active: true};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    if (this.state.active) {
      this.props.update(this.state.value);
      console.log('updating');
      this.setState({active: false});
      var setState = this.setState.bind(this);
      setTimeout(function() {
        setState({active: true});
      }, 1000);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({value: event.target.value});
    this.props.update(this.state.value);
    this.value = '';
  }

  render() {
    return (
      <form className="search-bar form-inline" onSubmit={this.handleSubmit}>
        <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange} />
        <button className="btn hidden-sm-down" type="submit" value="submit">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </form>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
