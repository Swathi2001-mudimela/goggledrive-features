import Image from "next/image";
import React from 'react'
const features = () => {
  return (
    <div>
        <div className="grid p-5 my-8 lgg:px-24 md:grid-cols-2">
          <div className="flex flex-col justify-center p-8 space-y-5 text-black">
            <h1 className="text-4xl font-medium md:text-6xl">
              <span className="font-bold">Built-in protections against malware, spam, and ransomware</span>
            </h1>
            <p className=" text-drive-gray text-4xl  lg:text-lg">Drive can provide encrypted and secure access to your files.
             Files shared with you can be proactively scanned and removed when malware, spam, ransomware, or phishing is detected.
              And Drive is cloud-native, which eliminates the need for local files and can minimize risk to your devices.
             </p>

          </div>
          <Image  src="/features1.png" height={670} width={700}  alt="not" />

         
         </div>
         <div className="grid p-5 my-8 lgg:px-24 md:grid-cols-2">
          <Image src="/features2.png" height={670} width={700}  alt="not" />
          <div className="flex flex-col justify-center p-8 space-y-5 text-black">
            <h1 className="text-4xl font-medium md:text-6xl">
              <span className="font-bold">People-first collaboration apps to supercharge teamwork</span>
            </h1>
            <p className=" text-drive-gray text-4xl  lg:text-lg">Drive integrates with Docs, Sheets, and Slides, cloud-native 
            collaboration apps that enable your team to create content and collaborate more effectively in real time.
             
             </p>

          </div>
          

         
         </div>
         <div className="grid p-5 my-8 lgg:px-24 md:grid-cols-2">
          <div className="flex flex-col justify-center p-8 space-y-5 text-black">
            <h1 className="text-4xl font-medium md:text-6xl">
              <span className="font-bold">Integration with the tools and apps your team is already using</span>
            </h1>
            <p className=" text-drive-gray text-4xl  lg:text-lg">Drive integrates with and complements your team’s existing technology. 
            Collaborate in Microsoft Office files without the need to convert file formats, and edit and
             store over 100 additional file types, including PDFs, CAD files, images, and more.
             </p>

          </div>
          <Image src="/features3.png" height={670} width={700}  alt="not" />

         
         </div>
         <div className="grid p-5 my-8 lgg:px-24 md:grid-cols-2">
          <Image src="/features4.png" height={670} width={700}  alt="not" />
          <div className="flex flex-col justify-center p-8 space-y-5 text-black">
            <h1 className="text-4xl font-medium md:text-6xl">
              <span className="font-bold">Google’s Search and AI technology helps your team move faster</span>
            </h1>
            <p className=" text-drive-gray text-4xl  lg:text-lg">Google’s powerful search capabilities are embedded in Drive and offer speed,
             reliability, and collaboration. And features like Drive search chips help
              your team find files fast by quickly surfacing more relevant results.
             
             </p>

          </div>
          

         
         </div>
    </div>
  
    
    
    
  )
}

export default features