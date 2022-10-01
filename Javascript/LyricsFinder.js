/*
* Lyrics Finder using google search
* Coded by: @Evaasmakula
*/

const axios = require('axios');
const { decode } = require('html-entities');

async function fetchHtml(title) {
  const options = {
    header: {
      'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4918.0 Safari/537.36',
      referer: 'https://www.google.com/',
    },
  };
  const html = await axios.get(`https://www.google.com/search?q=${encodeURIComponent(title)}+lyrics`, options);
  return html.data;
}

async function lyrics(title) {
  title = title
    .toLowerCase()
    .replace(
      new RegExp(
        /((\[|\()(?!.*?(remix|edit|remake)).*?(\]|\))|\/+|-+| x |,|"|video oficial|official lyric video| ft.?|\|+|yhlqmdlg|x100pre|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF]|\u274C)/,
        'g',
      ),
      '',
    )
    .replace(new RegExp(/  +/, 'g'), ' ')
    .trim();

  try {
    const HTML = await fetchHtml(title);

    let titles = decode(
      HTML.split('<span class="BNeawe tAd8D AP7Wnd">')[1].split('</span>')[0]
    )

    let artis = decode(
      HTML.split('<span class="BNeawe s3v9rd AP7Wnd">')[2].split('</span>')[0]
    )

    let sources = decode(
      HTML.split('span class="uEec3 AP7Wnd">')[1].split('</span></a></span></div></span><span class="hwc"><div class="BNeawe uEec3 AP7Wnd">')[0]
    )

    let lyrics = decode(
      HTML.split('</div></div></div></div><div class="hwc"><div class="BNeawe tAd8D AP7Wnd"><div><div class="BNeawe tAd8D AP7Wnd">')[1]
        .split('</div></div></div></div></div><div><span class="hwc"><div class="BNeawe uEec3 AP7Wnd">')[0]
        .replace(new RegExp(/<span dir="rtl">|<\/span>/, 'g'), '')
        .trim()
    )
    return {
      code: 200,
      message: 'Success',
      data: {
        title: titles,
        artis,
        source: sources,
        lyrics
      }
    };
  } catch (error) {
    return {
      code: 500,
      error: 'Lyrics not found'
    };
  }
}


module.exports = lyrics