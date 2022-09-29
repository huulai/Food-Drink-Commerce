import Link from 'next/link'
import React from 'react'
import Input from '../components/common/Input'
import Radios from '../components/common/Radios'
import Layout from '../components/layout/Layout'
import { AiFillBackward } from 'react-icons/ai';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import Payments from '../components/common/Payments'
import OrderSummary from '../components/common/OrderSummary'


const Checkout = () => {
  return (
    <Layout>
      <div className="bg-deepGray">
        <div className="min-h-screen container mx-auto px-2">
          <div className="lg:grid grid-cols-10 gap-10 items-start py-12">
            <div className="col-span-6 lg:mb-0 mb-10">
              <form className="flex flex-col gap-12">
                <div className="flex flex-col gap-6">
                  <h2 className="font-semibold text-lg">
                    01. Personal Details
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input type="text" placeHolder="John" label="First Name" />
                    <Input type="text" placeHolder="Doe" label="Last Name" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      type="email"
                      placeHolder="user@gmail.com"
                      label="Email"
                    />
                    <Input
                      type="number"
                      placeHolder="0754661424"
                      label="Phone Number"
                    />
                  </div>
                </div>
                {/* shipping */}
                <div className="flex flex-col gap-6">
                  <h2 className="font-semibold text-lg">
                    02. Shipping Details
                  </h2>
                  <Input
                    type="text"
                    placeHolder="Njiro, block D"
                    label="Street Address"
                  />
                  <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
                    <Input type="text" placeHolder="Arusha" label="City" />
                    <Input type="text" placeHolder="Tanzania" label="Country" />
                    <Input type="email" placeHolder="23456" label="ZIP" />
                  </div>
                  <div>
                    <label className="font-semibold text-sm text-gray-400">
                      Shipping Cost
                    </label>
                    <div className="grid sm:grid-cols-2 gap-4 mt-2">
                      <Radios
                       time="7 days" cost={45} value="FedEx" />
                      <Radios value="UPS" time="7 Days" cost={20} />
                    </div>
                  </div>
                </div>
                {/* payments */}
                <div className="flex flex-col gap-6">
                  <h2 className="font-semibold text-lg">03. Payment Details</h2>
                  <Payments />
                </div>
                {/* buttons */}
                <div className="flex flex-col gap-6">
                  <h2 className="font-semibold text-lg">04. Place An Order</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Link
                      href="/shop"
                      className="w-full flex-rows gap-3 p-3 rounded text-black border-2 border-main"
                    >
                      <span><AiFillBackward /> Continue Shopping</span>
                    </Link>
                    <Link
                      href="/order"
                      className="w-full flex-rows gap-3 p-3 hover:bg-subMain transitions rounded text-white bg-main"
                    >
                      <span>Confirm Order <IoIosCheckmarkCircle /></span>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
            <div className="sticky flex-colo gap-4 sm:p-6 py-6 px-4 rounded-md top-28 col-span-4 bg-white border  border-text">
              <OrderSummary order={false} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Checkout