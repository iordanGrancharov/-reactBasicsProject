// import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = (props, forwardRef) => {
  const { monsters } = props;

  return (
    <div className="card-list">
      {monsters.map((monster) => {
        const { id, name, email } = monster;
        return (
          <Card
            className="card-container"
            key={id}
            id={id}
            name={name}
            email={email}
          />
        );
      })}
      ;
    </div>
  );
};

// class CardList extends Component {
//   constructor() {
//     super();
//   }

//   render() {
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           const { id, name, email } = monster;
//           return (
//             <Card
//               className="card-container"
//               key={id}
//               id={id}
//               name={name}
//               email={email}
//             />
//           );
//         })}
//         ;
//       </div>
//     );
//   }
// }

export default CardList;
