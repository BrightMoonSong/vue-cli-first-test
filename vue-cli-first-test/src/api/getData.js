import fetch from '@/config/fetch';

/**
 * 登陆
 */

export const login = (url, data) => fetch('/mapi/shiro/login?phone=' + url.phone + '&password=' + url.password, data, 'POST');

/**
 * api请求量
 */

export const apiCount = date => fetch('/statis/api/' + date + '/count');

/**
 * 管理员列表
 */

export const adminList = data => fetch('/admin/all', data);

/**
 * 添加商铺
 */

export const addShop = data => fetch('/shopping/addShop', data, 'POST');

/**
 * 获取搜索地址
 */

export const searchplace = (cityid, value) => fetch('/v1/pois', {
  type: 'search',
  city_id: cityid,
  keyword: value
});

/**
 * 获取当前店铺食品种类
 */

// export const getCategory = restaurant_id => fetch('/shopping/getcategory/' + restaurant_id);
