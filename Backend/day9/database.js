/*

// database ko hmlog query de skte hai

// laptop opening page is file system
// which is not a database because usko hmlog query nhi de skte h

DataBase ia place where the data is stored in structured/organised manner and can handle the query
DBMS Application

Why Exceel sheeet is not a Database?
because It has limited no of rows and columns aur ispar hmlog Query nhi chla skte h
Data ko Analysis krne mein bhut time lg jayega

agar video ka size bhut bada hoga to wo RAM ke size ke hisab se dekhega wo dikkat ho jayega

hmlog ko video ka link store krna pdta h Database mein

SemiStructure Data:
MetaData --> Structure format.    
actual data --> Unstructure format

Structure format like:
Video ki length, Video ki quality kya hai,
Video Format, Creation Date(like Latest,Oldest,Popular)

ACID property:  Atomicity Consistency Isolation Durability

--> Atomicity bolta hai ki pura Bank ka transaction one step mein hona chahiiye
--> Consistenecy means before Transaction and After transaction same value should be present
--> Isolation bolta hai ki jab koi A & B kisi C ko paise bhej rhe h tb A ko B ke baare mein pata nhi hona chahiye 
Aur B ko A ke baare mein pata nhi hona chahiye means Interfere nhi hona chahiye
--> Durability bolta hai ki kisi bhi halat mein mera Database nhi delete hona chahiye

SQL database ka disadvantage ye hai ki in future jb hm apne app mein kuch changes laate hai to wo usme hme data manually add  krna padta h 
jo ki bhut jyda time le leti hai

Primary key which is unique in database from which we can be identified

Vertical scaling means usi device ki capacity ko increase kr rha hun
Vertical mein time bhi bahut kaam lagega

Horizontal scaling means aab new device mein data ko store karayenge
Horizontal mein time bhi bhut jyda lagega 

Load Balancer kaam krne ke liye Distributed databse use krte hai

-->** Sharding = Data ko multiple place pr store krana hai called Sharding
Replica create krna 

Distributed Database --> Single server 

**CAP theorem --> 
--> Consistency means teeno server mein same data dhukhna chahiye
--> Availability means jruri nhi hai ki mere passs latest information prsent ho , uss time jo 
bhi indformatioon prsent rahega wahi print ho jayega (eg:Error)
--> Partition tolerance --> ki jab hmra server toot jaye and is generally non negotiable

Yaa to CP chlega nhi to AP chlega

MongoDB is actually NoSQL Not only sequence

*/