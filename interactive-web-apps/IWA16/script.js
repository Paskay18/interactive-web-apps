// scripts.js

const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment

  //getting information from embedded array
  const nwabisaData = data.response.data.NM372
  const schalkData = data.response.data.SV782

  //nwabisa's data
  const nwabisaName = nwabisaData.firstName
  const nwabisaSurname = nwabisaData.surname
  const nwabisaRaces = nwabisaData.races.length
  const nwabisaDate = nwabisaData.races.pop().date
  const nwabisaTime = nwabisaData.races[0].time


  //schalk's data 
  const schalkName = schalkData.firstName
  const schalkSurname = schalkData.surname
  const schalkRaces = schalkData.races.length
  const schalkDate = schalkData.races.pop().date
  const schalkTime = schalkData.races[2].time
  console.log(schalkTime)
  
  //date in format
  const nDay = new Date (nwabisaDate).getDate()
  let nMonth = new Date(nwabisaDate).getMonth()+1
      nMonth = MONTHS[11]
  const nYear = new Date(nwabisaDate).getFullYear()
  
  const sDay = new Date (schalkDate).getDate()
  let sMonth = new Date(schalkDate).getMonth()+1
      sMonth = MONTHS[11]
  const sYear = new Date(schalkDate).getFullYear()
  
  //time calcutlations
  //nwabisa Time
  const nTimeArray = nwabisaTime[0]+nwabisaTime[1]+nwabisaTime[2]+nwabisaTime[3]
  console.log(nTimeArray)

  const nTimeHours = parseInt(nTimeArray/60)
  const nTimeMinutes = nTimeArray
  
  //schalkTime
  const sTimeArray = schalkTime[0]+schalkTime[1]+schalkTime[2]+schalkTime[3]


  const sTimeHours = parseInt(sTimeArray/60)
  const sTimeMinutes = sTimeArray

  console.log(sTimeMinutes)

  
  //getting information on each section

  //for Nwabisa
  const nwabisaSection = document.querySelector('[data-athlete = NM372]');
  //create new nodes for data list
  
  //adding h2
  const h2 = document.createElement('h2');
  h2.textContent= 'NM371';
  nwabisaSection.appendChild(h2);

  //adding list
  const dl = document.createElement('dl');
  nwabisaSection.appendChild(dl);

  const dt= document.createElement('dt');
  dt.textContent='Athlete:' ;
  nwabisaSection.appendChild(dt);
  const dd= document.createElement('dd');
  dd.textContent= `${nwabisaName} ${nwabisaSurname}`  ;
  nwabisaSection.appendChild(dd);

  const dt1= document.createElement('dt');
  dt1.textContent= 'Number of races:';
  nwabisaSection.appendChild(dt1);
  const dd1= document.createElement('dd');
  dd1.textContent=`${nwabisaRaces}`;
  nwabisaSection.appendChild(dd1);

  const dt2= document.createElement('dt');
  dt2.textContent= 'Event Date (Latest):';
  nwabisaSection.appendChild(dt2);
  const dd2= document.createElement('dd');
  dd2.textContent=`${nDay} ${nMonth} ${nYear}`;
  nwabisaSection.appendChild(dd2);

  const dt3= document.createElement('dt');
  dt3.textContent= 'Event Time (Latest):';
  nwabisaSection.appendChild(dt3);
  const dd3= document.createElement('dd');
  dd3.textContent=`0${nTimeHours}:${nTimeMinutes}`;
  nwabisaSection.appendChild(dd3);
  
//for Schalk 
const schalkSection = document.querySelector('[data-athlete = SV782]');
  //create new nodes for data list
 
  //adding h2
  const h2S = document.createElement('h2');
  h2S.textContent= 'SV782';
   schalkSection.appendChild(h2S)

   //adding list
  const dlS = document.createElement('dl');
  schalkSection.appendChild(dlS);

  const dtS= document.createElement('dt');
  dtS.textContent='Athlete:';
  schalkSection.appendChild(dtS);
  const ddS= document.createElement('dd');
  ddS.textContent= `${schalkName} ${schalkSurname}`;
  schalkSection.appendChild(ddS);

  const ddS1= document.createElement('dt');
  ddS1.textContent='Number of races:';
  schalkSection.appendChild(ddS1);
  const ddS2= document.createElement('dd');
  ddS2.textContent=`${schalkRaces}`;
  schalkSection.appendChild(ddS2);

  const dtS2= document.createElement('dt');
  dtS2.textContent='Event Date (Latest):';
  schalkSection.appendChild(dtS2);
  const ddS3= document.createElement('dd');
  ddS3.textContent=`${sDay} ${sMonth} ${sYear}`;
  schalkSection.appendChild(ddS3);

  const dtS3= document.createElement('dt');
  dtS3.textContent='Event Time (Latest):';
  schalkSection.appendChild(dtS3);
  const ddS4= document.createElement('dd');
  ddS4.textContent=`0${sTimeHours}:${sTimeMinutes}`;
  schalkSection.appendChild(ddS4);



