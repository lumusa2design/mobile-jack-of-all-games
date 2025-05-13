export interface Game {
  id?: string,
  title: string,
  platform: string[],
  media: {
    img?: string[],
    video?: string,
  }
  company: string,
  description: string,
  score: number
}