import publicKey from './public.pem?raw';

export const window = {
    width: 930,
    height: 560,
    frame: false,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    title: 'Advent of Fire',
};

export const api = {
    ws: 'wss://launcher.adventoffire.ru/wss',
    web: 'https://launcher.adventoffire.ru',
    publicKey,
};

export const appPath = '.advent-of-fire';

export const discordRPC = {
    appId: '1262454387138236508',
    default: {
        firstLineText: 'Играю на проекте',
        secondLineText: 'Присоединяйся к Advent of Fire',
        buttons: [
            {
                label: 'Сайт',
                url: 'https://adventoffire.ru/',
            },
        ],
        largeImageKey: 'ikonka',
        smallImageKey: '',
        largeImageText: 'Advent of Fire',
        smallImageText: '',
    },
    profile: {
        firstLineText: 'Смотрю профиль',
        secondLineText: 'Загружаю клиент {server}',
        buttons: [
            {
                label: 'Сайт',
                url: 'https://adventoffire.ru/',
            },
        ],
        largeImageKey: 'ikonka',
        smallImageKey: '',
        largeImageText: 'Advent of Fire',
        smallImageText: '',
    },
    game: {
        firstLineText: 'Играю на сервере',
        secondLineText: 'Играю под ником {nickname}',
        buttons: [
            {
                label: 'Сайт',
                url: 'https://adventoffire.ru/',
            },
        ],
        largeImageKey: 'ikonka',
        smallImageKey: '',
        largeImageText: 'Advent of Fire',
        smallImageText: '',
    }
};
