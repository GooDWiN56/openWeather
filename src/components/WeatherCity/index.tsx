import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Skeleton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { IconDroplet, IconSphere, IconWind } from "@tabler/icons-react";
import CountryFlag from "../CountryFlag";

interface IWeatherCity {
  weatherData: any;
}

const WeatherCity = ({ weatherData }: IWeatherCity) => {
  if (!weatherData.weather)
    return (
      <Grid item xs={12} sm={6} md={4}>
        <Skeleton
          variant="rounded"
          width="100%"
          height={165}
          sx={{ borderRadius: 2 }}
        />
      </Grid>
    );
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: 165,
          borderRadius: 2,
          bgcolor: "rgb(191, 219, 254 )",
        }}
      >
        <CardContent sx={{ height: "100%" }}>
          <Stack spacing={2} sx={{ height: "100%" }}>
            <Stack direction="row" spacing={2} justifyContent="space-between">
              <Box>
                <Typography variant="h6">
                  <CountryFlag country={weatherData.sys.country} />
                  {weatherData.name},{" "}
                  <Typography component="span" variant="subtitle1">
                    {weatherData.sys.country}
                  </Typography>
                </Typography>
              </Box>
              <Box sx={{ mr: "-15px !important" }}>
                <img
                  className="w-[50px] h-[50px] my-[-10px]"
                  src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  alt={weatherData.weather[0].description}
                />
              </Box>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography variant="h4">
                  {weatherData.main.temp.toFixed()}
                  <Typography color="error" variant="h4" component="span">
                    °
                  </Typography>
                </Typography>
              </Box>
              <Box sx={{ textAlign: "right" }}>
                <Typography variant="caption" component="div">
                  {weatherData.weather[0].description}
                </Typography>
                <Typography>
                  <Typography variant="caption" component="div">
                    Ощущается как{" "}
                    <Typography variant="subtitle2" component="span">
                      {weatherData.main.feels_like.toFixed()}
                      <Typography
                        color="error"
                        variant="subtitle2"
                        component="span"
                      >
                        °
                      </Typography>
                    </Typography>
                  </Typography>
                </Typography>
              </Box>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              sx={{ mt: "auto" }}
            >
              <Stack direction="row" spacing={1}>
                <Tooltip arrow title="Влажность">
                  <IconDroplet size={18} stroke={2} />
                </Tooltip>
                <Typography variant="subtitle2">
                  {weatherData.main.humidity.toFixed()}
                  <Typography variant="caption">%</Typography>
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Tooltip arrow title="Скорость ветра">
                  <IconWind size={18} stroke={2} />
                </Tooltip>
                <Typography variant="subtitle2">
                  {weatherData.wind.speed.toFixed()}{" "}
                  <Typography variant="caption">км/ч</Typography>
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Tooltip arrow title="Давление">
                  <IconSphere size={18} stroke={2} />
                </Tooltip>
                <Typography variant="subtitle2">
                  {weatherData.main.pressure}{" "}
                  <Typography variant="caption">мм рт. ст.</Typography>
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default WeatherCity;
