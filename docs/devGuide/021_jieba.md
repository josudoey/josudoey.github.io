# About Jieba

Jieba (結巴) 是一個中文斷詞工具

## 設計概要

Jieba 主要提供兩種處理方式來實現斷詞處理

1. Prefix Dictionary(pfdict)
   - 透過Directed Acyclic Graph(DAG)與Dynamic programming(DP)，取得最大機率的斷詞結果
2. Hidden Markov Model(HMM)
   - 透過已預先訓練好的機率模型以及Viterbi Algorithm，計算出最大機率的斷詞結果

## Related Docs

- [Jieba Github Repo](https://github.com/fxsjy/jieba)
- [Jieba是如何做到斷詞的](https://docs.google.com/presentation/d/1Lfa1NZwquDslkf6KRm8YcQvwaHn3io7WH-voCt4D2gw/edit?usp=sharing)
- [Jieba Web斷詞工具](https://josudoey.github.io/js-jieba/)