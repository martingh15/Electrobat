var BASE_URL = "";
//localhost
if (process.env.NODE_ENV === 'development' && !process.env.REACT_APP_ENVI)
    BASE_URL = "http://localhost:8888/api";

//testing
if (process.env.REACT_APP_ENVI == 'develop')
    BASE_URL = "http://www.rosariobateriasbat.com/BE/api";

//Produccion
if (process.env.NODE_ENV === 'production' && !process.env.REACT_APP_ENVI)
    BASE_URL = "http://www.rosariobateriasbat.com/BE/api";


export default {
    BASE_URL: BASE_URL
}