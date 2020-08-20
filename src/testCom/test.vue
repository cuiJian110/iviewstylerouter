<script>
export default {
    props: {
        data: {
            default: () => [
                {id: 1, name: "name_1"},
                {id: 2, name: "name_2"}
            ],
        },
        mmm: {
            default: "fu ji mmm"
        }
    },
    data() {
        return {
            msg: "myMSG",
            rootData: [
                {name: "name1", children: [
                    {name: "name1_1",children: [
                        {name: "name1_1_1",children: []},
                        {name: "name1_1_2",children: []}
                    ]},
                    {name: "name1_2",children: []}
                ]},
                {name: "name2", children: []},
                {name: "name3", children: [
                    {name: "name3_1", children: []},
                ]}
            ]
        }
    },
    render(h) {
        function digui(dataList, arr) {
            dataList.forEach(item => {
                if(item.children && item.children.length !== 0) {
                    let nodeChildList = [h("div",{},item.name)]
                    digui(item.children, nodeChildList)
                    arr.push(h("div",{},nodeChildList))
                } else {
                    arr.push(h("div",{},item.name))
                } 
            })
            return h("div",{},arr)
        }
        return digui(this.rootData, [])

        // let nodeList = [];
        // this.rootData.forEach(item => {
        //     if(item.children && item.children.length !== 0) {
        //         let nodeChildList = [h("div",{},item.name)];
        //         item.children.forEach(item_ => {
        //             nodeChildList.push(h("div",{},item_.name))
        //         })
        //         nodeList.push(h("div",{},nodeChildList))
        //     } else {
        //         nodeList.push(h("div",{},item.name))
        //     }
            
        // })
        // return h("div",{},nodeList)

        // function iterate (arr) {
        //     return arr.map((item, index) => {
        //         // console.log(item.name)
        //         let children = []
        //         if (item.children && item.children.length) {
        //             children = iterate(item.children)
        //         }
        //         console.log('children', children)
        //         return h('div', {
        //             // key: item.code,
        //             domProps: {
        //                 innerText: item.name
        //             }
        //         }, children)
        //     })
        // }
        // let children = iterate(this.rootData)
        // let el = h('div', {}, children)
        // return el
        // const deepTraversalToVNode = (node) => {
        //     let vNodeChildren = [];
        //     if (node.children && node.children.length !== 0) {
        //         const children = node.children;
        //         for (let i = 0; i < children.length; i++) {
        //             vNodeChildren.push(
        //                 h("div",{}, children[i].name)
        //             )
        //         }
        //     }
        //     return h("div", {}, vNodeChildren)
        // }
        // let tpl = deepTraversalToVNode(this.rootData)
        // return tpl
        // let eleList = [];
        // function renderList(arr) {
        //     arr.forEach(item => {
        //         eleList.push(renderObj(item))
        //     })
        // }
        // function renderObj(obj) {
        //     if(obj.children && obj.children.length !== 0) {
        //         return renderList(obj.children)
        //     }
        //     return ce("div",{},obj.name)
        // }
        // return ce("div", {
        //     class: {
        //         aaa: true,
        //         bbb: false,
        //     },
        //     on: {

        //     }
        // },renderList(this.rootData))
    },
}
</script>
<style scoped>
    .aaa:hover {
        background-color: pink;
    }
</style>