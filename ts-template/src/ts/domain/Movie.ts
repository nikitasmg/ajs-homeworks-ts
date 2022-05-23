import Buyable from "./Buyable";


export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly year: number | string,
    readonly country: string,
    readonly tagline: string,
    readonly genre: string[],
    readonly time: number,
  ) { }
}
