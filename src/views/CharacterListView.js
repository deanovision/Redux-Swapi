import React from "react";
import { connect } from "react-redux";
import { getCharacters } from "../actions";
import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    if (this.props.fetching) {
      return <h2>Characters Loading...</h2>;
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <h1>Star Wars</h1>
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  error: state.charsReducer.error,
  isFetching: state.charsReducer.isFetching
});

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    getCharacters
  }
)(CharacterListView);
