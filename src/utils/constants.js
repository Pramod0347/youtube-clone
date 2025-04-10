const GOOGLE_API_KEY = 'AIzaSyBezDvWkBLV3WuaoLAlYOhUTDYlOxfmVCs';  
export const YOUTUBE_API_URL = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+ GOOGLE_API_KEY;
export const YOUTUBE_BASE_URL = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&';
export const YOUTUBE_SEARCH_VIDEO_URL = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key='+ GOOGLE_API_KEY;

export default GOOGLE_API_KEY;

export const LIVE_OFFSET_VALUE = 15;

export const YOUTUBE_SEARCH_URL = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Query&q=';