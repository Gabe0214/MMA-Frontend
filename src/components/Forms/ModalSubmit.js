import React from 'react';
import './modal.scss';
import Loader from 'react-loader-spinner';
export const ModalSubmit = ({ seconds, heading }) => {
	return (
		<div className='modal-container'>
			<div className='modal-content'>
				<h3>{heading}</h3>
				<span>You will be directed in {seconds}</span>
				<Loader
					type='Puff'
					color='black'
					height={25}
					width={25}
					//3 secs
				/>
			</div>
		</div>
	);
};
