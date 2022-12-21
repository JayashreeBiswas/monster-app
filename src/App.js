// import React, { Component } from 'react';
import {useState, useEffect} from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box';
import './App.css';

// Using Functional component************************
const App = () => {
  console.log("render");
  const [searchInput, searchInputField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  console.log(searchInput);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(res => setMonsters(res));
  }, []);

  const onSearchChange = (event) => {
    const searchInputString = event.target.value.toLocaleLowerCase(); // beacuse of the the includes() case sensivity
    searchInputField(searchInputString); 
    
  }

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchInput);
    });
    setFilteredMonsters(newfilteredMonsters);
  }, [monsters, searchInput])
  
  
  return(
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox onSearch={onSearchChange} placeholder="search monsters" className="monster-search-box" />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}
export default App;

// Using class component*****************************
// with data coming from api -------------(with multiple components)
// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       monsters: [],
//       searchInput: ''
//     };
//     // console.log('constructor');
//   }

//   componentDidMount(){
//     // console.log('componentMount');
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(res => this.setState(
//       () => {
//       return {monsters: res}
//       }, 
//       () => {
//         // console.log(this.state)
//       }
//     ));
//   }

//   onSearchChange = (event) => { // it's an anonymous function (a function that is not stored anywhere in a variable)
//     // console.log(event.target.value);
//     // console.log({startingArry: this.state.monsters});
//     const searchInput = event.target.value.toLocaleLowerCase(); // beacuse of the the includes() case sensivity
          
//     this.setState(() => {
//       return {searchInput: searchInput};
//     }, () => {
//       // console.log({endingArray: this.state.monsters});
//     })
//   }

//   render(){
//     // console.log('render');
//     const {monsters, searchInput} = this.state;
//     const {onSearchChange} = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchInput);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">Monster Rolodex</h1>
//         <SearchBox onSearch={onSearchChange} placeholder="search monsters" className="monster-search-box" />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

// export default App;

// // with data coming from api -------------
// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       monsters: [],
//       searchInput: ''
//     };
//     console.log('constructor');
//   }

//   componentDidMount(){
//     console.log('componentMount');
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(res => this.setState(
//       () => {
//       return {monsters: res}
//       }, 
//       () => {
//         console.log(this.state)
//       }
//     ));
//   }

//   onSearchChange = (event) => { // it's an anonymous function (a function that is not stored anywhere in a variable)
//     console.log(event.target.value);
//     // console.log({startingArry: this.state.monsters});
//     const searchInput = event.target.value.toLocaleLowerCase(); // beacuse of the the includes() case sensivity
          
//     this.setState(() => {
//       return {searchInput: searchInput};
//     }, () => {
//       console.log({endingArray: this.state.monsters});
//     })
//   }

//   render(){
//     console.log('render');
//     const {monsters, searchInput} = this.state;
//     const {onSearchChange} = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchInput);
//     });
//     return (
//       <div className="App">
//         <input className="search-box" type="search" placeholder="search monsters" onChange={onSearchChange} />
        // {
        //   filteredMonsters.map((monster) => {
        //     return <div key={monster.id}>
        //       <h1>{monster.name}</h1>
        //     </div>;
        //   }) // inside map there is a callback function which will 
        // }
//       </div>
//     );
//   }
// }

// export default App;

// with hardcoded data----------
// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       monsters: [
//         {
//           name: 'Linda',
//           id: '12a525'
//         },
//         {
//           name: 'Frank',
//           id: '12a52s'
//         },
//         {
//           name: 'Jacky',
//           id: '12a52f'
//         },
//         {
//           name: 'Test',
//           id: '12a52g'
//         }
//       ]
//     };
//   }
//   // function changeName(argument) {
//   //   // body...
//   // }
//   render(){
//     return (
//       <div className="App">
//         {
//           this.state.monsters.map((monster) => {
//             return <div key={monster.id}>
//               <h1>{monster.name}</h1>
//             </div>;
//           }) // inside map there is a callback function which will 
//         }
//       </div>
//     );
//   }
// }

// export default App;

// initial practice-------
// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       name: {firstName: 'Testing', lastName: 'ABC'},
//       company: 'Kapture CRM'
//     };
//   }
//   // function changeName(argument) {
//   //   // body...
//   // }
//   render(){
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Hello {this.state.name.firstName}{this.state.name.lastName}, work at {this.state.company}</p>
//           <button onClick={() => {
//              // this.setState({
//             //   name: {firstName: 'Test', lastName: 'BC'}
//             // }) // setState with object as a parameter
//             this.setState(() => { // with function
//               return{
//                 name: {firstName: 'Test', lastName: 'BC'}
//               }
//             }, () => { // callback function of prev function (callback function are optional)
//               console.log(this.state);
//             }) // setState with function (can pass with parameters state(to access the previous state obj and used when change/update needs based on some state value) and props) and a callback as parameters
//             // console.log(this.state);
//           }}>Change Name</button>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
