const GOOGLE_API_KEY = '--';  
export const YOUTUBE_API_URL = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+ GOOGLE_API_KEY;
export const YOUTUBE_BASE_URL = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&';

export default GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_URL = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=' + GOOGLE_API_KEY;