import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import Layout from '../components/Layout'
import { Store } from '../utils/store'

export default function Shipping() {
  const router = useRouter()
  const { state } = useContext(Store)
  const { userInfo } = state

  if (!userInfo) {
    router.push('/login?redirect=/shipping')
  }
  return (
    <Layout title="Shipping">

    </Layout>
  )
}
