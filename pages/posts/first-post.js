import Head from "next/head"
import Link from "next/link"
import Layout from "../../components/layout"

export default function FirstPost() {
    
    const e1 = '\u{1F64B}'
    
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <div>
                <h1>First Post {e1}</h1>
            </div>
        </Layout>
    )
}