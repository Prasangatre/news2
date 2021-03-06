import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class news extends Component {
  articles = [
    {
      "source": { "id": null, "name": "CBS Sports" },
      "author": "Chip Patterson",
      "title": "National Signing Day 2022: Live updates, college football recruiting rankings, top class rankings - CBSSports.com",
      "description": "Watch live signing day coverage for the Class of 2022 and follow the latest college football recruiting updates",
      "url": "https://www.cbssports.com/college-football/news/national-signing-day-2022-live-updates-college-football-recruiting-rankings-top-class-rankings/live/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/02/01/ae9a5050-57f6-496a-8764-9690e3e55c07/thumbnail/1200x675/2b40707569023d53f143450b63d67091/2022signingdaycover-story.png",
      "publishedAt": "2022-02-02T16:35:33Z",
      "content": "The final opportunity for high school prospects to lock up scholarships and formally sign National Letters of Intent begins Wednesday with the traditional National Signing Day for the Class of 2022. … [+1655 chars]"
    },
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Natasha Bertrand, Barbara Starr and Jeremy Herb, CNN",
      "title": "US troops to deploy to Eastern Europe amid Ukraine crisis - CNN",
      "description": "President Joe Biden has formally approved the deployment of 3,000 US troops to Poland, Germany and Romania, the Pentagon announced Wednesday, in a move to bolster NATO countries in Eastern Europe with tens of thousands of Russian troops amassed along Ukraine'…",
      "url": "https://www.cnn.com/2022/02/02/politics/us-troops-europe-russia/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220128160025-01-biden-0111-super-tease.jpg",
      "publishedAt": "2022-02-02T16:28:00Z",
      "content": "(CNN)President Joe Biden has formally approved the deployment of 3,000 US troops to Poland, Germany and Romania, the Pentagon announced Wednesday, in a move to bolster NATO countries in Eastern Europ… [+3737 chars]"
    },
    {
      "source": { "id": null, "name": "Investor's Business Daily" },
      "author": "Investor's Business Daily",
      "title": "Google Stock Jumps As Earnings Beat, Alphabet Announces 20-For-1 Stock Split - Investor's Business Daily",
      "description": "Google-parent Alphabet reported earnings and revenue that topped estimates and announced a 20-for-1 stock split, sending Google stock up.",
      "url": "https://www.investors.com/news/technology/google-stock-rises-as-earnings-beat-alphabet-announces-20-for-1-stock-split/",
      "urlToImage": "https://www.investors.com/wp-content/uploads/2018/04/stock-Google-10-company.jpg",
      "publishedAt": "2022-02-02T16:00:00Z",
      "content": "Google-parent Alphabet reported December-quarter earnings and revenue that topped analyst estimates and announced a 20-for-1 stock split, sending Google stock surging in early trading on Wednesday.\r\n… [+3510 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Peter Rudegeair, Caitlin Ostroff",
      "title": "PayPal Shares Tumble After Disappointing Outlook - The Wall Street Journal",
      "description": "Payments giant cited effect of inflation on personal spending in tempering its growth outlook for the year",
      "url": "https://www.wsj.com/articles/paypal-shares-tumble-premarket-after-disappointing-outlook-11643803513",
      "urlToImage": "https://images.wsj.net/im-478401/social",
      "publishedAt": "2022-02-02T15:10:00Z",
      "content": "PayPal Holdings Inc.\r\n PYPL -24.30%\r\nshares headed toward their worst one-day performance on record after the company lowered its profit outlook for 2022 and walked back an ambitious growth strategy … [+2312 chars]"
    },
    {
      "source": { "id": null, "name": "YouTube" },
      "author": null,
      "title": "Dying Light 2 Stay Human Review In Progress - GameSpot",
      "description": "Techland's undead sequel Dying Light 2 improves upon the strongest element of its predecessor, but things like story and characters drag it down.#DyingLight2",
      "url": "https://www.youtube.com/watch?v=BWsuIhB0-Os",
      "urlToImage": "https://i.ytimg.com/vi/BWsuIhB0-Os/maxresdefault.jpg",
      "publishedAt": "2022-02-02T15:00:05Z",
      "content": null
    },
    {
      "source": { "id": null, "name": "The Guardian" },
      "author": "Gloria Oladipo",
      "title": "Biden to revive Obama-era plan to ‘end cancer as we know it’ – US politics live - The Guardian",
      "description": "President’s ambitious plan aims to cut cancer death rates in half – follow all the day’s politics news",
      "url": "https://www.theguardian.com/us-news/live/2022/feb/02/biden-cancer-moonshot-ukraine-russia-us-politics-live",
      "urlToImage": "https://i.guim.co.uk/img/media/43caf7b2baa3c1ac99ec82f4049b705395bb9e52/0_81_5183_3112/master/5183.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=3e289e52d258fcd7a59c44113dea5465",
      "publishedAt": "2022-02-02T14:53:09Z",
      "content": null
    },
    {
      "source": { "id": null, "name": "STYLECASTER" },
      "author": "Jenzia Burgos",
      "title": "Tommy Lee Net Worth 2022: Pamela Anderson Divorce Settlement, Prenup - StyleCaster",
      "description": "He spent millions on their divorce.",
      "url": "https://stylecaster.com/tommy-lee-net-worth/",
      "urlToImage": "https://stylecaster.com/wp-content/uploads/2022/01/tommy-lee-net-worth.png",
      "publishedAt": "2022-02-02T14:45:00Z",
      "content": "Scroll To See More Images\r\nAs the lead drummer of Mötley Crüe, Tommy Lees net worth has always reflected his rock star lifestylewhether were talking the good or the bad. Of course, this includes the … [+6884 chars]"
    },
    {
      "source": { "id": null, "name": "NBCSports.com" },
      "author": "Mike Florio",
      "title": "Jim Harbaugh wants Vikings; do Vikings want Jim Harbaugh? - NBC Sports",
      "description": "Michigan coach Jim Harbaugh, by virtue of the fact that he’s interviewing for an NFL job on national signing day, clearly wants to coach the Minnesota Vikings. But do the Vikings want him?Per a league source, Harbaugh has no yet been offered the job. He belie…",
      "url": "https://profootballtalk.nbcsports.com/2022/02/02/jim-harbaugh-wants-vikings-do-vikings-want-jim-harbaugh/",
      "urlToImage": "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2022/01/GettyImages-1357982557-e1642640426706.jpg",
      "publishedAt": "2022-02-02T14:17:00Z",
      "content": "Michigan coach Jim Harbaugh, by virtue of the fact that hes interviewing for an NFL job on national signing day, clearly wants to coach the Minnesota Vikings. But do the Vikings want him?\r\nPer a leag… [+952 chars]"
    },
    {
      "source": { "id": null, "name": "Chicago Tribune" },
      "author": "Katherine Rosenberg-Douglas",
      "title": "Snowstorm updates: More than 4 inches fell in Chicago, another 6 inches could fall by noon - Chicago Tribune",
      "description": "Although concerns remained about the safety of the morning commute, as most roads in the area were snow and ice-covered, Chicago Public Schools tweeted at 5 a.m. Wednesday that all buildings are open for in-person classes, and a decision about Thursday is pen…",
      "url": "https://www.chicagotribune.com/weather/ct-chicago-weather-snowstorm-groundhog-day-20220202-mhc4tucfsfdlxhfolbwh6f6o6m-story.html",
      "urlToImage": "https://www.chicagotribune.com/resizer/OBLqxxe1bpJs5aI-C_3AXKxfvv8=/1200x0/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/JDT6QXJTCJESXB3LHSTSHGJJ64.jpg",
      "publishedAt": "2022-02-02T14:15:00Z",
      "content": "More than 8 inches of snow had fallen in parts of Chicago and Cook County by 9 a.m., while the official city tally taken at OHare International Airport remained at 1.5 inches, even though forecasters… [+7128 chars]"
    },
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Ben Morse, CNN",
      "title": "Accidental Belichick text at center of coach's NFL discrimination lawsuit - CNN",
      "description": "Brian Flores, the former head coach of the Miami Dolphins, says that his kids were the inspiration to fight the NFL and what tipped him over the edge to file the lawsuit against the league and three teams alleging racial discrimination.",
      "url": "https://www.cnn.com/2022/02/02/sport/brian-flores-lawsuit-interview-nfl-spt-intl/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220202064705-01-brian-flores-file-01092022-restricted-super-tease.jpg",
      "publishedAt": "2022-02-02T14:13:00Z",
      "content": "(CNN)Brian Flores, the former head coach of the Miami Dolphins, says that his kids were the inspiration to fight the NFL and what tipped him over the edge to file the lawsuit against the league and t… [+4098 chars]"
    },
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Charles Riley, CNN Business",
      "title": "OPEC and Russia keep promising to pump more oil. They're not delivering - CNN",
      "description": "Here's one big reason oil prices are near a seven-year high: OPEC and Russia are producing less than they promised.",
      "url": "https://www.cnn.com/2022/02/02/investing/opec-saudi-arabia-oil-prices/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220202115345-02-opec-production-output-super-tease.jpg",
      "publishedAt": "2022-02-02T14:11:00Z",
      "content": null
    },
    {
      "source": { "id": null, "name": "New York Post" },
      "author": "Jenna Lemoncelli",
      "title": "Tom Brady slammed as 'cold, calculating' for Patriots retirement snub - New York Post ",
      "description": "Former Patriots quarterback Scott Zolak joined critics in their displeasure with Tom Brady’s retirement announcement, which failed to mention his former team.",
      "url": "https://nypost.com/2022/02/02/scott-zolak-slams-tom-brady-for-patriots-snub-in-retirement-post/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/02/newspress-collage-21060207-1643808806718.png?w=1024",
      "publishedAt": "2022-02-02T13:58:00Z",
      "content": "Former Patriots quarterback Scott Zolak joined critics in their displeasure with Tom Brady’s retirement announcement, which failed to mention his former team. \r\nZolak, who played seven seasons in New… [+2781 chars]"
    },
    {
      "source": { "id": null, "name": "Florida Today" },
      "author": "Emre Kelly and Dave Berman, Florida Today",
      "title": "Coast Guard starts investigation of Royal Caribbean ship that caused SpaceX scrub - Florida Today",
      "description": "The ship veered into the exclusion zone along a Falcon 9 rocket's flightpath Sunday evening, forcing SpaceX to stand down from the mission",
      "url": "https://www.floridatoday.com/story/money/business/2022/01/31/coast-guard-begins-investigation-royal-caribbean-ship-caused-spacex-scrub/9287700002/",
      "urlToImage": "https://www.gannett-cdn.com/presto/2019/05/06/PBRE/1ce9577b-5285-40f3-bf03-759a37b83eef-Harmony_of_the_Sea_sails_1.JPG?auto=webp&crop=5567,3117,x0,y0&format=pjpg&width=1200",
      "publishedAt": "2022-02-02T13:56:33Z",
      "content": "A Coast Guard investigation is underway after the Royal Caribbean cruise ship Harmony of the Seas was responsible for Sunday evening's scrub of a SpaceX launch from Cape Canaveral Space Force Station… [+4322 chars]"
    },
    {
      "source": { "id": null, "name": "Benzinga" },
      "author": "Adam Eckert",
      "title": "Why Starbucks Shares Are Sliding Today - Benzinga - Benzinga",
      "description": "Starbucks Corp (NASDAQ: SBUX) is trading lower Wednesday morning after the company announced worse-than-expected fiscal first-quarter earnings results.",
      "url": "https://www.benzinga.com/node/25363510",
      "urlToImage": "https://cdn.benzinga.com/files/images/story/2012/starbucks-g7c352668e_1280.jpg?width=1200&height=800&fit=crop",
      "publishedAt": "2022-02-02T13:36:00Z",
      "content": "TODAY ONLY! For only $7, you can get 2 winning options trade alerts every month! Click Here to See Trade Ideas! (Risk-free with a 14 day refund guarantee)Starbucks Corp SBUX is trading lower Wednesda… [+2989 chars]"
    },
    {
      "source": { "id": null, "name": "New York Times" },
      "author": "Jenny Gross, Neil Vigdor",
      "title": "ABC Suspends Whoopi Goldberg Over Holocaust Comments - The New York Times",
      "description": "Ms. Goldberg’s comments, on Monday’s episode of “The View,” came amid growing ignorance about the Holocaust and rising antisemitism. She has apologized.",
      "url": "https://www.nytimes.com/2022/02/01/us/whoopi-goldberg-holocaust.html",
      "urlToImage": "https://static01.nyt.com/images/2022/02/01/multimedia/01whoopi-promo/01whoopi-promo-facebookJumbo.jpg",
      "publishedAt": "2022-02-02T13:22:00Z",
      "content": "On Mondays program, Ms. Goldberg had been discussing a Tennessee school districts recent decision to remove a Pulitzer Prize-winning graphic novel about the Holocaust from its curriculum. On Monday n… [+1517 chars]"
    },
    {
      "source": { "id": "ars-technica", "name": "Ars Technica" },
      "author": "Corey Gaskin",
      "title": "Chromecast, Fire TV Stick, or Roku: What’s the best streaming stick for ~$50? - Ars Technica",
      "description": "We pit the premier streaming sticks around $50 head-to-head to see which is best.",
      "url": "https://arstechnica.com/gadgets/2022/02/4k-streamer-showdown-chromecast-vs-amazon-fire-tv-stick-vs-roku-streaming-stick/",
      "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2020/09/chrome_slTTpq3sq4-760x380.jpg",
      "publishedAt": "2022-02-02T13:10:51Z",
      "content": "243 with 158 posters participating\r\nWe've overhauled our guide to the best streaming sticks to account for the new devices and OS updates launched by Amazon, Roku, and Google since our initial compar… [+4696 chars]"
    },
    {
      "source": { "id": null, "name": "Yahoo Entertainment" },
      "author": "Lyndsey Parker",
      "title": "First-time nominees Duran Duran, Dolly Parton, Eminem, A Tribe Called Quest lead Rock & Roll Hall of Fame's Class of 2022 ballot - Yahoo Entertainment",
      "description": "This year’s super-sized ballot features several first-time and past nominees who arguably should have been inducted long ago.",
      "url": "https://www.yahoo.com/entertainment/first-time-nominees-duran-duran-dolly-parton-eminem-a-tribe-called-quest-lead-rock-roll-hall-of-fames-class-of-2022-ballot-131013859.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/XGuVZyXJWybKXF33PjfUgw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02MTg-/https://s.yimg.com/os/creatr-uploaded-images/2022-02/4a87b650-83b5-11ec-8db7-ce27603363c7",
      "publishedAt": "2022-02-02T13:10:13Z",
      "content": "Duran Duran's Simon Le Bon, Dolly Parton, Eminem, A Tribe Called Quest's Q-Tip (Photos: John Swannell, Getty Images)\r\nThe nominations for the Rock &amp; Roll Hall of Fame Class of 2022 have just been… [+3687 chars]"
    },
    {
      "source": { "id": "politico", "name": "Politico" },
      "author": null,
      "title": "Jan. 6 committee member: Trump 'absolutely' tampering with witnesses - POLITICO",
      "description": "The former president has repeatedly suggested that he may pardon the Capitol rioters or other people associated with the insurrection if he wins a second term.",
      "url": "https://www.politico.com/news/2022/02/02/jan-6-committee-trump-witnesses-00004559",
      "urlToImage": "https://static.politico.com/6c/e1/e4db6e934c13b19fdd0b8a272a24/https-delivery.gettyimages.com/downloads/1234241030",
      "publishedAt": "2022-02-02T12:42:46Z",
      "content": "Another thing well do and so many people have been asking me about it if I run and if I win, we will treat those people from Jan. 6 fairly. We will treat them fairly, Trump said at a rally in Texas l… [+2040 chars]"
    },
    {
      "source": { "id": null, "name": "Page Six" },
      "author": "Ian Mohr",
      "title": "Paris Jackson brought to tears at Michael Jackson musical opening - Page Six",
      "description": "Paris teared up in the audience during an emotional duet of “I’ll Be There” and was seen wiping tears from her eyes while sitting with her brothers.",
      "url": "https://pagesix.com/2022/02/02/paris-jackson-brought-to-tears-at-michael-jackson-musical/",
      "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2022/02/jackson-siblings.jpg?quality=90&strip=all&w=1200",
      "publishedAt": "2022-02-02T12:32:00Z",
      "content": "Paris Jackson was brought to tears at the opening night of MJ: The Musical” on Tuesday. \r\nThe model-actress attended the new Broadway show about her late dad, Michael Jackson, at the Neil Simon Theat… [+2998 chars]"
    },
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Katie Hunt, CNN",
      "title": "NASA plans to retire the International Space Station by 2031 by crashing it into the Pacific Ocean - CNN",
      "description": "NASA intends to keep operating the International Space Station until the end of 2030, after which the ISS would be crashed into a remote part of the Pacific Ocean known as Point Nemo, according to newly published plans outlining its future.",
      "url": "https://www.cnn.com/2022/02/02/world/nasa-international-space-station-retire-iss-scn/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220127194643-01-international-space-station-file-2021-super-tease.jpg",
      "publishedAt": "2022-02-02T11:59:00Z",
      "content": "(CNN)NASA intends to keep operating the International Space Station until the end of 2030, after which the ISS would be crashed into a remote part of the Pacific Ocean known as Point Nemo, according … [+3874 chars]"
    }
  ]
  constructor(){
    super();

    this.state={
      articles:this.articles
    }
  }
  async componentDidMount(){


    let url ="https://newsapi.org/v2/top-headlines?country=us&apiKey=050913f0e19a4d5681021944443521c5"
    let data = await fetch(url);
    let parsedData= await data.json()
console.log(parsedData);
this.setState({articles:parsedData.articles})  }
  render() {
    return (
     
      <div className="container my-3">
        <h2>NEWS-MANIA</h2>
        <div className="row"> {this.state.articles.map((element)=>{
          return <div className="col md-3" key={element.url}>
          <NewsItem
          key={element.url}
            title={element.title}
            description={element.description}
            imageUrl={element.urlToImage}
            newsUrl={element.url}
          />
        </div>
        })} </div>
      
       
          
    
      </div>
    
    )
  }
}

export default news
