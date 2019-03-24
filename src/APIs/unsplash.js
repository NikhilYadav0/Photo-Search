import Axios from 'axios'
export default Axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:
            'Client-ID 3d448ed6d0fa10f02760bd58c2cbae98ed236c40af0ae8fe048e4c935648c441'
    }
})


