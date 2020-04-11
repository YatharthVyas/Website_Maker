import React from 'react';
import './heading.css';

export default function Heading(props){

	const [index,setIndex] = React.useState(4)
	const [color,setColor] = React.useState('#000000')
	const [text,setText] = React.useState('')
	const [align,setAlign] = React.useState('left')

	let HeadingType = `h${7-index}`
	const editAlign = (event) => {
		const position=event.target.selectedIndex
		setAlign(event.target.options[position].value)
	}
	const editText = (event) => {
		setText(event.target.value)
	}
	const editColor = (event) =>{
		setColor(event.target.value)
	}
	const editIndex = (event) =>{
		setIndex(event.target.value)
	}
	if(!props.preview){
		return(
			<div className="box">
				<div align={align}>
					<input type="text" style={{fontSize:`${2/(7-index)}em`}} id="headingName" onChange={editText} value={text} placeholder="Enter Heading Text"/>
				</div>
				<div className="flex-box">
					<div className="flex-item">
						<label>
							Alignment:
						</label>
						<select value={align} onChange={editAlign}>
							<option value="left">Left</option>
							<option value="center">Center</option>
							<option value="right">Right</option>
						</select>
					</div>
					<div className="flex-item">
						<label>
							Color:
						</label>
						<input type="color" label="Select Text color" value={color} onChange={editColor}/>
					</div>
					<div className="flex-item">
						<label>
							Size Index:
						</label>
						<input type="range" min={1} max={6} value={index} onChange={editIndex}/>
					</div>
				</div>
			</div>
		)	
	}	
	else{
		return(
			<HeadingType style={{color:`${color}`}} align={align}>{text}</HeadingType>
		)
	}
}