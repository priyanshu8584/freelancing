 "use client"
 import { useRouter } from "next/navigation"
import Footer from "../../../components/Footer"
 import Link from "next/link"

 const Dashboard=()=>{
   function handleLearn(){
      const router=useRouter();
      router.push("/Learn");
   }
    
 return <div>
    <div className="flex">
      <div className="">
              
      </div>
      <div className="flex flex-col border right-2 justify-between items-center">
         <div className="flex gap-8">
        <button className="bg-red-500 p-3 text-white border rounded-xl"><Link href={"/dashboard"}> <h1 className="texr-2xl">Available jobs/gigs</h1></Link></button>
        <button className="bg-red-500 p-3 text-white border rounded-xl" > <Link href={"/dashboard/learn"}><h1>Learn Tasks</h1></Link></button>
         </div>
         <div className="border bottom-3 pb-2 mb-2">
            <h1 className="text-lg">Job 1</h1>
            <p>This paragraph should contain information about the job posted by the company. It should include the required skills that candidates need to possess and other necessary details related to the job.</p>
         </div>
         <div className="border-b bottom-3 pb-2 mb-2">
            <h1 className="text-lg">Job 2</h1>
            <p>This paragraph should contain information about the job posted by the company. It should include the required skills that candidates need to possess and other necessary details related to the job.</p>
         </div>
         <div className="border-b bottom-3 pb-2 mb-2">
            <h1 className="text-lg">Job 3</h1>
            <p>This paragraph should contain information about the job posted by the company. It should include the required skills that candidates need to possess and other necessary details related to the job</p>
         </div>
         <div className="border-b bottom-3 pb-2 mb-2">
            <h1 className="text-lg">Job 4</h1>
            <p>This paragraph should contain information about the job posted by the company. It should include the required skills that candidates need to possess and other necessary details related to the job.</p>
         </div>
         <div className="border-b bottom-3 pb-2 mb-2">
            <h1 className="text-lg">Job 5</h1>
            <p>This paragraph should contain information about the job posted by the company. It should include the required skills that candidates need to possess and other necessary details related to the job.</p>
         </div>
         <div className="border-b bottom-3 pb-2 mb-2">
            <h1 className="text-lg">Job 6</h1>
            <p>This paragraph should contain information about the job posted by the company. It should include the required skills that candidates need to possess and other necessary details related to the job.</p>
         </div>
         <div className="border-b bottom-3 pb-2 mb-2">
            <h1 className="text-lg">Job 7</h1>
            <p>This paragraph should contain information about the job posted by the company. It should include the required skills that candidates need to possess and other necessary details related to the job</p>
         </div>
      </div>
      <div className="flex flex-col w-1/2 ">
          <div className="h-1/3 flex flex-col justify-center">
            <h1 className="text-xl ">This is the section for resume</h1>
            <p>Probably will integrate a drag and drop feature to upload a pdf</p>
          </div>
          <div className="mt-10 flex flex-col justify-center items-center border-t-4 pt-8">
            <h1 className="text-xl">This is a random section</h1>
          </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
}
export default Dashboard
