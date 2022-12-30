// import { Component } from "react";
import "./search-box.styles.css";

const SearchField = (props) => {
  const { className, placeholder, onChangeHandler } = props;

  return (
    <input
      className={className}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

// class SearchField extends Component {
//   constructor() {
//     super();
//   }

//   render() {
//     return (
//       <input
//         className={this.props.className}
//         type="search"
//         placeholder={this.props.placeholder}
//         onChange={this.props.onChangeHandler}
//       />
//     );
//   }
// }

export default SearchField;
