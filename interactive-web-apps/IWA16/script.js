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

  //getting information on each section

  //for Nwabisa
  const nwabisaSection = document.querySelector('[data-athlete = NM372]');
  //create new nodes for data list
  //adding h2
  const h2 = document.createElement('h2');
  h2.textContent= 'NM371';
   nwabisaSection.appendChild(h2)
//adding list
  const dl = document.createElement('dl');
  nwabisaSection.appendChild(dl);

  const dt= document.createElement('dt');
  dt.textContent='Athlete: Nwabisa Masiko';
  nwabisaSection.appendChild(dt);

  const dd= document.createElement('dd');
  dd.textContent= 'Total number of races: 2';
  nwabisaSection.appendChild(dd);

  const dd1= document.createElement('dd');
  dd1.textContent='Event Date (Latest): 2 Dec 2022';
  nwabisaSection.appendChild(dd1);

  const dd3= document.createElement('dd');
  dd3.textContent='Total Time(Latest):';
  nwabisaSection.appendChild(dd3);

  
//for Schalk 
const schalkSection = document.querySelector('[data-athlete = SV782]');
  //create new nodes for data list
  //adding h2
  const h2 = document.createElement('h2');
  h2.textContent= 'SV782';
   schalkSection.appendChild(h2)
//adding list
  const dlS = document.createElement('dl');
  schalkSection.appendChild(dlS);

  const dt= document.createElement('dt');
  dt.textContent='Athlete: Nwabisa Masiko';
  nwabisaSection.appendChild(dt);

  const dd= document.createElement('dd');
  dd.textContent= 'Total number of races: 2';
  nwabisaSection.appendChild(dd);

  const dd1= document.createElement('dd');
  dd1.textContent='Event Date (Latest): 2 Dec 2022';
  nwabisaSection.appendChild(dd1);

  const dd3= document.createElement('dd');
  dd3.textContent='Total Time(Latest):';
  nwabisaSection.appendChild(dd3);


