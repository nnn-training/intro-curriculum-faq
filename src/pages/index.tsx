import Layout from '../components/Layout';
import Link from 'next/link';
import Card from '../components/Card';
import Image from 'next/image';

const TopPage = () => {
  return (
    <Layout>
      <main className="px-5 bg-blue-50 pt-5 pb-20">
        <div className="max-w-4xl mx-auto">
          <div>
            <p>
              こちらは、<strong className="text-blue-600 hover:text-blue-400 trainsition duration-300">
                <Link href="https://www.nnn.ed.nico/pages/programming/">N予備校プログラミングコース</Link></strong>
              を受講中のみなさんに向けた FAQ（よくある質問）ページです。
            </p>
            <p>
              このサイトでは、N予備校の
              <span className="text-blue-600 hover:text-blue-400 transition duration-300">
                <Link href="https://www.nnn.ed.nico/questions">フォーラム Q&A </Link>
              </span>
              をもとに、プログラミングに関するトラブルの対処法をまとめています。
            </p>
          </div>

          <div className="mb-10">
            <h1 className="text-xl font-bold mt-8 py-2 px-3 bg-yellow-600 text-white">コース別トラブルシューティング</h1>

            <div className="mt-5">
              <Card hover="true" href="/intro" flex={false}>
                <div className="">
                  <h2 className="px-4 pt-3 pb-2 text-xl hover:text-gray-500 transition duration-300 pb-1 border-b">プログラミング入門 Web アプリコース →</h2>
                  <p className="px-4 pb-4 pt-3 font-bold text-gray-500">コンソールや Docker Desktop の環境構築、Heroku へのデプロイなど、入門コースに関連するトラブル</p>
                </div>
              </Card>
            </div>

            <div className="mt-3">
              <Card hover="true" href="/webapp" flex={false}>
                <div className="">
                  <h2 className="px-4 pt-3 pb-2 text-xl hover:text-gray-500 transition duration-300 pb-1 border-b">大規模 Web アプリ →</h2>
                  <p className="px-4 pb-4 pt-3 font-bold text-gray-500">Scala 基礎コース、Scala 応用コース、並行処理プログラミングコース、実践大規模 Web アプリコースに関連するトラブル</p>
                </div>
              </Card>
            </div>

            <div className="mt-3">
              <Card hover="true" href="/spapp" flex={false}>
                <div className="">
                  <h2 className="px-4 pt-3 pb-2 text-xl hover:text-gray-500 transition duration-300 pb-1 border-b">スマートフォンアプリ →</h2>
                  <p className="px-4 pb-4 pt-3 font-bold text-gray-500">iOS コース、Android コースに関連するトラブル</p>
                </div>
              </Card>
            </div>

            <div className="mt-3">
              <Card hover="true" href="/unity" flex={false}>
                <div className="">
                  <h2 className="px-4 pt-3 pb-2 text-xl hover:text-gray-500 transition duration-300 pb-1 border-b">Unity ゲーム開発 →</h2>
                  <p className="px-4 pb-4 pt-3 font-bold text-gray-500">Unity Hub や Unity Editor, プロジェクトの設定など、Unity ゲーム開発コースに関連するトラブル</p>
                </div>
              </Card>
            </div>

            <div className="mt-3">
              <Card hover="true" href="/others" flex={false}>
                <div className="">
                  <h2 className="px-4 pt-3 pb-2 text-xl hover:text-gray-500 transition duration-300 pb-1 border-b">その他 →</h2>
                  <p className="px-4 pb-4 pt-3 font-bold text-gray-500">ニコニコ動画再現コースや機械学習コースなどに関連するトラブル、その他のトラブル</p>
                </div>
              </Card>
            </div>

          </div>
          <div>
            <h1 className="text-xl font-bold mt-5 py-2 px-3 bg-yellow-600 text-white">解決しないときは ……</h1>
            <p className="mt-3">このサイトに記載してある方法を試してもうまくいかない場合や、該当するページが存在しない場合は、
              N予備校の
              <span className="text-blue-600 hover:text-blue-400 transition duration-300">
                <Link href="https://www.nnn.ed.nico/questions">フォーラム Q&A </Link>
              </span>
              で質問してみましょう！
              </p>
            <p className="mt-3">質問するときは、</p>
            <ul className="list-disc ml-5">
              <li>取り組んでいる<strong>テキストの節</strong></li>
              <li>直面している<strong>トラブルの内容</strong></li>
              <li>トラブルやソースコードの<strong>スクリーンショットやコピー&ペースト</strong></li>
              <li>お使いの <strong>PC の環境</strong>（ OS やそのバージョン、セキュリティソフトの有無・種類）</li>
              <li>これまでに<strong>試してみたこと</strong></li>
            </ul>
            <p className="mt-3">を記載すると、解決する可能性が高まります。</p>
          </div>

          <div className="flex mt-5">
            <Link href="https://www.nnn.ed.nico/questions">
              <div className="rounded-full bg-blue-700 py-2 px-5 text-white font-bold hover:bg-blue-800 cursor-pointer transition duration-300">N予備校フォーラム Q&A へ →</div>
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap">
            <div className="mb-2.5 mr-3">
              <Card hover={true} flex={true} href="https://creativecommons.org/licenses/by-sa/4.0/deed.ja">
                <div className="p-4 sm:flex items-center px-2">
                  <div className="pl-3 pb-2 sm:pl-2 sm:pb-0">
                    <div className="pt-0.5">
                      <img src="/faq/images/cc.png" width={88} height={31} />
                    </div>
                  </div>
                  <div className="ml-3 sm:w-72 leading-5 ">
                    このサイトは、
                    <span className="text-blue-600 hover:text-blue-400 transition duration-300">クリエイティブ・コモンズ 表示 - 継承 4.0 国際 ライセンス</span>
                    の下、提供されています。
                  </div>
                </div>
              </Card>
            </div>
            <div className="mb-3">
              <Card hover={true} flex={true} href="https://github.com/nnn-training/faq">
                <div className="p-4 sm:flex items-center px-2">
                  <div className="pl-3 pb-2 sm:pl-2 sm:pb-0">
                    <div className="icon">
                      <img src="/faq/images/github.png" width={100} height={100} />
                    </div>
                  </div>
                  <div className=" ml-3 sm:w-96 leading-5 ">
                    このサイトは、どなたでも記述の追加・変更提案ができます。
                    練習問題の提出と同様に<span className="text-blue-600 hover:text-blue-400 transition duration-300"> GitHub リポジトリ</span>
                    をフォークし、プルリクエストを送ってください。
                  </div>
                </div>
              </Card>
            </div>
          </div>

        </div>
      </main>
    </Layout >
  )
}

export default TopPage;
