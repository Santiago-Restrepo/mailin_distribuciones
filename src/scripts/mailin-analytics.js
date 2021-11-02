const today = new Date();
const userDate = `${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}`;
const userHour = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
let userIp;
let userLocation;
    
const writeUserData = async (location, date, hour) => {
    try {
        return await fetch(window.localStorage.getItem('analyticsAPI'), {
            method:"post",
            body:JSON.stringify({
                "location" : location,
                "date": date,
                "hour": hour
            })
        });
    } catch (error) {
        console.error(error);
    }
}

const fetchIp = async () =>{
    try{
        let ipPromise = await fetch("https://api.ipify.org?format=json");
        let jsonIp = await ipPromise.json();
        return jsonIp.ip;
    }catch(error){
        console.error(error);
    }
    
}

const fetchLocation = async (ip) =>{
    try{
        let locationPromise = await fetch(`https://ipinfo.io/${ip}?token=298c4e899c2f78`);
        // ,{
            // headers: new Headers({
                //     'mode':'no-cors'
                // })});
                let location = await locationPromise.json();
                return location;    
            }catch(error){
                console.error(error);
            }
            
        }

export const mailinAnalytics = async () =>{
    userIp = await fetchIp();
    userLocation = await fetchLocation(userIp);
    writeUserData(userLocation,userDate,userHour);
}