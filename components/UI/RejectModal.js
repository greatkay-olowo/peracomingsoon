import { useState } from 'react';
import { Dialog } from '@headlessui/react';

function RejectModal({
	Modaltitle,
	toggle,
	description,
	children,
	onClick,
	onClickName,
}) {
	return (
		<Dialog open={toggle} onClose={() => setIsOpen(false)}>
			<Dialog.Panel>
				<Dialog.Title>{Modaltitle}</Dialog.Title>
				<Dialog.Description>{description}</Dialog.Description>

				<p>{children}</p>

				<button onClick={onClick}>{onClickName}</button>
				<button onClick={() => setIsOpen(false)}>Cancel</button>
			</Dialog.Panel>
		</Dialog>
	);
}
