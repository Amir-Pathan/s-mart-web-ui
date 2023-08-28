

import { collection, getDoc, getDocs, where } from "firebase/firestore";
import { db } from "../firebase";


const services={


  getData:(collectionName,fieldName='',value='')=>{

    if(!collectionName) return 'Collection Name Required'

    return new Promise((resolve,reject)=>{


      let q = collection(db,collectionName)

      if(fieldName.length){

        q=collection(db,collectionName,where(fieldName,'==',value))

      }

    
      getDocs(q).then((res)=>{


        const data = res.docs.map((doc)=>({...doc.data(),id:doc.id}))
        resolve(data)


      }).catch((err)=>{

        reject(err)

      })


    })

  }

}

export default services