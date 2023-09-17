// module.exports = {
// users : {
//     1: {
//       id: '1',
//       username: 'Robin Wieruch',
//     },
//     2: {
//       id: '2',
//       username: 'Dave Davids',
//     },
//   },
//   messages : {
//     1: {
//       id: '1',
//       text: 'Hello World',
//       userId: '1',
//     },
//     2: {
//       id: '2',
//       text: 'By World',
//       userId: '2',
//     },
//   }
// }

module.exports = {
transactions : [
  {
      id : 1,
      type : "expense",
      category : "food",
      amount : 50,
  },
  {
      id : 2,
      type : "expense",
      category : "food",
      amount : 150,
  },
 {
      id : 3,
      type : "expense",
      category : "doctor",
      amount : 280,
  },
 {
      id : 4,
      type : "income",
      category : "salary",
      amount : 1500,
  },
 {
      id : 5,
      type : "expense",
      category : "taxi",
      amount : 25,
  },
]
} 

