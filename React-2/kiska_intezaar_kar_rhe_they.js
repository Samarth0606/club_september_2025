async function maverick(){
  console.log("Ask me anything woof woof...");

  const API="https://api.tvmaze.com/search/shows?q=girls"
  const movies = fetch(API)
  console.log(movies);

  console.log("dont bother me let me sleep");
}
maverick()