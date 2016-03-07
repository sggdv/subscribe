## 订阅模块 subscribe
收集邮箱地址。提供 RESTful API。

## API 列表
* 订阅
* 退订
* 查看所有订阅者

## 数据处理
* 排除重复的数据。
* 排除无效的数据。

## API 数据格式
```
// 订阅者 subscriber
{
    "email": "331599158@qq.com"
}
```

## 目录结构
/data 存放subscriber数据文件。
/test 存放测试用例。