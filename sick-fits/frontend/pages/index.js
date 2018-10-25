import Link from "next/link";

const Home = props => {
  return (
    <div>
      <p>Yo!</p>
      <Link href="/sell">Go to Sell</Link>
    </div>
  );
};

export default Home;
