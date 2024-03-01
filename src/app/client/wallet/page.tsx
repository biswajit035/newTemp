import Link from 'next/link'
import button from 'next/link'
import React from 'react'

const ClientWallet = () => {

    return (
        <section className='flex flex-col gap-5 px-5'>
            {/* top */}
            <div className='flex gap-3'>
                <span className='pt-8 text-xl font-semibold'>Invoices</span>
                <span className='pt-8 text-xl font-semibold'>Transactions</span>
            </div>

            <div className='flex items-center justify-between'>
                {/* filter button */}
                <button className="h-fit w-fit rounded-xl border border-gray-400 p-2 text-[12px] font-semibold text-gray-700">Filters</button>

                <div className="right flex gap-5">
                    <Link href={"wallet/paymentSetting"}>Payments Settings</Link>
                    <button>Export</button>
                </div>
            </div>


        </section>
    )
}

export default ClientWallet