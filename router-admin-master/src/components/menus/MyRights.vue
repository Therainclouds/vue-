<template>
  <div id="ehcats_line">
    <h4 class="text-center">数据报表</h4>
    <ul v-for="js in jss">
      <li></li>
    </ul>
  </div>
</template>

<script>
// import echarts from "echarts";
import { onMounted } from "vue";
import axios from "axios";
export default {
  setup() {
    onMounted(() => {
      axios.get("/api/getStudent").then((res) => {
        let jsonArr = eval(res.data);
        // 获取班级
        let calss_arrs = [];
        for (let i = 0; i < jsonArr.length; i++) {
          let class_arr = jsonArr[i].c_name;
          if (calss_arrs.indexOf(class_arr) == "-1") {
            calss_arrs.push(class_arr);
          }
        }
        new Vue({
          el: "ehcats_line",
          data: (message: calss_arrs+'')
        });

        // 创建班级平均成绩信息表
        let dom = document.getElementById("ehcats_line");
        let myecharts = init.echarts(dom);
        const optino = {};
        myecharts.setOpiton(optino);
      });
    });
  },
};
</script>

<style lang="less" scoped>
</style>