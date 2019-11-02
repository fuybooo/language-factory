import {Column, columnWidth, defaultFilterSplit} from '@/components/common-table/table.model'
import {changeListToFilters, listDestValue} from '@/util/common/fns/fns-array'

export const messageTypeList = [
  {
    id: '1',
    label: '请假',
  },
  {
    id: '2',
    label: '放假',
  },
]
export const columns: Column[] = [
  {
    prop: 'selection',
    props: {
      type: 'selection',
    },
  },
  {
    prop: 'type',
    label: '通知类型',
    props: {
      width: columnWidth.w160,
      filters: changeListToFilters(messageTypeList, 'type'),
      formatter (row, col, value) {
        return listDestValue(messageTypeList, value)
      },
    },
  },
  {
    prop: 'time',
    label: '时间',
    props: {
      width: columnWidth.dateTimeAll,
      sortable: 'custom',
    },
  },
  {
    prop: 'user',
    label: '发信人',
    props: {
      width: columnWidth.w5,
    },
  },
  {
    contentSlot: 'content',
    label: '内容',
  },
]
