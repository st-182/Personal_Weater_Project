const mainInside = document.querySelector(`main`);
console.log(mainInside.innerHTML);
const wasMainInside = mainInside.innerHTML;

//no preview
let preview = document.querySelector(`#moving-bg`);
preview.style.display = `none`;
setTimeout(() => {
  let preview = document.querySelector(`#moving-bg`);
  let main = document.querySelector(`#main`);
  preview.animate([{}, { opacity: `0` }], { duration: 500 });
  setTimeout(() => {
    preview.style.display = `none`;
  }, 500);
}, 1500);

let user = {
  id: `453lk4n534lk5`,
  name: `Petras`,
  surname: `Slekys`,
  email: `example@gmail.com`,
  posts: [
    {
      title: `As ♡ CAO`,
      text: `           `,
      rating: [
        {
          id: `0495jj4l5kj`,
          points: 5,
        },
        {
          id: `9k5kng3p45fr`,
          points: 5,
        },
      ],
      comments: [
        {
          id: `654k64lkn56`,
          text: `lol, as irgi`,
        },
        {
          id: `09hg0fdg0hs`,
          text: `CSS ismokome`,
        },
      ],
    },
  ],
};
