import Layout from "../../components/Layout";
import axios from "axios"

const Operator = props => (
    <Layout>
        <h1>{props.operator.name}</h1>
        <img height={700} src={`/img/characters/${props.operator_id}_1.png`} alt="Operator Photo"/>
        <h4>Description</h4>
        <p>{props.operator.story_description}</p>
    </Layout>
);

Operator.getInitialProps = async ctx => {
    const {operator_id} = ctx.query;
    const res = await axios.get(`http://localhost:3000/api/chara?char_id=${operator_id}`);
    const data = res.data;
    return {
        operator: data,
        operator_id: operator_id
    }
};

export default Operator;