export class IPost {
  constructor(
    public userId: number,
    public id: number,
    public title: string,
    public body: string
  ) {}
}