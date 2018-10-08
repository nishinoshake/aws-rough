# ざっくりAWS
AWS の料金を日本円でざっくり計算できるサイトです。  
https://aws.noplan.cc

## 運用フロー
![運用フロー](https://user-images.githubusercontent.com/8698355/46626349-0a0af280-cb72-11e8-9248-864fe729fcf0.png)

毎朝10時にLambdaを起こして価格の更新を行い、CircleCIで静的ファイルを再生成してからデプロイする流れになっています。

## 使い方
```
# インストール
yarn

# 開発
yarn dev

# テスト
yarn test

# 静的ファイル生成
yarn generate:production
```

## 価格と為替の取得
料金の計算に必要な価格と為替の取得は、Lambdaで1日1回実行しています。  
ごちゃごちゃしそうだったので、別のリポジトリで管理しています。  
https://github.com/noplan1989/aws-rough-functions
