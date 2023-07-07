function printSongsPromise(songPromise) {
    songPromise
      .then((songs) => {
        console.log("Song List:");
        songs.forEach((song) => {
          console.log(`Title: ${song.title}`);
          console.log(`Artist: ${song.artists[4]?.name}`);
          console.log(`Duration: ${song.duration}`);
          console.log("-----------------------");
        });
      })
      .catch((error) => {
        console.error("Error:", console.log("lagu tidak ada"));
      });
  }
  const songPromise = new Promise((resolve, reject) => {
    const songs = [
      {
        title: "tak segampang itu",
        artists: [{ name: "Anggi Marito" }],
        duration: 318,
      },
      {
        title: "surat cinta untuk starla",
        artists: [{ name: "virgoun" }],
        duration: 280,
      },    {
        title: "nemen",
        artists: [{ name: "guyon waton" }],
        duration: 380,
      },
      {
        title: "seandainya",
        artists: [{ name: "vierra" }],
        duration: 345,
      },
    ];
  
    resolve(songs);
  
  });
  
  printSongsPromise(songPromise);