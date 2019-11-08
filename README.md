# Pet Per Shop Homework

## 簡答題
- 何謂 Authentication? 何謂 Authorization?
    >Authentication(驗證)：確認使用者是否真的是其所宣稱的那個人的過程。
    >Authorization (授權)：根據使用者的角色來授予應有的權限。
    >搭配 HTTP 狀態碼，未通過驗證時，回傳 401 Unauthorized，通過驗證但未授權時，回傳 403 Forbidden
- Isolation Level 有幾種？個別可以避免那些問題？
    1. Serializable
    >最高隔離等級，使用 WHERE 時可以鎖住查詢範圍，主要避免 phantom read，即兩個完全相同的查詢語句執行得到不同的結果。
    3. Repeatable reads
    >對讀取與寫入的資料上鎖，但不會有範圍鎖，確保兩次同個查詢結果一致。
    5. Read committed
    >同樣對讀取與寫入的資料上鎖，但讀取鎖會在下一個 SELECT 動作時解開，可確保每次讀取時，資料都是 committed 狀態。
    7. Read uncommitted
    >允許查詢可以看見尚未 committed 的狀態。
- 何謂 Cross-Site Scripting？如何避免？
    >又稱為 XSS，是一種將惡意程式碼注入到其他人網頁使其執行並達到攻擊的手段，比如盜取 cookie 來獲得機密資訊，寫網頁時須特別注意過濾特殊字元才可避免。
- 何謂 SQL Injection？如何避免？
    >輸入的字串中帶有 SQL 指令使資料庫執行，可藉此竊取資料或者被進一步攻擊，例如資料庫 root 帳號密碼被修改、植入惡意網址；可藉由網頁前端過濾特殊字元以及後端參數化查詢 (Parameterized Query) 來避免。
- 何謂耦合？何謂去耦合？
    >耦合 (coupling) 意思是一段程式碼或模組之間互相依賴的程度，OOP 即是一種高耦合的寫法，耦合程度越低越容易單元測試，AWS Lambda 與 Google Cloud Function 即是去耦合的例子。

##  實作題 (未完成)

- endpoints:
  POST - https://mydzogtm77.execute-api.ap-northeast-1.amazonaws.com/dev/todos
  GET - https://mydzogtm77.execute-api.ap-northeast-1.amazonaws.com/dev/todos
  DELETE - https://mydzogtm77.execute-api.ap-northeast-1.amazonaws.com/dev/todos
  GET - https://mydzogtm77.execute-api.ap-northeast-1.amazonaws.com/dev/todos/{id}
  POST - https://mydzogtm77.execute-api.ap-northeast-1.amazonaws.com/dev/first-endpoint