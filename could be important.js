// checkInput = (callBack) => {
//     const currentProducts = this.props.products
//     const { currentName, currentPrice } = this.state

//     // Check if entry with exactly the same information already exists
//     let isDuplicate = () => {
//         if(currentProducts.some(product => {
//             if(product["name"] === currentName && product["price"] === currentPrice ){
//                 storeNotifications.addNotification({
//                     title: "Duplicate input!",
//                     message: "Please make sure input is not an duplicate of an already existing product.",
//                     type: "danger",
//                     insert: "top",
//                     container: "top-center",
//                     animationIn: ["animated", "flipInX"],
//                     animationOut: ["animated", "fadeOut"],
//                     dismiss: {
//                         duration: 4000,
//                         onScreen: true
//                     }
//                     })
//                     return true
//             } else {
//                 return false
//             }
//         })){
//             return true
//         } else {
//             return false
//         }
//     }

//     // Validate input
//     if((!(currentName === "") && typeof(currentName) === "string") 
//     && (!(currentPrice === "") && typeof(currentPrice) === "number")){
//         if(isDuplicate()){
//             return false
//         } else {
//             callBack()
//         }
//     } else {
//         storeNotifications.addNotification({
//             title: "Incorrect input!",
//             message: "Please make sure all fields are correct.",
//             type: "danger",
//             insert: "top",
//             container: "top-center",
//             animationIn: ["animated", "flipInX"],
//             animationOut: ["animated", "fadeOut"],
//             dismiss: {
//               duration: 4000,
//               onScreen: true
//             }
//           });
//           return false
//     }
// }