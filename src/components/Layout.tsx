import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'FAQ・トラブルシューティング - ZEN Study プログラミングコース',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="icon"
        href="/images/favicon.svg"
        type="image/svg+xml"
        sizes="any"
      />
    </Head>

    <header className="px-5 ">
      <div className="max-w-4xl mx-auto pt-5 pb-2 border-gray-100 border-b">
        <Link href="/">
          <div className="flex items-center">
            <div className="cursor-pointer">
              <img src={process.env.NEXT_PUBLIC_GITHUB_PAGES ? "/faq/images/zen_study.svg" : "/images/zen_study.svg"} width={150} height={46} alt="ZEN Study" />
            </div>
            <h1 className="leading-4 cursor-pointer">
              <div>プログラミングコース</div>
              <div className="font-bold text-xl">FAQ・トラブルシューティング</div>
            </h1>
          </div>
        </Link>

      </div>
    </header>

    {children}

    <footer className="">
      <hr />
      <div className="px-5 pt-3 pb-5 bg-gray-700 text-sm text-white font-bold">
        <div className="max-w-4xl mx-auto">
          <span>
            <Link href="/">
              FAQ・トラブルシューティング - ZEN Study プログラミングコース
            </Link>
          </span>
        </div>
      </div>
    </footer>
  </div >

)

export default Layout;
