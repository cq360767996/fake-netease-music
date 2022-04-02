import { useEffect, useState, FC } from 'react';
import styles from './recommend.module.less';
import Img from '@/components/img';
import { getSimiPlaylist, getSimiSong } from '@/api';
import { Music, UserPlaylist } from '@/types';
import { classGenerator, resizeImg, wrapNumber } from '@/utils';

type Props = { id: number };

const Recommend: FC<Props> = ({ id }) => {
  const getClass = classGenerator('recommend', styles);
  const [simiPlaylist, setSimiPlaylist] = useState<UserPlaylist[]>([]);
  const [simiSong, setSimiSong] = useState<Music[]>([]);

  useEffect(() => {
    (async () => {
      const res = await getSimiPlaylist(id);
      setSimiPlaylist(res.playlists);
    })();

    (async () => {
      const res = await getSimiSong(id);
      setSimiSong(res.songs);
    })();
  }, [id]);
  return (
    <div className={getClass()}>
      <h2 className={getClass('title')}>包含这首歌的歌单</h2>
      {simiPlaylist.map(item => (
        <div key={item.id} className={getClass('item')}>
          <Img className={getClass('img')} src={resizeImg(item.coverImgUrl, 100)} />
          <div className={getClass('item-info')}>
            <div>{item.name}</div>
            <div>{wrapNumber(item.playCount)}</div>
          </div>
        </div>
      ))}
      <h2 className={getClass('title')}>相似歌曲</h2>
      {simiSong.map(item => (
        <div key={item.id} className={getClass('item')}>
          <Img className={getClass('img')} src={resizeImg(item.album.picUrl, 100)} icon />
          <div className={getClass('item-info')}>
            <div>{item.name}</div>
            <div>{item.artists.reduce((acc, val) => `${acc} ${val.name}`, '').slice(1)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recommend;
