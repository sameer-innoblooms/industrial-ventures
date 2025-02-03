import AboutSection from '@/app/components/AboutSection'
import Clients from '@/app/components/Clients'
import Membership from '@/app/components/Membership'
import ProductTop from '@/app/components/ProductTop'
import React from 'react'

export default function page() {
  return (
    <>
    <ProductTop/>
    <AboutSection/>
    <Membership/>
    <Clients/>
    </>
  )
}
