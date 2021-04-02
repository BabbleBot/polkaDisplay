(() => {
  if (typeof polkamonList == 'undefined') var polkamonList
  if (typeof reg == 'undefined') var reg
   
  polkamonList=document.getElementsByClassName('personalCollectionCardstyle__CardContainer-sc-61434w-0 gxEUbp');
  reg=/(Chance ~)(.*)(%)/;

  for(let polkamon of polkamonList){
    let proba=1;
    let spanList=polkamon.getElementsByTagName('span');

    for(let span of spanList){
      let match = span.textContent.match(reg);
      if(match){
        proba*=(match[2]/100);
      }
    }

    polkamon.getElementsByClassName('personalCollectionCardstyle__DetailsText-sc-61434w-5 jYnmvc')[0].textContent=(Math.round(1/proba));
  }
})();
