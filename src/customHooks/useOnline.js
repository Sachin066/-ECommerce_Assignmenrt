import { useEffect, useState } from "react";

function useOnline(){

    const[isOnline, setIsOnline] = useState(true);

    useEffect(()=>{
        const handleOnline =()=>{
            setIsOnline(true);
        }
        const handleOffline = function(){
            setIsOnline(false);
        }

        window.addEventListener('online',handleOnline);
        window.addEventListener('offline',handleOffline);

        return ()=>{
            
            window.removeEventListener('online',handleOnline);
            window.removeEventListener('offline',handleOffline);

        }
    },[]);

    return isOnline;

}
export default useOnline;