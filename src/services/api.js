import axios from "axios";
import {config} from './config';

const api = axios.create({
  baseURL: config.serverUrl,
  headers:{
      'Content-Type': 'application/json;charset=UTF-8',
  }
});


export {api};