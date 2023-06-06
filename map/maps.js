/*
const mapaSaur = new Map;

// MAP METHODS
mapaSaur.clear(); //remove all key-value
mapaSaur.delete(); //Validates if an element existed and was removed.
mapaSaur.entries(); //
//mapaSaur.forEach(); // does something for each pair in the map.
mapaSaur.get(); // returns a value associated to a key.
mapaSaur.has(); // Validates if a key has an associated value.
mapaSaur.keys(); // returns all the keys from the object
mapaSaur.values(); // returns all the values from the object


mapaSaur.set("0", "foo");
mapaSaur.set(1, "bar");
mapaSaur.set({}, "baz");

console.log(mapaSaur.size);
console.log(mapaSaur)

for (const entry of mapaSaur) {
  console.log(entry);
};

*/

// *****************************************************

const cards = [];

// form elements

const $form = document.getElementById("movieForm")
const $createButton = document.getElementById("create");
console.log($createButton)


$createButton.addEventListener("click", function (){
  const $title = $form.title.value;
  const $genre = $form.genre.value;
  const $duration = $form.duration.value;
  const $director = $form.director.value;
  const $moviePic = $form.moviePic.value;

  const pelicula = new Map;
  pelicula.set("title",$title);
  pelicula.set("genre",$genre);
  pelicula.set("duration",$duration);
  pelicula.set("director",$director);
  pelicula.set("moviePic",$moviePic);

  console.log(pelicula);
  cards.push(pelicula)

  const id = (cards.length)-1
  console.log(id);
  cards[id].set("id",id)
  console.log(cards)
});