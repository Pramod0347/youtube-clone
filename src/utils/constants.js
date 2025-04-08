const GOOGLE_API_KEY = 'AIzaSyBezDvWkBLV3WuaoLAlYOhUTDYlOxfmVCs';  
export const YOUTUBE_API_URL = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+ GOOGLE_API_KEY;
export const YOUTUBE_BASE_URL = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&';

export default GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_URL = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Query&q=';