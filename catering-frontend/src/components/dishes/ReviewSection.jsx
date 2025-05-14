import React from 'react'

const ReviewSection = ({ renderStars, review }) => {
    const formatDateTime = (isostring) => {
        // Create new date from Isostring
        const date = new Date(isostring);
        return date.toDateString();
    };

    return (
        <div className='mb-4'>
            <div className='my-3'>
                <div className="d-flex gap-3">
                    <h5>{review.user}</h5>
                    <span className='text-muted'>
                        {formatDateTime(review.created_at)}
                    </span>
                </div>
                <div>
                    {renderStars(review.rating)}
                </div>
                <span className='text-muted '>{review.comment}</span>
            </div>
        </div>
    )
}

export default ReviewSection