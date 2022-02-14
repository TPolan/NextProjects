import React from 'react'
import classes from './dbd-home.module.css'
import DbdForm from '../../components/DbdForm/DbdForm'

const HomePage = () => {
  return (
    <>
      <div className={classes.dbdHomePage}>
        <DbdForm />
      </div>
    </>
  )
}

export default HomePage
