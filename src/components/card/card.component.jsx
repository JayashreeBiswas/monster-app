// import React, {Component} from 'react';
import {useState, useEffect} from 'react';
import './card.style.css';

const Card = ({monster}) => {
	const {name, id, email} = monster;
	return(
		<div className="card-container">
			<img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
			<h2 key={id}>{name}</h2>
			<p key={id}>{name}</p>
		</div>
	);
}
// class Card extends Component{
// 	render(){
// 		// console.log(this.props.monster);
// 		const {name, id, email} = this.props.monster;
// 		return(
			// <div className="card-container">
			// 	<img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
			// 	<h2 key={id}>{name}</h2>
			// 	<p key={id}>{name}</p>
			// </div>
// 		);
// 	}
// }
export default Card;