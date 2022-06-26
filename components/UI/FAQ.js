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
								<span>
									What are your requirements to access loan?
								</span>
								<CgChevronUp
									className={`${
										open ? 'rotate-180 transform  ' : ''
									} h-5 w-5 `}
								/>
							</Disclosure.Button>
							<Disclosure.Panel className='px-4 pt-4  w-full border-b border-black pb-12 text-lg'>
								The basic requirements for finance are BVN,
								Valid National ID Card, Employment Letter, and
								Business Registration Certificates (CAC
								Certificate and (CAC 7 / FORM BN 1)) for
								business owners, Utility bill not older than 3
								months, more documentation may be required by
								the financial institution to confirm
								eligibility. You must be either an employee with
								verifiable employment or a business owner with a
								registered business.
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>

				<Disclosure>
					{({ open }) => (
						<>
							<Disclosure.Button className='flex w-full justify-between rounded-lg px-4 py-2 text-left  text-secondary hover:bg-primary hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75 text-lg font-semibold pb-5'>
								<span>
									If the land/property I am interested in is
									sold before I complete my application or get
									approval, can I source for a replacement?
								</span>
								<CgChevronUp
									className={`${
										open ? 'rotate-180 transform  ' : ''
									} h-5 w-5 `}
								/>
							</Disclosure.Button>
							<Disclosure.Panel className='px-4 pt-4  w-full border-b border-black pb-12 text-lg'>
								Yes. If the property gets sold before you could
								inspect or complete your application process, we
								will source a replacement for you that matches
								your budget and specifications. Should you find
								a replacement first, as long as the value is
								within the amount approved for you or you can
								balance the equity difference the replacement
								can be chosen.
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>

				<Disclosure>
					{({ open }) => (
						<>
							<Disclosure.Button className='flex w-full justify-between rounded-lg px-4 py-2 text-left  text-secondary hover:bg-primary hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75 text-lg font-semibold pb-5'>
								<span>
									Can I increase my equity contribution?
								</span>
								<CgChevronUp
									className={`${
										open ? 'rotate-180 transform  ' : ''
									} h-5 w-5 `}
								/>
							</Disclosure.Button>
							<Disclosure.Panel className='px-4 pt-4  w-full border-b border-black pb-12 text-lg'>
								You can choose to pay more equity than the
								recommended 30%. You can pay as much equity as
								you are comfortable with.
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>

				<Disclosure>
					{({ open }) => (
						<>
							<Disclosure.Button className='flex w-full justify-between rounded-lg px-4 py-2 text-left  text-secondary hover:bg-primary hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75 text-lg font-semibold pb-5'>
								<span>
									If I increase my equity contribution, will
									my interest be reduced
								</span>
								<CgChevronUp
									className={`${
										open ? 'rotate-180 transform  ' : ''
									} h-5 w-5 `}
								/>
							</Disclosure.Button>
							<Disclosure.Panel className='px-4 pt-4  w-full border-b border-black pb-12 text-lg'>
								Yes, the total interest you will pay will be
								smaller as the bank will only finance a smaller
								amount of money. This can also get you a shorter
								repayment period and invariably the total
								interest you will payback will be reduced.
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>

				<Disclosure>
					{({ open }) => (
						<>
							<Disclosure.Button className='flex w-full justify-between rounded-lg px-4 py-2 text-left  text-secondary hover:bg-primary hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75 text-lg font-semibold pb-5'>
								<span>
									Can I offset my loan before the tenure runs
									out?
								</span>
								<CgChevronUp
									className={`${
										open ? 'rotate-180 transform  ' : ''
									} h-5 w-5 `}
								/>
							</Disclosure.Button>
							<Disclosure.Panel className='px-4 pt-4  w-full border-b border-black pb-12 text-lg'>
								Yes, you can pay off the loan at any point
								during the repayment period. When you pay before
								the initial loan tenure, the future interest
								will not accrue.
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
			</div>
		</div>
	);
}
