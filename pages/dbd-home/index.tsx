import React from 'react'
import classes from './dbd-home.module.css'
import DbdForm from '../../components/DbdForm/DbdForm'
import Image from 'next/image'
import Survivors from '../../public/images/Survivors.jpg'

const HomePage = () => {
  return (
    <>
      <div className={classes.container}>
        <Image className={classes.background} src={Survivors} layout='fill' />
        <DbdForm />
      </div>
    </>
  )
}

export default HomePage
