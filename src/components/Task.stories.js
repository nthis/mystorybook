// 引入组件
import Task from './Task.vue';
// 引入 storybook action
// action()使我们可以创建一个回调函数，当点击事件触发时 Storybook UI 的actions面板会显示结果。
import { action } from '@storybook/addon-actions'

export default {
    // 在 Storybook 应用侧边栏的显示
    title: 'Mycomponent/Task',
    // 组件本身,
    component: Task,
    // story 本身需要但是不用在 Storybook 应用中渲染的信息
    excludeStories: /.*Data$/,
    argTypes: {
        onPinTask: {},
        onArchiveTask: {}
    }
};

export const actionsData = {
    onPinTask: action('pin-task'),
    onArchiveTask: action('archive-task')
};

const Template = args => ({
    components: { Task },
    setup() {
        return { args };
    },
    template: '<Task v-bind="args" />'
});

export const Default = Template.bind({});
Default.args = {
    task: {
        id: '1',
        title: 'Test Task',
        state: 'TASK_INBOX',
        updatedAt: new Date(2018, 0, 1, 9, 0),
    },
};

export const Pinned = Template.bind({});
Pinned.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_PINNED',
        title: 'Pinned'
    },
};

export const Archived = Template.bind({});
Archived.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_ARCHIVED',
        title: 'Archived'
    },
};
