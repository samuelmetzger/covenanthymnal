// SAMPLE DATA for the Timeline page — swap for real fields in hymns-data.js
// (hymn.year, hymn.yearNote, hymn.story, hymn.eraId, hymn.featured, plus ERAS and WORLD_EVENTS exports).
// The page uses this file only while hymns-data.js has no featured hymns with years.
export const SAMPLE_ERAS = [
  { id: 'early', label: 'Early Church', start: 300, end: 600 },
  { id: 'medieval', label: 'Middle Ages', start: 600, end: 1500 },
  { id: 'reformation', label: 'Reformation', start: 1500, end: 1650 },
  { id: 'watts', label: 'The Age of Watts and Wesley', start: 1650, end: 1800 },
  { id: 'revivals', label: 'Revivals and the 1800s', start: 1800, end: 1900 },
  { id: 'modern', label: 'Modern Hymns', start: 1900, end: 2030 },
];
export const SAMPLE_WORLD_EVENTS = [
  { year: 313, label: 'Christianity made legal in the Roman Empire' },
  { year: 800, label: 'Charlemagne crowned emperor' },
  { year: 1066, label: 'The Normans conquer England' },
  { year: 1440, label: 'Gutenberg builds a printing press' },
  { year: 1492, label: 'Columbus reaches the Americas' },
  { year: 1620, label: 'The Mayflower lands at Plymouth' },
  { year: 1776, label: 'American Declaration of Independence' },
  { year: 1861, label: 'The American Civil War begins' },
  { year: 1903, label: 'The Wright brothers fly' },
  { year: 1969, label: 'First people walk on the Moon' },
];
export const SAMPLE_HYMNS = [
  { n: 93, year: 405, yearNote: '5th century', eraId: 'early', featured: true, story: 'Prudentius was a Roman lawyer and governor in Spain. At fifty-seven he gave up public life to write poems about the Christian faith, and this one has been sung for more than fifteen hundred years.' },
  { n: 523, year: 750, yearNote: '8th century', eraId: 'medieval', featured: true, authorName: 'Irish, 8th century; tr. Mary E. Byrne', composerName: 'Irish melody (SLANE)', story: 'These words were written in Ireland more than a thousand years ago and put into English in 1905. The tune is named SLANE, after the hill where St. Patrick is said to have lit an Easter fire in defiance of a pagan king.' },
  { n: 128, year: 1150, yearNote: 'ca. 1150', eraId: 'medieval', featured: true, story: 'The Latin words come from the Middle Ages, when monks sang a different “O” verse each evening in the week before Christmas. Emmanuel means “God with us.”' },
  { n: 65, year: 1529, yearNote: 'ca. 1529', eraId: 'reformation', featured: true, composerName: 'Martin Luther', story: 'Martin Luther wrote both the words and the tune, drawing on Psalm 46. It became the song of the Reformation, sung in the streets as well as in church.' },
  { n: 1, year: 1561, eraId: 'reformation', featured: true, story: 'William Kethe was an Englishman living in Geneva who turned Psalm 100 into verses everyone could sing. The tune is called OLD HUNDREDTH because of that psalm number.' },
  { n: 22, year: 1719, eraId: 'watts', featured: true, story: 'Isaac Watts, often called the father of English hymns, turned Psalm 90 into these verses. It is sung at New Year and on days when a nation remembers.' },
  { n: 212, year: 1739, eraId: 'watts', featured: true, story: 'Charles Wesley wrote about 6,500 hymns. This Easter hymn was sung at the first service in the Wesleys’ London chapel, which had been an old iron foundry.' },
  { n: 365, year: 1779, eraId: 'watts', featured: true, story: 'John Newton had been a sailor and a slave-ship captain before he became a pastor. He wrote these words for his New Year’s Day sermon in the village of Olney.' },
  { n: 313, year: 1826, eraId: 'revivals', featured: true, story: 'Reginald Heber wrote this for Trinity Sunday while a country vicar in England; he later became a bishop in India. The tune is named NICAEA after the council that gave us the Nicene Creed.' },
  { n: 562, year: 1876, yearNote: 'published 1876', eraId: 'revivals', featured: true, story: 'Horatio Spafford wrote these words after his four daughters were lost when their ship sank in the Atlantic. He wrote them as his own ship passed near the same place.' },
  { n: 59, year: 1923, eraId: 'modern', featured: true, story: 'Thomas Chisholm was a Kentucky schoolteacher and insurance salesman who was often unwell. He said there was no dramatic story behind the hymn — only God’s faithfulness, day after day.' },
  { n: 569, year: 2001, eraId: 'modern', featured: true, story: 'Keith Getty and Stuart Townend wrote this in Northern Ireland and England. It is the newest hymn on this timeline — written when many of today’s parents were children.' },
];
