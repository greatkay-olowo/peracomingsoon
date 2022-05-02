import React, { useState } from 'react';
import { CgAdd } from 'react-icons/cg';
import { CgClose } from 'react-icons/cg';

const NewApplication = ({ header }) => {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			{showModal ? (
				<>
					<div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none '>
						<div className='container relative mx-auto max-w-[640px] px-2 sm:px-0  '>
							<div className=' rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none mt-10'>
								<div className='flex items-start justify-between p-5 bg-accent rounded-t '>
									<button
										className='bg-transparent  text-black float-right '
										onClick={() => setShowModal(false)}>
										<span className='text-black opacity-7 h-6 w-6 block  rounded-full text-2xl hover:bg-primary hover:text-white'>
											<CgClose />
										</span>
									</button>
								</div>
								<div className='relative p-6 flex-auto bg-background'></div>
							</div>
						</div>
					</div>
				</>
			) : null}
		</>
	);
};

export default NewApplication;
