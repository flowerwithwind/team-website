export interface Project {
  name: string;
  description: string;
  repo: string;
  tech: string[];
  color: string;
}

export const projects: Project[] = [
  {
    name: 'XHAgentOS',
    description: '基于AI的智能瞭望与智能问数系统。集成多维度数据监控、智能对话分析、数字员工管理等功能，打造全方位的AI驱动企业智能平台。',
    repo: 'https://github.com/XiaoleC05/XHAgentOS.git',
    tech: ['React', 'TypeScript', 'Python', 'AI', 'Echarts'],
    color: '#4F46E5',
  },
  {
    name: 'Online Exam System',
    description: '在线考试系统。支持在线组卷、智能评分、考试监控、成绩分析等功能，为教育场景提供完整的数字化考试解决方案。',
    repo: 'https://github.com/XiaoleC05/online-exam-system.git',
    tech: ['Vue', 'Spring Boot', 'MySQL', 'Redis'],
    color: '#06B6D4',
  },
];
