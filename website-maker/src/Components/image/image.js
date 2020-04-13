import React from 'react';

export default function Image(props){
	const [imgURL,handleImgURL] = React.useState('')
	const [height,setHeight] = React.useState(150)
	const [width,setWidth] = React.useState(150)
	const [align,setAlign] = React.useState('left')
	const [custom,setCustom] = React.useState(false)
	const [validImg,setValidImg] = React.useState(true)
	var imgLoad = false

	//Updates the code string value whenever component is updated
	React.useEffect(()=>{
		getImageCode()
	})

	const editAlign = (event) => {
		const position=event.target.selectedIndex
		setAlign(event.target.options[position].value)
	}
	const handleImgUpload = (event) =>{
		handleImgURL(event.target.value)
		imgLoad=false
	}
	const handleHeight = (event) => {
		setWidth(Math.round(width*event.target.value/height))
		setHeight(event.target.value)
	}
	const handleWidth = (event) => {
		setHeight(Math.round(height*event.target.value/width))
		setWidth(event.target.value)
	}
	const imgLoaded = (event) => {
		setValidImg(true)
		if(!imgLoad){
			setHeight(event.target.naturalHeight)
			setWidth(event.target.naturalWidth)
			imgLoad=true
		}
	}
	// This function will add the HTML code of image to the array
	const getImageCode = () => {
		var code = ''
		if(imgURL!==''){
			if(align!=='left'){
				code+=`<div align="${align}">`
			}
			code+=`<img src="${imgURL}"`
			if(custom){
				code+=` style="height:${height}px;width:${width}px"`
			}
			code+='/>'
			if(align!=="left"){
				code+='</div>'
			}
		}
		props.codeArr[props.codeCtr]=code
	}

	if(props.preview){
		return(
			<div align={align}>
				{!!imgURL?
					<img 
						src={imgURL} 
						alt={!!imgURL?"Your Uploaded Image":"Invalid Img URL"} 
						style={custom?{height:`${height}px`,width:`${width}px`}:null}
					/>
				:
					null
				}
			</div>
		)
	}
	else{
		return(
			<div className="box">
				<div className="flex-box">
					<div className="flex-item">
						<label> 
							Image URL:
						</label>
						<input
							type="url" 
							value={imgURL} 
							height={`${height}px`} 
							onChange={handleImgUpload} 
							placeholder="Enter Image URL" 
						/>
					</div>
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
						<input
							type="checkbox"
							label="Use Custom Dimensions"
							value={custom}
							onChange={()=>setCustom(!custom)}
						/>
						<label>
							Use Custom Dimensions
						</label>
					</div>
					{custom?
						<div className="flex-item">
							<label> 
								Height(pixels):
							</label>
							<input 
								type="number"
								onChange={handleHeight} 
								value={height} 
							/>
						<br/><br/>
							<label> 
								Width (pixels):
							</label>
							<input 
								type="number"
								onChange={handleWidth} 
								value={width} 
							/>
						</div>
					:
						<React.Fragment></React.Fragment>
					}
				</div>
				<div style={{display:`${imgURL!==''?'block':'none'}`}}>
					<div style={{display:`${validImg?'none':'block'}`}}>
						This Image URL cannot be processed
					</div>
					<div style={{display:`${validImg?'block':'none'}`}} align={align}>
					<img 
						src={imgURL} 
						onLoad={imgLoaded} 
						onError={()=>{setValidImg(false)}}
						alt={!!imgURL?"Your Uploaded Image":"Invalid Img URL"} 
						style={custom?{height:`${height}px`,width:`${width}px`}:null}
					/>
					</div>
				</div>
			</div>
		)
	}
}