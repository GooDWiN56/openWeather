import * as React from "react";
import axios from "axios";
import InputSearch from "./components/InputSearch";
import { useState } from "react";
import { Grid, Typography } from "@mui/material";
import WeatherCity from "./components/WeatherCity";
import Snackbars from "./components/Snackbars";

function App() {
  //массив городов
  const [data, setData] = useState<any[]>([]);

  //строка поиска города
  const [city, setCity] = useState<string>("");

  //переменные для сообщения добавление/ошибки города
  const [open, setOpen] = useState<boolean>(false);
  const [severity, setSeverity] = useState<"success" | "warning" | "error">(
    "success"
  );
  const [message, setMessage] = useState<string>("");

  //константы апи openweather
  const API_KEY = "66c88b84092b971a3ad27d0255a41024";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=${API_KEY}`;

  //проверка находится ли горор в списке
  const ckeckCity = (value: any) => {
    return data.some((item) => value.name === item.name);
  };

  //функция получения данных по апи и добавления города в массив
  const searchLoacation = (event: any) => {
    if (event.key === "Enter") {
      axios
        .get(url)
        .then((respomse) => {
          if (ckeckCity(respomse.data)) {
            setOpen(true);
            setSeverity("warning");
            setMessage("Такой город уже добавлен");
          } else {
            setData((prev) => [...prev, respomse.data]);
            setOpen(true);
            setSeverity("success");
            setMessage("Город добавлен");
          }
        })
        .catch((error) => {
          setOpen(true);
          setSeverity("error");
          setMessage("Город не найден");
          console.log(error.response.data);
        });
      setCity("");
    }
  };

  return (
    <div className="w-full min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="text-center p-4">
          <InputSearch
            pressKeyFunction={searchLoacation}
            setValue={setCity}
            value={city}
          />
        </div>
        <div className="px-4">
          {data.length === 0 ? (
            <Typography variant="h4" align="center" sx={{ mt: 2 }}>
              Добавьте город
            </Typography>
          ) : (
            <Grid container spacing={2}>
              {data.map((item, key) => (
                <WeatherCity weatherData={item} key={key} />
              ))}
            </Grid>
          )}
        </div>
      </div>
      <Snackbars
        message={message}
        open={open}
        severity={severity}
        setOpen={setOpen}
      />
    </div>
  );
}

export default App;
