import React from 'react';
import Appbar from '../Components/appbar/appbar';
import Table from '../Components/table/table';
import Heading from '../Components/heading/heading';
import './Main.css';

function WebsiteMaker() {

	const [showPreview,handleShowPreview] = React.useState(false);
	// const [tableContent] = React.useState([]);
	// var IDctr=0;
	const togglePreview = () =>{
		handleShowPreview(!showPreview);
	}

	return (
	    <React.Fragment>
	        <Appbar/>
	        <div className="flex">
	        	<div className="flex-header">
	        		<h2 className="website-header"> Your Website Preview: </h2>
	        	</div>
	        	<div className="flex-btn">
		        	<button className="toggleBtn" onClick={togglePreview}>
		        		{showPreview?'Edit Contents':'Show Preview'}
		        	</button>
	        	</div>
	        </div>
	        <div className="website-container">
	          <Heading preview={showPreview}/>
	          <Table rows={4} columns={4} preview={showPreview}/>
	        </div>
	    </React.Fragment>
  	);
}

export default WebsiteMaker;