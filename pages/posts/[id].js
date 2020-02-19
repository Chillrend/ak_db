import {useRouter} from 'next/router';
import Layout from '../../components/Layout';

const Content = () => {
    const router = useRouter();

    return(
        <>
            <h1>{router.query.id}</h1>
            <p>This is the post</p>
        </>
    )
}

const Page = () => (
    <Layout>
        <Content />
    </Layout>

)
 
export default Page;