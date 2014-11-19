express-webapp-assets-seed
==========================

>for more information, see [express-webapp-assets](http://github.com/iolo/express-webapp-assets)

getting started
---------------

### from this **seed** project

```
$ git clone --depth=1 https://github.com/iolo/express-webapp-assets-seed.git <your-project-name>
$ cd <your-project-name>
$ npm install
$ bower install
```

### from the scratch

```
$ npm init
...
$ bower init
...
$ npm express-webapp-assets --save
$ bower install jquery bootstrap --save
$ npm install angular angular-route --save
$ mkdir public
```

> NOTE: to demonstrate `includes` feature, install `jquery` and `bootstrap` via `bower`, `angular` and `angular-route` via `npm`.

directory structure
-------------------

* `_assets.json`
    - express-webapp-assets configurations(configure with `--config` CLI option)
* `public`
    - source directory(configure with `src` property in config or `--src` CLI option)
* `build/public`
    - output directory(configure with `dst` property in config or `--dst` CLI option)
* `bower_components`, `node_modules`, ...
    - include directories(configure with `includes` property in config or `--include` CLI option)

development phase
-----------------

use `--server`(or `-S`) CLI option to start development http server.

optionally, use `--open`(or `-o`) CLI option to open browser after http server started.

```
$ ./node_modules/.bin/express-webapp-assets -S -o &
```

with this seed project:
```
$ npm run server -- -o
```

deployment phase
----------------

use `--generator`(or `-G`) CLI option to generate static files for all assets using procprocessors.

optionally, use `--env`(or `-e`) CLI options to specify build envionment(equivalant to `NODE_ENV`).

```
$ ./node_modules/.bin/express-webapp-assets -G -e=production
$ ... deploy(upload, copy, rsync or else...) `build/public` directory
```

with this seed project:
```
$ npm run generator -- -e=production
```

*may the **SOURCE** be with you...*
