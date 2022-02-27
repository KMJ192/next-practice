import SanityService from '../service/SanityService';
import Header from '../components/Header';
import BlogHeadline from '../components/BlogHeadline';
import BlogMainPost from '../components/BlogMainPost';
import BlogList from '../components/BlogList';
import Footer from '../components/Footer';

import styles from '../styles/Home.module.css';

function Home({ home, posts }) {
  const mainPost = posts.find((p) => p.slug === home.mainPostUrl);
  const otherPosts = posts.filter((p) => p.slug !== home.mainPostUrl);
  return (
    <div className={styles.container}>
      <Header />
      <BlogHeadline />
      <BlogMainPost {...mainPost} />
      <BlogList posts={otherPosts} />
      <Footer />
    </div>
  );
}

async function getStaticProps() {
  // 서버로 부터 데이터를 가져온다.
  const sanityService = new SanityService();
  const home = await sanityService.getHome();
  const posts = await sanityService.getPosts();

  return {
    props: {
      home,
      posts,
    },
  };
}

export default Home;
export { getStaticProps };
