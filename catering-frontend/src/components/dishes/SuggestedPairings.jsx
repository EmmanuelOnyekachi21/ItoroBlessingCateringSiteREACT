import React, { useEffect, useState } from 'react'

import SuggestedPairingCards from './SuggestedPairingCards'

const SuggestedPairings = ({ pairings, cat_slug, dish_slug }) => {
    return (
        <>
            {
                pairings.length >= 1 ? (
                    <div className='container-fluid py-3'>
                        <h3 className=''>Perfect Pairings</h3>
                        <div class="mt-4 row p-0 g-3">
                            {
                                pairings.map((pairing) => (
                                    <SuggestedPairingCards key={pairing.id} pairing={pairing} cat_slug={pairing.category.slug} dish_slug={pairing.slug} />
                                ))
                            }
                        </div>
                    </div>
                ) : <></>
            }
        </>
    )
}

export default SuggestedPairings