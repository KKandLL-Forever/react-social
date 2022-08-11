import postPic1 from '@/assets/img/postpic1.jpg'

export interface IPost {
  id?: string,
  img?: typeof postPic1,
  name?: string,
  desc?: string,
  likes?: number,
  liked?: boolean
}
export type IPostData = IPost[]
