#! /bin/bash

mongoimport --host mongodb --db topcoder --collection users --type json --file /mongo-seed/users.json --jsonArray
mongoimport --host mongodb --db topcoder --collection todos --type json --file /mongo-seed/todos.json --jsonArray
mongoimport --host mongodb --db topcoder --collection posts --type json --file /mongo-seed/posts.json --jsonArray
mongoimport --host mongodb --db topcoder --collection albums --type json --file /mongo-seed/albums.json --jsonArray
mongoimport --host mongodb --db topcoder --collection comments --type json --file /mongo-seed/comments.json --jsonArray
mongoimport --host mongodb --db topcoder --collection photos --type json --file /mongo-seed/photos.json --jsonArray
