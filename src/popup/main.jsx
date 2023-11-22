import React from 'react';
import ReactDOM from 'react-dom/client';
import Popup from './Popup.jsx';
import '../index.css';

console.log(`This is the Popup file!!!`);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Popup />
	</React.StrictMode>
);
