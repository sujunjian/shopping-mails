let plugins={}
plugins.install=function(vue,option){
    // 调用全局组件实例上的方法，实现
    vue.directives(option.name,(element,params)=>{
        element.innerHTNL=params.value.toUpperCase();
    })
}
export default plugins;
