import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData, getExamplePostsData } from '../lib/posts';

export default function Home({ allPostsData, examplePostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm <b>Sean</b>, I'm a software engineer. you can contact me on
        <a href='https://twitter.com/seandong'>Twitter</a>.</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => {
           return (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`} >
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          )
         })}
        </ul>
      </section>

      {/* <hr/>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Posts</h2>
        <ul className={utilStyles.list}>
        {examplePostsData.map(({ id, body, title }) => {
           return (
            <li className={utilStyles.listItem} key={id}>
              <b>{title}</b>
              <br />
              {body}
            </li>
          )
         })}
        </ul>
      </section> */}
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  const examplePostsData = await getExamplePostsData()
  return {
    props: {
      allPostsData,
      // examplePostsData
    }
  }
}

// export async function getServerSideProps(context) {
//   const allPostsData = []
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   const examplePostsData = await res.json()
//   return {
//     props: {
//       examplePostsData,
//       allPostsData
//     }
//   }
// }