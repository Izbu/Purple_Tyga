export default async function handler(req, res) {
  try {
    const response = await fetch("https://www.youtube.com/@PurpleTyga/live", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
      },
    });

    const html = await response.text();

    const isLive =
      html.includes('"isLiveBroadcast":true') ||
      html.includes('"style":"LIVE"') ||
      html.includes('"BADGE_STYLE_TYPE_LIVE_NOW"');

    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=30");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json({ isLive });
  } catch {
    res.json({ isLive: false });
  }
}
