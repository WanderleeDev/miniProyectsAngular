export interface IDataImg {
  id: string
  img: string,
  title: string,
  link: Partial<linkData []>,
  linkStore: linkData
}

export interface linkData {
  link: string,
  text: string
  url: string
}
