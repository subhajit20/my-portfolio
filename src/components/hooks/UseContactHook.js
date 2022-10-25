import {useState} from 'react';

const UseContactHook = () =>{
    const [loading,setLoading] = useState();
    const [flag,setFlag] = useState(false);
    async function ContactApiCall(...datas){
        setLoading(true);
        try{
            const url = "https://portfolio-api-production.up.railway.app/s1/send/"
            const res = await fetch(url,{
                method:'POST',
                body:JSON.stringify({...datas[0]}),
                headers:{
                    'content-type':'application/json'
                }
            })
            const data = await res.json();
            if(res.status === 200){
                setTimeout(()=>{
                    setFlag(true)
                },1000)

                return true
            }else{
                setTimeout(()=>{
                    setFlag(false)
                },1000)

                return false
            }
        }catch(e){
            console.log("Something went wrong...")
        }
    }

    // useEffect(()=>{
    //     if(loading){
    //         ContactApiCall()
    //     }
    // },[loading])
    return [flag,ContactApiCall]
}

export default UseContactHook