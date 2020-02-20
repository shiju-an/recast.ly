class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    this.props.update(this.state.value);
  }

  handleSubmit(e, query) {
    e.preventDefault();
    this.props.update(query);
  }

  render() {
    return (
      <form className="search-bar form-inline" onSubmit={(e) => { this.handleSubmit(e, this.state.value); }}>
        <input className="form-control" type="text" onChange={this.handleChange} />
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
