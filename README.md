# ざっくりAWS
AWS の料金を日本円でざっくり計算できるサイトです。  
https://aws.noplan.cc

## 使い方
```
# インストール
npm install

# 開発
npm run dev

# テスト
npm run test

# ビルド
npm run build
```

## 価格と為替の取得
料金の計算に必要な価格と為替の取得は、Lambdaで1日1回実行しています。  
ごちゃごちゃしそうだったので、別のリポジトリで管理しています。  
https://github.com/noplan1989/aws-rough-batch