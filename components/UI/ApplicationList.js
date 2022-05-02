import React from 'react';
import Link from 'next/link';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const icons = {
	approved: <AiOutlineCheckCircle />,
	pending: <AiOutlineClockCircle />,
	rejected: <AiOutlineCloseCircle />,
};

export default function ({ item }) {
	return (
		<div
			key={item.id}
			className='flex flex-col m-2 p-2 border border-primary rounded-md bg-white shadow'>
			<div div className='flex justify-between'>
				<div className='flex flex-col w-full'>
					<div className='flex justify-between'>
						<span className='text-sm font-medium'>
							{item.purpose}
						</span>
						<span className='text-xs'>{item.date}</span>
					</div>
					<div className='flex justify-between'>
						<span className='text-xs'>
							N {item.amount.toLocaleString()}
						</span>
						<span className='text-xs'>
							<span
								className={
									item.status === 'approved'
										? 'text-green'
										: item.status === 'rejected'
										? 'text-red'
										: 'text-secondary'
								}>
								<div className='flex capitalize'>
									{/* {item.status} */}
									<span className=' text-xl ml-2'>
										{icons[item.status]}
									</span>
								</div>
							</span>
						</span>
					</div>
				</div>
			</div>
			{item.status === 'approved' && (
				<Link href={`/application/${item.id}`}>
					<a className='text-xs font-medium text-center text-primary hover:text-secondary '>
						Complete Application
					</a>
				</Link>
			)}
		</div>
	);
}
