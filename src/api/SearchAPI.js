

const fetchPinyinByID = (englishID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://cedictapi.herokuapp.com/?english=${englishID}`)
  .then((response) => response.json())
}



export default {
  fetchPinyinByID,
}