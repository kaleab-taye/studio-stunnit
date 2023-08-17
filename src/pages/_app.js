import { motion } from 'framer-motion';
import NextNProgress from 'nextjs-progressbar';
import '../styles/faqList.css';
import '../styles/globals.css';

import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
NProgress.configure({ showSpinner: false });

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (<div className='bg-background-100 dark:bg-background-100 text-onBackground dark:text-onBackground font-common_font tracking-widest leading-loose'>
    <NextNProgress showSpinner color="#bc8028" startPosition={0.3} stopDelayMs={200} height={4} showOnShallow={true} />
    <motion.div
          key={router.route}
          initial="initial"
          animate="animate"
          transition={{ duration: 1.2 }}
          variants={{
            initial: {
              opacity: 0,
              scale: 1.5,
            },
            animate: {
              opacity: 1,
              scale: 1,
            },
          }}
        >

    <Component {...pageProps} />
        </motion.div>
  </div>
  )
}
