import NavBar from "@/components/NavBar"

import { Skeleton } from "@/components/ui/skeleton"
export default function Loading(){
  return(
  <main className="m-24 rounded-md grid grid-cols-4 gap-12">
 
  {Array.from({length: 12}, (_, i) => i + 1).map((id) => (
    <div className="bg-white p-8 col-span-4 md:col-span-2" key={id}>
      <Skeleton className="h-6 w-1/2 bg-gray-200"></Skeleton>
      <Skeleton className="h-6 w-30 bg-gray-500 mb-4 "></Skeleton>
      <Skeleton className="rounded-md w-full h-40">
     
       </Skeleton>
    </div>
  ))}
</main>
  )
}