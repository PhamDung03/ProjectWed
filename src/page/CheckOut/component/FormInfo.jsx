/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  TextField,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  styled,
} from "@mui/material";
import { API_city } from "../../../json/City.Json";
import { API_district } from "../../../json/District.json";
import { API_ward } from "../../../json/Ward.json";
import { useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";
import { BsDisplay } from "react-icons/bs";

const FormInfo = () => {
  const [districtList, setDistrictList] = useState([]);
  const [wardList, setWardList] = useState([]);

  const { register, setValue, watch } = useFormContext();

  useEffect(() => {
    setWardList([]);
    setDistrictList(
      API_district.filter((district) => watch("city") === district.parent_code)
    );
  }, [watch("city")]);

  useEffect(() => {
    setWardList(
      API_ward.filter((district) => watch("provinces") === district.parent_code)
    );
  }, [watch("provinces")]);

  return (
    <StyeldFormInfo>
      <Box component="div">
        <Box className="fieldset">
          <TextField
            id="outlined-basic"
            label="Họ và tên"
            variant="outlined"
            size="small"
            name="name"
            fullWidth
            {...register("name", { required: true })}
          />
          <Stack direction={"row"} spacing={1} className="box_column">
            <TextField
              id="outlined-email"
              label="Email"
              variant="outlined"
              name="email"
              type="email"
              size="small"
              {...register("Email", { required: true })}
            />
            <TextField
              id="outlined-phone"
              label="Số điện thoại"
              variant="outlined"
              name="phone"
              type="number"
              size="small"
              {...register("Phone", { required: true })}
            />
          </Stack>
        </Box>

        {/* select address */}
        <Stack direction={"row"} spacing={1.5} className="box_column">
          <FormControl size="small" className="select_form">
            <InputLabel id="demo-simple-select-label">Chọn tỉnh</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="city"
              label="cities"
              {...(register("city") || "", { required: true })}
              onChange={(e) => {
                setValue("city", e.target.value);
              }}
              defaultValue={""}
            >
              {API_city?.map((city, i) => (
                <MenuItem key={i} value={city.code}>
                  {city.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl size="small" className="select_form">
            <InputLabel id="demo-simple-select-label">Chọn Huyện</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="provinces"
              {...register("provinces" || "", { required: true })}
              onChange={(e) => {
                setValue("provinces", e.target.value);
              }}
              defaultValue={""}
            >
              {districtList?.map((district, i) => (
                <MenuItem key={i} value={district.code}>
                  {district.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>

        <FormControl size="small" className="select_form">
          <InputLabel id="demo-simple-select-label">Chọn Phường</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="wards"
            {...register("wards", { required: true })}
            onChange={(e) => {
              setValue("wards", e.target.value);
            }}
            defaultValue={""}
          >
            {wardList?.map((ward, i) => (
              <MenuItem key={i} value={ward.code}>
                {ward.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <textarea
          placeholder="Ghi chú"
          name="note"
          {...register("note")}
        ></textarea>
      </Box>
    </StyeldFormInfo>
  );
};

const StyeldFormInfo = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    ".fieldset": {
      ".box": {
        display: "flex",
        flexDirection: "column",
      },
    },
    ".box_column": {
      display: "flex",
      flexDirection: "column",
    },
    ".select_form": {
      width: "100% !important",
    },
  },
}));

export default FormInfo;
