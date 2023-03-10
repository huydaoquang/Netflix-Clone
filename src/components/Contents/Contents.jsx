import MoviesRow from "./MoviesRow";

const movies = [
  "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/scan033_fa323d83-9196-4905-af87-7a2aae2445a0_480x.progressive.jpg?v=1678290217",
  "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/54385_480x.progressive.jpg?v=1639587311",
  "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/f514516f543f453ab20d2e50c82c2fd0_0665df9c-f2fb-4503-ba61-ae7c91e32b37_480x.progressive.jpg?v=1573587303",
  "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/3221-Naruto-Characters-24X36_480x.progressive.png.jpg?v=1631911844",
  "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/dragonballz_480x.progressive.jpg?v=1620241981",
  "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/53198_480x.progressive.jpg?v=1614961253",
  "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/1aa0c8e9688fdc42cb12babb3a15f85d_480x.progressive.jpg?v=1573572622",
  "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/54409_480x.progressive.jpg?v=1642690615",
  "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/wandavision.R85648_480x.progressive.jpg?v=1673638271",
];

const Contents = () => {
  return (
    <div className="">
      <MoviesRow movies={movies} title="Netflix Originals" />
      <MoviesRow movies={movies} title="Trending Movies" />
      <MoviesRow movies={movies} title="Top Rated Movies" />
      <MoviesRow movies={movies} title="Action Movies" />
      <MoviesRow movies={movies} title="Comedy Movies" />
      <MoviesRow movies={movies} title="Horror Movies" />
      <MoviesRow movies={movies} title="Romance Movies" />
      <MoviesRow movies={movies} title="Documentaries Movies" />
    </div>
  );
};

export default Contents;
