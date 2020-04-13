import React from 'react';
import Appbar from '../Components/appbar/appbar';
import Table from '../Components/table/table';
import Heading from '../Components/heading/heading';
import Image from '../Components/image/image';
import './Main.css';

function WebsiteMaker() {

	const [showPreview,handleShowPreview] = React.useState(false);
	// const [tags] = React.useState([]);
	// var IDctr=0;
	const togglePreview = () =>{
		handleShowPreview(!showPreview);
	}
	React.useEffect(()=>console.log(1))

	const [codeArr] = React.useState([])
	var codeCtr=0;

	var htmlBegin = '!<!DOCTYPE html><html><head><title></title></head><body>'
	var htmlEnd = '</body></html>'
	var	outputCodeArr = [htmlBegin,...codeArr,htmlEnd]

	return (
	    <React.Fragment>
	        <Appbar/>
	        <div className="flex">
	        	<div className="flex-header">
	        		<h2 className="website-header"> {!!showPreview?"Your Website Preview:":"Edit Website"} </h2>
	        	</div>
	        	<div className="flex-btn">
		        	<button className="toggleBtn" onClick={togglePreview}>
		        		{showPreview?'Edit Contents':'Show Preview'}
		        	</button>
	        	</div>
	        </div>
	        <div className="website-container">
	          <Heading preview={showPreview} codeArr={codeArr} codeCtr={codeCtr++}/>
	          <Table rows={4} columns={4} preview={showPreview} codeArr={codeArr} codeCtr={codeCtr++}/>
	          <Image preview={showPreview} codeArr={codeArr} codeCtr={codeCtr++}/>
	        </div>
	        <br/>
	        <div style={{display:`${showPreview?'block':'none'}`}}>
		        <h3 className="code-header"> Your Code </h3>
		        <div className="website-container code-box">
		        	{outputCodeArr}
	    		</div>
	    	</div>
	    </React.Fragment>
  	);
}

export default WebsiteMaker;