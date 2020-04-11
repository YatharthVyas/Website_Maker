import React from 'react';

function TableContent(props){

	const handleChange = (event,row,column) =>{
		props.cells[event.target.getAttribute('data_row')][event.target.getAttribute('data_column')]=event.target.value;
		console.log(props.cells)
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
						Cell={props.cells[row_counter][column_counter]}
					</React.Fragment>
					:
					<input 
						data_row={row_counter} 
						data_column={column_counter} 
						id={`table${row_counter}${column_counter}`} 
						onChange={handleChange}
						value={!!props.cells[row_counter][column_counter]?props.cells[row_counter][column_counter]:''}
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
	for(var ctr=0;ctr<4;ctr++){
		cells[ctr]= new Array(4)
		console.log(1)
	}

	if(props.rows>=0 && props.columns>=0){	
		return(
			<div className={!props.preview?"box":''}>
				<table 
					border={1} 
					cellPadding={!!props.cellPadding?props.cellPadding:'5px'} 
					cellSpacing={!!props.cellSpacing?props.cellSpacing:'0px'}
				>
					<tbody>
						<TableContent rows={props.rows} columns={props.columns} preview={props.preview} cells={cells}/>
					</tbody>
				</table>
			</div>
		)
	}
}