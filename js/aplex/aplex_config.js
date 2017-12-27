var configs = {
    "title" : "AplexOS",
    "author" : "ZoroZeng",
    "github" : "https://github.com/AplexOS",
    "version" : "0.0.1",
    "language" : "en",
    "home_page" : {
        "show" : false,
        "Show_Time" : {
            "pages" : {
                "serial_assistant" : {
                    "index" : "001",
                    "type" : "html"
                }
            }
        }
    },
    "nav" : {
        // 列表的形式体现导航栏有多少项，模板中用来迭代下面的每一项
        "maps" : [
            {"物联网示例": "IoT_Demo"}, 
            {"关于AplexOS": "About"}
        ],
        "parts" : ["IoT_Demo", "About"],
        "IoT_Demo" : {
            "pages" : {
                /**
                 * 对于type是html类型且需要渲染的的page来说，文件夹的名称是$(index)_$(key)，例如：
                 * 001_javascript_control_svg_element = $(index)(0001)_$(key)(javascript_control_svg_element)
                 */
                "javascript_control_svg_element" : {
                    "index" : "001",
                    "type" : "html"
                }
            }
        },
        "About" : {
            "pages" : {
                "README.md" : {
                    "type" : "html",
                    "markdown" : "url",
                    "url" : "/AplexOS/README.md"
                }
            }
        }
    }
}
