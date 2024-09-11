import React, { useEffect, useState } from 'react';
import { animated } from '@react-spring/web';
import Searchbar from './Searchbar';
import Item from './Item';

function List() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const savedUrls = sessionStorage.getItem('newUrls');
    if (savedUrls) {
      const parsedUrls = JSON.parse(savedUrls);
      const feedItems = parsedUrls.map((el, key) => ({
        key: el.key,
        text: el.text,
      }));
      setItems(feedItems);
    }
  }, []);

  const addUrl = (item) => {
    const urlChecker = (url) => url.text !== item.text;

    let check = items.every(urlChecker);

    if (
      items.length >= 5 ||
      !check ||
      !/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(item.text)
    ) {
      alert('Please enter a valid URL! You can enter up to five podcasts!');
      return;
    }

    let newUrls = [item, ...items];

    sessionStorage.setItem('newUrls', JSON.stringify(newUrls));
    setItems(newUrls);
  };

  const removeUrl = (key) => {
    let newUrls = items.filter((item) => item.key !== key);

    sessionStorage.setItem('newUrls', JSON.stringify(newUrls));
    setItems(newUrls);
  };

  return (
    <animated.div>
      <div className="form">
        <Searchbar onSubmit={addUrl} />
      </div>
      <div className="overflow">
        <Item items={items} removeUrl={removeUrl} />
      </div>
    </animated.div>
  );
}

export default List;
