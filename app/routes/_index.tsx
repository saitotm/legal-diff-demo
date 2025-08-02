import type { MetaFunction } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'Legal Diff Demo' },
    { name: 'description', content: '日本の法的文書の差分ツールのデモ' },
  ];
};

export default function Index() {
  // 上部に表示する法律文（原文）
  const originalText = {
    article1: '第百五条\u3000〔略〕',
    article2:
      '２\u3000前項の規定により諮問をした行政機関の長等は、次に掲げる者に対し、諮問をした旨を通知しなければならない。',
    item1:
      '一\u3000審査請求人及び参加人（行政不服審査法第十三条第四項に規定する参加人をいう。以下この項及び第百七条第二号において同じ。）',
    item2:
      '二\u3000開示請求者、訂正請求者又は利用停止請求者（これらの者が審査請求人又は参加人である場合を除く。）',
    item3:
      '三\u3000当該審査請求に係る保有個人情報の開示について反対意見書を提出した第三者（当該第三者が審査請求人又は参加人である場合を除く。）',
  };

  // 下部に表示する法律文（修正版）
  const modifiedText = {
    article1: '第百五条\u3000〔略〕',
    article2:
      '２\u3000前項の規定により諮問をした行政機関の長等は、次に掲げる者に対し、諮問をした旨を通知しなければならない。',
    item1:
      '一\u3000審査請求人及び参加人（行政不服審査法第十三条第四項に規定する参加人をいう。以下この項及び第百七条第一項第二号において同じ。）',
    item2:
      '二\u3000開示請求者、訂正請求者又は利用停止請求者（これらの者が審査請求人又は参加人である場合を除く。）',
    item3:
      '三\u3000当該審査請求に係る保有個人情報の開示について反対意見書を提出した第三者（当該第三者が審査請求人又は参加人である場合を除く。）',
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          法的文書縦書きレイアウト デモ
        </h1>

        <div className="legal-document-layout">
          {/* 上部セクション - 原文 */}
          <div className="horizontal-section">
            <div className="vertical-text-container">
              <div className="vertical-column">
                <div className="article-content">{originalText.article1}</div>
              </div>
              <div className="vertical-column">
                <div className="article-content">{originalText.article2}</div>
                <div className="list-item-vertical">{originalText.item1}</div>
                <div className="list-item-vertical">{originalText.item2}</div>
                <div className="list-item-vertical">{originalText.item3}</div>
              </div>
            </div>
          </div>

          {/* 下部セクション - 修正版 */}
          <div className="horizontal-section">
            <div className="vertical-text-container">
              <div className="vertical-column">
                <div className="article-content">{modifiedText.article1}</div>
              </div>
              <div className="vertical-column">
                <div className="article-content">{modifiedText.article2}</div>
                <div className="list-item-vertical">{modifiedText.item1}</div>
                <div className="list-item-vertical">{modifiedText.item2}</div>
                <div className="list-item-vertical">{modifiedText.item3}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
