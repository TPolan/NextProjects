import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
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

const DbdForm = () => {
  const validationSchema = yup.object({
    role: yup.string().required(),
    killer: yup.string().required(),
    escaped: yup.boolean(),
    kills: yup.number().integer().min(0).max(4),
  });

  const formik = useFormik({
    initialValues: {
      role: "survivor",
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
    <form onSubmit={formik.handleSubmit}>
      <Select
        labelId="role"
        id="role"
        label="Choose a Role"
        {...formik.getFieldProps("role")}
      >
        <MenuItem value="survivor">Survivor</MenuItem>
        <MenuItem value="killer">Killer</MenuItem>
      </Select>
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
      {formik.values.role === "survivor" ? (
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Escaped?"
          labelPlacement="start"
          {...formik.getFieldProps("escaped")}
        />
      ) : (
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            How many kills did you get?
          </FormLabel>
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
      <Button type="submit" variant="text">
        Submit
      </Button>
    </form>
  );
};

export default DbdForm;
