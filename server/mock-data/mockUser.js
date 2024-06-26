const mockUser = [
  {
    id: 'aed68e4f-52c1-47bc-8447-fb10f14c38b4',
    firstName: 'Chandler',
    lastName: 'Rothchild',
    email: 'crothchild0@shop-pro.jp',
    passwordHash: 'uQ2~Jo~*5',
    role: 'USER',
    createdAt: '6/11/2023',
    updatedAt: '1/28/2024',
  },
  {
    id: '925a18df-796c-429b-82c1-70415bd44522',
    firstName: 'Marcella',
    lastName: 'Bagge',
    email: 'mbagge1@bing.com',
    passwordHash: 'rM7)?K3v&acI',
    role: 'ADMIN',
    createdAt: '8/27/2023',
    updatedAt: '2/20/2024',
  },
  {
    id: '879ba6d9-830d-4d67-b399-ee0a14737fb5',
    firstName: 'Lauri',
    lastName: 'Haith',
    email: 'lhaith2@shutterfly.com',
    passwordHash: 'lH4&44f`"*ng',
    role: 'USER',
    createdAt: '10/25/2023',
    updatedAt: '10/1/2023',
  },
  {
    id: '227b6b28-ceee-4264-b21b-6daf882f6512',
    firstName: 'William',
    lastName: 'Bunch',
    email: 'wbunch3@storify.com',
    passwordHash: 'yC8,zOfa#{AQDq0z',
    role: 'USER',
    createdAt: '12/24/2023',
    updatedAt: '5/10/2024',
  },
  {
    id: '97a55cbc-10e1-41e9-93fb-03720ca65706',
    firstName: 'Boonie',
    lastName: 'Athy',
    email: 'bathy4@baidu.com',
    passwordHash: 'gO7&86?GQ',
    role: 'USER',
    createdAt: '11/29/2023',
    updatedAt: '10/14/2023',
  },
  {
    id: 'f0e4520e-8aa7-4770-86f0-3eae3e9646c8',
    firstName: 'Dare',
    lastName: 'Denisovich',
    email: 'ddenisovich5@mit.edu',
    passwordHash: 'gZ3!qzBKbhnsCR',
    role: 'ADMIN',
    createdAt: '1/14/2024',
    updatedAt: '9/3/2023',
  },
  {
    id: '122a0d3c-8a66-4b9b-9c48-12111676fbdc',
    firstName: 'Bobina',
    lastName: 'Sager',
    email: 'bsager6@indiegogo.com',
    passwordHash: 'cC8"R<S?',
    role: 'ADMIN',
    createdAt: '3/8/2024',
    updatedAt: '5/26/2023',
  },
  {
    id: '418b2656-92da-4eee-a757-c095f62f7687',
    firstName: 'Ty',
    lastName: 'Hanaford',
    email: 'thanaford7@google.com.br',
    passwordHash: 'lJ2)&V!M"n,+L',
    role: 'ADMIN',
    createdAt: '12/12/2023',
    updatedAt: '12/29/2023',
  },
  {
    id: 'ff5590dc-503c-4e31-9c45-1bbad1fd16d6',
    firstName: 'Oates',
    lastName: 'Kirsche',
    email: 'okirsche8@360.cn',
    passwordHash: 'bH0.)LUYPNJ+OPL',
    role: 'ADMIN',
    createdAt: '12/3/2023',
    updatedAt: '4/20/2024',
  },
  {
    id: '9c0e24d6-e03f-4cb0-ad18-1b6467cd6896',
    firstName: 'Loreen',
    lastName: 'Dovidian',
    email: 'ldovidian9@twitpic.com',
    passwordHash: 'qC8?9qEVR&$O',
    role: 'ADMIN',
    createdAt: '5/17/2024',
    updatedAt: '1/16/2024',
  },
  {
    id: '62780039-2902-4176-97db-1db134cdf8a6',
    firstName: 'Wyatt',
    lastName: 'Ollerhead',
    email: 'wollerheada@jugem.jp',
    passwordHash: 'jP1"*o?wGhAksu}',
    role: 'ADMIN',
    createdAt: '8/11/2023',
    updatedAt: '11/17/2023',
  },
  {
    id: '19c86aba-c359-415a-9b6c-06d4c7edd09f',
    firstName: 'Conrado',
    lastName: 'Drysdell',
    email: 'cdrysdellb@is.gd',
    passwordHash: 'xK7>Dz`G\\LnH',
    role: 'ADMIN',
    createdAt: '3/9/2024',
    updatedAt: '2/10/2024',
  },
  {
    id: '7de87eaf-5891-49f9-87f7-62b4c0d68f06',
    firstName: 'Brady',
    lastName: 'Jaquest',
    email: 'bjaquestc@plala.or.jp',
    passwordHash: "tJ5<>SH<'Y?J|Ng",
    role: 'ADMIN',
    createdAt: '4/1/2024',
    updatedAt: '9/26/2023',
  },
  {
    id: '11386afb-5078-46fa-a297-63b56177b59d',
    firstName: 'Ariana',
    lastName: 'Gregr',
    email: 'agregrd@yandex.ru',
    passwordHash: 'zS5*4YX9Y',
    role: 'USER',
    createdAt: '8/7/2023',
    updatedAt: '1/5/2024',
  },
  {
    id: '88cdbbf0-5762-46eb-ab4f-f4562b0979f2',
    firstName: 'Irv',
    lastName: 'Paz',
    email: 'ipaze@slate.com',
    passwordHash: 'lK7)*&YpS',
    role: 'ADMIN',
    createdAt: '12/17/2023',
    updatedAt: '4/15/2024',
  },
  {
    id: '4eabd626-85be-4970-9b9d-721d9c019e6a',
    firstName: 'Dagny',
    lastName: 'Girardet',
    email: 'dgirardetf@un.org',
    passwordHash: 'vS7%cG2gE|',
    role: 'USER',
    createdAt: '7/13/2023',
    updatedAt: '12/5/2023',
  },
  {
    id: 'ca091eaa-e40b-46d1-8f78-560e53ed8db1',
    firstName: 'Brooke',
    lastName: 'Juliano',
    email: 'bjulianog@scribd.com',
    passwordHash: 'wU7/bFq*Xxx!6Mx',
    role: 'USER',
    createdAt: '8/7/2023',
    updatedAt: '10/8/2023',
  },
  {
    id: '5e031e8a-3c54-4ffb-9f33-f2acf1b8450c',
    firstName: 'Phil',
    lastName: 'Branchett',
    email: 'pbranchetth@archive.org',
    passwordHash: 'mA5+9pgY&dz@hp<',
    role: 'ADMIN',
    createdAt: '10/7/2023',
    updatedAt: '10/30/2023',
  },
  {
    id: '326b36a0-fe84-4c47-bcd0-216c1ccbcb2a',
    firstName: 'Tersina',
    lastName: 'Delph',
    email: 'tdelphi@theatlantic.com',
    passwordHash: 'hS8)}.Jm1',
    role: 'USER',
    createdAt: '6/25/2023',
    updatedAt: '11/4/2023',
  },
  {
    id: 'b10894e9-df0a-4326-9c7a-1b992a5e5ab8',
    firstName: 'Si',
    lastName: 'Fulk',
    email: 'sfulkj@netlog.com',
    passwordHash: 'jP7/HTqi{',
    role: 'ADMIN',
    createdAt: '11/7/2023',
    updatedAt: '2/18/2024',
  },
  {
    id: '25ca8f7b-c589-4143-8f9a-d766fea56887',
    firstName: 'Artair',
    lastName: 'Hallsworth',
    email: 'ahallsworthk@abc.net.au',
    passwordHash: 'yV3%%`P>14',
    role: 'ADMIN',
    createdAt: '3/15/2024',
    updatedAt: '6/23/2023',
  },
  {
    id: '42e4e057-54b7-49ca-81ef-9c090a2e9fe9',
    firstName: 'Marylynne',
    lastName: 'Kippie',
    email: 'mkippiel@free.fr',
    passwordHash: 'gS4?3q|o8$eLOlR?',
    role: 'USER',
    createdAt: '6/21/2023',
    updatedAt: '12/22/2023',
  },
  {
    id: 'b7c4e5d5-8edc-4c86-8931-bd830c21ff7d',
    firstName: 'Rozella',
    lastName: "O'Flannery",
    email: 'roflannerym@yahoo.com',
    passwordHash: 'dM1!xAB1>\\',
    role: 'ADMIN',
    createdAt: '3/27/2024',
    updatedAt: '8/19/2023',
  },
  {
    id: 'ebcd330a-2731-4a90-882c-698e34103054',
    firstName: 'Ermengarde',
    lastName: 'McLleese',
    email: 'emclleesen@google.co.jp',
    passwordHash: 'vL6(87V\\kX',
    role: 'ADMIN',
    createdAt: '5/14/2024',
    updatedAt: '12/18/2023',
  },
  {
    id: '80fcb743-67a2-45d7-81f6-43b440323454',
    firstName: 'Gaye',
    lastName: 'Caustick',
    email: 'gcausticko@google.com.au',
    passwordHash: 'pS8$EUxL.m@j+(=',
    role: 'ADMIN',
    createdAt: '2/11/2024',
    updatedAt: '1/3/2024',
  },
  {
    id: 'b98384ea-aa1f-4c8e-b2d0-96664a38d756',
    firstName: 'Lana',
    lastName: 'Midgley',
    email: 'lmidgleyp@cnn.com',
    passwordHash: 'eF2(vL~TZ!985',
    role: 'ADMIN',
    createdAt: '7/9/2023',
    updatedAt: '6/7/2023',
  },
  {
    id: '2553b759-5736-43df-8803-b976091d8022',
    firstName: 'Costanza',
    lastName: 'Jansens',
    email: 'cjansensq@networkadvertising.org',
    passwordHash: 'lB6+YN&Tk~,lz4e',
    role: 'USER',
    createdAt: '7/13/2023',
    updatedAt: '5/25/2023',
  },
  {
    id: 'acfe6807-dce7-4af8-ae2d-c9943bd1764f',
    firstName: 'Nari',
    lastName: 'Jilkes',
    email: 'njilkesr@google.ca',
    passwordHash: 'sP7~y{L?s!',
    role: 'USER',
    createdAt: '4/5/2024',
    updatedAt: '6/4/2023',
  },
  {
    id: '61ce694d-6bf7-4183-87eb-e1485c66760e',
    firstName: 'Randa',
    lastName: 'Binning',
    email: 'rbinnings@friendfeed.com',
    passwordHash: 'iL1,_kQZmG)s(',
    role: 'USER',
    createdAt: '4/29/2024',
    updatedAt: '10/7/2023',
  },
  {
    id: 'e26c6036-ebde-45ed-893d-d0fd2ebbb389',
    firstName: 'Jenny',
    lastName: 'Zupone',
    email: 'jzuponet@pagesperso-orange.fr',
    passwordHash: 'uK4}iFX{m(/(+KU',
    role: 'ADMIN',
    createdAt: '7/22/2023',
    updatedAt: '2/2/2024',
  },
];

module.exports = mockUser;
