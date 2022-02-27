import SanityService from '../../service/SanityService';
import styles from '../../styles/Home.module.css';
import Header from '../../components/Header';
import BlogMainPost from '../../components/BlogMainPost';
import Footer from '../../components/Footer';
import BlogPostDetail from '../../components/BlogPostDetail';

function PostAll({ slug, post }) {
  return (
    <div className={styles.container}>
      <Header />
      <BlogMainPost {...post} />
      <BlogPostDetail blocks={post.content} />
      <Footer />
    </div>
  );
}

async function getStaticPaths() {
  const sanityService = new SanityService();
  const posts = await sanityService.getPosts();

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

async function getStaticProps({ params }) {
  const { slug } = params;

  const sanityService = new SanityService();
  const posts = await sanityService.getPosts();

  const post = posts.find((p) => {
    return p.slug === slug;
  });

  return {
    props: {
      slug,
      post,
    },
  };
}

export default PostAll;
export { getStaticPaths, getStaticProps };
