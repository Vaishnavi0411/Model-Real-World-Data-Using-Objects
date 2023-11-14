// Task 1 - Create JSON data

const deliveries = `{
	"deliveries": [{
			"deliveredBy": "Charles Garcia",
			"orderNumber": 234324,
			"customerName": "Michael Williams",
			"phoneNumbers": ["+12052345876", "+12052345876"],
			"customerAddress": {
				"streetNo": "501m",
				"streetName": "Hopton Street",
				"city": "Orlando",
				"state": "Florida"
			},
			"tipAmount": 10,
			"customerRating": 4.5,
			"outletRating": 3
		},

		{
			"deliveredBy": "Andrew Clark",
			"orderNumber": 897655,
			"customerName": "George Wilson",
			"phoneNumbers": ["+12652349712", "+12752344376"],
			"customerAddress": {
				"streetNo": "281d",
				"streetName": "Sea View",
				"city": "South Austin",
				"state": "Texas"
			},
			"tipAmount": 5,
			"customerRating": 4,
			"outletRating": 4.5
		},
		{
			"deliveredBy": "Andrew Clark",
			"orderNumber": 458899,
			"customerName": "Ella Rodriguez",
			"phoneNumbers": ["+12902346589", "+12902300610"],
			"customerAddress": {
				"streetNo": "892g",
				"streetName": "Parkside Park",
				"city": "Louiseville",
				"state": "Kentucky"
			},
			"tipAmount": 0,
			"customerRating": 3,
			"outletRating": 4
		},
		{
			"deliveredBy": "Nicholas Taylor",
			"orderNumber": 2224317,
			"customerName": "Olivia Davis",
			"phoneNumbers": ["+12452342200", "+12452277881"],
			"customerAddress": {
				"streetNo": "108a",
				"streetName": "Buller Hawthorns",
				"city": "Trenton",
				"state": "New Jersey"
			},
			"tipAmount": 5,
			"customerRating": 5,
			"outletRating": 4
		},
		{
			"deliveredBy": "Charles Garcia",
			"orderNumber": 2887648,
			"customerName": "Lucy Thomas",
			"phoneNumbers": ["+13152119733", "+13175264437"],
			"customerAddress": {
				"streetNo": "557a",
				"streetName": "Cygnet Court",
				"city": "Dover",
				"state": "Delaware"
			},
			"tipAmount": 20,
			"customerRating": 1,
			"outletRating": 2
		},
		{
			"deliveredBy": "Charles Garcia",
			"orderNumber": 234541,
			"customerName": "Richard Mia",
			"phoneNumbers": ["+12052333876", "+12052343176"],
			"customerAddress": {
				"streetNo": "501m",
				"streetName": "Hopton Street",
				"city": "Orlando",
				"state": "Florida"
			},
			"tipAmount": 10,
			"customerRating": 4.5,
			"outletRating": 3
		},
		{
			"deliveredBy": "Andrew Clark",
			"orderNumber": 897690,
			"customerName": "Eric Claire",
			"phoneNumbers": ["+12652387712", "+12752322396"],
			"customerAddress": {
				"streetNo": "292f",
				"streetName": "North View",
				"city": "South Austin",
				"state": "Texas"
			},
			"tipAmount": 10,
			"customerRating": 4,
			"outletRating": 4.5
		}
	]
}`


// Task 2 - Convert JSON to JavaScript Object
const deliveryObject = JSON.parse(deliveries);

// Task 3 - No. of orders delivered by a delivery person in a particular city
function countDeliveries(deliveryObject, deliveredBy, city) {
	return deliveryObject.reduce((deliveryCount, delivery) => {
		if (delivery.deliveredBy === deliveredBy && delivery.customerAddress.city === city)
			return deliveryCount + 1;
		else
			return deliveryCount
	}, 0);
}

// Task 4 - Total tip amount earned by a delivery person
function calculateTotalTipAmount(deliveryObject, deliveryPerson) {
	return deliveryObject.reduce((totalTipAmount, delivery) => {
		if (delivery.deliveredBy === deliveryPerson)
			return totalTipAmount + delivery.tipAmount;
		else
			return totalTipAmount
	}, 0);
}

// Task 5 - Delivery wise customer and outlet ratings for a delivery person
function getDeliveryWiseRatings(deliveryObject, deliveryPerson) {
	return deliveryObject
		.filter(delivery => delivery.deliveredBy === deliveryPerson)
		.map(delivery => {
			return {
				orderNumber: delivery.orderNumber,
				customerName: delivery.customerName,
				customerRating: delivery.customerRating,
				outletRating: delivery.outletRating
			}
		})
}

// Task 6 - Based on Customer and outlet Rating, calculate average rating for each delivery person. 
function calculateAverageRating(deliveryObject) {
	const newData = deliveryObject.map(delivery => {
		return {
			...delivery,
			averageRating: (delivery.customerRating + delivery.outletRating) / 2
		}
	})
	return JSON.stringify(newData)
}

// do not delete below code, it is written to make the functions exportable for testing purpose
module.exports = {
	countDeliveries,
	calculateTotalTipAmount,
	getDeliveryWiseRatings,
	calculateAverageRating
}