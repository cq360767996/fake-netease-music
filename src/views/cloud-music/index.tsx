import React, { useEffect, useMemo, useRef, useState, useReducer, FormEventHandler } from 'react';
import './cloud-music.less';
import Button from '@/components/button';
import Input from '@/components/input';
import Table from '@/components/table';
import { DataAction, Track } from '@/types';
import { classGenerator } from '@/utils';
import { getUserCloud } from '@/api';
import { CommonColumns } from '@/config';
import { useInfinityScroll } from '@/hooks';
import debounce from 'lodash/debounce';

const CloudMusic: React.FC = () => {
  const getClass = classGenerator('cloud-music');
  const footerRef = useRef<HTMLElement>(null);
  const [data, dataDispatch] = useReducer(dataReducer, []);
  const [count, setCount] = useState(0);
  const [maxSize, setMaxSize] = useState(0);
  const [size, setSize] = useState(0);
  const [keyword, setKeyword] = useState('');
  const percent = useMemo(() => (maxSize === 0 ? 0 : (size * 100) / maxSize), [size, maxSize]);
  const { setMore, moreText } = useInfinityScroll(footerRef, loadUserCloud);
  let offset = 0;
  const limit = 30;

  const handleInput: FormEventHandler<HTMLInputElement> = debounce(e => {
    setKeyword(e.currentTarget.value);
  }, 500);

  async function loadUserCloud() {
    const res = await getUserCloud(offset, limit);
    const { data, maxSize, size, count, hasMore } = res;
    const type = offset === 0 ? 'reset' : 'add';
    const payload = data.map(item => item.simpleSong);
    dataDispatch({ type, payload });
    setMaxSize(transUnit(maxSize));
    setSize(transUnit(size));
    setCount(count);
    setMore(hasMore);
    offset += limit;
  }

  function dataReducer(state: Track[], action: DataAction<Track>) {
    return action.type === 'add' ? [...state, ...action.payload] : action.payload;
  }

  function transUnit(raw: string) {
    try {
      let bigInt = BigInt(raw);
      const n1024 = BigInt(1024);
      bigInt *= BigInt(10);
      bigInt /= n1024 ** BigInt(3);
      return Number(bigInt) / 10;
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  useEffect(() => {
    loadUserCloud();
  }, []);

  return (
    <div>
      <header className={getClass('header')}>
        <div className={getClass('capacity')}>
          <span className={getClass('capacity-title')}>云盘容量</span>
          <div className={getClass('ruler')}>
            <div style={{ width: `${percent}%` }}></div>
          </div>
          <span className={getClass('capacity-ratio')}>
            {size}G/{maxSize}G
          </span>
          <span className={getClass('capacity-description')}>歌曲永久保存，随时随地多端畅听</span>
        </div>
        <div className={getClass('control')}>
          <Button compose />
          <Input placeholder="搜索云盘音乐" onInput={handleInput} />
        </div>
      </header>
      <Table columns={CommonColumns} data={data} />
      <footer ref={footerRef} className={getClass('footer')}>
        {moreText}
      </footer>
    </div>
  );
};

export default CloudMusic;
