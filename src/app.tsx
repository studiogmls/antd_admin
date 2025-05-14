import type { RunTimeLayoutConfig } from '@umijs/max';
import { errorConfig } from '@/utils/request/requestErrorConfig';

import Layout from '@/layouts';
import { getInitialState } from '@/common/getInitialState';

/**
 * @name 初始化数据
 */
export { getInitialState };

/**
 * @name 配置布局
 */
export const layout: RunTimeLayoutConfig = Layout;

/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request = {
  ...errorConfig,
};
