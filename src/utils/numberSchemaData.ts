export interface ColorSchema {
  id: number,
  top: boolean,
  topLeft: boolean,
  topRight: boolean,
  middle: boolean,
  bottom: boolean,
  bottomLeft: boolean,
  bottomRight: boolean,
}
export const digits: ColorSchema[] = [
  {
    id: 0,
    top: true,
    topLeft: true,
    topRight: true,
    bottom: true,
    bottomLeft: true,
    bottomRight: true,
    middle: false
  },
  {
    id: 1,
    top: false,
    topLeft: false,
    topRight: true,
    bottom: false,
    bottomLeft: false,
    bottomRight: true,
    middle: false
  },
  {
    id: 2,
    top: true,
    topLeft: false,
    topRight: true,
    bottom: true,
    bottomLeft: true,
    bottomRight: false,
    middle: true
  },
  {
    id: 3,
    top: true,
    topLeft: false,
    topRight: true,
    bottom: true,
    bottomLeft: false,
    bottomRight: true,
    middle: true
  },
  {
    id: 4,
    top: false,
    topLeft: true,
    topRight: true,
    bottom: false,
    bottomLeft: false,
    bottomRight: true,
    middle: true
  },
  {
    id: 5,
    top: true,
    topLeft: true,
    topRight: false,
    bottom: true,
    bottomLeft: false,
    bottomRight: true,
    middle: true
  },
  {
    id: 6,
    top: true,
    topLeft: true,
    topRight: false,
    bottom: true,
    bottomLeft: true,
    bottomRight: true,
    middle: true
  },
  {
    id: 7,
    top: true,
    topLeft: false,
    topRight: true,
    bottom: false,
    bottomLeft: false,
    bottomRight: true,
    middle: false
  },
  {
    id: 8,
    top: true,
    topLeft: true,
    topRight: true,
    bottom: true,
    bottomLeft: true,
    bottomRight: true,
    middle: true
  },
  {
    id: 9,
    top: true,
    topLeft: true,
    topRight: true,
    bottom: false,
    bottomLeft: false,
    bottomRight: true,
    middle: true
  }
  
]
