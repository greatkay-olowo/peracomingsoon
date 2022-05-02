import React, { useState } from 'react';
import AppContainer from '../components/Container';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ButtonUI from '../components/UI/button';
import { ImFilesEmpty } from 'react-icons/im';

const sampleData = [
	{
		date: '2020-01-01',
		purpose: 'Land',
		amount: 1000000,
		status: 'approved',
		id: '1',
	},
	{
		date: '2020-01-01',
		purpose: 'Flat in Eko atlantic',
		amount: 1000000,
		status: 'pending',
		id: '2',
	},
	{
		date: '2020-01-01',
		purpose: 'Flat in Eko atlantic',
		amount: 1000000,
		status: 'rejected',
		id: '8',
	},
	{
		date: '2020-01-01',
		purpose: 'Flat in Eko atlantic',
		amount: 1000000,
		status: 'rejected',
		id: '3',
	},
	{
		date: '2020-01-01',
		purpose: 'Flat in Eko atlantic',
		amount: 1000000,
		status: 'rejected',
		id: '5',
		reasonForRejection: 'testing',
	},
];
const status = {
	pending: `text-secondary`,
	approved: `text-green`,
	rejected: `text-red`,
};

export default function Home() {
	const router = useRouter();
	const [applicationData, setApplicationData] = useState(sampleData);

	return (
		<>
			<AppContainer>
				<div className='w-full  '>
					<div className='w-full'>
						<div className='flex sm:flex-row flex-col justify-between items-baseline '>
							<div className='sm:text-2xl font-bold  sm:my-5 '>
								Your applications
							</div>
							<ButtonUI
								text='New Application'
								onClick={() => {
									router.push('/new-application');
								}}
							/>
						</div>

						{applicationData.length === 0 ? (
							<div className='py-5  text-center  text-secondary p-3 '>
								<ImFilesEmpty className='text-4xl mx-auto' />
								<span className='text-sm font-medium'>
									No application yet
								</span>
							</div>
						) : (
							<>
								{/*  */}

								<div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
									<div className='p-4'>
										<label
											htmlFor='table-search'
											className='sr-only'>
											Search
										</label>
										<div className='relative mt-1'>
											<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
												<svg
													className='w-5 h-5 text-gray-500 dark:text-gray-400'
													fill='currentColor'
													viewBox='0 0 20 20'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														fillRule='evenodd'
														d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
														clipRule='evenodd'></path>
												</svg>
											</div>
											<input
												type='text'
												id='table-search'
												className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:primary block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary'
												placeholder='Search htmlFor items'
											/>
										</div>
									</div>
									<table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
										<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
											<tr>
												<th
													scope='col'
													className='px-6 py-3'>
													Date
												</th>
												<th
													scope='col'
													className='px-6 py-3'>
													Purpose
												</th>
												<th
													scope='col'
													className='px-6 py-3'>
													Amount
												</th>
												<th
													scope='col'
													className='px-6 py-3'>
													Status
												</th>

												<th
													scope='col'
													className='px-6 py-3'>
													<span className='sr-only'>
														Action
													</span>
												</th>
											</tr>
										</thead>
										<tbody>
											{applicationData.map(
												(application, index) => (
													<tr
														key={application.id}
														className='bg-white border-b'>
														<td className='px-6 py-4'>
															{application.date}
														</td>
														<td className='px-6 py-4 capitalize'>
															{
																application.purpose
															}
														</td>
														<td className='px-6 py-4'>
															{application.amount.toLocaleString(
																'en-US',
																{
																	style: 'currency',
																	currency:
																		'NGN',
																}
															)}
														</td>
														<td className='px-6 py-4 capitalize'>
															{application.status}
															{application.status ===
																'rejected' && (
																<div className='text-xs'>
																	{
																		application.reasonForRejection
																	}
																</div>
															)}
														</td>
														<td className='px-6 py-4'>
															<div
																className='inline-flex rounded-md shadow-sm'
																role='group'>
																{application.status ===
																'approved' ? (
																	<>
																		<button
																			type='button'
																			className='py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded border border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-2 focus:ring-primary focus:text-primary '>
																			Approve
																		</button>
																		<button
																			type='button'
																			className='py-2 px-4 text-sm font-medium text-gray-900 bg-white border  border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-2 focus:ring-primary focus:text-primary '>
																			Reject
																		</button>
																	</>
																) : (
																	<>
																		<button
																			type='button'
																			className='py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded border border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-2 focus:ring-primary focus:text-primary '>
																			View
																		</button>
																	</>
																)}
															</div>
														</td>
													</tr>
												)
											)}
										</tbody>
									</table>
								</div>

								{/*  */}
							</>
						)}
					</div>
				</div>
			</AppContainer>
		</>
	);
}
