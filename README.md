### 介绍

- 主要是在对接过程,针对数据结构不明确的场景以及接口/数据管理范式化的一种思路,中心-围绕state的范式化
1. 我们可以将页面分为几个专有的职责(数据填充)-(数据处理)-(数据请求)等,在此基础可以将一个页面切片化,有了这个主干我们可以切分的更细致
2. 数据的请求,api可以分模块,为了快速开发,一是将接口分模块范式化命名,二是挂载到window全局,三是关联vuex-mutations_type(原则一个接口对应一个action对应一个state数据)
3. 数据的处理,这里类似与切面编程,或者说是过滤器,在此处可对数据结构不明的数据做任何更改调整,再映射到state中
4. 参数管理,为了更加'范式化',请求参数也放入state中管理,commit和直接dispatch都可以进行更改
5. 关于依赖/联动的接口,可以单独提供额外的action和mutation来调用现有多个action相互协调
6. 数据填充,全部交给vuex的响应式交互自动填充数据

### 解决的问题

- 多页面共接口,多人员共同开发时的接口管理(接口管理,次要问题),接口可以统一管理,代码范式化也便于维护,处理数据逻辑放在server中,将处理数据的逻辑和页面交互逻辑分开了
- 会出这样的场景:前台ui已经给出,但是跟后台数据结构又不能确定(主要问题,后台跟第三方供应商对接,要么前台对数据操作,要么中间层后台),这个时候即使数据结构不一致,也可以统一管理

