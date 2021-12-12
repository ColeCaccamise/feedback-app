import {useContext} from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
    const { feedback } = useContext(FeedbackContext);
    // Calculate average ratings
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length;

    average = average.toFixed(1).replace(/[.,]0$/, ''); // one decimal place - replace regex removes trailing zeroes

    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} {feedback.length > 1 || feedback.length === 0 ? 'Reviews' : 'Review'}</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

export default FeedbackStats;
