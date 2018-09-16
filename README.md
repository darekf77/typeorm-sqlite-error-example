

# typeorm 2.7

To reproduce bug run
```
npm run start
```

you should see something like this:
```
BEFORE ENTITY INSERTED:  Post {}
AFTER ENTITY INSERTED:  Post { title: null, id: 1 }
AFTER ENTITY LOADED:  Post { id: 1, title: null }
BEFORE ENTITY UPDATED:  undefined
AFTER ENTITY UPDATED:  undefined
```

Inside subscribers UPDATE does not work.