import * as PropTypes from "prop-types";
import React from 'react';
import styles from "./TextList.module.css";

export default function ArticlesList({ items }) {
   return (
      <ul className={styles.articleList}>
         {items.map((item, index) => (
            <li key={index} className={styles.ulLi}>
               {React.isValidElement(item) ? (
                  <>
                     {item}
                  </>
               ) : (
                  <>
                     <p className={styles.p}>{item.title}</p>
                     <ol className={styles.articleList}>
                        {item.items.map((text, i) => (
                           <li className={styles.olLi} key={i}>{text}</li>
                        ))}
                     </ol>
                  </>
               )}
            </li>
         ))}
      </ul>
   );
}

ArticlesList.propTypes = {
   items: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.shape({
         title: PropTypes.node.isRequired,
         items: PropTypes.arrayOf(PropTypes.node).isRequired
      })
   ])).isRequired
};