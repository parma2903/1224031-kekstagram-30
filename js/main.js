const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const COMMENTS_COUNT = 30;
const LIKES_MIN = 25;
const LIKES_MAX = 100;
const COMMENT_ARRAY = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const DESCRIPTIONS = [
  'Это первое описание',
  'Это второе описание',
  'Это третье описание',
  'Это четвертое описание',
  'Это пятое и последнее описание',
];
const NAMES = ['Таня', 'Игорь', 'Максим', 'Ксюша', 'Дима'];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (items) =>
  items[getRandomInteger(0, items.length-1)]

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateCommentId = createIdGenerator();

const createMessage = () => Array.from(
  { length: getRandomInteger(1, 2) },
  () => getRandomArrayElement(COMMENT_ARRAY),
).join(' ');

const createComment = () => ({
  id: generateCommentId,
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const generatePicturetId = createIdGenerator();

const createPicture = (index) => ({
  id: generatePicturetId(),
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKES_MIN, LIKES_MAX),
  comments: Array.from(
    { length: getRandomInteger(0, COMMENTS_COUNT) },
    createComment,
  ),
});

const getPictures = () => Array.from(
  { length: PICTURE_COUNT },
  (_, pictureIndex) => createPicture(pictureIndex + 1),
);

getPictures();
