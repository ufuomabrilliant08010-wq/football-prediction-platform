export const leagues = ['Premier League', 'Champions League', 'La Liga', 'Serie A', 'Bundesliga'];

export const liveMatches = [
  {
    id: 'arsenal-aston-villa',
    league: 'Premier League',
    status: 'Live',
    time: '19:45 GMT',
    score: '2 - 1',
    home: { name: 'Arsenal', short: 'ARS' },
    away: { name: 'Aston Villa', short: 'AVL' },
    markets: ['Home Win', 'Draw', 'Over 2.5', 'BTTS'],
  },
  {
    id: 'real-madrid-girona',
    league: 'La Liga',
    status: 'Live',
    time: '20:00 GMT',
    score: '1 - 0',
    home: { name: 'Real Madrid', short: 'RMA' },
    away: { name: 'Girona', short: 'GIR' },
    markets: ['Home Win', 'Over 1.5', 'BTTS', 'Draw'],
  },
  {
    id: 'inter-juventus',
    league: 'Serie A',
    status: 'Upcoming',
    time: '20:30 GMT',
    score: '—',
    home: { name: 'Inter', short: 'INT' },
    away: { name: 'Juventus', short: 'JUV' },
    markets: ['Home Win', 'Away Win', 'Over 2.5', 'BTTS'],
  },
  {
    id: 'bayern-borussia',
    league: 'Bundesliga',
    status: 'Upcoming',
    time: '18:30 GMT',
    score: '—',
    home: { name: 'Bayern Munich', short: 'BAY' },
    away: { name: 'Borussia Dortmund', short: 'BVB' },
    markets: ['Home Win', 'Draw', 'Over 2.5', 'BTTS'],
  },
];

export const leaderboard = [
  { name: 'Marco Silva', country: 'Portugal', balance: '42,680 VC', profit: '12,430', wins: 78, streak: 9 },
  { name: 'Selena Hart', country: 'England', balance: '41,920 VC', profit: '11,350', wins: 74, streak: 8 },
  { name: 'Omar Khatib', country: 'Morocco', balance: '39,840 VC', profit: '10,940', wins: 69, streak: 7 },
  { name: 'Alicia Parker', country: 'United Kingdom', balance: '38,260 VC', profit: '9,210', wins: 66, streak: 6 },
  { name: 'Giulia Rossi', country: 'Italy', balance: '36,980 VC', profit: '8,880', wins: 63, streak: 5 },
];

export const walletSummary = [
  { label: 'Available', value: '16,240 VC', caption: 'Ready to stake', icon: 'Wallet' },
  { label: 'Pending', value: '1,890 VC', caption: 'Settling soon', icon: 'Clock3' },
  { label: 'Won', value: '12,540 VC', caption: 'Cash-out equivalent', icon: 'TrendingUp' },
  { label: 'Lost', value: '7,120 VC', caption: 'This month', icon: 'TrendingDown' },
];

export const recentBets = [
  { id: 1, match: 'Arsenal vs Aston Villa', market: 'Home Win', stake: '220 VC', potential: '400 VC', result: 'Won' },
  { id: 2, match: 'Inter vs Juventus', market: 'Over 2.5', stake: '180 VC', potential: '380 VC', result: 'Pending' },
  { id: 3, match: 'Real Madrid vs Girona', market: 'BTTS', stake: '140 VC', potential: '235 VC', result: 'Lost' },
];

export const achievements = [
  { name: 'First Victory', progress: 100 },
  { name: 'Room to Grow', progress: 72 },
  { name: 'Weekly Winner', progress: 54 },
  { name: 'Top 10 Tracker', progress: 32 },
];

export const competitions = [
  { name: 'Champions Challenge', type: 'Weekly', prize: '1st Prize', entries: '8,240', deadline: '3 days', reward: '5,000 VC' },
  { name: 'Weekend Mastery', type: 'Monthly', prize: 'Top 20', entries: '4,910', deadline: '11 days', reward: '12,000 VC' },
  { name: 'Private League Invite', type: 'Invite', prize: 'Friends Cup', entries: '198', deadline: '1 day', reward: '2,500 VC' },
];

export const matchDetail: Record<string, any> = {
  'arsenal-aston-villa': {
    id: 'arsenal-aston-villa',
    league: 'Premier League',
    status: 'Live',
    time: '19:45 GMT',
    score: '2 - 1',
    home: { name: 'Arsenal', short: 'ARS' },
    away: { name: 'Aston Villa', short: 'AVL' },
    markets: [
      { label: 'Home Win', desc: 'Arsenal to win', odds: '1.82' },
      { label: 'Draw', desc: 'Match level after 90 mins', odds: '3.55' },
      { label: 'Away Win', desc: 'Aston Villa to win', odds: '4.35' },
      { label: 'Over 2.5 Goals', desc: 'Three or more goals', odds: '2.14' },
      { label: 'Both Teams To Score', desc: 'Goals for both clubs', odds: '1.68' },
    ],
  },
  'real-madrid-girona': {
    id: 'real-madrid-girona',
    league: 'La Liga',
    status: 'Live',
    time: '20:00 GMT',
    score: '1 - 0',
    home: { name: 'Real Madrid', short: 'RMA' },
    away: { name: 'Girona', short: 'GIR' },
    markets: [
      { label: 'Home Win', desc: 'Real Madrid to win', odds: '1.36' },
      { label: 'Draw', desc: 'Level after regulation time', odds: '5.20' },
      { label: 'Away Win', desc: 'Girona to win', odds: '8.10' },
      { label: 'Over 1.5 Goals', desc: 'Two or more goals', odds: '1.52' },
      { label: 'BTTS', desc: 'Both teams score', odds: '2.08' },
    ],
  },
};
