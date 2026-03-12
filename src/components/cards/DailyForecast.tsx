import { useSuspenseQuery } from "@tanstack/react-query"
import { getWeather } from "../../api"
import Card from "./card"

type Props = {}

export default function DailyForecast({}: Props) {
    const {data} = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({lat:10, lon:20}),
  })
  return (
    <Card title="Daily Forecast">
      <div className="flex flex-col gap-4">
        {data.daily.map(day => (
          <div key={day.dt} className="flex justify-between">
            <p className="w-9">{new Date(day.dt * 1000).toLocaleDateString(undefined, {
              weekday: "short"
            })}
            </p>
            <img
            className="size-8" 
            src={`https://openweathermap.org/payload/api/media/file/${day.weather[0].icon}.png`} 
            alt="Weather Icon"></img>
            <p>{Math.round(day.temp.day)}°C</p>
            <p className="text-gray-500/75">{Math.round(day.temp.min)}°C</p>
            <p className="text-gray-500/75">{Math.round(day.temp.max)}°C</p>

          </div>
        ))}
      </div>
    </Card>
  )
}