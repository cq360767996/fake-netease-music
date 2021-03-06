import { useEffect, useMemo, useState, Suspense, lazy, FC } from 'react';
import './singer.less';
import Img from '@/components/img';
import { FileAddOutlined, UserOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import ButtonGroup from '@/views/user/button-group';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { getArtistDetail, getArtistAlbum } from '@/api';
import { Album as AlbumType, Artist, UserProfile } from '@/types';
import { PageMode } from '@/views/user/music-present';
import { classGenerator, resizeImg } from '@/utils';
import Button from '@/components/button';
import { DynamicPage } from '@/router';
import { clearRequests } from '@/api/api';

const Album = lazy(() => import('@/views/user/music-present'));
const MV = lazy(() => import('./mv'));
const Detail = lazy(() => import('./detail'));
const Similar = lazy(() => import('./similar'));

const Singer: FC = () => {
  const getClass = classGenerator('singer');
  const params = useParams<{ id: string }>();
  const id = useMemo(() => Number(params.id), [params.id]);
  const location = useLocation<string[]>();
  const alias = location.state;
  const [activeKey, setActiveKey] = useState('album');
  const [artistDetail, setArtistDetail] = useState<Artist>();
  const [user, setUser] = useState<UserProfile>();
  const [albums, setAlbums] = useState<AlbumType[]>([]);
  const [activeButton, setActiveButton] = useState<PageMode>('overview');
  const { push } = useHistory();

  const extraContent =
    activeKey === 'album'
      ? { right: <ButtonGroup {...{ activeButton, setActiveButton }} /> }
      : undefined;

  async function loadArtistDetail() {
    const artistDetail = await getArtistDetail(id);
    artistDetail.data.artist.alias = alias;
    setArtistDetail(artistDetail.data.artist);
    setUser(artistDetail.data.user);
  }

  async function loadArtistAlbum() {
    const albums = await getArtistAlbum(id);
    setAlbums(albums.hotAlbums);
  }

  useEffect(() => {
    if (Number.isNaN(id)) return;
    loadArtistDetail();
    loadArtistAlbum();

    return clearRequests;
  }, [id]);

  return (
    <div className={getClass()}>
      <header className={getClass('header')}>
        <Img
          src={artistDetail?.cover && resizeImg(artistDetail.cover)}
          className={getClass('img')}
        />
        <section className={getClass('right')}>
          <h2>{artistDetail?.name}</h2>
          <h3>{artistDetail?.alias?.join(' ')}</h3>
          <div>
            <Button className={getClass('button')}>
              <FileAddOutlined />
              ??????
            </Button>
            <Button
              className={getClass('button')}
              onClick={() => push(DynamicPage.user(user?.userId))}
            >
              <UserOutlined />
              ????????????
            </Button>
          </div>
          <div className={getClass('description')}>
            <span>
              ?????????:<strong>{artistDetail?.musicSize}</strong>
            </span>
            <span>
              ?????????:<strong>{artistDetail?.albumSize}</strong>
            </span>
            <span>
              MV???:<strong>{artistDetail?.mvSize}</strong>
            </span>
          </div>
        </section>
      </header>

      <Tabs destroyInactiveTabPane tabBarExtraContent={extraContent} onChange={setActiveKey}>
        <Tabs.TabPane tab="??????" key="album">
          <Suspense fallback="?????????...">
            <Album type={activeButton} id={id} data={albums} isAlbum />
          </Suspense>
        </Tabs.TabPane>
        <Tabs.TabPane tab="MV" key="mv">
          <Suspense fallback="?????????...">
            <MV id={id} />
          </Suspense>
        </Tabs.TabPane>
        <Tabs.TabPane tab="????????????" key="detail">
          <Suspense fallback="?????????...">{artistDetail && <Detail id={id} />}</Suspense>
        </Tabs.TabPane>
        <Tabs.TabPane tab="????????????" key="similar">
          <Suspense fallback="?????????...">
            <Similar id={id} />
          </Suspense>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default Singer;
