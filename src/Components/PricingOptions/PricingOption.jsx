import React, { useEffect, useState } from 'react';
import PricingCart from './PricingCart/PricingCart';

const PricingOption = () => {
    const [pricingData, setPricingData] = useState([])

    useEffect(()=>{
        fetch("../../../public/pricing.json")
        .then(res => res.json())
        .then(data => setPricingData(data))
    },[])
    return (
        <div>
            <h2>Get our Membership</h2>
            <div>
                {
                    pricingData.map(pricing => <PricingCart key={pricing.id} pricing={pricing}></PricingCart>)
                }
            </div>
        </div>
    );
};

export default PricingOption;