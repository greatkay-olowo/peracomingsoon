import React from 'react';
import Link from 'next/link';
import ProtectedRoute from '../../components/ProtectedRoute';
import NewApplication from '../../components/FreshApplication/NewApplication1';
import ApplicationList from '../../components/UI/ApplicationList';
const applicationData = [
	{
		date: '2020-01-01',
		purpose: 'Adrion Homes 1 plot in Shimawa',
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
	},
];
export default function Applications() {
	return (
		<ProtectedRoute>
			<div className='w-full bg-accent rounded shadow min-h-min '>
				{applicationData.length === 0 ? (
					<div className='py-5  text-center  text-secondary p-3 '>
						<ImFilesEmpty className='text-4xl mx-auto' />
						<span className='text-sm font-medium'>
							No application yet
						</span>
					</div>
				) : (
					<div>
						<div className='text-sm font-bold p-2 py-5 text-center'>
							Your recent applications
						</div>
						{applicationData.map((item) => (
							<ApplicationList item={item} />
						))}
						<div className='p-2'>
							<button className='bg-primary text-white px-4 py-2 rounded w-full hover:bg-accent hover:text-primary'>
								See More
							</button>
						</div>
					</div>
				)}
			</div>
		</ProtectedRoute>
	);
}
