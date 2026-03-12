import { useQuery } from "@tanstack/react-query"
import { getWeather } from "./api"
import Card from "./components/cards/card"
import DailyForecast from "./components/cards/DailyForecast"


function App() {

  const {data} = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({lat:10, lon:20}),
  })

  return (
    <div className="flex flex-col gap-8">
      <Card title="Current Weather">{ data?.current ? JSON.stringify(data?.current).slice(0,100): "...Loading"}</Card>
      <Card title="Hourly Forecast (48 Hours)">{data?.hourly ? JSON.stringify(data?.hourly).slice(0,100): "...Loading"}</Card>
      <DailyForecast></DailyForecast>
      </div>
  )
}

export default App
