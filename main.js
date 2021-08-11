const getData = async () => {
    let season = document.querySelector('.season').value
    let round = document.querySelector('.round').value
    let response = await axios.get(`http://ergast.com/api/f1/${season}/${round}/driverStandings`)
    return response.data
}