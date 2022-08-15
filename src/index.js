import App from './App'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

//const container = document.getElementById('root');
const root = createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

//ReactDOM.render(<App />,document.getElementById('root'))

