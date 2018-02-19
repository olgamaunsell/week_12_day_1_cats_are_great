const CATS_ARRAY = [
  {name: "Name: Boba", favFood: "Favourite food: Sock fluff", imageSource: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},

  {name: "Name: Barnaby", favFood: "Favouritefood: Tuna", imageSource: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"},

    {name: "Name: Max", favFood: "Favourite food: Whiskas Temptations", imageSource: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"},

    {name: "Name: Fluffy", favFood: "Favourite food: Turkey", imageSource: "kitten.jpg"}
]


const addCat = function(name, favFood, imageSource){
  //1. Create the parent container and it's class
  const catUl = document.createElement('ul')
  catUl.classList.add('cat')

  //2. Create the first child
  const nameLine = document.createElement('li')
  nameLine.innerText = name

  //3. Create the second child

  const favFoodLine = document.createElement('li')
  favFoodLine.innerText = favFood

  //4. Create the third child

  const imageLine = document.createElement('li')

  imageLine.innerHTML = '<img width="500" src ="'+ imageSource + '"/>';

  //5. Append the children to the parent
  catUl.appendChild(nameLine)
  catUl.appendChild(favFoodLine)
  catUl.appendChild(imageLine)

  //5. Append the parent to grandparent - cats

  const cats = document.getElementById('cats');

  cats.appendChild(catUl)
}


const app = function() {

  // addCat("Fluffy", "Turkey", "kitten.jpg" )

  for (const cat of CATS_ARRAY){
    addCat(cat.name, cat.favFood, cat.imageSource)
  }
};



document.addEventListener("DOMContentLoaded", app);
