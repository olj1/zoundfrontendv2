const fetchConnections = () => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://zoundback.herokuapp.com/connections/`)
    .then((response) => response.json())
}



export default {
  fetchConnections,
}