---
sidebar_position: 1
---

# Software Design Overview

## 需求分析 requirement analysis
  - 搜集客戶或使用者的需求和期望，明確定義軟體的功能和特性。
    - 功能性需求 (functional requirement)
    - 非功能性需求 (non-functional requirement)
## 系統設計 system design
  - 系統架構設計: 高層次結構和功能，以及模組之間的關係和通訊方式
  - 模組設計: 將系統劃分為各個模組，並確定模組之間的職責和功能，以實現系統的模塊化設計。
  - 資料流設計: 設計系統中數據的流動和轉換過程，包括數據的輸入、處理和輸出。
  - 安全性設計: 考慮系統的安全需求，設計適當的安全措施和機制，以保護系統的資料和功能不受未授權訪問和攻擊
## 細節設計 detailed design
  - 演算法設計: 確定每個模組或功能的實作方式，包括適當的資料結構和演算法選擇。
  - 資料結構設計: 設計和選擇合適的資料結構來存儲和操作數據，以實現軟體功能。
  - 介面設計: 設計系統與用戶、其他系統或服務之間的界面和通訊方式，包括用戶界面設計和API設計等。
  - 錯誤處理和例外處理設計: 設計處理錯誤和處理意外情況的機制，以確保軟體的穩定性和可靠性。
  - 效能優化: 設計和優化程式碼，以確保軟體運行效率高效。
## 開發實作 implementation
  - 根據細節設計的結果，進行程式碼的撰寫和實作。
## 測試驗證 testing and validation
  - 對實作的軟體進行測試，包括單元測試、整合測試、系統測試等，以確保軟體的正確性和穩定性。
## 部署和維護 deployment and maintenance
  - 將測試通過的軟體部署到生產環境中，並定期進行維護和更新。

## Related Docs
- [需求工程](https://zh.wikipedia.org/zh-tw/%E9%9C%80%E6%B1%82%E5%B7%A5%E7%A8%8B)
- [非功能性需求](https://zh.wikipedia.org/wiki/%E9%9D%9E%E5%8A%9F%E8%83%BD%E6%80%A7%E9%9C%80%E6%B1%82)
- [軟體開發的lightning talk](https://docs.google.com/presentation/d/1gT2o6CVHNeNhAdFV_dM6KB6mV2jzGyo-VOwqRztuO7U/edit?usp=sharing)
- [What is System Design](https://www.geeksforgeeks.org/system-design/what-is-system-design-learn-system-design/)
- [Software Design Process](https://www.geeksforgeeks.org/software-engineering/software-engineering-software-design-process/)