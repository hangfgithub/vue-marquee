import VueMarquee from "./VueMarquee.vue";

// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) { 
 window.Vue.use(VueMarquee) 
}

export default VueMarquee.install = (Vue) => {
 Vue.component(VueMarquee.name, VueMarquee)
}

