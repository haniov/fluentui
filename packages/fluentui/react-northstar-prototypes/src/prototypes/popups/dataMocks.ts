import * as _ from 'lodash';

export const getItemsData = (images: string[], ariaLabelPart: string) => {
  return _.map(images, image => ({
    imageSrc: `public/images/avatar/${image}.jpg`,
    title: `${ariaLabelPart} ${image}`,
    onClick: (e: any, props: any) => {
      const { title } = props;
      alert(`Selected item is ${title}`);
    },
  }));
};

export const imageNames = [
  'WandaHoward',
  'TimDeboer',
  'RobinCounts',
  'RobertTolbert',
  'MonaKane',
  'MiguelGarcia',
  'MauricioAugust',
  'LydiaBauer',
  'KristinPatterson',
  'KevinSturgis',
  'KatriAthokas',
  'KatLarsson',
  'JohnieMcConnell',
  'IsaacFielder',
  'HenryBrill',
  'ErikNason',
  'ElviaAtkins',
];

export const arrayOfStickerImagesNames = [
  [
    'WandaHoward',
    'TimDeboer',
    'RobinCounts',
    'RobertTolbert',
    'MonaKane',
    'MiguelGarcia',
    'MauricioAugust',
    'LydiaBauer',
    'KristinPatterson',
    'KevinSturgis',
    'KatriAthokas',
    'KatLarsson',
    'JohnieMcConnell',
    'IsaacFielder',
    'HenryBrill',
    'ErikNason',
    'ElviaAtkins',
  ],
  [
    'AshleyMcCarthy',
    'CameronEvans',
    'CarlosSlattery',
    'CarolePoland',
    'CecilFolk',
    'CelesteBurton',
    'CharlotteWaltson',
    'ColinBallinghger',
    'DaisyPhillips',
    'ElliotWoodward',
  ],
  [
    'ElviaAtkins',
    'ErikNason',
    'HenryBrill',
    'IsaacFielder',
    'KatLarsson',
    'JohnieMcConnell',
    'KevinSturgis',
    'KristinPatterson',
    'LydiaBauer',
    'MauricioAugust',
  ],
  [
    'WandaHoward',
    'TimDeboer',
    'RobinCounts',
    'RobertTolbert',
    'MonaKane',
    'MiguelGarcia',
    'MauricioAugust',
    'LydiaBauer',
    'KristinPatterson',
    'KevinSturgis',
    'KatriAthokas',
    'KatLarsson',
    'JohnieMcConnell',
    'IsaacFielder',
    'HenryBrill',
    'ErikNason',
    'ElviaAtkins',
  ],
  [
    'AshleyMcCarthy',
    'CameronEvans',
    'CarlosSlattery',
    'CarolePoland',
    'CecilFolk',
    'CelesteBurton',
    'CharlotteWaltson',
    'ColinBallinghger',
    'DaisyPhillips',
    'ElliotWoodward',
  ],
  [
    'AshleyMcCarthy',
    'CameronEvans',
    'CarlosSlattery',
    'CarolePoland',
    'CecilFolk',
    'CelesteBurton',
    'CharlotteWaltson',
    'ColinBallinghger',
    'DaisyPhillips',
    'ElliotWoodward',
  ],
  [
    'ElviaAtkins',
    'ErikNason',
    'HenryBrill',
    'IsaacFielder',
    'KatLarsson',
    'JohnieMcConnell',
    'KevinSturgis',
    'KristinPatterson',
    'LydiaBauer',
    'MauricioAugust',
  ],
];