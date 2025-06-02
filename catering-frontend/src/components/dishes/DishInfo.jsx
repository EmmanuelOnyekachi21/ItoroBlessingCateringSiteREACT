import React, { useEffect, useState } from 'react'
import QuantitySelector from '../ui/QuantitySelector';
import OptionsDropdown from './OptionsDropdown';
import { useParams } from 'react-router-dom';
import api, { BaseURL } from '../../api';
import OrderSection from './OrderSection';
import { Heart, ShoppingCartIcon } from 'lucide-react';
import styles from '../menu/Menu.module.css';
import ReviewsTab from './ReviewsTab';
import SuggestedPairings from './SuggestedPairings';




const DishInfo = () => {
    const [extras, setExtras] = useState([]);
    const [dish, setDish] = useState({});
    const { category_slug } = useParams();
    const { product_slug } = useParams();
    const [avgreviews, setAvgReviews] = useState({});
    const [ReviewNumbers, setReviewNumbers] = useState(0);
    const [reviews, setReviews] = useState([]);
    const [pairings, setPairings] = useState([]);

    useEffect(() => {
        api.get(`api/dish/${category_slug}/${product_slug}`)
            .then((res) => {
                console.log(res.data)
                setDish(res.data)
                setExtras(res.data.allowed_extras)
                setAvgReviews(res.data.average_rating)
                setReviewNumbers(res.data.total_reviews)
                setReviews(res.data.reviews)
                setPairings(res.data.suggested_pairings)
            })
            .catch((err) => console.log(err.message))
    }, [category_slug, product_slug])
    // console.log(extras)
    const slug = dish.slug;
    console.log(slug)
    // console.log(extras.extras)
    return (
        <>
            <section className={`pt-5 container-fluid bg-light`}>
                <div className="my-5">
                    <div className="">
                        <div className="row gx-4">
                            <div className="col-md-6 col-12" style={{ height: '30rem', }}>
                                <img src={`${BaseURL}${dish.image}`} className='' alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className="col-md-6">
                                <h1 className='poppins-bold pt-4 pt-md-0'>
                                    {dish.name}
                                </h1>
                                <h3 className='lato-bold' style={{ color: 'rgb(var(--orange))' }}>
                                    {`₦${dish.price}`}
                                </h3>
                                <span className='text-muted mt-2 d-block'>
                                    {dish.description}
                                </span>
                                <div className='mt-3'>
                                    <span className='mb-2 d-inline-block'>Quantity</span>
                                    <div className="input-group input-spinner">
                                        <div className="input-group-prepend">
                                            <button className="btn border btn-light">
                                                -
                                            </button>
                                        </div>
                                        <input type="text" className="text-center border-none border" value='1' readOnly style={{ width: '4rem', padding: '0' }} />
                                        <div className="input-group-append">
                                            <button className="border btn btn-light">
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <h4 className="mt-4 poppins-bold">
                                    Customize your meal
                                </h4>
                                <div className='mb-3'>
                                    {
                                        extras.map((extra) => (
                                            <OptionsDropdown options={extra.extras} extra={extra} key={extra.id} />
                                        ))
                                    }
                                </div>

                                {/* Order Option */}
                                <div className='mb-3'>
                                    <h4 className='poppins-bold'>Order Option</h4>
                                    <OrderSection />
                                </div>

                                {/* Special Instructions */}
                                <div className='mb-5'>
                                    <label htmlFor='Special Instructions' className='form-label fs-4 poppins-bold'>
                                        Special Instructions
                                    </label>

                                    <textarea className='form-control' id="specialInstructions" placeholder='Add any special requests (e.g., spice level, allergies)' rows={3}></textarea>

                                </div>

                                {/* Total Price */}
                                <div className='d-flex justify-content-between mx-auto' style={{ width: '95%' }}>
                                    <h4 className='poppins-bold'>Total Price:</h4>
                                    <h3 className='lato-bold' style={{ color: 'rgb(var(--orange))' }}>₦2000</h3>
                                </div>

                                {/* Add to cart */}
                                <div className="d-flex my-4 gap-3 justify-content-end pe-3">
                                    <button
                                        className={`btn d-flex text-white justify-content-center gap-4 align-items-center ${styles.buttonHover}`}
                                        style={{ width: '100%', backgroundColor: 'rgb(var(--orange))' }}
                                    >
                                        <ShoppingCartIcon size={16} />
                                        <span> Add to cart</span>
                                    </button>
                                    <button className='btn btn-light border justify-content-center align-items-center'>
                                        <Heart size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Review, Related Recipes and Suggested Pairing */}
            <section>
                <div className="header bg-light d-inline-block ms-md-3 nav-tab">
                    <ul class="nav nav-pills nav-tablist" id="pills-tab" role="tablist" style={{ background: 'hsl(20 5.9% 90%)', padding: '0.2rem' }}>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Reviews</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Related Recipes</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Suggested Pairing</button>
                        </li>
                    </ul>
                </div>
                <div class="tab-content ms-md-3 reviewtab" id="pills-tabContent" style={{ width: '95%' }}>
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <ReviewsTab avg={avgreviews} total={ReviewNumbers} slug={slug} reviews={reviews} number={ReviewNumbers} />
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">Recipe</div>
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <SuggestedPairings pairings={pairings} cat_slug={category_slug} dish_slug={product_slug} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default DishInfo