import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//////////////////////////////////////////////////////////////////////////////////////

// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// const reactElement = React.createElement("p", {}, "im para");
// console.log(reactElement);

// const reactElement = <div>i`m div</div>;

// const MyComponent = () => {
// 	return <p>123</p>;
// };

// const MySecondComponent = () => {
// 	return <p>hello</p>;
// };
// console.log(MyComponent());
// root.render(
// 	<>
// 		<MyComponent />
// 		<MySecondComponent />
// 		<App />
// 	</>
// );
