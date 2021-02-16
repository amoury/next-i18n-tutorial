import Head from 'next/head'
import { useRouter } from 'next/router'
import translate from '../utils/i18n/translate'

export default function Home() {
  const { locale } = useRouter();

  return (
    <div className="px-28">
      
      <div className="my-24">
        <h1 className="font-medium">Hey Amoury, welcome to the demo</h1>

        <p>{translate(locale, 'lipsum_dummy_content')}</p>
      </div>
    </div>
  )
}
