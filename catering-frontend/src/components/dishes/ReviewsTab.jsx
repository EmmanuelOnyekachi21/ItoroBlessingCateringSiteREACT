import { Star } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import {
    FaStar,       // full star
    FaStarHalfAlt, // half star
    FaRegStar     // empty star
} from 'react-icons/fa';
import api from '../../api';
import ReviewSection from './ReviewSection';

function ReviewsTab({ total, avg, slug, reviews, number }) {
    const isValid = total !== null && avg !== null && avg.average !== null;

    const renderStars = (value) => {
        const stars = [];
        const fullStars = Math.floor(value); // Round down the value
        const hasHalfStar = value - fullStars >= 0.25 && value - fullStars < 0.75;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={`full-${i}`} color='gold' />)
        }

        if (hasHalfStar) {
            stars.push(<FaStarHalfAlt key='half' color='gold' />)
        }

        for (let i = 0; i < emptyStars; i++) {
            stars.push(<FaRegStar key={`empty-${i}`} color='gold' />)
        }

        return stars;
    };

    // const [reviews, setReviews] = useState([]);

    // useEffect(() => {
    //     if (slug) {
    //         api.get(`api/dish/${slug}/reviews/`)
    //             .then(res => {
    //                 setReviews(res.data)
    //             })
    //             .catch(err => console.log(err.message))
    //     }
    // }, [slug])

    const average = isValid ? avg.average : 0;
    return (
        <>
            <div className='' >
                <div className='d-flex align-items-center fs-2 border border-danger mb-4'>
                    {average} {renderStars(average)}
                    <span className="small ms-3 fs-5 text-muted">({isValid ? total : 0} reviews)</span>
                </div>

                <div className='p-3 border mb-4' style={{ borderRadius: '.5rem' }}>
                    <h4 className=''>Write a Review</h4>

                    <div className='border border-primary d-flex flex-column justify-content-center align-items-center mx-auto my-3' style={{ width: '50%' }}>
                        <div className='mb-2 text-center'>Please log in to write a review.</div>
                        <button className='btn text-white' style={{ width: '50%', backgroundColor: 'rgb(var(--orange))' }}>
                            Login
                        </button>
                    </div>
                </div>

                {/* Customer Reviews */}
                {
                    number ? (
                        <div>
                            <h5>Customer Reviews</h5>

                            <div>
                                {
                                    reviews.map((review) => <ReviewSection key={review.id} review={review} renderStars={renderStars} />)
                                }
                            </div>
                        </div>
                    ) : <></>
                }
            </div>
        </>
    )
}

export default ReviewsTab