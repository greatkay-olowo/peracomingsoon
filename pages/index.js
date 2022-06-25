import React, { useState } from 'react';
import AppContainer from '../components/Container';
import Image from 'next/image';
import Faq from '../components/UI/FAQ';
import InputUI from '../components/UI/Input';
import ButtonUI from '../components/UI/Button';
import HeroPic from '../public/hero.jpg';
import { CgCheck } from 'react-icons/cg';

import {
	loanAmount,
	equity as _equity,
	emi,
	propertyAmount,
} from '../services/loanCalc';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const CTA = () => {
	return (
		<div className='mt-8 text-center'>
			<button
				className='bg-primary sm:text-lg py-5 font-medium text-center text-white my-10 rounded-lg w-60 hover:shadow-lg uppercase hover:drop-shadow-xl'
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
	const [amount, setAmount] = useState();
	const [tenure, setTenure] = useState();
	const [equity, setEquity] = useState();

	return (
		<>
			<Nav />
			{/* Hero */}
			<div>
				<div className='bg-hero bg-cover object-cover bg-center h-screen w-full text-center p-5'>
					<div className='sm:pt-35 pt-20 sm:w-2/3 mx-auto w-full '>
						<h1 className='sm:text-4xl text-3xl  font-extrabold sm:mb-10 mb-4 text-white drop-shadow-lg'>
							Buy that property now, <br /> pay monthly.
						</h1>
						<p className='text-sm font-bold text-white drop-shadow-lg'>
							This mortgage could save you millions.
						</p>
						<div className='sm:flex justify-between py-5 my-5 sm:w-3/4 w-full mx-auto sm:mb-30'>
							<div className='w-auto mb-2'>
								<div className='flex'>
									<div
										className='w-[30px] h-[30px] bg-white rounded-full flex 
 justify-center items-center'>
										<p>
											<CgCheck className=' text-primary text-4xl' />
										</p>
									</div>
									<p className='text-white ml-1 justify-left items-center'>
										24/7 support
									</p>
								</div>
							</div>
							<div className='w-auto mb-2'>
								<div className='flex'>
									<div
										className='w-[30px] h-[30px] bg-white rounded-full flex 
 justify-center items-center'>
										<p>
											<CgCheck className=' text-primary text-4xl' />
										</p>
									</div>
									<p className='text-white ml-1 justify-center items-center'>
										Simple online experience
									</p>
								</div>
							</div>
							<div className='w-auto'>
								<div className='flex'>
									<div
										className='w-[30px] h-[30px] bg-white rounded-full flex 
 justify-center items-center'>
										<p>
											<CgCheck className=' text-primary text-4xl' />
										</p>
									</div>
									<p className='text-white ml-1 justify-center items-center'>
										Fast Processing Time
									</p>
								</div>
							</div>
						</div>

						<CTA />
					</div>
				</div>
			</div>
			{/*End of Hero */}
			{/* start of calculator */}
			<div className='sm:mx-40  mx-5 pt-20  py-2 sm:px-0 bottom-0 min-h-screen pb-7'>
				<>
					<div className='sm:flex'>
						<div className='sm:w-1/2 mb-5'>
							<div className='text-4xl sm:text-4xl font-semibold sm:font-bold'>
								What you need, <br /> when you need it
							</div>
							<button className='bg-primary sm:text-lg py-5 font-medium text-center text-white my-10 rounded-lg w-60 hover:shadow-lg uppercase hover:drop-shadow-xl'>
								Get Prequalified
							</button>
						</div>

						<div className='sm:w-1/2 mb-5'>
							<div className=''>
								<div className='w-2/3 text-2xl  font-semibold pb-5'>
									Get pre-approved in as little as 3 minutes
								</div>
								<div className='w-full border-b border-black pb-12 text-lg'>
									Our underwriting algorithm helps us make you
									an offer quickly.
								</div>
							</div>
							<div className='mt-12'>
								<div className='w-2/3 text-2xl  font-semibold pb-5'>
									5 days processing timeline
								</div>
								<div className='w-full border-b border-black pb-12 text-lg'>
									Close your house deal within an average of 5
									working days.
								</div>
							</div>
							<div className='mt-12'>
								<div className='w-2/3 text-2xl  font-semibold pb-5'>
									Easy Application Process
								</div>
								<div className='w-full border-b border-black pb-12 text-lg'>
									Apply online within 2 minutes.
								</div>
							</div>
						</div>
					</div>
				</>
				<>
					<div className=' bg-primary flex my-60 rounded-2xl sm:p-20 p-5 overflow-hidden'>
						<div className='z-40 w-full'>
							<div className='text-white drop-shadow text-2xl sm:text-4xl font-semibold sm:font-bold w-full'>
								Find the right property for your budget
							</div>
							<div className='w-full'>
								<button className='bg-white sm:text-lg text-sm py-5 font-semibold text-center text-primary my-10 rounded-lg sm:w-96 w-full hover:shadow-lg uppercase hover:drop-shadow-xl'>
									Use our calculators
								</button>{' '}
							</div>
						</div>
						<div className='w-1/2 relative'>
							<div className='blur-sm	'>
								<div className='absolute left-0 top-10  rounded-full sm:w-[400px] sm:h-[400px] w-[500px] h-[500px]  bg-red-300'></div>
								<div className='absolute right-0 bottom-10  rounded-full sm:w-[400px] sm:h-[400px] w-[500px] h-[500px] bg-green-300'></div>
							</div>
						</div>
					</div>
				</>
				{/* FAQ */}
				<p className='text-4xl sm:text-4xl font-semibold sm:font-bold mb-10 text-center'>
					Get help
				</p>
				<Faq />
				{/*End of FAQ */}
			</div>
			<Footer />
		</>
	);
}
