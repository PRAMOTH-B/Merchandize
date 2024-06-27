"use client";

import {useEffect, useState} from "react";

// formatter copied from Util.ts
const formatter = new Intl.NumberFormat("en-IN", {
    style: 'currency',
    currency: 'INR'
});

interface CurrencyProps {
    value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({
    value
}) => {
    const [isMounted, setIsMounted]= useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted){
        return null;
    }

    return (
        <div className="font-semibold">
            {formatter.format(Number(value))}
        </div>
    );
}

export default Currency;

// import currency in product-card.tsx

// update the footer code in page.tsx

//update the code in product-card.tsx for individual product page (line 17 in product.tsx) (timeline 8:22:30)