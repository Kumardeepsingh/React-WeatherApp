import { z } from "zod";

export const AirPollutionSchema = z.object({
  coord: z.object({
    lat: z.number(),    // latitude
    lon: z.number(),  // longitude
}),
  list: z.array(
    z.object({
      dt: z.number(),
      main: z.object({
        aqi: z.number(),
      }),
      components: z.object({
        co:    z.number(),
        no:    z.number(),
        o3:    z.number(),
        so2:   z.number(),
        pm2_5: z.number(),
        pm10:  z.number(),
        no2:   z.number(),
        nh3:   z.number(),
      }),
    })
  ),
})

