import React from 'react';
import './table.css';

function TableContent(props){

	const handleChange = (event,row,column) =>{
		let arr = [...props.cells]
		arr[event.target.getAttribute('data_row')][event.target.getAttribute('data_column')]=event.target.value;
		props.setCells(arr);
	}

	var row_counter=0
	var column_counter=0
	var rows =[]
	for(row_counter=0;row_counter<props.rows;row_counter++){
		var row_cells=[];
		for(column_counter=0;column_counter<props.columns;column_counter++){
			row_cells.push(
				<td key={row_counter*10+column_counter}>
				{props.preview?
					<React.Fragment>
						{props.cells[row_counter][column_counter]}
					</React.Fragment>
					:
					<input 
						data_row={row_counter} 
						data_column={column_counter} 
						id={`table${row_counter}${column_counter}`} 
						onChange={handleChange}
						value={props.cells[row_counter][column_counter]||''}
						type="text"
					/>
				}
				</td>
			)
		}
		rows.push(<tr key={row_counter}>{row_cells}</tr>)
	}
	return rows;
}

export default function Table(props){

	const [cells,setCells]=React.useState([]);

	//We use the mounted hook to declare the array only once.
	const [mounted,setMounted]=React.useState(false);
	if(!mounted){
		for(var ctr=0;ctr<4;ctr++){
			cells[ctr]= new Array(4)
		}
		setMounted(true);
	}

	if(props.rows>=0 && props.columns>=0){	
		return(
			<div className={!props.preview?"box":''} id={!props.preview?"tableContainer":''}>
				<table 
					border={1} 
					cellPadding={!!props.cellPadding?props.cellPadding:'5px'} 
					cellSpacing={!!props.cellSpacing?props.cellSpacing:'0px'}
				>
					<tbody>
						<TableContent rows={props.rows} columns={props.columns} preview={props.preview} cells={cells} setCells={setCells}/>
					</tbody>
				</table>
			</div>
		)
	}
}