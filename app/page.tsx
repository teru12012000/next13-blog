import { blogType } from '@/data/blogType';
import { client } from '@/lib/client'
import Image from 'next/image'
import Link from 'next/link';
const getBlog=async()=>{
  const res=await client.get({endpoint:'blog2'});
  const contents=res.contents as blogType[];
  return contents;
}
export default async function Home() {
  const blogData:blogType[]= await getBlog(); 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {blogData.map((item:blogType,index:number)=>(
          <div key={index}>
            <Link href={`/blog/${item.id}`}>
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
