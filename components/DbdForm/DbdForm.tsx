import React from 'react'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { alphabeticalKillers } from '../../const/dbd-static-data'

const DbdForm = () => {
  const validationSchema = yup.object({
    role: yup.string()
  })

  const formik = useFormik({
    initialValues: {
      role: 'survivor',
      killer: 'Artist'
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <Select
        labelId='role'
        id='role'
        label='Choose a Role'
        {...formik.getFieldProps('role')}
      >
        <MenuItem value='survivor'>Survivor</MenuItem>
        <MenuItem value='killer'>Killer</MenuItem>
      </Select>
      {formik.values.role === 'survivor'
        ? (
          <Select
            labelId='killer'
            id='killer'
            label='Choose a killer'
            {...formik.getFieldProps('killer')}
          >
            {alphabeticalKillers.map((item) => (
              <MenuItem key={item} value={`${item}`}>
                {item}
              </MenuItem>
            ))}
          </Select>
          )
        : (
          <Select
            labelId='role'
            id='role'
            label='Choose a Role'
            {...formik.getFieldProps('role')}
          >
            <MenuItem value='survivor'>Survivor</MenuItem>
            <MenuItem value='killer'>Killer</MenuItem>
          </Select>
          )}
      <Button type='submit' variant='text'>
        Submit
      </Button>
    </form>
  )
}

export default DbdForm
