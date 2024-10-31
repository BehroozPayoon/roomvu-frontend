export class Post {
  id: number;
  title: string;
  body: string;
  date: Date;

  constructor(id: number, title: string, body: string, date: Date) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.date = date;
  }
}
