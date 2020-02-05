import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	const postion = postion => {
		console.log(postion);
	};
	const err = err => {
		console.log(`${err} - something went wrong`);
	};
	window.navigator.geolocation.getCurrentPosition(postion, err);
	return (
		<div>
			<h1>Hello World</h1>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
