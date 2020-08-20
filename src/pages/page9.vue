<template>
  <div>
    <div id="mytree" class="mytree" @contextmenu="quxiao">
      <vo-basic :data="chartData" @click="handleClick11"></vo-basic>
    </div>
  </div>
</template>

<script>
import { VoBasic } from 'vue-orgchart'
export default {
  components: { VoBasic },
  data() {
    return {
      chartData: {},
    }
  },
  created () {
    this.chartData = {
        id: "1",
        name: 'JavaScript',
        value: "value11",
        children: [
          {id: "1-1",name: 'Angular',value: "value1_2", },
          {id: "1-2",name: 'React',value: "value1_3", children: [
              {id: "2-1",name: 'Preact' }
          ]},
          {id: "1-3",name: 'Vue', value: "value1_4",children: [ 
            {id: "1-3-1",name: 'Moon', children: [
                {id: "1-3-1-1", name: 'Moon_son' }
            ] 
          }]
          }
        ]
    };
    function diguiGetInnerText(obj,arr) {
      for(let key in obj) {
        if(key === "children"  && obj['children'].length!==0) {
          obj['children'].forEach(item => {
            diguiGetInnerText(item,arr);
          })
        } else if(key === "name"){
          arr.push(obj['name'])
        }
      }
      return arr;
    };
    console.log(diguiGetInnerText(this.chartData,[]))
  },
  mounted() {
    // this.preventYoujian();
  },
  methods: {
      // diguiGetInnerText(obj) {
      //   for(let key in obj) {
      //     if(key === "children"  && obj['children'].length!==0) {
      //       obj['children'].forEach(item => {
      //         diguiGetInnerText(item);
      //       })
      //     } else if(key === "name" ){

      //     }
      //   }
      //   return arr;
      // },
      diguiGetCurrentObj(obj,currentObj,value) {
        for(let key in obj) {
          if(key === "children"  && obj['children'].length!==0) {
            obj['children'].forEach(item => {
              this.diguiGetCurrentObj(item,currentObj,value);
            })
          } else if(key === "name" && obj["name"] === value){
            currentObj.name = obj["name"];
            currentObj.id = obj["id"];
          } 
        }
        return currentObj;
      },
      // 取消右键默认
      preventYoujian() {
        let el = document.getElementById("mytree");
        el.oncontextmenu = function (e) {
          console.log(e);
            //左键--button属性=1，右键button属性=2
            if (e.button == 2) {
                e.preventDefault();
                if(e.target.className === "title") {
                  alert("右击了"+e.target.innerText)
                }
                // var _x = e.clientX,
                //     _y = e.clientY;

                // oMenu.style.display = "block";
                // oMenu.style.left = _x + "px";
                // oMenu.style.top = _y + "px";
            }
        }
      },
      quxiao(e) {
        console.log(e)
        if (e.button == 2) {
          e.preventDefault();
          if(e.target.className === "title") {
            console.log(this.diguiGetCurrentObj(this.chartData,{},e.target.innerText))
          }
          // var _x = e.clientX,
          //     _y = e.clientY;

          // oMenu.style.display = "block";
          // oMenu.style.left = _x + "px";
          // oMenu.style.top = _y + "px";
      }
      },
      youji(e) {
          console.log(e)
      },
      handleClick(e) {
        console.log(e)
      },
      handleClick11(e) {
        console.log("99")
      },
      handleDocumentContextmenu(e) {
        // console.log(e)
        e.preventDefault();
        e.preventDefault();
      //   let event = $event || window.event
      // event.preventDefault
      //   ? event.preventDefault()
      //   : (event.returnValue = false)
      }
  }
}
</script>
<style scoped>
</style>