const api = {
    popular: 'most-popular-streamer',               
    esport: 'top-esport-streamer',             
    female: 'best-female-streamer',             
    pubg: 'best-pubg-streamer',         
    gta5: 'top-gta5-streamer',                  
    rising: 'new-rising-star'
}
const headers = [
    {
        header: 'Giải streamer nổi tiếng nhất',
        type: api.popular
    },
    {
        header: 'Giải streamer esport xuất sắc nhất',
        type: api.esport
    },
    {
        header: 'Giải nữ streamer xuất sắc nhất',  
        type: api.female
    },
    {
        header:   'Giải streamer mới nhú',
        type: api.rising
    },
    {
        header:  'Giải PUBG streamer xuất sắc nhất',
        type: api.pubg
    },
    {
        header: 'Giải GTA5 streamer xuất sắc nhất', 
        type: api.gta5
    }         
  
]
module.exports = {headers, api};