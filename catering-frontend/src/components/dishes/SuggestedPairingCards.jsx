import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/images/catering.jpeg'
import { BaseURL } from '../../api'


const SuggestedPairingCards = ({pairing, cat_slug, dish_slug}) => {
    return (
        <>
            <div class="col-12 col-md-4 card-pairings">


                <div class="card mb-3 h-100">
                    <div class="row gx-0 h-100 w-100">
                        <div class="col-6 h-100 d-flex flex-column align-items-center justify-content-center">
                            <img src={`${BaseURL}${pairing.image}`} class="image-height-suggpairing img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-6">
                            <div class="card-body">
                                <h5 class="card-title">{pairing.name}</h5>
                                <p class="card-text lato-bold" style={{ color: 'rgb(var(--orange))' }}>{`₦${pairing.price}`}</p>
                                <Link to={`/dishes/${cat_slug}/${dish_slug}`} class="card-text link-effect"><small class="text-body-secondary">Click Here to View Dish</small></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SuggestedPairingCards