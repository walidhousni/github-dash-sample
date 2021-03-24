import Axios from 'axios';
import { cloneDeep } from 'lodash';


const axiosInstance = Axios.create({
  headers: {
    'Content-Type': 'application/json',
  }
});

axiosInstance.interceptors.request.use(async config  =>  {
  const clonedConfig = cloneDeep(config);
  const token = 'sample-token';

  clonedConfig.headers.common =  {
    Authorization: `Baerer ${token}`,
  };

  return clonedConfig;
});


export default axiosInstance
