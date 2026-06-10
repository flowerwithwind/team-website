export interface TeamMember {
  name: string;
  role: string;
  title: string;
  tasks: string[];
  avatar: string; // use first character of name
}

export const teamMembers: TeamMember[] = [
  {
    name: '陈晓乐',
    role: '组长',
    title: '系统架构 & 全栈开发',
    tasks: ['系统设置', '对话管理', '数智大屏', '代码审查', '进度管理'],
    avatar: '陈',
  },
  {
    name: '向党',
    role: '组员',
    title: '对话系统 & 数据可视化',
    tasks: ['对话功能', '问数功能', 'Echarts-GL'],
    avatar: '向',
  },
  {
    name: '陈陆雷',
    role: '组员',
    title: '3D引擎 & 技能系统',
    tasks: ['数字员工管理', '技能管理', '3D地球'],
    avatar: '陈',
  },
  {
    name: '赵海蓺',
    role: '组员',
    title: '接口开发 & 前端开发',
    tasks: ['接口管理', '@数字员工功能', '词云'],
    avatar: '赵',
  },
  {
    name: '廖柯淞',
    role: '组员',
    title: '数据管理 & 文档导出',
    tasks: ['会话管理', 'PDF导出', 'MySQL/SQLite切换'],
    avatar: '廖',
  },
];
