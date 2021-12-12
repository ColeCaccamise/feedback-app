import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedBackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';
import {FeedbackProvider} from './context/FeedbackContext';

// the main App component
function App() {
    return (
        <FeedbackProvider>
        <Router>
        <Header />
        <div exact className='container'>
            <Routes>
                <Route path='/' element = {
                    <>
                         <FeedBackForm />
                    <FeedbackStats />
                    <FeedbackList />
                    </>
                }>
                </Route>
            

                <Route path='/about' element={<AboutPage />} />
            </Routes>

            <AboutIconLink />
        </div>
        
        </Router>
        </FeedbackProvider>
    );
};

export default App;