(()=>{let a=document.getElementsByClassName("personalCollectionCardstyle__CardContainer-sc-61434w-0 gxEUbp");for(let b of a){let a=1,c=b.getElementsByTagName("span");for(let b of c){let c=b.textContent.match(/(Chance ~)(.*)(%)/);c&&(a*=c[2]/100)}b.getElementsByClassName("personalCollectionCardstyle__DetailsText-sc-61434w-5 jYnmvc")[0].textContent=Math.round(1/a)}})();

