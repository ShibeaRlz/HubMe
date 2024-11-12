# HubMe
<img width="960" alt="スクリーンショット 2024-10-27 145439" src="https://github.com/user-attachments/assets/f071148a-20f2-4daa-9c54-6f1d189dc970">

JPHACKS2024 大阪 企業賞
## 製品URL
https://hubme.click
デプロイしていますが開発途中のため表示されていない部分や動かない箇所等あります。


## 製品概要
### 背景(製品開発のきっかけ、課題等）
<img width="960" alt="スクリーンショット 2024-10-27 130225" src="https://github.com/user-attachments/assets/249159e9-5665-4ad2-b18f-40fd8da69ee0">

大学入学時、多くの学生が『自分に合った』サークルを探します。しかし、理想のサークルが見つからず妥協したり、あきらめて無所属になったりする学生が少なくありません。その中には、各サークルが求める才能や適性を持った人材が数多く埋もれているのが現状です。
特に新入生は、数百にも及ぶサークルの中から限られた時間で選択を迫られます。入学直後の慌ただしい時期に、自分の興味や能力を十分に見極めることは容易ではありません。さらに、サークルの見学会や説明会で得られる情報は表面的なものに留まりがちで、実際の活動内容や雰囲気を把握するのは困難です。
一方で、サークル側も限られた接点の中で、入部希望者の適性や意欲を正確に判断することは難しい状況です。結果として、潜在的な才能を持つ学生を見逃してしまったり、ミスマッチによる中途退部者が続出したりする事態も起きています。このような状況を改善するためには、従来の新歓活動の在り方を見直し、学生とサークルの双方にとってより効果的なマッチングの仕組みを構築しなければなりません。


### 製品説明（具体的な製品の説明）
HubMeは、大学生とサークルを結ぶ革新的なマッチングプラットフォームです。
従来の「学生がサークルを探す」一方通行の方法を超え、サークル側から直接スカウトできるダイナミックな仕組みを実現しました。
学生は興味や特技をタグで登録し、サークルは求める人材像や活動内容をタグで表現します。これにより、サークルは必要な人材を
効率的に見つけ出し、直接スカウトを送信できます。また、部員募集時には、関連するタグを持つすべての学生に一括でスカウトを
配信することが可能です。学生は自己紹介とタグを設定するだけで、興味に合ったサークルからスカウトを受け取り、アプリ内の
メッセージング機能を使って直接やり取りができます。HubMeを通じて、学生とサークルの双方にとって、より効果的で満足度の
高い出会いが実現します。新しいつながりを築くための最適なプラットフォームです。


### 特長
#### 1. 特長1 サークルから招待が届く！
HubMeでは、学生が待っているだけでサークルから直接招待が届きます。興味や特技をタグとして登録することで、サークルはあなたのプロフィールを見つけやすくなり、積極的にスカウトを送ることができます。これにより、学生は自分に合ったサークルと効率的に出会うことができます。

#### 2. 特長2 タグで興味のあるユーザに一斉送信！
サークルは求める人材像や活動内容をタグで表現することで、特定の興味やスキルを持つ学生に一斉にスカウトを送信できます。これにより、サークルは自分たちのニーズに合った学生を効率的に探し出し、効果的にアプローチすることが可能です。

#### 3. 特長3　学生とサークルの直接メッセージ機能
HubMeには、プラットフォーム内で直接やり取りができるメッセージ機能が備わっています。これにより、スカウトを受け取った学生は興味を持ったサークルとすぐにコミュニケーションを開始できます。簡単に質問したり、詳細を確認したりすることで、双方にとってスムーズな関係構築が可能です。


### 解決出来ること
* 大学への新入生をはじめとしたユーザが「自分に合ったサークルを見つけられない」という後悔をさせない
* サークル運営者が「自サークルに興味を持っているユーザとコネクションが取れない」というやるせなさを感じさせない

### 今後の展望
* 完成させること（現在は開発途中ですが、将来的に正式リリースして製品化することを考えているためAWSCloudFront上にデプロイ&ホスティングしています。）
* MR空間に拡充して、現実世界に加えて仮想世界ですれ違う人のプロフィールを表示して新入生歓迎会でのサークルと学生とのマッチングを促進するプラットフォームを作成する。

### 注力したこと（こだわり等）
* スカウトする際に確実にサークルが学生をスカウトしたことを伝えるためにメール送信機能を実装した。
* スカウトを承諾した際に学生とサークルが直接リアルタイムでチャットできるようにWebSocket通信で機能を実装した。
* フロントエンドはAWSCloudFrontで、バックエンドはAWSECSFargate上にデプロイした。また、Route53に独自ドメイン(https://hubme.click)
を登録し、製品としての完成を目指した。
* https通信（ACMでSSL/TLS証明書を発行）をしてセキュアな通信を行うようにした。
* 将来的な継続開発を見据えて、フロントエンドのディレクトリ構造を意識して開発したり、バックエンドは層ごとの依存関係を意識するためDDD（ドメイン駆動設計）とクリーンアーキテクチャで開発した。また、実装の画面がぶれないようFigmaで先にデザインして、製品としてのリリースを意識した開発をした。

## 開発技術
### 活用した技術
#### API・データ
* Go
* MySql

#### フレームワーク・ライブラリ・モジュール
* React
* typescript
* Next.js
* yarn
* Jotai
* zod
* tailwind
* shadcn
* lucide icon
* Axios

#### インフラ構成
<img width="1363" alt="スクリーンショット 2024-11-12 17 30 11" src="https://github.com/user-attachments/assets/b005997f-5104-482b-ab7a-595865577c06">
* デプロイ先（AWSECSFargate)
* ホスティング先(AWSCloudFront/S3)
* ドメイン取得（お名前.com）

#### デバイス
* Webブラウザ上で動くのでPCやスマホなど各種端末
