import React, {useState} from "react"

import BassSound from "./bass.mp3"

const SoundCard = () => {
    // const [bass, setBass] = useState([])
    let bass = new Audio(BassSound)


    // React.useEffect(() => {
    
    //   const options = {
    //               method: "GET",
    //               headers: {
    //                 'Content-Type': 'application/json',
                    
    //               },
    //               body: JSON.stringify()
    //         }  
            
    //             fetch("https://freesound.org/apiv2/search/text/?query=bass%20-drum&token=YJ2lrPOwKaHi3ipqSn0cPdcBJ2gNyeplohMdzDLk", options)
    //             .then(resp => resp.json())
    //             .then(data => setBass(data))
                
    // },[])
    
const start = () => {
    bass.play()
}
    
    
    
    
  
    return(
        
        <div className="sound--card">
         <button onClick={start}>Play</button>
         
        </div>
    )
}

export default SoundCard