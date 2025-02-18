import React from 'react'
import Image from 'next/image'
import style from "./index.module.css"

function Index() {
  return (

    <>

<div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Image
        src="/screenIndex.jpg"
        alt="index"
        layout="fill"
        objectFit="cover"
      />
    </div>

    </>

  )
}

export default Index;