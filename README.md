# react-admin-plus

## 简介

基于react、ant-ui、typescript的前端微服务框架。欢迎star。

## 在线地址

<a href="https://www.liuguisheng.vip/react-admin-plus/#/login" target="_blank">在线demo</a>

## 项目介绍

&emsp;&emsp;沉淀了几个月的时间，这款框架终于正式的和大家见面了!

&emsp;&emsp;先说一下我做这个项目的初衷，其实市面上已经有几款类似的产品了，但是总结起来就是：乱，杂。所以自己打算重新写一个类似的项目。本着简约至上的原则，加上`react`带给我的方便，开发了这个项目。

&emsp;&emsp;本人做公司的项目也快三年，期间大部分时间在写业务项目，也有一些时间在做基础服务。所以我也算是了解在实际开发中我们的需求是什么，我们真正会用到的组件会有哪些，针对这些痛点，我在这个项目中也有注意到。

&emsp;&emsp;我们在写项目的时候最怕的是什么？无非就是维护难，代码乱。针对这个，我对项目做了一些基础配置，一个页面无需手动开发，只需要添加一些配置文件即可，也符合我们设计原则的开闭原则，即对扩展开放，对修改关闭。

&emsp;&emsp;深情不及久伴，厚爱无需多言。简单介绍过后我也不废话了，直接上图介绍一下这个项目：

>登录页采用了渐变色

![image](https://img-blog.csdnimg.cn/20201209180834123.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NvZGVMaXVndWlzaGVuZw==,size_16,color_FFFFFF,t_70)

密码账号随便输入，我们就进入了主页：

>主页

![image](https://img-blog.csdnimg.cn/20201209181432812.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NvZGVMaXVndWlzaGVuZw==,size_16,color_FFFFFF,t_70)

整个项目的ui组件采用了`ant`，并没有进行主题后编译，维持原来的蓝色主题

>字体图标

![image](https://img-blog.csdnimg.cn/20201209181459658.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NvZGVMaXVndWlzaGVuZw==,size_16,color_FFFFFF,t_70)

>echarts图表

![image](https://img-blog.csdnimg.cn/20201209181545394.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NvZGVMaXVndWlzaGVuZw==,size_16,color_FFFFFF,t_70)

>表格

![image](https://img-blog.csdnimg.cn/20201209181620438.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NvZGVMaXVndWlzaGVuZw==,size_16,color_FFFFFF,t_70)


>骨架屏

![image](https://img-blog.csdnimg.cn/20201209181642877.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NvZGVMaXVndWlzaGVuZw==,size_16,color_FFFFFF,t_70)

>高德地图

![image](https://img-blog.csdnimg.cn/20201209181703446.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NvZGVMaXVndWlzaGVuZw==,size_16,color_FFFFFF,t_70)

>富文本编辑器

![image](https://img-blog.csdnimg.cn/20201209181737141.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NvZGVMaXVndWlzaGVuZw==,size_16,color_FFFFFF,t_70)

>多级菜单

![image](https://img-blog.csdnimg.cn/20201209181936803.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NvZGVMaXVndWlzaGVuZw==,size_16,color_FFFFFF,t_70)

>集成外链

![image](https://img-blog.csdnimg.cn/20201209182032115.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NvZGVMaXVndWlzaGVuZw==,size_16,color_FFFFFF,t_70)


好了，目前就这么多功能，后续会有更新，可以看项目下的`TODO.md`，里边有我对这个项目所有的规划。

>### 开源不易，给个star吧。


## 技术栈
 - [TypeScript](https://www.tslang.cn/docs/home.html)
 - [react](https://zh-hans.reactjs.org/)
 - [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
 - [ant-ui](https://ant.design/index-cn)
 - [mobx](https://mobx.js.org/README.html)
 - [sass](https://www.sass.hk/docs/)
 - [gh-pages](https://pages.github.com/)
 - [echarts](https://echarts.apache.org/zh/index.html)
 - [echarts-for-react](https://www.npmjs.com/package/echarts-for-react)
 - [copy-to-clipboard](https://www.npmjs.com/package/copy-to-clipboard)
 - [react-amap](https://elemefe.github.io/react-amap/articles/start)
 - [braft-editor](https://braft.margox.cn/)

>衷心的感谢以上所有插件的作者

<br/>

## 许可证

[MIT License](https://github.com/qisi007/react-admin-plus/blob/master/LICENSE)











