import { VK } from 'vk-io';
import { HearManager } from '@vk-io/hear';

const vk = new VK({
    token: ''
})
const bot = new HearManager();

vk.updates.on('message_on', bot.middleware);

bot.hear(/hello/, msg => {
    msg.send('Hello!');
});