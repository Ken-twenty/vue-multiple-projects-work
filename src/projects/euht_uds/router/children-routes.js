/**
 * 由于路由代码属于客户端侧代码，不能使用 node.js 动态获取子项目名字；
 * 请手动同步 '/src/projects/*' 所有文件夹的名字数组，更新后请在以下注释中备注
 * recently modified BY [weili.zeng] @ 2019/04/15 (init)
 */
const Children = [
  'euht_bss',
  'euht_cms',
  'euht_css',
  'euht_nms',
  'euht_ocs',
  'euht_oms',
  'euht_rms',
  'euht_uds',
];

const ChildrenRoutes = Children.map((child) => {

  return {
    path: `/${child}`,
    name: child,
    beforeEnter() {

      window.location = `/${child}`;

    },
  };

});

export default ChildrenRoutes;
