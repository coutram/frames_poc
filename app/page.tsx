import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Story time!',
    },
    {
      action: 'link',
      label: 'Link to Google',
      target: 'https://www.google.com',
    },
    {
      label: 'Redirect to pictures',
      action: 'post_redirect',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/fluffy.jpg`,
    aspectRatio: '1:1',
  },
  input: {
    text: 'Tell me a story about the future',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'frames-poc.vercel.app',
  description: 'LFG',
  openGraph: {
    title: 'frames-poc.vercel.app',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/burger.jpg`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>frames-poc.vercel.app</h1>
    </>
  );
}
