import React, { useState, useEffect } from 'react';
import Header from '../../header';
import './video.less';
import List, { ListItem } from '@/views/video/list';
import { getMVSublist } from '@/api';

const Video: React.FC = () => {
  const [data, setData] = useState<ListItem[]>([]);

  useEffect(() => {
    (async () => {
      const res = await getMVSublist();
      const result = res.data.map(item => {
        const { id, coverUrl: imgUrl, title: description, creator } = item;
        const author = creator.reduce((acc, val) => `${acc}/${val}`, '').slice(1);

        return { id, imgUrl, description, author };
      });

      setData(result);
    })();
  }, []);

  return (
    <div className="collection-video">
      <Header title="收藏的视频" count={8} />
      <div className="collection-video__list">
        <List data={data} />
      </div>
    </div>
  );
};

export default Video;
