import React, { ReactElement } from 'react';

import { motion } from 'framer-motion';

import Layout from 'components/Layout';

const Index = (): ReactElement => (
  <Layout title="Main">
    <h1>MAIN PAGE</h1>
    <hr />
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-neutral-200 border rounded-lg w-60 h-60 p-10"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad maxime obcaecati
      perferendis provident sed sequi tempora. Est nisi omnis rerum!
    </motion.button>
  </Layout>
);

export default Index;
