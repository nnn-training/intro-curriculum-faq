import IndexLayout from '../../components/IndexLayout';
import { getPostsData } from '../../lib/api';

const course = "unity";

type PostData = {
  date: string;
  title: string;
  path: string;
}

type Props = {
  posts: PostData[]
}

const IndexPage = ({ posts }: Props) => {
  return <>
    <IndexLayout course={course} posts={posts} />
  </>
};

export default IndexPage;

export const getStaticProps = () => {
  return {
    props: {
      posts: getPostsData(course)
    }
  };
}
