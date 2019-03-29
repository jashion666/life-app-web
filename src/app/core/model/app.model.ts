export interface IAppModel {
  pageIndex?: number;
  totalSize?: number;
  hasNextPage?: boolean;
}

export class AppModel implements IAppModel {

  constructor(
    public pageIndex?: number,
    public totalSize?: number,
    public hasNextPage?: boolean
  ) {
    this.pageIndex = this.pageIndex ? this.pageIndex : null;
    this.totalSize = this.totalSize ? this.totalSize : null;
    this.hasNextPage = false;
  }

}
