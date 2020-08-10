export default {
  data() {
    return {
      echartArr: [],
    };
  },
  mounted() {
    window.addEventListener('resize', this.echartResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.echartResize);
  },
  methods: {
    echartResize() {
      this.echartArr.forEach((val) => {
        if (val) {
          val.resize();
        }
      });
    },
  },
};
