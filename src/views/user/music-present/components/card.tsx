import React from 'react';
import styles from '../music-present.module.less';
import Img from '@/components/img';
import { Props as PresentProps } from '../';
import dayjs from 'dayjs';
import { resizeImg } from '@/utils';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchAndSetCurrentTrack, RootState } from '@/store';
import { message } from 'antd';
import { DynamicPage } from '@/router';

type Props = Omit<PresentProps, 'type'>;

const Card: React.FC<Props> = ({ data, isAlbum }) => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const isLogin = useSelector((state: RootState) => !!state.user.cookie);

  function handleCardClick(id: number) {
    if (!id) return;
    if (isAlbum) {
      push(DynamicPage.list(id, 'album'));
    } else {
      isLogin ? push(DynamicPage.list(id)) : message.error('需要登录，才能查看他人歌单信息>_<');
    }
  }

  return (
    <div className={styles.card}>
      {data.map(item => (
        <div key={item.id} className={styles.card__item}>
          <div className={styles['card__img-wrapper']}>
            <Img
              src={resizeImg(item.picUrl, 150)}
              className={styles.card__img}
              icon={{ size: 'big', hoverDisplay: true }}
              onClick={() => handleCardClick(item.id)}
              onIconClick={() => dispatch(fetchAndSetCurrentTrack({ id: item.id, isAlbum }))}
            />
          </div>
          <div className={styles.card__description}>
            <div className={styles.card__title}>{item.name}</div>
            <div className={styles.card__subtitle}>
              {dayjs(item.publishTime).format('YYYY-MM-DD')}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
