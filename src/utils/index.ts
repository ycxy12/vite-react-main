import { MenuItem, RouteObject } from "@/types"

/**
 * @description 获取需要展开的 subMenu
 * @param {String} path 当前访问地址
 * @returns array
 */
export const getOpenKeys = (path: string): string[] => {
    let newStr = ""
    let newArr: string[] = []
    let arr = path.split("/").map((i) => "/" + i)
    for (let i = 1; i < arr.length - 1; i++) {
        newStr += arr[i]
        newArr.push(newStr)
    }
    return newArr
}

/**
 * @description 递归查询对应的路由
 * @param {String} path 当前访问地址
 * @param {Array} routes 路由列表
 * @returns array
 */
export const searchRoute = (path: string, routes: RouteObject[] = []): RouteObject => {
    let result = {} as RouteObject
    for (let item of routes) {
        if (item.path === path) return item
        if (item.children) {
            const res = searchRoute(path, item.children)
            if (Object.keys(res).length) result = res
        }
    }
    return result
}

/**
 * @description 获取面包屑列表
 * @param {String} path 当前访问地址
 * @param {Array} menuList 菜单列表
 * @returns array
 */
export const getBreadcrumbList = (_path: string, _menuList: MenuItem[]): MenuItem[] => {
    let breadcrumbList: MenuItem[] = []
    // ... 这里应该是获取面包屑的实现
    return breadcrumbList
}

/**
 * @description 双重递归 找出所有 面包屑 生成对象存到 redux 中，就不用每次都去递归查找了
 * @param {String} menuList 当前菜单列表
 * @returns object
 */
export const findAllBreadcrumb = (menuList: MenuItem[]): Record<string, MenuItem[]> => {
    let handleBreadcrumbList: Record<string, MenuItem[]> = {}
    const loop = (menuItem: MenuItem): void => {
        // 下面判断代码解释 *** !item?.children?.length   ==>   (item.children && item.children.length > 0)
        if (menuItem?.children?.length) menuItem.children.forEach((item) => loop(item))
        else handleBreadcrumbList[menuItem.path] = getBreadcrumbList(menuItem.path, menuList)
    }
    menuList.forEach((item) => loop(item))
    return handleBreadcrumbList
}

/**
 * @description 使用递归处理路由菜单，生成一维数组，做菜单权限判断
 * @param {Array} menuList 所有菜单列表
 * @param {Array} newArr 菜单的一维数组
 * @return array
 */
export function handleRouter(routerList: RouteObject[], newArr: string[] = []): string[] {
    routerList.forEach((item) => {
        typeof item === "object" && item.path && newArr.push(item.path)
        item.children && item.children.length && handleRouter(item.children, newArr)
    })
    return newArr
}

/**
 * @description 使用递归扁平化菜单，方便添加动态路由
 * @param {Array} menuList 菜单列表
 * @returns {Array}
 */
export function getFlatMenuList(menuList: MenuItem[]): MenuItem[] {
    let newMenuList = JSON.parse(JSON.stringify(menuList))
    return newMenuList.flatMap((item: MenuItem) => [item, ...(item.children ? getFlatMenuList(item.children) : [])])
} 