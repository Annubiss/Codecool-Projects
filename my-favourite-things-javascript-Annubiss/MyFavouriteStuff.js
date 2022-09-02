
const myFavBook = {

    title: "HarryPotter",
    author: "J.K. Rowling",
    year:"I have no idea",
    description: "Magic stuff happens, old snake guy tries to kill prophecy child, plot twist, snake man dies",
};


console.log(myFavBook);

const myFavMovie ={
    title: "The Imitation Game",
    director: "Morten Tyldum",
    year: "2014",
    description: "The Nazis had a encription machine, british scientist makes a decription machine to crack Nazi comunication and changing the fate of WW2",
    actors: [{actorName:"Benedicth Cucamber", roleName:"Alan Turning"},
            {actorName:"Keira Knightley", roleName: "Joan Clarke"},
            {actorName: "Matthew Goode" , roleName: "Hugh Alexander"},
            {actorName: "Allen Leech" , roleName: "John Cairncross"},
            {actorName: "Rory Kinnear" , roleName: "Detective Robert Nock"},]

};

console.log(myFavSeries);

const myFavSeries ={
    title: "Vikings",
    directors: ["Stephen Leger", "Ciaran Donnelly", "David Wellington"],
    description: "The journey of Ragnar from being a a simple farmer and raider to becoming a viking legend and the legends of his sons",
    actors: [{actorName: "Travis Fimmel" , roleName: "Ragnar Lothbrok"},
            {actorName: "Katheryn Winnick" , roleName: "Lagertha"},
            {actorName: "Gustaf Skarsgard" , roleName: "Floki"},
            {actorName: "Alexander Ludwig" , roleName: "Bjorn Lothbrok"},
            {actorName: "Georgia Hirst" , roleName: "Torvi"},],
    seasons: [{episodes: 9 , startYear: "2013" , endYear: "2013" },
            {episodes: 10 , startYear: "2014" , endYear: "2014" },
            {episodes: 10 , startYear: "2015" , endYear: "2015" },
            {episodes: 20 , startYear: "2016" , endYear: "2017" },
            {episodes: 20 , startYear: "2017" , endYear: "2019" },
            {episodes: 20 , startYear: "2019" , endYear: "2020" },],

};

console.log(myFavSeries);

const myFavs = {
    book: myFavBook,
    movie: myFavMovie,
    series: myFavSeries,
};
 

   console.log(myFavBook.author);