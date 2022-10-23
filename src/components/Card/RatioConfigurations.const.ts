export type Ratio = "1/1" | "2/1";

export const RatioConfig: Record<Ratio, { width: string, height: string }> = {
  "1/1": {
    width: "md:w-1/3",
    height: ""
  },
  "2/1": {
    width: "md:w-2/3",
    height: "md:after:pb-[50%]"
  }
}