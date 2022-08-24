export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((player) => {
    return {
      params: { slug: player.id.toString() },
    };
  });

  return {
    //paths: paths
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.slug;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { player: data },
  };
};

const Details = ({ player }) => {
  return (
    <div>
      <h1>{player.name}</h1>
      <p>{player.email}</p>
      <p>{player.website}</p>
      <p>{player.address.city}</p>
      <p>{player.company.name}</p>
    </div>
  );
};

export default Details;
