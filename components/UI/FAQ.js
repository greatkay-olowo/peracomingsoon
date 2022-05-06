import { Disclosure } from '@headlessui/react';
import { CgChevronUp } from 'react-icons/cg';

export default function Faq() {
	return (
		<div className='w-full  '>
			<div className='mx-auto min-w-sm rounded p-2 '>
				<Disclosure>
					{({ open }) => (
						<>
							<Disclosure.Button className='flex w-full justify-between rounded-lg px-4 py-2 text-left text-lg text-secondary hover:bg-primary hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75'>
								<span>How does the Pera financing work?</span>
								<CgChevronUp
									className={`${
										open ? 'rotate-180 transform  ' : ''
									} h-5 w-5 `}
								/>
							</Disclosure.Button>
							<Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
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
				<Disclosure>
					{({ open }) => (
						<>
							<Disclosure.Button className='flex w-full justify-between rounded-lg px-4 py-2 text-left text-lg text-secondary hover:bg-primary hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75'>
								<span>
									What type of property can be bought through
									autochek finance?
								</span>
								<CgChevronUp
									className={`${
										open ? 'rotate-180 transform  ' : ''
									} h-5 w-5 `}
								/>
							</Disclosure.Button>
							<Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
								We have an expansive selection of car available
								for finance. Some of the makes available are –
								Toyota, Mercedes, Lexus, Hyundai, Kia, Nissan,
								Volkswagen. If you don’t find the car of your
								choice, please conact us and we would source one
								meeting your needs
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
			</div>
		</div>
	);
}
