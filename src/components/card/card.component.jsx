// import { Component } from "react";
import "./card.styles.css";

const Card = (props) => {
  const { className, name, email, id } = props;

  return (
    <div className={className} key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}/set=2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

// class Card extends Component {
//   constructor() {
//     super();
//   }

//   render() {
//     const { className, name, email, id } = this.props;
//     return (
//       <div className={className} key={id}>
//         <img
//           alt={`monster ${name}`}
//           src={`https://robohash.org/${id}/set=2&size=180x180`}
//         />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

export default Card;
