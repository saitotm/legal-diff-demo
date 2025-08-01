import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Legal Diff Demo" },
    { name: "description", content: "日本の法的文書の差分ツールのデモ" },
  ];
};

export default function Index() {
  const formatLegalText = (text: string) => {
    const lines = text.split('\n').filter(line => line.trim() !== '');
    
    return lines.map((line, index) => {
      const trimmedLine = line.trim();
      
      // 条文番号の検出
      if (trimmedLine.match(/^第[一二三四五六七八九十百千万壱弐参四伍六七八九拾]+条\u3000/)) {
        return (
          <div key={index} className="article-section mb-4">
            <div className="article-number font-bold text-lg mb-2">
              {trimmedLine}
            </div>
          </div>
        );
      }
      
      // 項目番号（一、二、三など）の検出
      if (trimmedLine.match(/^[一二三四五六七八九十百千万壱弐参四伍六七八九拾]+\u3000/)) {
        return (
          <div key={index} className="list-item mb-2 ml-8">
            {trimmedLine}
          </div>
        );
      }
      
      // 通常の文章
      return (
        <div key={index} className="normal-text mb-2">
          {trimmedLine}
        </div>
      );
    });
  };

  const sampleText = `第一条\u3000この法律は、個人の権利利益を保護するため、個人情報の適正な取扱いに関し、基本理念及び政府による基本方針の作成その他の個人情報の保護に関する施策の基本となる事項を定め、国及び地方公共団体の責務等を明らかにするとともに、個人情報取扱事業者等が遵守すべき義務等を定めることにより、個人情報の適正かつ効果的な活用が新たな産業の創出並びに活力ある経済社会及び豊かな国民生活の実現に資することを旨として、個人情報の保護を図ることを目的とする。

第二条\u3000この法律において「個人情報」とは、生存する個人に関する情報であって、次の各号のいずれかに該当するものをいう。
一\u3000当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含む。）
二\u3000個人識別符号が含まれるもの

第三条\u3000個人情報は、個人の人格尊重の理念の下に慎重に取り扱われるべきものであることにかんがみ、その適正な取扱いが図られなければならない。`;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          法的文書縦書きレイアウト デモ
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="vertical-document-container">
            <div className="vertical-text">
              {formatLegalText(sampleText)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}