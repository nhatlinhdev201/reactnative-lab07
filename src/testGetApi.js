import axios from 'axios';
import React from 'react'
import { View, Text } from 'react-native'

const testGetApi = () => {
    axios.get('https://65444c9e5a0b4b04436c3d4a.mockapi.io/api/v1/jobs')
  .then(response => {
    // Xử lý dữ liệu ở đây
    console.log(response.data);
  })
  .catch(error => {
    // Xử lý lỗi ở đây
    console.error('There was a problem with the Axios request: ', error);
  });
}

export default testGetApi
