import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = props => (
    <li>
        <Link href="/posts/[id]" as={`/posts/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
)

const Index = () => (
    <Layout>
        <h1>This is index page</h1>
        <ul>
            <PostLink id="Hello-next" />
            <PostLink id="Hello-not-next" />
            <PostLink id="Hello-svelte-haha" />
        </ul>
    </Layout>
);

export default Index;