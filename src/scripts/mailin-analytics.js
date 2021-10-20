const database = firebase.database();
const today = new Date();
const userDate = `${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}`;
const userHour = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
let userIp;
let userLocation;
let findIP;

const writeUserData = (location, date, hour) => {
    firebase.database().ref('visits/').push({
        location: location,
        date : date,
        hour : hour
    });
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


window.addEventListener('load', async () =>{
    userIp = await fetchIp();
    userLocation = await fetchLocation(userIp);
    writeUserData(userLocation, userDate, userHour);
});