/* ESV reference linker — Covenant Hymnal website
 *
 * Finds Scripture references in the page text ("Psalm 100", "Revelation 4:9–11; 5:11–14",
 * "1 Chronicles 16:34") and wraps each in a link to the passage on ESV.org, e.g.
 * https://www.esv.org/Revelation+4:9-11/ . Existing links, headings, scripts and code are left alone.
 * Load the ESV CrossReference Tool after this (see the bottom) for hover pop-ups of the verse text.
 *
 * Usage: include this file with a script tag; it runs on DOMContentLoaded over document.body,
 *         or call  linkScripture(element)  yourself after inserting content.
 */
(function () {
  var BOOKS = [
    'Genesis','Exodus','Leviticus','Numbers','Deuteronomy','Joshua','Judges','Ruth',
    '1 Samuel','2 Samuel','1 Kings','2 Kings','1 Chronicles','2 Chronicles','Ezra','Nehemiah','Esther',
    'Job','Psalms','Psalm','Proverbs','Ecclesiastes','Song of Solomon','Song of Songs','Isaiah','Jeremiah',
    'Lamentations','Ezekiel','Daniel','Hosea','Joel','Amos','Obadiah','Jonah','Micah','Nahum','Habakkuk',
    'Zephaniah','Haggai','Zechariah','Malachi',
    'Matthew','Mark','Luke','John','Acts','Romans','1 Corinthians','2 Corinthians','Galatians','Ephesians',
    'Philippians','Colossians','1 Thessalonians','2 Thessalonians','1 Timothy','2 Timothy','Titus','Philemon',
    'Hebrews','James','1 Peter','2 Peter','1 John','2 John','3 John','Jude','Revelation'
  ];
  // one-chapter books take a bare verse number as the verse, not the chapter
  var ONE_CHAPTER = { 'Obadiah':1, 'Philemon':1, '2 John':1, '3 John':1, 'Jude':1 };
  var bookAlt = BOOKS.map(function (b) { return b.replace(/ /g, '\\s'); }).join('|');
  // book, chapter, optional :verses, then any number of "; chapter:verses" or ", verses" continuations
  var REF = new RegExp(
    '\\b(' + bookAlt + ')\\s+(\\d{1,3})(?::(\\d{1,3}(?:\\s*[–-]\\s*\\d{1,3})?(?:\\s*,\\s*\\d{1,3}(?:\\s*[–-]\\s*\\d{1,3})?)*))?' +
    '((?:\\s*;\\s*\\d{1,3}:\\d{1,3}(?:\\s*[–-]\\s*\\d{1,3})?(?:\\s*,\\s*\\d{1,3}(?:\\s*[–-]\\s*\\d{1,3})?)*)*)', 'g');

  function url(book, chapter, verses) {
    book = book.replace(/\s+/g, ' ');
    if (book === 'Psalms') book = 'Psalm';
    if (book === 'Song of Songs') book = 'Song of Solomon';
    var ref = book + ' ' + chapter + (verses ? ':' + verses.replace(/\s+/g, '').replace(/–/g, '-') : '');
    return 'https://www.esv.org/' + encodeURIComponent(ref).replace(/%20/g, '+').replace(/%3A/g, ':').replace(/%2C/g, ',') + '/';
  }

  function makeLink(text, href) {
    var a = document.createElement('a');
    a.href = href; a.className = 'esv'; a.target = '_blank'; a.rel = 'noopener'; a.textContent = text;
    return a;
  }

  function linkTextNode(node) {
    var text = node.nodeValue, m, last = 0, frag = null;
    REF.lastIndex = 0;
    while ((m = REF.exec(text))) {
      var book = m[1], chapter = m[2], verses = m[3] || '', tail = m[4] || '';
      var whole = m[0];
      if (!frag) frag = document.createDocumentFragment();
      frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      if (ONE_CHAPTER[book.replace(/\s+/g, ' ')] && !verses) { verses = chapter; chapter = '1'; }
      // first reference
      var head = whole.slice(0, whole.length - tail.length);
      frag.appendChild(makeLink(head, url(book, chapter, verses)));
      // "; 5:11–14" continuations share the book
      if (tail) {
        var parts = tail.split(/(;\s*)/);
        for (var i = 0; i < parts.length; i++) {
          var p = parts[i];
          var cm = p.match(/^\s*(\d{1,3}):(.+)$/);
          if (cm) frag.appendChild(makeLink(p, url(book, cm[1], cm[2])));
          else if (p) frag.appendChild(document.createTextNode(p));
        }
      }
      last = m.index + whole.length;
    }
    if (frag) {
      frag.appendChild(document.createTextNode(text.slice(last)));
      node.parentNode.replaceChild(frag, node);
    }
  }

  var SKIP = { A:1, SCRIPT:1, STYLE:1, CODE:1, PRE:1, H1:1, H2:1, H3:1, TITLE:1, TEXTAREA:1 };
  function walk(el) {
    var kids = Array.prototype.slice.call(el.childNodes);
    for (var i = 0; i < kids.length; i++) {
      var n = kids[i];
      if (n.nodeType === 3) linkTextNode(n);
      else if (n.nodeType === 1 && !SKIP[n.nodeName] && !n.classList.contains('no-esv')) walk(n);
    }
  }

  window.linkScripture = function (root) { walk(root || document.body); };
  // <script src="esv-links.js" data-manual> skips the automatic pass; call linkScripture(el) yourself.
  if (document.currentScript && document.currentScript.hasAttribute('data-manual')) return;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { walk(document.body); });
  else walk(document.body);
})();

/* Hover pop-ups: add this line after the script above (once per page).
   a script tag with src="https://static.esvmedia.org/crossref/crossref.min.js"
   Options (before the script): window.ESV_CROSSREF_OPTIONS = { header_background_color: '1f2a44', ... } */
