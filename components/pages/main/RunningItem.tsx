import { masteries } from '@/lib/static'
import { Mastery } from '@/types'
import { Card, CardBody } from '@nextui-org/react'
import { NextPage } from 'next'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'


const MasteryCard = ({ data }: { data: Mastery }) => {
  return <Card radius="lg" className='mx-6 h-40'>
    <CardBody className='h-full'>
      <div className='flex flex-col justify-between items-center h-full'>
        <div className={'p-2 rounded-lg bg-slate-200'}>
          <Image
            alt="Woman listing to music"
            className="object-cover "
            height={80}
            src={'/icons/mastery/' + data.icon}
            width={80}
          />
        </div>
      <p className='text-center text-lg mt-2 text-slate-200 font-semibold'>{data.text}</p>
      </div>
    </CardBody>

  </Card>
}
const RunningItem: NextPage = ({ }) => {
  return <Marquee autoFill className='mt-8'>
    {masteries.map((i, idx) => (
      <MasteryCard data={i} key={idx} />
    ))}
  </Marquee>
}

export default RunningItem