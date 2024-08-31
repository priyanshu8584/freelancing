import Link from "next/link";
const Learn=()=>{
  return <div>
    <div>
    <div className="flex gap-8 justify-center items-center">
        <button className="bg-red-500 p-3 text-white border rounded-xl"><Link href={"/dashboard"}> <h1 className="texr-2xl">Available jobs/gigs</h1></Link></button>
        <button className="bg-red-500 p-3 text-white border rounded-xl" > <Link href={"/dashboard/learn"}><h1>Learn Tasks</h1></Link></button>
         </div>
    </div>
    <div className="grid grid-cols-3 gap-4 p-6">
        <div>
          <Link href={"/dashboard/learn/html"}>
          <img src="/html.webp" alt="" className="w-50 h-50"/>
          HTML</Link>
        </div>
        <div>
        <Link href={"/dashboard/learn/css"}>
        <img src="/css.jpg" alt="" className="w-50 h-50"/>
              <h1>CSS</h1>  </Link>   
        </div>
        <div>
        <Link href={"/dashboard/learn/js"}>
        <img src="/javas.jpg" alt="" className="w-50 h-50"/>
        <h1>JAVASCRIPT</h1>
        </Link>
        </div>
  </div>
  </div>
}

export default Learn;
