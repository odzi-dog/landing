export type Ratio = "1/1" | "2/1";

export const RatioConfig: Record<Ratio, { width: string, height: number }> = {
  "1/1": {
    width: "w-1/3",
    height: 100
  },
  "2/1": {
    width: "w-2/3",
    height: 50
  }
}