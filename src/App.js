import { useState } from 'react';
import { Consumer } from './components/Consumer';

function App() {
	const [showConsumer, setShowConsumer] = useState(false);
	return (
		<div style={
			{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100vh',
				flexDirection: 'column',
			}
		}>
			<button onClick={() => {
				setShowConsumer(!showConsumer)
			}}>Click Me!
			</button>
			<div>
				{!showConsumer ? <Consumer /> : <span>Another Component</span>}
			</div>
		</div>
	);
}

export default App;
