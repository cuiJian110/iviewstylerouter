<template>
  <div>
    <!-- <vue2-org-tree :data="data" /> -->
    <div class="myTree">
      <v-org-tree
        :data="data"
        :node-render="nodeRender"
        :collapsable="false"
      ></v-org-tree>
    </div>
  </div>
</template>
<script>
const menuList = [
  {
    key: 'edit',
    label: '编辑部门1'
  },
  {
    key: 'detail',
    label: '查看部门2'
  },
  {
    key: 'new',
    label: '新增子部门3'
  },
  {
    key: 'delete',
    label: '删除部门4'
  }
]
import "./page10.css";
export default {
  data() {
    return {
      data: {
        id: 0,
        label: "XXX科技有限公司",
        children: [
          {
            id: 2,
            label: "产品研发部",
            children: [
              {
                id: 5,
                label: "研发-前端",
              },
              {
                id: 6,
                label: "研发-后端",
              },
              {
                id: 9,
                label: "UI设计",
              },
              {
                id: 10,
                label: "产品经理",
              },
            ],
          },
          {
            id: 3,
            label: "销售部",
            children: [
              {
                id: 7,
                label: "销售一部",
              },
              {
                id: 8,
                label: "销售二部",
              },
            ],
          },
          {
            id: 4,
            label: "财务部",
          },
          {
            id: 9,
            label: "HR人事",
          },
        ],
      },
    };
  },
  mounted() {},
  methods: {
    nodeRender (h, data) {
      return (
        <div style="width: 100px; position: relative" on-click={() => this.handleClick(data)} on-contextmenu={(e) => this.youjian(e,data)}>
          <span>{data.label}</span>
          <div class="aa" style="position: absolute; z-index: 100; top: 18px; left: 83px; display: none">
            <div class="aaItem"  on-click={(e) => this.handleDel(e,data)} >删除</div>
            <div class="aaItem" on-click={(e) => this.handleEdit(e,data)} >编辑</div>
          </div>
        </div>
      )
    },
    handleClick(item) {
      console.log(item)
    },
    handleDel(e,item) {
      console.log("handleDel",item)
      e.stopPropagation();
    },
    handleEdit(e,item) {
      console.log("handleEdit",item)
      e.stopPropagation();
    },
    youjian($event,item) {
      console.log($event);
      if($event.button === 2) {
        $event.preventDefault();
        const list =  document.getElementsByClassName("aa");
        for(let i = 0; i < list.length; i++) {
          list[i].style.display = "none";
        }
        $event.target.nextElementSibling.style.display = "block"
        
      }
      console.log(item)
    },
    handleMouseover(e) {
      console.log(34)
      // e.target.style.background = "#13D1BE";
      // e.target.style.color = "#fff";
    },
    handleMοuseοut(e) {
      console.log(34)
      // e.target.style.background = "#fff!important";
      // e.target.style.color = "#000!important";
    }
  },
};
</script>
<style scoped>
/* .aaItem {
  width: 100px;
  height: 50px;
  font-size: 18px;
  background: #fff;
  text-align: center;
  line-height: 50px;
}
.aaItem:hover {
  background: #13D1BE;
  color: #fff;
} */
</style>