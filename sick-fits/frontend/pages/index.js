import Link from 'next/link';

const Home = props => (
    <div>
        <p>Yo!</p>
        <Link href="/sell">
            <a>Go to Sell</a>
        </Link>
    </div>
);

export default Home;
