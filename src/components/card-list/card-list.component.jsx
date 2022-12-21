// import React, {Component} from 'react';
import {useState, useEffect} from 'react';
import './card-list.css'
import Card from '../card/card.component';

const CardList = ({monsters}) => {
	return (
		<div className="card-list">
			{monsters.map((monster) => {
				// const {name, email, id} = monster
				return (
					<Card monster={monster}/>
					
					// 
				);
			})}
		</div>
	);
}

// class CardList extends Component{
// 	render(){
// 		// console.log(this.props.monsters);
// 		const {monsters} = this.props;
// 		return (
// 			<div className="card-list">
// 				{monsters.map((monster) => {
// 					// const {name, email, id} = monster
// 					return (
// 						<Card monster={monster}/>
						
// 						// 
// 					);
// 				})}
// 			</div>
// 		);
// 	}
// }

export default CardList;