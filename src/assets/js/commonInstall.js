// import sideTitle from '@/components/SideTitle';

const time = 15000;

function install(Vue) {
  Vue.mixin({
    data() {
      return {
        funList: [],
        funInterval: undefined,
      };
    },
    // components: { sideTitle },
    methods: {
      getSevenDaysData(data) {
        data.forEach((n, index) => {
          const item = n;
          item.xData = this.$moment(new Date()).subtract((6 - index), 'days').format('DD日');
        });
        return data;
      },
    },
    mounted() {
      this.funInterval = setInterval(() => {
        if (this.funList && this.funList.length > 0) {
          this.funList.forEach((val) => {
            this[val]();
          });
        }
      }, time);
    },
    beforeDestroy() {
      clearInterval(this.funInterval);
      this.funInterval = undefined;
    },
  });
}

export default { install };
