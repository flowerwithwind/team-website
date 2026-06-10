export interface TaskItem {
  name: string;
  person: string;
  size?: string;
}

export interface TaskGroup {
  title: string;
  score?: string;
  items: TaskItem[];
}

export const taskGroups: TaskGroup[] = [
  {
    title: '团队任务一',
    items: [
      { name: '对话功能', person: '向党', size: '大' },
      { name: '问数功能', person: '向党', size: '中' },
      { name: '@数字员工', person: '赵海蓺', size: '中' },
      { name: '接口管理', person: '赵海蓺', size: '中' },
      { name: '数字员工管理', person: '陈陆雷', size: '大' },
      { name: '技能管理', person: '陈陆雷', size: '中' },
      { name: '会话管理', person: '廖柯淞', size: '中' },
      { name: 'PDF导出', person: '廖柯淞', size: '小' },
      { name: '对话管理', person: '陈晓乐', size: '小' },
      { name: '系统设置', person: '陈晓乐', size: '中' },
    ],
  },
  {
    title: '团队任务二',
    score: '35分',
    items: [
      { name: '全员协作，组长主导。基于上学期选题延续开发', person: '全员' },
    ],
  },
  {
    title: '团队任务三',
    score: '20分',
    items: [
      { name: '3D地球', person: '陈陆雷' },
      { name: '词云', person: '赵海蓺' },
      { name: 'Echarts-GL', person: '向党' },
    ],
  },
  {
    title: '团队任务五',
    score: '10分',
    items: [
      { name: 'MySQL/SQLite 多数据库切换', person: '廖柯淞' },
    ],
  },
];
