import { Grid } from '@mui/material'
import React from 'react'
import OrderCard from './OrderCard';


const Order = () => {

    const orderStatus = [
        { label: "On The Way", value: "onTheWay" },
        { label: "Delivered", value: "delevered" },
        { label: "Cancelled", value: "cancelled" },
        { label: "Returned", value: "returned" },
    ];
    return (
        <div className='px:5 lg:px-20'>
            <Grid container sx={{ justifyContent: "space-between" }}>
                <Grid item xs={2.5}>
                    <div className='h-auto shadow-lg bg-white p-5 sticky top-5'>
                        <h1 className="font-bold text-lg">Filters</h1>
                        <div className='space-y-4 mt-10'>
                            <h1 className="font-semibold">ORDER STATUS</h1>
                            {orderStatus.map((option, optionIdx) =>
                                <div key={option.value} className='flex items-center'>
                                    <input
                                        defaultValue={option.value}
                                        type="checkbox"
                                        defaultChecked={option.checked}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label className="ml-3 text-sm text-gray-600" htmlFor={option.value}>
                                        {option.label}
                                    </label>
                                </div>
                            )}
                        </div>

                    </div>
                </Grid>
                <Grid item xs={9}>
                    <div className='space-y-5'>
                        {[1, 1, 1, 1].map((item) =>
                            <OrderCard />
                        )}
                    </div>

                </Grid>
            </Grid>
        </div>
    )
}

export default Order