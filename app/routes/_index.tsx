import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Legal Diff Demo" },
    { name: "description", content: "日本の法的文書の差分ツールのデモ" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Legal Diff Demo
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          日本の法的文書の差分ツールのデモです
        </p>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-700">
            Remix SPA + TypeScript + Tailwind CSS の環境構築が完了しました！
          </p>
        </div>
      </div>
    </div>
  );
}