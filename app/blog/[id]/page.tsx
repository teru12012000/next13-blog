import { blogType } from "@/data/blogType";
import { client } from "@/lib/client";
import { GetStaticPaths, NextPage } from "next";
export const getStaticPaths:GetStaticPaths=async()=>{
  const res= await client.get({endpoint:"blog2"});
  const contents:blogType[]=res.contents;
  const paths=contents.map((item:blogType)=>({params:{id:item.id}}));
  return {
    paths: paths,
    fallback:false
  };
}
const getContent=async(params:string)=>{
  const res=await client.get({endpoint:"blog2",contentId:params}) as blogType;
  return res;
}
const Blog = async({ params }: { params: { id: string } }) => {
  const data:blogType=await getContent(params.id)
  return (
    <div>
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{__html:`${data.content}`}}></div>
    </div>
  );
}

export default Blog;