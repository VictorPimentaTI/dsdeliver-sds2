import axios from "axios";

const API_URL = 'http://192.168.25.227:8080';

export function fetchOrders(){
  return axios(`${API_URL}/orders`)
}