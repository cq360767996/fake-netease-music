import { useEffect, useMemo, useState, FC } from 'react';
import '../list/list.less';
import './radio-list.less';
import Img from '@/components/img';
import { classGenerator, resizeImg, toHttps } from '@/utils';
import Button from '@/components/button';
import {
  ShareAltOutlined,
  SortAscendingOutlined,
  SortDescendingOutlined,
  PlayCircleOutlined,
  StarOutlined,
  AccountBookOutlined,
} from '@ant-design/icons';
import { Tabs } from 'antd';
import { useParams } from 'react-router-dom';
import { getDJDetail, getDJProgram } from '@/api';
import { DJProgram } from '@/types';
import Subscriber from './subscriber';
import { useDispatch, useSelector } from 'react-redux';
import { insertSong, RootState } from '@/store';
import { setDJDetail } from '@/store';
import classNames from 'classnames';
import Card from './card';
import { clearRequests } from '@/api/api';

const RadioList: FC = () => {
  const getListClass = classGenerator('list');
  const getClass = classGenerator('radio-list');
  const params = useParams<{ id: string; type?: 'pay' }>();
  const id = useMemo(() => Number(params.id), [params.id]);
  const isPay = useMemo(() => !!params.type, [params.type]);
  const [programs, setPrograms] = useState<DJProgram[]>([]);
  const recentPrograms = useMemo(
    () => programs.sort((a, b) => a.createTime - b.createTime).slice(0, 3),
    [programs]
  );
  const freePrograms = useMemo(
    () => programs.filter(item => item.programFeeType === 5),
    [programs]
  );
  const djDetail = useSelector((state: RootState) => state.djDetail);
  const dispatch = useDispatch();

  async function loadDJDetail() {
    const res = await getDJDetail(id);
    dispatch(setDJDetail(res.data));
  }

  async function loadDJProgram() {
    const res = await getDJProgram(id);
    setPrograms(res.programs);
  }

  async function handleItemClick(id: number) {
    dispatch(insertSong(id));
  }

  function renderRadioDetail() {
    return (
      <>
        <div className={getListClass('user-info')}>
          <img src={djDetail.dj && toHttps(resizeImg(djDetail.dj.avatarUrl, 30))} alt="avatar" />
          <a>{djDetail.dj?.nickname}</a>
        </div>
        <div className={getListClass('control')}>
          <Button compose />
          <Button>
            <StarOutlined />
            ?????????({djDetail.subCount})
          </Button>
          <Button>
            <ShareAltOutlined />
            ??????({djDetail.shareCount})
          </Button>
        </div>
        <div className={getClass('tag')}>
          <span>{djDetail.category}</span>
          <strong>{djDetail.desc}</strong>
        </div>
      </>
    );
  }

  function renderPayDetail() {
    return (
      <>
        <div className={getClass('price')}>??{(djDetail?.feeInfo?.originalPrice || 0) / 100}</div>
        <div className={getClass('buttons')}>
          <button className={classNames(getClass('button'), '--bg')}>
            <AccountBookOutlined />
            ????????????
          </button>
          <button className={classNames(getClass('button'), '--border')}>
            <PlayCircleOutlined />
            ????????????
          </button>
          <Button>
            <ShareAltOutlined />
            ??????(175)
          </Button>
        </div>
        <div className={getClass('slogan')}>{djDetail.feeInfo?.slogan}</div>
        <small className={getClass('brief')}>????????????</small>
      </>
    );
  }

  useEffect(() => {
    if (Number.isNaN(id)) return;
    loadDJDetail();
    loadDJProgram();

    return clearRequests;
  }, [id]);

  return (
    <div className={getListClass()}>
      <header className={getListClass('header')}>
        <Img
          className={getListClass('img')}
          src={djDetail.picUrl && resizeImg(djDetail.picUrl, 200)}
        />
        <div className={getListClass('right')}>
          <div className={getListClass('title')}>
            <span>{isPay ? '????????????' : '??????'}</span>
            <strong>{djDetail.name}</strong>
          </div>
          {isPay ? renderPayDetail() : renderRadioDetail()}
        </div>
      </header>
      <section className={getListClass('tabs')}>
        <Tabs>
          {isPay && (
            <Tabs.TabPane tab="??????" key="0">
              <div className={getClass('detail')}>
                <h3 className={getClass('detail-title')}>??????????????????</h3>
                <p>{djDetail.desc}</p>
                {recentPrograms.length > 0 && (
                  <>
                    <h3 className={getClass('detail-title')}>????????????</h3>
                    {recentPrograms.map(item => (
                      <Card key={item.id} item={item} onItemClick={handleItemClick} />
                    ))}
                  </>
                )}
                {freePrograms.length > 0 && (
                  <>
                    <h3 className={getClass('detail-title')}>???????????? &gt;</h3>
                    {freePrograms.map(item => (
                      <Card key={item.id} item={item} onItemClick={handleItemClick} />
                    ))}
                  </>
                )}
                <h3 className={classNames(getClass('detail-title'), getClass('detail-notice'))}>
                  ????????????
                </h3>
                <p>
                  1. ?????????????????????????????????12.9/12?????????????????????????????????/??????
                  <br />
                  2. ???????????????????????????APP???????????????????????????????????????PC???Web????????????
                  <br />
                  3. ?????????????????????????????????????????????????????????????????????
                  <br />
                  4. ????????????????????????????????????????????????@???????????????
                </p>
              </div>
            </Tabs.TabPane>
          )}
          <Tabs.TabPane tab="??????" key="1">
            <div className={getClass('control')}>
              <div>???{djDetail.programCount}???</div>
              <div className={getClass('control-right')}>
                <strong>??????</strong>
                <SortAscendingOutlined className={getClass('icon')} />
                <SortDescendingOutlined className={getClass('icon')} />
              </div>
            </div>
            {programs.map(item => (
              <Card key={item.id} item={item} onItemClick={handleItemClick} />
            ))}
          </Tabs.TabPane>
          {!isPay && (
            <Tabs.TabPane tab="?????????" key="3">
              <Subscriber id={id} />
            </Tabs.TabPane>
          )}
        </Tabs>
      </section>
    </div>
  );
};

export default RadioList;
