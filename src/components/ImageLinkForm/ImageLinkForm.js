import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSumbit }) => {
	return (
		<div>
		 	<p  className='f3'>
		 	{"Paste and image URL and this app will find the faces on it! "}
		 	</p>
		 	<div className='center'>
			 	<div className='form center pa4 br3 shadow-5'>
			 	<input className='f4 pa2 w-70 center' type='search' onChange={onInputChange} />
			 	<button 
			 	className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
			 	onClick={onButtonSumbit}
			 	>Dectect</button>
			 	</div>
		 	</div>
		</div>
	);
}

export default ImageLinkForm;