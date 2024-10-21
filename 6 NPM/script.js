import axios from "axios";

axios.get("https://api.sampleapis.com/coffee/hot").then((request) => {
    request.data.forEach((item)=>{
        console.log(item.title);
    });
});
