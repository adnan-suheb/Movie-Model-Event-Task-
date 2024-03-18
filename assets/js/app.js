

let cl = console.log;


const showMovieModel = document.getElementById('showMovieModel');
const backDrop = document.getElementById('backDrop');
const movieModel = document.getElementById('movieModel');
const hideMovieModel = [...document.querySelectorAll(".hideMovieModel")];
const movieForm = document.getElementById('movieForm');
const titleControl = document.getElementById('title');
const imageUrlControl = document.getElementById('imageUrl');
const overViewControl = document.getElementById('overView');
const ratingControl = document.getElementById('rating');
const postCard = document.getElementById('postCard');






const movirArr = [
    {
        title: `Money Heist`,
        imageUrl: `https://media.themoviedb.org/t/p/w300_and_h450_bestv2/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg`,
        overView: `To carry out the biggest heist in history, a mysterious man called The Professor recruits a band of eight robbers who have a single characteristic: none of them has anything to lose. Five months of seclusion - memorizing every step, every detail, every probability - culminate in eleven days locked up in the National Coinage and Stamp Factory of Spain, surrounded by police forces and with dozens of hostages in their power, to find out whether their suicide wager will lead to everything or nothing.`,
        rating: 4.4
    },
    {
        title: `The Vampire Diaries`,
        imageUrl: `https://media.themoviedb.org/t/p/w220_and_h330_face/b3vl6wV1W8PBezFfntKTrhrehCY.jpg`,
        overView: `The story of two vampire brothers obsessed with the same girl, who bears a striking resemblance to the beautiful but ruthless vampire they knew and loved in 1864.`,
        rating: 4.3
    },
    {
        title: `Lucifer`,
        imageUrl: `https://media.themoviedb.org/t/p/w300_and_h450_bestv2/ekZobS8isE6mA53RAiGDG93hBxL.jpg`,
        overView: `Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals. But the longer he's away from the underworld, the greater the threat that the worst of humanity could escape.`,
        rating: 4.3
    },
    {
        title: `Peaky Blinders`,
        imageUrl: `https://media.themoviedb.org/t/p/w220_and_h330_face/wMUNrwZmGKgFrclABHrRZD1jF49.jpg`,
        overView: `A gangster family epic set in 1919 Birmingham, England and centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby, who means to move up in the world.`,
        rating: 4.5
    }
];





const templatingOfMovieArr = (arr) => {
    let result = ``;
    arr.forEach(ele => {
        result += `
        <div class="col-md-4 col-sm-6">
        <div class="card mt-4">
            <figure class="movieCard mb-0">
                <img src="${ele.imageUrl}" alt="${ele.title}" title="${ele.title}">
                <figcaption>
                    <div class="ratingSection">
                        <div class="row">
                            <div class="col-md-9 col-sm-9 ">
                            <div class="movieName">
                                <h4>${ele.title}</h4>
                            </div>

                            </div>

                            <div class="col-md-3 col-sm-3">
                                <div class="ratings text-center ">
                                    ${ele.rating = 4 ? `<p class="bg-success">${ele.rating}</p>` :
                                    (ele.rating<= 4 && ele.rating>=2 ? `<p class="bg-warning">${ele.rating}</p>` : 
                                    (ele.rating<2 ? `<p class="bg-danger">${ele.rating}</p>`:`<p class="bg-warning">${ele.rating}</p>`))}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="overviewSection">
                        <h4>${ele.title}</h4>
                        <em>Overview</em>
                        <p>
                        ${ele.overView}
                        </p>
                    </div>
                </figcaption>
            </figure>

        </div>
    </div>            
        `

        postCard.innerHTML = result;
    })
}
templatingOfMovieArr(movirArr);


// const showMovieModelHandler = () => {
//     movieModel.classList.add("active");
//     backDrop.classList.add("active");
// }
// const hideMovieModelHandler = () => {
//     movieModel.classList.remove("active");
//     backDrop.classList.remove("active");
// }

const toggleMovieModelHandler = ()=>{
    movieModel.classList.toggle("active");
    backDrop.classList.toggle("active");
}

const onAddMovieHandler = (eve) => {
    eve.preventDefault();
    let obj = {
        title: titleControl.value,
        imageUrl: imageUrlControl.value,
        overView: overViewControl.value,
        rating: ratingControl.value
    }
    eve.target.reset();
    toggleMovieModelHandler();
    swal.fire({
        title : `${obj.title} added successfully!!!`,
        icon : `success`,
        timer : 2500
    })


    movirArr.unshift(obj);
    cl(obj)
    templatingOfMovieArr(movirArr);

}








showMovieModel.addEventListener("click", toggleMovieModelHandler);
hideMovieModel.forEach(ele => {
    ele.addEventListener("click", toggleMovieModelHandler)
})

movieForm.addEventListener("submit", onAddMovieHandler)


