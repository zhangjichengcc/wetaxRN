/** 个人中心页面跳转时的路由携带参数 */
declare type UserCenterRouteParam = { userid: string | number } | undefined;

/**
 * 定义App提供的所有页面路由名称以及参数
 * 其中 key 为路由跳转时的名称, value 为路由跳转时携带的参数
 */
declare type AppParamList = {
  Tab: object | undefined;
  Home: object | undefined;
  Profile: object | undefined;
  Setting: object | undefined;
  UserCenter: UserCenterRouteParam;
  Upgrade: object | undefined;
  Details: object | undefined;
};
