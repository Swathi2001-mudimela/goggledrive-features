import Head from 'next/head'
import Image from "next/image";
import type{GetServerSideProps,NextPage} from 'next';
import{ ICollectionResponse} from '../types';
import {Ifirstpage} from '../types';
import {AxiosResponse} from 'axios';
import Link from 'next/link'; 
import {fetchfirstpage}from '../http';
interface IPropTypes {
  firstpages: {
      items: Ifirstpage[];
  };
  
}


export default function Home({firstpages}: IPropTypes) {
  return (
    <div >
      <Head>
        <title>Google Drive</title>
       
      </Head>


      <main  >
       <div className="fixed ">
         <div className="grid p-5 my-8 lgg:px-24 md:grid-cols-2">
           <div className="flex flex-col justify-center p-8 space-y-5 text-black">
             <h1 className="text-4xl font-medium md:text-6xl">
                {firstpages.items.map((firstpage)=>{
                  return<span>{firstpage.attributes.Title}</span>
                })
              }
             </h1>
             <p className=" text-drive-gray text-4xl  lg:text-lg">
               {firstpages.items.map((firstpage)=>{
                  return <span>{firstpage.attributes.description}</span>

               })
             }
             </p>
             
            

          </div>
          <Image  src="/mobilegoggledriveimage.png" height={600} width={700} className="mt-10 "  alt="not" />

         
         </div>
         
         <div>
            <h1 className="text-4xl font-medium md:text-6xl -mt-12 mb-5 ml-7">
              <span className="font-bold">Ready to get started?</span>
            </h1>
            <ul className='flex items-center ml-8 '>
              <li className='mr-6 font-medium text-drive-yellow'>
                 <a href="https://drive.google.com/drive/my-drive" className='text-2xl text-drive-blue'>Go To Drive</a>
              </li>
              <li className='mr-6 font-medium text-white'>
                  <a href="https://workspace.google.com/intl/en/features/?utm_source=driveforwork&utm_medium=et&utm_content=trydriveforyourteam&utm_campaign=hero" className='text-2xl bg-drive-blue  rounded-lg px-3  py-3 border-drive-blue-2'>Try Drive For Work</a>
               </li>
           </ul>

          </div>
      </div>
         

         
         
         
          
        
          
        
        
      </main>

     
    </div>
  )
}
export const getServerSideProps: GetServerSideProps =async()=>{
  const { data: firstpages }: AxiosResponse<ICollectionResponse<Ifirstpage[]>> =await  fetchfirstpage();
  console.log('firstpages',firstpages);
 
  return{
    props:{
      firstpages:{
        items: firstpages.data,
      },
   
    }
  }

}
