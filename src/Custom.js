import { useState } from 'react';

function useCustomCounter(){ 
    const [count,setcount]=useState(0);
    const handleIncreament=()=>{
        setcount(count+1);
    };

return{
    //return function count and handleincreament
count,
handleIncreament
};
}
    export default useCustomCounter;