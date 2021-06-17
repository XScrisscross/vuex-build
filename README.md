### 1. 前言

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;刚开始时编写代码的时候，只会功能、交互、页面，但是始终没有自己的一套构建代码的，或者说是如何去处理请求、工具、组件、视图数据等等一系列问题的方式，书写方式也仅仅是将一些认为可复用的抽取成组件，将页面的逻辑分成初始化、重置、请求数据、渲染视图...等去写。</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是，这种方式所写的逻辑明确吗？我想并不是的，仅仅只是，一个交互一个逻辑，在增添一些函数抽取而已，并不是从整体上将页面进行构造，而是以用户操作去写代码，这种是不具备可维护性的，于是在项目中有了一下的尝试。</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;vue 用起来和 react 不同，react 更有一种组件化，函数式的编程体验，而 vue 更像是在写一个有一个的拼起来的视图，但是并不影响整体构建思路，那就是以视图与数据分离，指令驱动试图，现在以 vue 为例，实现工程化、范式化。</br>

### 2. 数据组件分离-范式化-封装-挂载

**1、想象一下这个场景，在写代码时，跟后台已经对接完成，哪些接口公用，哪些不可复用，于是在你写完之后，或者迭代，以前不复用的现在复用了，难道又要在页面请求一边数据，复制粘贴渲染逻辑？**
1）将请、数据、数据处理逻辑、视图全部分开，核心的关键在于 vuex，那么自己的编写就可以分为两步</br>
2）我可以将数据层（state）作为一个分界点，第一步从数据层（state）往视图层编写以自身为主，不以后台数据为标准</br>
3）第二步，从数据层（state）往接口层面进行对接，唯一要处理的是后台数据结构的变动，统一加一个 servers 层来对数据进行处理，变成 state 里面想要的数据结构</br>
4）后续的编写不再是一个交互一个交互的来写逻辑，而是以一个个指令来驱动视图更新</br>

**2、apis/config/utils/component...封装-挂载**
1） 这个就很简单了，api 可以进行统一封装，config/utils 也可以封装，还可以挂载到 window，在者加上 `require.context()`，可以实现动态加载组件，动态挂载</br>
2） 至于挂载到全局还是作为局部引入，这个东西一看就知道怎样处理是比较合适的</br>

### 3.视图-数据-接口映射-更新方式-缓存-动画...

**1、关于从前到后的处理各个阶段时候，会遇到各种各样的问题，先做一个整体上面的概括，后续做部分关键点的单独考量**</br>
1）关于组件视图:目前的代码构建思路，根据业务区分模块，根据模块规定接口及 state 分区，以视图为单位处理 action，一个动作一个视图，视图再分解为组件，增加复用性</br>
2）关于数据处理:数据方面，集中空校验，以及正常数据处理，抽取 server 层，state 只存存数据视图，中间逻辑变量存组件或者页面</br>
3）关于数据更新:filters 校验，props 直传都是可以直接使用的，state-computed 直接映射，涉及逻辑处理的 computed 以及 watch 需要权衡处理</br>

**2、由于接口很多都是与前端所要展示视图不可能完全一致，这个是前端需要解决的，目前这里遇到了两个主要的问题，一个几口对应多个视图和一个视图对应多个接口的问题**</br>
1）关于一对一，一个 action 指令（`mutation_types`）对应一个视图，那么只需要 `action` -> `mutations` -> `server` -> `state(state1，state2，state3)`</br>
2）关于一对多，一个接口多个视图需要，那么应该需要对不同条件接口视图做标记，最后分割成展现的视图，`action(api(view))` -> `mutations(view)` -> `server(case view)` -> `state(state1，state2，state3)`</br>
3）关于多对一，`action(api1+api2+api3+api4)` -> `mutations()` -> `server()` -> `state(state1，state2，state3)`</br>
4）多对多，哪有这样的其实就是多个多对一或多个一对多...</br>
5）注意，这些其实都还好处理，只不过为了 vuex 的范式化处理</br>

**3、接口耦合，但是，前置接口并不是单单作为后置接口的条件（不是一个过渡的接口），也是作为视图层数据，那么是应该写成一个 action，还是多个 action 组合，还是根据两套逻辑写两套不同的 action？**
1）如果写成一个 action，那么复用时内部必然要加变量进行区分，变得不再单纯，如果分单 action 和组合 action，那么组合条件多的时候 action 就极其的多了</br>
2）如何以最少的 action，来驱动视图，批量 dispatch 能够异步吗？可以使用观察者来监控变量，一旦发生改变就会承前启后的驱动视图，watch 需要在页面里面配合，或者自己写一个观察者</br>
3）使用 watch 更新，那么后续接口的调用要围绕 watch 来写，不能在分开逻辑来写初始化时的情况和再次调用时候的情况，主要逻辑在 watch 里面进行区分控制后续视图</br>
4）如果前置接口影响的接口不多，那么是否应该单斜 action 呢？可以考量，但是还是 watch，虽然说 watch 耗性能，但是但关键出使用是可以的，在试图更新层要尽量 computed</br>

**4、关于数据复用以及视图复用的处理方式，想象一下，多个视图公用一个数据情况，是创建多个视图让效果更加丝滑，还是..？多个数据处理是在组件内还是外？**
1）关键点在于视图效果以及功能上是否区分视图，而代码则是在与是以创建销毁的形式还是显示隐藏(或者说是动画)的形式</br>
2）但实质上考虑动画及扩展，数据还是以整体传输，视图也要做以区分，效果以变量控制，所以原则上还是以视图数据的一对一为主，在 server 处理较好</br>

**5、考虑一下这个场景，可能大多数数据在 server 层处理比较好，但是也有在组件或者视图层面处理更好的情况，这个时候的视图响应式更新行，就必须要涉及到 watch 或者 computed 来处理**
1）watch 的编写逻辑是在数据发生变化时触发视图更新（以动作触发视图），而 computed 应该是以返回值作视图，以监听依赖值变化（以视图来规定依赖）
2）总之数据还是以直接使用为基准，减少以动作触发视图更新的操作，多一些数据依赖更新就能更好使用 computed，少一些 watch
3）范式化操作，那么常用方法除了 `init()`，还应该增加 `update()`

**6、关于视图的缓存以及动画效果**
1）从视图上的缓存，就是 keep-alive，从数据上的缓存，不用考虑了，数据视图是存在 state 里面的，直接解决
2）动画的话，不再以创建销毁的新式来触发，应该像模态框状态值一样，触发以变量监控触发，这样节省性能

**7、关于出参重置，想象一下这个场景，初始视图分割的比较多，或者接口参数比较多，每次重置都会写半天，一个动作触发多个重置，那么...像空值校验，参数就要写很多**
1）方案一：备份初始化数据状态，封装函数，只需要调用方法即可

**8、根据接口类型来使用 store**
1）如果是纯数据展示接口，那么可以使用 store，中间逻辑接口，就不要使用 store 直接在页面处理做中转
2）如果出现了急需要做数据展示，并且持久保留，且还作为下一个接口的依赖，这个时候，不能一致依赖观察者去对接逻辑
3）不依赖 computed，watch 去驱动以来产生的逻辑，而是页面中转，在存储到数据中心（store），既作展示，也做交互，也做依赖

**9、关于依赖接口的 loading**
1）再次确认，既作展示，也做交互，也做依赖的接口，的确存储在一直可以保存的 store 里面比较好
2）关于有依赖的视图更新，组件在初始化是没办法及时获取到依赖，只执行初始化操作，不执行依赖数据更新操作
3）范式化函数：initComponent()/updateComponentBy--()/resetInfo()/resetStoreInfo()/resetData()/resetStoreData()/--Handle()/render--()

**10、全范式化构建表**

| 模块                         | 构建                       | 模块化        | 范式化函数                                                             |
| ---------------------------- | -------------------------- | ------------- | ---------------------------------------------------------------------- |
| apis                         | 模块化，封装，挂载`window` | index-module- | is--():判断 get--():获取 post--():提交 delete--():删除 update--():更新 |
| assets/font                  | 分类                       | index-        | --                                                                     |
| assets/img                   | 分类                       | index-        | --                                                                     |
| assets/style                 | 分类，全局引入             | index-        | index-common:公共 index-mixin:混入 index-special:特殊                  |
| assets/style/index-common    | 分类                       | --            | base:常用`class` main:主色调 reset:`ui`重置                            |
| config                       | 分类，封装，挂载`window`   | index-        | --                                                                     |
| config/index-Relation        | 分类                       | --            | --                                                                     |
| cpts                         | 分类，封装，挂载全局       | index-        | --                                                                     |
| router                       | 模块化，封装               | index-module- | --                                                                     |
| store                        | 模块化，封装               | index-module- | key:key view:state action:action,mutation aop:server                   |
| store/index-module-common/   | 封装                       | --            | key:key view:state action:action,mutation aop:server                   |
| store/index-module-section-/ | 封装                       | --            | key:key view:state action:action,mutation aop:server                   |
| store/index-module-/key      | --                         | --            | Axx_Bxx_Data:数据 Axx_Bxx_Info:参数                                    |
| store/index-module-/action   | --                         | --            | Axx_Bxx_Data:数据                                                      |
| store/index-module-/mutation | --                         | --            | Axx_Bxx_Data:数据 Axx_Bxx_Info:参数                                    |
| store/index-module-/server   | --                         | --            | Axx_Bxx_Data:server                                                    |
| store/index-module-/state    | --                         | --            | -Info:params -Data:view -Value:view -Status:status                     |
| utils                        | 分类，封装，挂载`window`   | index-module- | --                                                                     |
| views                        | 模块化                     | index-module- | --                                                                     |


