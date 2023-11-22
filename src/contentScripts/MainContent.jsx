// eslint-disable-next-line no-unused-vars
import { sendMessage, onMessage } from 'webext-bridge/content-script';

export default function MainContent() {
	async function handleCountBtnClick() {
		console.log(`inside handleCountBtnClick function`);
		const dataFromOptions = await sendMessage(
			'content-options',
			{ name: 'bhavya', age: 34 },
			'options'
		);
		console.log(`Data received back from Options : `, dataFromOptions);
		return 'hello from Options';
	}

	return (
		<section id='main-container'>
			<h3>This is the main container of the content script</h3>
			<button onClick={handleCountBtnClick}>Click Me!</button>
		</section>
	);
}

onMessage('options-content', (message) => {
	console.log(`message received from Options : `, message);
	return 'hello from Content Script';
});
