// import React, {Component} from 'react';
// import {useState, useEffect} from 'react';

import './search-box.css';

const SearchBox = ({className, placeholder, onSearch}) => (
		<input className={`search-box ${className}`} type="search" placeholder={placeholder} onChange={onSearch} />
	);

// class SearchBox extends Component{
// 	render(){
// 		// console.log(this.props);
// 		const changeHandler = this.props;
// 		return(
// 			<input className={`search-box ${this.props.className}`} type="search" placeholder={this.props.placeholder} onChange={changeHandler.onSearch} />
// 		);
// 	}
// }

export default SearchBox;