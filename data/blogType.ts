export type imgType={
  url:string;
  height:number;
  width:number;
}
export type blogType={
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt:string;
  revisedAt:string;
  title:string;
  content:string;
  img: imgType;
}