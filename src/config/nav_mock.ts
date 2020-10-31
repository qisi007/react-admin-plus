
/**
* @name 导航数据mock
* @author liuguisheng
* @version 2020-09-14 14:02:48 星期一
*/

export const NAV_LIST_MOCK = [
    {
        "code": 725,
        "name": "一级菜单",
        "children": []
    },
    {
        "code": 223,
        "name": "二级菜单",
        "children": [
            {
                "name": "二级菜单-1",
                "code": 250,
                "url": "",
                "type": 1,
                "children": [{}]
            },
            {
                "name": "二级菜单-2",
                "code": 251,
                "url": "",
                "type": 1,
                "children": []
            }
        
        ]
    },
    {
        "code": 233,
        "name": "多级菜单",
        "children": [
            {
                "name": "多级菜单-1",
                "code": 260,
                "url": "",
                "type": 1,
                "children": [{
                    "name": "多级菜单-1-1",
                    "code": 2520,
                    "url": "",
                    "type": 1,
                    "children": [
                        {
                            "name": "多级菜单-1-1-1",
                            "code": 25022,
                            "url": "",
                            "type": 1,
                            "children": [{}]
                        },
                        {
                            "name": "多级菜单-2-1-1",
                            "code": 251,
                            "url": "",
                            "type": 1,
                            "children": []
                        }
                    ]
                },
                {
                    "name": "多级菜单-2-b",
                    "code": 1111,
                    "url": "",
                    "type": 1,
                    "children": []
                }]
            },
            {
                "name": "多级菜单-2",
                "code": 261,
                "url": "",
                "type": 1,
                "children": [{}]
            }
        
        ]
    }
]