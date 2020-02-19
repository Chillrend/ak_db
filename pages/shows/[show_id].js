import Layout from "../../components/Layout";
import axios from 'axios';

const Show = props =>(
    <Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
        {props.show.image ? <img src={props.show.image.medium} /> : null}
    </Layout>
);

Show.getInitialProps = async ctx => {
    const {show_id} = ctx.query;
    const res = await axios.get(`https://api.tvmaze.com/shows/${show_id}`);
    const data = res.data;

    console.log(data.name)

    return {
        show: data
    }
}

export default Show;

