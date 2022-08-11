import postPic1 from '@/assets/img/postpic1.jpg'
import postPic2 from '@/assets/img/postpic2.jpg'
import postPic3 from '@/assets/img/postpic3.jpg'
import { IPostData } from '@/features/MiddleSide/types/Post'

export const PostsData:IPostData = [
  {
    id: '001',
    img: postPic1,
    name: 'Tzuyu',
    desc: 'Happy New Year all friends! #2023',
    likes: 2300,
    liked: true
  },
  {
    id: '002',
    img: postPic2,
    name: 'Maryam',
    desc: 'Party time :)',
    likes: 2300,
    liked: false

  },
  {
    id: '003',
    img: postPic3,
    name: 'Salena Gomez',
    desc: 'At Archery Festival',
    likes: 800,
    liked: false
  }
]
