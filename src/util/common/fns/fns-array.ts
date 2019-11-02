import {defaultFilterSplit} from '@/components/common-table/table.model'

/**
 * @Description: 操作数组的函数
 * @date 2019-06-27
 */
export interface DefaultListItem {
  id: string | number
  label: string | number
}

/**
 * 获取list中目标值
 * @param list 原list
 * @param value 根据value 获取
 * @param key 根据的value对应的key
 * @param destKey 目标key
 * @example 例如：已知 list = [{id: 1, name: '男'}, {id: 2, name: '女'}];
 * 现在要获取id为2时对应的name，可以使用该方法
 */
export function listDestValue (list: any[], value: any, key = 'id', destKey = 'label') {
  if (value === null || value === undefined) {
    return ''
  }
  if (typeof list === 'object' && Object.prototype.toString.call(list).toLowerCase().includes('array')) {
    const destValue = list.find(item => item[key] === value)
    if (destValue) {
      return destValue[destKey]
    }
  }
  return ''
}

export function changeToDefaultList (list: any[], idKey?: string, labelKey?: string): DefaultListItem[] {
  if (!list) {
    return []
  }
  if (!idKey || !labelKey) {
    return list
  }
  if (list.length) {
    if (list[0].id !== undefined && list[0].label !== undefined) {
      return list
    }
  }
  return list.map(item => ({
    id: item[idKey],
    label: item[labelKey],
  }))
}

export function changeListToFilters (list: any[], prop: string, idKey?: string, labelKey?: string) {
  return changeToDefaultList(list, idKey, labelKey).map((item: DefaultListItem) => ({
    text: item.label,
    value: item.id + defaultFilterSplit + prop,
  }))
}
