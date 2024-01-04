import { useEffect, useState } from "react";

const useOnlineState = () => {
    const [onlineStatus, setOnlineState] = useState(true);

    useEffect(() => {
        window.addEventListener('online', () => {
            setOnlineState(true);
          });
          
          window.addEventListener('offline', () => {
            setOnlineState(false);
          });
    }, [])
    return onlineStatus;
}

export default useOnlineState;