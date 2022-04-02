import { Album as AlbumType, SearchAlbum } from '@/types';
import { FC } from 'react';
import List from '../list';
import { usePagination, Props } from '../hook';
import { SearchType } from '@/enum';
import { useHistory } from 'react-router-dom';
import { DynamicPage } from '@/router';

const Album: FC<Props> = props => {
  const params = { ...props, currentType: SearchType.ALBUM };
  const { wrapEmpty } = usePagination<SearchAlbum>(params);
  const { push } = useHistory();

  function listDataAdapter(albums: AlbumType[]) {
    return albums.map(album => {
      const { picUrl: imgUrl, name, artist, id } = album;
      const { name: artistName, alias } = artist;
      const col2 = `${artistName}（${alias.join(',')}）`;
      return { id, imgUrl, name, col2 };
    });
  }

  return wrapEmpty(data => (
    <List
      imgType="extra"
      data={listDataAdapter(data.albums)}
      onItemClick={({ id }) => push(DynamicPage.list(id, 'album'))}
    />
  ));
};

export default Album;
