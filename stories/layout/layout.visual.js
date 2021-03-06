import '../../dist/section.css';
import * as stories from './layout.stories.js';

export default {
    title: 'Visual/LayoutColumn'
};

export const LayoutColumn = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
