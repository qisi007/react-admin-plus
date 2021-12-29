
/**
* @name 导航数据mock
* @author liuguisheng
* @version 2020-09-14 14:02:48 星期一
*/

export const NAV_LIST_MOCK = [
    {
        "key": "725",
        "name": "一级菜单"
    },
    {
        "key": "22345",
        "name": "二级菜单",
        "children": [
            {
                "name": "二级菜单-1",
                "key": "25540",
                "url": "",
                "type": 1,
            },
            {
                "name": "二级菜单-2",
                "key": "2451",
                "url": "",
                "type": 1,
            }
        
        ]
    },
    {
        "key": "233",
        "name": "多级菜单",
        "children": [
            {
                "name": "多级菜单-1",
                "key": "26054",
                "url": "",
                "type": 1,
                "children": [{
                    "name": "多级菜单-1-1",
                    "key": "252320",
                    "url": "",
                    "type": 1,
                    "children": [
                        {
                            "name": "多级菜单-1-1-1",
                            "key": "2523022",
                            "url": "",
                            "type": 1,
                            "children": [{}]
                        },
                        {
                            "name": "多级菜单-2-1-1",
                            "key": "25122",
                            "url": "",
                            "type": 1,
                        }
                    ]
                },
                {
                    "name": "多级菜单-2-b",
                    "key": "1112221",
                    "url": "",
                    "type": 1,
                }]
            },
            {
                "name": "多级菜单-2",
                "key": "261222",
                "url": "",
                "type": 1,
            }
        
        ]
    },
    {
        "key": "723445",
        "name": "外链集成",
        "path": "https://www.liuguisheng.vip",
    },
]