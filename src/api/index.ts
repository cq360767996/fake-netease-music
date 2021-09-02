import {
  Album,
  Artist,
  BannerType,
  Data,
  DJCatelist,
  DJPersonalizeRecommend,
  DJRadio,
  DJToplist,
  DJToplistPay,
  Lyric,
  Music,
  MVSublist,
  MVType,
  Personalized,
  Playlist,
  PlaylistCatlist,
  PlaylistDetail,
  Song,
  TopAlbumParams,
  Toplist,
  TopPlaylist,
  VideoCategogy,
  VideoType,
  Track,
  ArtistListParams,
  TopPlaylistParams,
  CommentMusic,
  TopAlbum,
} from '@/types';
import { get } from './api';

export * from './login';

export const getBanner = () => get<{ banners: BannerType[] }>('/banner');
export const getDJBanner = () =>
  get<{ data: { targetId: number; pic: string; url: string }[] }>('/dj/banner');

export const getPersonalized = (params: Data) => get<Personalized[]>('/personalized', params);

export const getPPList = (params: Data) =>
  get<Personalized[]>('/personalized/privatecontent/list', params);

export const getPersonalizedMV = () => get<Personalized[]>('/personalized/mv');

export const getAlbumNewest = () => get<{ albums: Album[] }>('/album/newest');

export const getDJToplist = (limit = 6) => get<{ toplist: DJToplist[] }>('/dj/toplist', { limit });

export const getSongUrl = (id: number) => get<{ data: Song[] }>('/song/url', { id });

export const getLyric = (id: number | string) => get<Lyric>('/lyric', { id });

export const getPersonalFM = () => get<{ data: Array<Music> }>('/personal_fm');

export const getCommentMusic = (id: number | string, offset = 0) =>
  get<CommentMusic>('/comment/music', { id, offset });

export const getMusicCategory = () => get<{ tags: Playlist[] }>('/playlist/hot');

export const getAllMusicCategory = () => get<PlaylistCatlist>('/playlist/catlist');

export const getTopPlaylist = ({ offset, limit, cat }: TopPlaylistParams) =>
  get<{ total: number; playlists: TopPlaylist[] }>('/top/playlist', { cat, offset, limit });

export const getDJCatelist = () => get<{ categories: DJCatelist[] }>('/dj/catelist');

export const getDJPersonalizeRecommend = (limit = 5) =>
  get<{ data: DJPersonalizeRecommend[] }>('/dj/personalize/recommend', { limit });

export const getDJPaygift = (limit = 4) =>
  get<{ data: { list: DJRadio[] } }>('/dj/paygift', { limit });

export const getDJToplistPay = (limit = 5) =>
  get<{ data: { list: DJToplistPay[] } }>('/dj/toplist/pay', { limit });

export const getDJRecommendType = (type: number) =>
  get<{ djRadios: DJRadio[] }>('/dj/recommend/type', { type });

export const getToplist = () => get<{ list: Toplist[] }>('/toplist');

export const getToplistDetail = () => get('/toplist/detail');

export const getPlaylistDetail = (id: number) =>
  get<{ playlist: PlaylistDetail }>('/playlist/detail', { id });

export const getArtistList = (params?: ArtistListParams) =>
  get<{ artists: Artist[] }>('/artist/list', params);

export const getTopSong = (type: number) => get<{ data: Song[] }>('/top/song', { type });

export const getTopAlbum = (params: TopAlbumParams) => get<TopAlbum>('/top/album', params);

export const getVideoCategoryList = () => get<{ data: VideoCategogy[] }>('/video/category/list');

export const getVideoGroup = (id: number, offset = 0) =>
  get<{ datas: VideoType[] }>('/video/group', { id, offset });

export const getMVFirst = (area: string, limit = 6) =>
  get<{ data: MVType[] }>('/mv/first', { area, limit });

export const getMVAll = (limit = 6) => get<{ data: MVType[] }>('/mv/all', { limit });
export const getMVExclusiveRcmd = (limit = 6) =>
  get<{ data: MVType[] }>('/mv/exclusive/rcmd', { limit });

export const getTopMV = (limit = 10) => get<{ data: MVType[] }>('/top/mv', { limit });

export const getDJSublist = () => get<{ count: number; djRadios: DJRadio[] }>('/dj/sublist');

export const getAlbumSublist = () => get<{ data: Album[] }>('/album/sublist');

export const getArtistSublist = () => get<{ data: Artist[] }>('/artist/sublist');

export const getMVSublist = () => get<{ data: MVSublist[] }>('/mv/sublist');

export const getSimiPlaylist = (id: number) =>
  get<{ playlists: Playlist[] }>('/simi/playlist', { id });

export const getSimiSong = (id: number) => get<{ songs: Music[] }>('/simi/song', { id });

export const getTopPlaylistHighquality = (cat: string, limit = 1) =>
  get<{ playlists: Playlist[] }>('/top/playlist/highquality', { cat, limit });

export const getSongDetail = (ids: string | number) =>
  get<{ songs: Track[] }>('/song/detail', { ids });
