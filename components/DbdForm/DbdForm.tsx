import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Autocomplete from "@mui/material/Autocomplete";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useFormik } from "formik";
import Switch from "@mui/material/Switch";
import * as yup from "yup";
import { alphabeticalKillers } from "../../const/dbd-static-data";
import classes from "./DbdForm.module.css";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const DbdForm = () => {
  const validationSchema = yup.object({
    isSurvivor: yup.boolean().required(),
    killer: yup.string().required(),
    escaped: yup.boolean(),
    kills: yup.number().integer().min(0).max(4),
  });

  const formik = useFormik({
    initialValues: {
      isSurvivor: false,
      killer: "Artist",
      escaped: false,
      kills: 0,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form className={classes.container} onSubmit={formik.handleSubmit}>
      <h1>Add new entry</h1>
      <FormControlLabel
        control={
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>Survivor</Typography>
            <Switch id="isSurvivor" {...formik.getFieldProps("isSurvivor")} />
            <Typography>Killer</Typography>
          </Stack>
        }
        label="Choose your side"
        labelPlacement="top"
      />
      <Autocomplete
        disablePortal
        id="killer"
        options={alphabeticalKillers}
        sx={{ width: 300 }}
        renderInput={(params: string) => (
          <TextField {...params} label="Choose a Killer" />
        )}
        {...formik.getFieldProps("killer")}
      />
      {!formik.values.isSurvivor ? (
        <FormControlLabel
          control={
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography>No</Typography>
              <Switch
                id="escaped"
                {...formik.getFieldProps("escaped")}
                defaultChecked
              />
              <Typography>Yes</Typography>
            </Stack>
          }
          label="Escaped?"
          labelPlacement="top"
        />
      ) : (
        <FormControl className={classes.inputItem}>
          <FormLabel>How many kills did you get?</FormLabel>
          <RadioGroup
            row
            id="kills"
            aria-labelledby="kills"
            defaultValue={0}
            {...formik.getFieldProps("kills")}
          >
            <FormControlLabel value={0} control={<Radio />} label="0" />
            <FormControlLabel value={1} control={<Radio />} label="1" />
            <FormControlLabel value={2} control={<Radio />} label="2" />
            <FormControlLabel value={3} control={<Radio />} label="3" />
            <FormControlLabel value={4} control={<Radio />} label="4" />
          </RadioGroup>
        </FormControl>
      )}
      <Button className={classes.inputItem} type="submit" variant="text">
        Submit
      </Button>
    </form>
  );
};

export default DbdForm;
