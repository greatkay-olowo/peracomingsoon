import { Disclosure } from '@headlessui/react';
import { CgChevronUp } from 'react-icons/cg';

export default function Faq() {
	return (
		<div className='w-full  '>
			<div className='mx-auto min-w-sm rounded p-2 '>
				<Disclosure>
					{({ open }) => (
						<>
							<Disclosure.Button className='flex w-full justify-between rounded-lg px-4 py-2 text-left  text-secondary hover:bg-primary hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75 text-lg font-semibold pb-5'>
								<span>How does the Pera financing work?</span>
								<CgChevronUp
									className={`${
										open ? 'rotate-180 transform  ' : ''
									} h-5 w-5 `}
								/>
							</Disclosure.Button>
							<Disclosure.Panel className='px-4 pt-4  w-full border-b border-black pb-12 text-lg'>
								Fill up a short form and select from a
								personalized inventory selection. Apply for a
								loan and start receiving offers from various
								Para approved financing partners. Confirm
								acceptance of an offer and we will delivery your
								property in 5-7 days
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
			</div>
		</div>
	);
}
