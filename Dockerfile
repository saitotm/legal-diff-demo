# ビルドステージ
FROM node:18-alpine AS builder

# 作業ディレクトリを設定
WORKDIR /app

# パッケージファイルをコピー
COPY package*.json ./

# 依存関係をインストール（ビルドに必要なdevDependenciesも含む）
RUN npm ci

# アプリケーションのソースコードをコピー
COPY . .

# アプリケーションをビルド
RUN npm run build

# 本番ステージ
FROM node:18-alpine AS production

# 作業ディレクトリを設定
WORKDIR /app

# パッケージファイルをコピー
COPY package*.json ./

# 本番用依存関係のみインストール
RUN npm ci --only=production

# ビルド成果物をコピー
COPY --from=builder /app/build ./build

# ポート3000を公開
EXPOSE 3000

# アプリケーションを起動
CMD ["npm", "run", "preview"]