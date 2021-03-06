import { useState, FC } from 'react';
import Header from '../../header';
import Table, { Column } from '@/components/table';
import { Data } from '@/types';

const Program: FC = () => {
  const columns: Column[] = [
    { key: 'ordinal' },
    { key: 'title', title: '节目标题' },
    { key: 'artist', title: '主播' },
    { key: 'album', title: '电台' },
    { key: 'size', title: '大小' },
    { key: 'time', title: '下载时间' },
  ];
  const [data] = useState<Data<string | number>[]>([]);

  return (
    <>
      <Header />
      <Table columns={columns} data={data} />
    </>
  );
};

export default Program;
