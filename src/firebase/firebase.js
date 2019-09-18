import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database  as default };


// // child_removed
// database.ref("expenses").on("child_removed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// //child_changed
// database.ref("expenses").on("child_changed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// // child_added
// database.ref("expenses").on("child_added", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref("expenses").on("value", (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses);
// })

// database.ref("expenses")
//     .once("value")
//     .then((snapshot) => {
//        const expenses = [];

//        snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//        })
//        console.log(expenses);
//     })


// database.ref("expenses").push({
//     description: "Potatoes",
//     note: "",
//     amount: 1000,
//     createdAt: 0
// })




// database.ref("notes").push({
//     title: "To Do",
//     body: "Go for a run"
// })

// const firebaseNotes = {
//     notes: {

//     }
// }

// const notes = [{
//     id: "12",
//     title: "First Note!",
//     body: "This is my note"

// }, {
//     id: "692ase",
//     title: "Another note",
//     body: "potato"

// }];

// database.ref("notes").set(notes);




// database.ref().on("value", (snapshot) => {
//     const snap = snapshot.val();
//     console.log(`${snap.name} is a ${snap.job.title} at ${snap.job.company}`);
// })

// database.ref().once("value")
// .then((snapshot) => {
//    const val = snapshot.val();
//    console.log(val);
// })
// .catch((e) => {
//     console.log("Error fetching data", e);
// })


// database.ref().set({
//     name: "Alex",
//     age: 27,
//     stressLevel: 6,
//     job: {
//         title: "Software Developer",
//         company: "Google"
//     },
//     location: {
//         city: "Toronto",
//         potato: true
//     }
// }).then(() => {
//     console.log("Data is saved");
// }).catch((e) => {
//     console.log("This failed. ", e);
// });

// database.ref().update({
//     stressLevel: 9,
//     "job/company": "Amazon",
//     "location/city": "Seattle"
// });


// database.ref("isSingle").remove().then(() => {
//     console.log("Data was removed");
// }).catch((e) => {
//     console.log("Did not remove data", e);
// })