export interface IListDataFooter {
  title: string,
  list: string[],
  secondList?: ISecondList
}

interface ISecondList {
  subTitle: string,
  subList : string[]
}
