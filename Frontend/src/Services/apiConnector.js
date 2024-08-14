// import axios from "axios";

// export const axiosInstance = axios.create({});
// export const apiConnector = ({ method, url, bodyData, headers, params }) => {
//   return axiosInstance({
//     method: `${method}`,
//     url: `${url}`,
//     data: bodyData ? bodyData : null,
//     headers: headers ? headers : null,
//     params: params ? params : null,
//   });
// };


export const fetchData = (url, setData) => {
  // Assuming you have stored the authentication token in localStorage
  try {
    const token = localStorage.getItem('token');
    console.log("fetching token", token);

    fetch(url)
      .then((res) => {
        console.log("res", res)
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
  catch (err) {
    console.error("Unable to get api");
  }
}