JWT token ko hm kabhi bhi unlimited day tak  expire or valid  nhi kr skte h,  nhi to jab ek time hmra data choori ho gya tb hm kuch bhi nhi kr skte h

JWT token === Access Token

Login: JWT Token : expiry-Date:Not Expire
Expire date :Pakka mention kro 

Refresh token 7 din mein expire ho jata hai then uske baad wo apne aap hi new Refresh token ko generate kr deta h

Refresh token se hm baar baar Access token ko generate kr skte h aur refresh token khud ki bhi

Refresh Token:Access token create bhi ho jaye Invalidate wali property bhi chahiye hogi

Password Change--> refresh token (invalid kr skte). Access token(Not possible with this)

Refresh Token: Random string generate karega
Random string ko phir hmlog Hash code mein convert krke store kra denge Database mein

