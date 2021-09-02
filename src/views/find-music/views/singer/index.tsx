import React, { useEffect, useState } from 'react';
import './singer.less';
import classNames from 'classnames';
import { getArtistList } from '@/api';
import { Artist, Data } from '@/types';
import { categoryList } from '@/config';
import Img from '@/components/img';
import { resizeImg } from '@/utils';

const Singer: React.FC = () => {
  const [data, setData] = useState<Artist[]>([]);
  type Selected = Array<number | string | undefined>;
  const [selected, setSelected] = useState<Selected>([-1, -1, undefined]);

  const searchData: Array<{ label: string; key: string; list: Array<Data<string | number>> }> = [
    {
      label: '语种',
      list: categoryList,
      key: 'area',
    },
    {
      label: '分类',
      key: 'type',
      list: [
        { name: '全部', type: -1 },
        { name: '男歌手', type: 1 },
        { name: '女歌手', type: 2 },
        { name: '乐队组合', type: 3 },
      ],
    },
    { label: '筛选', key: 'initial', list: getA2Z() },
  ];

  function getA2Z() {
    const result: Array<{ name: string; initial?: string }> = [{ name: '热门' }];
    const start = 65;
    for (let i = 0; i < 26; i++) {
      const charUpper = String.fromCharCode(start + i);
      const charLower = String.fromCharCode(start + i + 32);
      result.push({ name: charUpper, initial: charLower });
    }

    return result;
  }

  function handleCatClick(index: number, value: number | string) {
    const newSelected = [...selected];
    newSelected[index] = value;
    setSelected(newSelected);
  }

  useEffect(() => {
    (async () => {
      const [area, type, initial] = selected;
      const res = await getArtistList({ area, type, initial });
      setData(res.artists);
    })();
  }, [selected]);

  return (
    <div className="singer">
      {searchData.map((item, i) => (
        <header key={item.label} className="singer__header">
          <div className="singer__label">{item.label}：</div>
          <div className="singer__category">
            {item.list.map(val => (
              <div
                key={val.name}
                className="singer__category-item"
                onClick={() => handleCatClick(i, val[item.key])}
              >
                <span className={classNames({ ['--active']: val[item.key] === selected[i] })}>
                  {val.name}
                </span>
              </div>
            ))}
          </div>
        </header>
      ))}
      <div className="singer__list">
        {data.map(item => (
          <div key={item.id} className="singer__item">
            <Img className="singer__img" src={resizeImg(item.picUrl)} />
            <div className="singer__description">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Singer;
