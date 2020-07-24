const sortShopDataByCatogory = (shopData, catogory) => {
  //   對照title
  //   從主catgory開始找
  //    從中再從次catogory開始找

  for (let i = 0; i < shopData.length; i++) {
    if (shopData[i].folder) {
      for (let j = 0; j < shopData[i].folder.length; j++) {
        const element = shopData[i].folder[j];

        if (element.title === catogory.title) {
          return element;
        }
      }
    }
  }

  return [];
};

export { sortShopDataByCatogory };
