import Layout from "../components/Layout";
import Link from "next/link";
import axios from "axios";

const Batman = props => (
    <Layout>
        <h1>Batmang</h1>
        <ul>
            {props.shows.map(show => (
                <li key={show.id}>
                    <Link href="/shows/[show_id]" as={`/shows/${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
);

Batman.getInitialProps = async function(){
    const res = await axios.get('https://api.tvmaze.com/search/shows?q=avenger');
    const data = res.data;

    console.log(`successfully fetched ${data.length} batman films`);

    return {
        shows: data.map(entry => entry.show)
    };
};

export default Batman;