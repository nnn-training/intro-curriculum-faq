import Layout from './Layout';
import Card from './Card';
import Link from 'next/link';

type PostData = {
  date: string;
  title: string;
  path: string;
}
type Props = {
  course: string;
  posts: PostData[];
}

const IndexLayout = ({ course, posts }: Props) => {
  let courseName = course;
  switch (course) {
    case 'intro':
      courseName = 'プログラミング入門 Web アプリコース'
      break;
    case 'webapp':
      courseName = '大規模 Web アプリ';
      break;
    case 'spapp':
      courseName = 'スマートフォンアプリ';
      break;
    case 'unity':
      courseName = 'Unity ゲーム開発';
      break;
    case 'others':
      courseName = 'その他';
      break;
  }

  const navItems = posts.map(post => (
    <div className="mb-2" key={post.path}>
      <Card href={post.path} hover={true} flex={false} >
        <div className="p-4">
          {post.title} →
        </div>
      </Card>
    </div>
  ))

  return <>
    <Layout>
      <main className="p-5 bg-blue-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-1">
          <div>
            <Link href="/">
              <span className="cursor-pointer text-blue-600 hover:text-blue-400 transition duration-300">
                FAQ・トラブルシューティング
              </span>
            </Link>
            &nbsp;/
            {courseName}
          </div>
          <div className="mt-6">
            <h1 className="font-bold text-xl pb-1 border-b-2">
              {courseName}
            </h1>
          </div>

          <div className="mt-5">
            {navItems}
          </div>

        </div>
      </main>
    </Layout>
  </>
};

export default IndexLayout;
