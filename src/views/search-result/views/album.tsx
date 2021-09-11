import { Album as AlbumType, SearchAlbum } from '@/types';
import React from 'react';
import List from '../list';
import { usePagination, Props } from '../hook';
import { SearchType } from '@/enum';

const Album: React.FC<Props> = props => {
  const params = { ...props, currentType: SearchType.ALBUM };
  const { wrapEmpty } = usePagination<SearchAlbum>(params);

  function listDataAdapter(albums: AlbumType[]) {
    return albums.map(album => {
      const { picUrl: imgUrl, name, artist, id } = album;
      const { name: artistName, alias } = artist;
      const col2 = `${artistName}（${alias.join(',')}）`;
      return { id, imgUrl, name, col2 };
    });
  }

  return wrapEmpty(data => <List imgType="extra" data={listDataAdapter(data.albums)} />);
};

export default Album;
