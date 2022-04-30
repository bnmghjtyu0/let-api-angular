/**
 * 共用的常數。加入 as const 表示物件是不可變更的狀態，只能唯讀
 */
const commonConstant = {
  startDate: new Date(1990, 11, 1, 0, 0, 0),
  endDate: new Date(1990, 11, 31, 23, 59, 59),
} as const;

export default commonConstant;
