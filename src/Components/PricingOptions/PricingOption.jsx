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
            <h2 className='text-4xl font-bold my-10'>Get our Membership</h2>
            <div className='flex flex-wrap gap-8'>
                {
                    pricingData.map(pricing => <PricingCart key={pricing.id} pricing={pricing}></PricingCart>)
                }
            </div>
        </div>
    );
};

export default PricingOption;