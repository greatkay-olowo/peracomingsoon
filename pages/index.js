import React from 'react';
import AppContainer from '../components/Container';
import Image from 'next/image';
import FAQ from '../components/UI/FAQ';

const CTA = () => {
	return (
		<div className='mt-8 text-center sm:text-left'>
			<button
				className='bg-primary text-white px-4 py-2 rounded hover:shadow-lg w-full h-12'
				onClick={() => {}}>
				Apply Now
			</button>
		</div>
	);
};

const Subheading = ({ children }) => {
	return (
		<>
			<h2 className='capitalize sm:text-4xl text-center  text-2xl font-bold mb-3 text-secondary mt-24'>
				{children}
			</h2>
			<hr className='w-40 mx-auto border-primary border-b-1  mb-2' />
		</>
	);
};
export default function Home() {
	return (
		<AppContainer>
			{/* Hero */}
			<div className='flex sm:flex-row flex-col mt-10 mb-28'>
				<div className='w-full mb-5 sm:mr-10'>
					<h1 className='sm:text-8xl text-center sm:text-left text-6xl font-bold mb-10 text-secondary'>
						Buy Now and Pay Monthly
					</h1>
					<p className='sm:text-2xl text-lg text-center sm:text-left'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Mauris eget nisl id libero consectetur fermentum.
					</p>
					<CTA />
				</div>
				<div className='w-full '>
					<Image
						src={'/hero.jpg'}
						alt='hero'
						width={1200}
						height={800}
					/>
				</div>
			</div>
			{/*End of Hero */}
			{/* How it works */}
			<Subheading>How it works</Subheading>
			<div className='mx-auto flex justify-around p-6 '>
				<div className='max-w-lg '>
					<ol className='relative border-l border-primary container-sm '>
						<li className='mb-10 ml-6'>
							<span className='flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white '>
								<svg
									className='w-3 h-3 text-primary '
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
										clipRule='evenodd'></path>
								</svg>
							</span>
							<h3 className='flex items-center mb-1 text-lg font-semibold  '>
								Fill in your basic information
							</h3>

							<p className='mb-4 text-base font-normal text-gray-500'>
								You will need to provide your basic information
							</p>
							<ul className='text-sm'>
								<li className='w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
									Valid GOvernment Issued ID
								</li>
								<li className='w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600'>
									Last 6 months bank statement
								</li>
								<li className='w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600'>
									CAC Certificate / Employment Letter or
									Letter of Employment Confirmation
								</li>
								<li className='w-full px-4 py-2 rounded-b-lg'>
									BVN
								</li>
							</ul>
						</li>
						<li className='mb-10 ml-6'>
							<span className='flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
								<svg
									className='w-3 h-3 text-blue-600 dark:text-blue-400'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
										clipRule='evenodd'></path>
								</svg>
							</span>
							<h3 className='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
								Get An Offer
							</h3>
						</li>
						<li className='mb-10 ml-6'>
							<span className='flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
								<svg
									className='w-3 h-3 text-blue-600 dark:text-blue-400'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
										clipRule='evenodd'></path>
								</svg>
							</span>
							<h3 className='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
								Pay Your Equity Contribution
							</h3>
						</li>
						<li className='mb-10 ml-6'>
							<span className='flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
								<svg
									className='w-3 h-3 text-blue-600 dark:text-blue-400'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
										clipRule='evenodd'></path>
								</svg>
							</span>
							<h3 className='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
								Complete Other Documements
							</h3>
						</li>
						<li className='mb-10 ml-6'>
							<span className='flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white '>
								<svg
									className='w-3 h-3 text-blue-600 dark:text-blue-400'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
										clipRule='evenodd'></path>
								</svg>
							</span>
							<h3 className='mb-1 text-lg font-semibold text-gray-900'>
								Start living in your property!
							</h3>
						</li>
					</ol>
					<CTA />
				</div>
			</div>
			{/* End of How it works */}
			{/* Our Partners */} <Subheading>Some of Our Partners</Subheading>
			<div className='bg-white rounded-lg shadow-lg'>
				<div className='flex flex-wrap justify-center gap-10 py-20'>
					<div className='w-1/5 sm:w-1/10'>
						<img src='/partner.svg' alt='partner-1' />
					</div>
					<div className='w-1/5 sm:w-1/10'>
						<img
							className='mx-auto'
							src='/partner2.svg'
							alt='partner-2'
						/>
					</div>
					<div className='w-1/5 sm:w-1/10'>
						<img
							className='mx-auto'
							src='/partner3.png'
							alt='partner-3'
						/>
					</div>
					<div className='w-1/5 sm:w-1/10'>
						<img
							className='mx-auto'
							src='/partner4.jpg'
							alt='partner-4'
						/>
					</div>
					<div className='w-1/5 sm:w-1/10'>
						<img
							className='mx-auto'
							src='/partner5.jpg'
							alt='partner-1'
						/>
					</div>
					<div className='w-1/5 sm:w-1/10'>
						<img
							className='mx-auto bg-[#330066] h-full w-full p-3'
							src='/partner6.svg'
							alt='partner-2'
						/>
					</div>
				</div>
			</div>
			{/*End of Our Partners */}
			{/* FAQ */}
			<Subheading>Frequently Asked questions</Subheading>
			<FAQ />
			{/*End of FAQ */}
			{/* DSA */}
		</AppContainer>
	);
}
