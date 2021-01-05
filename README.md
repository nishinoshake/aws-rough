# ざっくりAWS 

[<img align="right" src="https://user-images.githubusercontent.com/8698355/47230506-5a514280-d405-11e8-90e9-01c1f8cc19c5.gif" alt="ざっくりAWS" width="400">](https://aws-rough.cc)

AWS の料金を日本円でざっくり計算できるサイトです。  

入力の手間を減らすために、料金への影響が少ない項目は削っているため、手軽に概算を算出できます。

正確な料金は必要ないから適当な入力でざっくり知りたい、みたいなときに便利かもしれません。

https://aws-rough.cc

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/nishinoshake/aws-rough/blob/master/LICENSE) [![CircleCI](https://circleci.com/gh/nishinoshake/aws-rough/tree/master.svg?style=svg)](https://circleci.com/gh/nishinoshake/aws-rough/tree/master)
 
## 使い方
```
# インストール
npm install

# 開発サーバーの起動
npm run dev

# ユニットテスト
npm run test:unit

# E2Eテスト向けに静的ファイルを生成
npm run generate:test

# E2Eテスト
npm run test:e2e

# テストをまとめて
npm run test

# 本番向けに静的ファイルを生成
# E2Eテストに使用した要素のdata-test属性を削除しておく
npm run generate:production
```

## データ更新の流れ
<img src="https://user-images.githubusercontent.com/8698355/47230492-4e658080-d405-11e8-9b63-619cabb11d3b.png" alt="運用フロー" width="600">

計算に使用する為替やAWSの料金は、Lambdaで毎朝に取得しています。  
10am(JST)にLambdaを起こして価格の更新を行い、CircleCIで静的ファイルを生成してからデプロイする流れです。

価格を取得するLambdaのコードは別のリポジトリで管理しています。  
https://github.com/nishinoshake/aws-rough-functions

## ご意見・ご要望
追加して欲しいサービスや機能、致命的なバグなどがありましたら、issueにあげていただくか、なんらかの方法でご連絡をお願いいたします。サイト名が「ざっくりAWS」なので、ざっくりじゃなくなってしまう機能追加は難しいですが、できる限り対応いたします。
