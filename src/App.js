import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import "./App.css";
import SearchField from "./components/search-field/search-field.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monstersData) => setMonsters(monstersData));

    // (async function fetchData() {
    //   const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    //   const data = await resp.json();

    //   setMonsters(data);
    // })();
  }, []);

  useEffect(() => {
    const filtered = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(filtered);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const newSearchField = event.target.value.toLowerCase();
    setSearchField(newSearchField);
  };

  return (
    <div className="App">
      <h1 className="app-header">Monsters Rolodex</h1>
      <SearchField
        className="search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   // componentDidMount() {
//   //   fetch("https://jsonplaceholder.typicode.com/users")
//   //     .then((response) => response.json())
//   //     .then((data) =>
//   //       this.setState(
//   //         () => {
//   //           return { monsters: data };
//   //         },
//   //         () => {
//   //           console.log(this.state);
//   //         }
//   //       )
//   //     );
//   // }

//   async componentDidMount() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     this.setState(
//       () => {
//         return { monsters: data };
//       },
//       () => {
//         console.log(this.state);
//       }
//     );
//   }

//   onSearchChange = (e) => {
//     const searchField = e.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;

//     const filtered = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-header">Monsters Rolodex</h1>
//         <SearchField
//           className="search-box"
//           onChangeHandler={this.onSearchChange}
//           placeholder="search monsters"
//         />
//         <CardList monsters={filtered} />
//       </div>
//     );
//   }
// }

export default App;
