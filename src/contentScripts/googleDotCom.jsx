import React from 'react';
import ReactDOM from 'react-dom/client';
import MainContent from './MainContent.jsx';
import { sendMessage, onMessage } from 'webext-bridge/content-script';

// import styles1 from '../index.css?inline';
// import styles2 from '../App.css?inline';

console.log(`Content script for google.com`);
const contentRoot = document.createElement('div');
contentRoot.id = 'nc-root';
const shadowRoot = contentRoot.attachShadow({ mode: 'open' });
const shadowWrapper = document.createElement('div');
shadowWrapper.id = 'root';
document.body.append(contentRoot);
shadowRoot.append(shadowWrapper);

// Attach a shadow root to the host
ReactDOM.createRoot(shadowWrapper).render(
	<React.StrictMode>
		{/* <style type='text/css'>
			{styles1}
			{styles2}
		</style> */}
		<MainContent />
	</React.StrictMode>
);
