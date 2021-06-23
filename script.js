fetch("https://api.spotify.com/v1/playlists/{playlist_id}/followers/contains", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${BQCHTM1czFR9GGZHV0uWcsGJPefdbWsFj0NlBQX_1LJANWCLc}`
  }
})
.then(response => response.json())
.then(({beats}) => {
  beats.forEach((beat, index) => {
    console.log(`Beat ${index} starts at ${beat.start}`);
  })
})