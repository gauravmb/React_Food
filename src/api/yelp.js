import axios from "axios";

export default axios.create({
    baseURL:"https://api.yelp.com/v3/businesses",
    headers:{
        Authorization:"Bearer HiJeh13vRmHosriFKjgKmHz5W2Hx8UGaq8HDZ6uIUYTBpKOajgifKyFFgSTuZJTxz_KNpdgFsqG1Mh-DFThTit9tM4INAm2vjF4R10nO52wjym_9IwkYKEvvoR9lYnYx"
    }
});