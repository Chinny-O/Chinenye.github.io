const questions = [
    //General Knowledge 
    {
        question: 'Who must have driver’s license?',
        image: './ProjectPictures/license.jpg',
        answers: [
            { text: 'Only Nigerians who live abroad', correct: false},
            { text: 'Any human person that lives in Nigeria', correct: false},
            { text: 'Any motorist above the age of 18', correct: true},
            { text: 'None of the Above', correct: false}
        ]
    },
    {
        question: 'Can your national driving licence serve as your identity card?',
        image: './ProjectPictures/id.jpg',
        answers: [
            { text: 'Yes it can. It is a legal proof of identity.', correct: true},
            { text: 'No it cannot. It is not valid', correct: false},
            { text: 'None of the above', correct: false},
            { text: 'I do not know', correct: false}
        ]
    },
    {
        question: 'How many Nigeria drivers license classes are there?',
        image: './ProjectPictures/idcard.jpg',
        answers: [
            { text: 'There are six classes of Nigerian drivers license', correct: false},
            { text: 'There are no classes of Nigerian drivers license', correct: false},
            { text: 'There are seven classes of Nigerian drivers license', correct: true},
            { text: 'There are four classes of Nigerian drivers license', correct: false}
        ]
    },
    {
        question: 'What are road signs?',
        image: './ProjectPictures/roadsigns.jpg',
        answers: [
            { text: 'Road signs are signs that direct human and vehicular traffic', correct: false},
            { text: 'They are signs that regulate road users', correct: false},
            { text: 'Road signs are signs for the road that regulate driving', correct: false},
            { text: 'All of the above', correct: true}
        ]
    },
    //<img src="No Entry" width="100px" height="100px"/>
    //Road signs

    //Section 1: Prohibitory signs

    //Identify These Road Signs

    //What Do These Road Signs Mean?
    {
        question: 'No Entry Sign',
        image: './ProjectPictures/NoEntry.jpg',
        answers: [
            { text: 'Do not enter into the room', correct: false},
            { text: 'There is no entry for vehicular traffic on the road', correct: true},
            { text: 'This building is closed', correct: false},
            { text: 'Do not enter into this bus', correct: false}
        ]
    },
    {
        question: 'Stop At Intersection',
        image: 'https://cdn11.bigcommerce.com/s-c7chaa/images/stencil/1280x1280/products/242/3712/R1-1_MOD__34542.1522940971.JPG?c=2',
        answers: [
            { text: 'Stop at the junction', correct: true},
            { text: 'No U-turn at this junction', correct: false},
            { text: 'Turn right here', correct: false},
            { text: 'Keep moving', correct: false}
        ]
    },
    {
        question: 'No Left Turn',
        image: './ProjectPictures/noleftturn.jpg',
        answers: [
            { text: 'Do not turn right here', correct: false},
            { text: 'No vehicules are allowed to park here', correct: false},
            { text: 'Do not turn left here', correct: true},
            { text: 'No U-Turn at here', correct: false}
        ]
    },
    {
        question: 'No Right Turn',
        image: './ProjectPictures/norightturn.png',
        answers: [
            { text: 'Permits vehicles to make a right turn even when the traffic light is on red.', correct: false},
            { text: 'No vehicles are allowed to turn right here', correct: true},
            { text: 'Parking here is prohibitted', correct: false},
            { text: 'Falling rocks at this turn', correct: false}
        ]
    },
    {
        question: 'No U-Turn',
        image: './ProjectPictures/nouturn.png',
        answers: [
            { text: 'Two lane road', correct: false},
            { text: 'Keep off the pedestrian track', correct: false},
            { text: 'Vehicles can turn left here', correct: false},
            { text: 'Vehicles are not allowed to make a u-turn here', correct: true}
        ]
    },
    {
        question: 'Overtaking Prohibitted',
        image: './ProjectPictures/noovertaking.jpg',
        answers: [
            { text: 'Do no overtake any vehicles', correct: true},
            { text: 'Cycles are not allowed on this track', correct: false},
            { text: 'No vehicles are allowed entry here', correct: false},
            { text: 'All of the above', correct: false}
        ]
    },
    {
        question: 'No Change Lane',
        image: './ProjectPictures/nolanechange.jpg',
        answers: [
            { text: 'Two vehicles cannot pass at the same time', correct: false},
            { text: 'School zone', correct: false},
            { text: 'You are not allowed to change lanes', correct: true},
            { text: 'Slow down for oncoming vehicles', correct: false}
        ]
    },
    {
        question: 'No Horns',
        image: './ProjectPictures/nohorns.png',
        answers: [
            { text: 'Use your horn to alert road users', correct: false},
            { text: 'Vehicles with horns are not allowed here', correct: false},
            { text: 'Do not put horns in your vehicle', correct: false},
            { text: 'The use of horn is prohibitted in this area', correct: true},
        ]
    },
    {
        question: 'Maximum Speed Limit',
        image: './ProjectPictures/speedlimit.png',
        answers: [
            { text: 'Do not exceed this speed', correct: true},
            { text: 'I do not know', correct: false},
            { text: 'Children crossing', correct: false},
            { text: 'Exceed this speed limit', correct: false}
        ]
    },
    {
        question: 'Restriction Sign',
        image: './ProjectPictures/restriction.png',
        answers: [
            { text: 'All vehicles are allowed', correct: false},
            { text: 'There is no entry for vehicular traffic', correct: true},
            { text: 'Only pedestrians are allowed', correct: false},
            { text: 'Blind people crossing', correct: false}
        ]
    },
    {
        question: 'Close To All Vehicles In Both Directions',
        image: './ProjectPictures/closedtoall.jpg',
        answers: [
            { text: 'No vehicles are prohibitted from passing in one directions', correct: false},
            { text: 'No vehicles are prohibitted from passing in both directions', correct: false},
            { text: 'All vehicles are prohibitted from passing in both directions', correct: true},
            { text: 'All vehicles are prohibitted from passing in one directions', correct: false}
        ]
    },
    {
        question: 'Parking Prohibitted',
        image: './ProjectPictures/noparking.png',
        answers: [
            { text: 'Vehicles can park here', correct: false},
            { text: 'Children must not cross here', correct: false},
            { text: 'Pedestrians are prohibitted from here', correct: false},
            { text: 'Vehicles are not allowed to park here', correct: true},
        ]
    },
    {
        question: 'No Stopping',
        image: './ProjectPictures/nostopping.jpg',
        answers: [
            { text: 'Do not stop here. Keep moving', correct: true},
            { text: 'Stop now', correct: false},
            { text: 'Do not keep moving', correct: false},
            { text: 'None of the above', correct: false}
        ]
    },
    {
        question: 'Litter Prohibitted',
        image: './ProjectPictures/nolitter.png',
        answers: [
            { text: 'Beware of animals', correct: false},
            { text: 'Do not drop litter here', correct: true},
            { text: 'Littering is allowed in this area', correct: false},
            { text: 'Drop your litter here', correct: false}
        ]
    },

    //Section 2: Warning signs

    //Identify These Warning Road Signs

    //What Do These Warning Road Signs Mean?
    {
        question: 'T-Junction',
        image: './ProjectPictures/tjunction.jpg',
        answers: [
            { text: 'Two roads meet ahead', correct: false},
            { text: 'Approaching a t-junction', correct: false},
            { text: 'All of the above', correct: true},
            { text: 'The intersection of two roads ahead', correct: false}
        ]
    },
    {
        question: 'Y-Junction',
        image: './ProjectPictures/yjunction.png',
        answers: [
            { text: 'The intersection of three roads ahead', correct: false},
            { text: 'Three roads meet ahead', correct: false},
            { text: 'Approching a y-junction', correct: false},
            { text: 'All of the above', correct: true},
        ]
    },
    {
        question: 'Railway Crossing',
        image: './ProjectPictures/railway.jpg',
        answers: [
            { text: 'Rail tracks ahead. Beware of oncoming trains', correct: true},
            { text: 'Cross over the rail way tracks', correct: false},
            { text: 'Vehicles are not allowed to cross the railway tracks', correct: false},
            { text: 'Pedestrians are not allowed to cross the railway tracks', correct: false}
        ]
    },
    {
        question: 'Falling Rocks',
        image: '/Project Pictures/fallingrocks.jpg',
        answers: [
            { text: 'Do not throw rocks', correct: false},
            { text: 'Hilly terrains. Beware of falling rocks', correct: true},
            { text: 'Volcanous zone. Beware', correct: false},
            { text: 'None of the above', correct: false}
        ]
    },
    {
        question: 'Uneven Road',
        image: './ProjectPictures/unevenroad.png',
        answers: [
            { text: 'Keep to your left', correct: false},
            { text: 'The road is slippery', correct: false},
            { text: 'The road is undulating', correct: true},
            { text: 'The road is smooth', correct: false}
        ]
    },
    {
        question: 'Slippery Surface',
        image: './ProjectPictures/slippery.png',
        answers: [
            { text: 'Beware of potholes', correct: false},
            { text: 'The road is undulating', correct: false},
            { text: 'The road is smooth', correct: false},
            { text: 'The road is slippery', correct: true},
        ]
    },
    {
        question: 'Pedestrian Crossing',
        image: './ProjectPictures/pedestrian.jpg',
        answers: [
            { text: 'Give way to pedestrians crossing', correct: true},
            { text: 'Give way to animals crossing', correct: false},
            { text: 'Give way to children crossing', correct: false},
            { text: 'Give way to vehicles crossing', correct: false}
        ]
    },
    {
        question: 'Children Crossing',
        image: './ProjectPictures/children.jpg',
        answers: [
            { text: 'Animal zone. Beware of roaming animals', correct: false},
            { text: 'School zone. Give way to children crossing', correct: true},
            { text: 'Give way to vehicles crossing', correct: false},
            { text: 'Give way to pedestrians crossing', correct: false}
        ]
    },
    {
        question: 'Beware of Animals',
        image: './ProjectPictures/animals.jpg',
        answers: [
            { text: 'Do not touch the animals', correct: false},
            { text: 'Animals are scared of cars', correct: false},
            { text: 'Animal zone. Beware of roaming animals', correct: true},
            { text: 'I do not know', correct: false}
        ]
    },
    {
        question: 'Construction Road Work Ahead',
        image: './ProjectPictures/contruction.jpg',
        answers: [
            { text: 'Speed up', correct: false},
            { text: 'Reconstruct your vehicle', correct: false},
            { text: 'Building construction ahead', correct: false},
            { text: 'Slow down. Construction work ahead.', correct: true}
        ]
    },
    {
        question: 'Dangerous Double Bend',
        image: './ProjectPictures/doublebend.jpg',
        answers: [
            { text: 'Sharp right bend ahead', correct: false},
            { text: 'Sharp double bend ahead', correct: true},
            { text: 'Sharp left bend ahead', correct: false},
            { text: 'Bend twice here', correct: false}
        ]
    },
    {
        question: 'Dangerous Bend Right',
        image: './ProjectPictures/bendright.jpg',
        answers: [
            { text: 'There is a sharp right bend ahead', correct: true},
            { text: 'There is a sharp left bend ahead', correct: false},
            { text: 'Do not bend right here', correct: false},
            { text: 'Do not bend left here', correct: false}
        ]
    },
    {
        question: 'Dangerous Bend Left',
        image: './ProjectPictures/bendleft.png',
        answers: [
            { text: 'Do not bend right here', correct: false},
            { text: 'There is a sharp right bend ahead', correct: false},
            { text: 'There is a sharp left bend ahead', correct: true},
            { text: 'Do not bend left here', correct: false}
        ]
    },
    {
        question: 'Danger Sign',
        image: './ProjectPictures/danger.png',
        answers: [
            { text: 'Speed Limit', correct: false},
            { text: 'No Entry', correct: false},
            { text: 'Stop Moving', correct: false},
            { text: 'Danger Ahead', correct: true}
        ]
    },
    {
        question: 'Carriageway Widens',
        image: './ProjectPictures/widens.jpg',
        answers: [
            { text: 'This road widens ahead', correct: true},
            { text: 'This road has holes', correct: false},
            { text: 'This road is slippery', correct: false},
            { text: 'This road becomes narrow ahead', correct: false}
        ]
    },
    {
        question: 'Narrow Bridge',
        image: './ProjectPictures/narrow.png',
        answers: [
            { text: 'I do not know', correct: false},
            { text: 'This road becomes narrow ahead', correct: true},
            { text: 'This road widens ahead', correct: false},
            { text: 'This bridge is faulty', correct: false}
        ]
    },
    {
        question: 'Blind People; Drive Carefully',
        image: './ProjectPictures/blind.png',
        answers: [
            { text: 'Children crossing, beware', correct: false},
            { text: 'Short people crossing, beware', correct: false},
            { text: 'Blind people crossing, beware', correct: true},
            { text: 'Animals crossing, beware', correct: false}
        ]
    },
    {
        question: 'Give Way to the Traffic',
        image: './ProjectPictures/giveway.png',
        answers: [
            { text: 'Allow traffic on the right and left', correct: false},
            { text: 'Yield right of way to oncoming vehicles', correct: false},
            { text: 'Give way to oncoming vehicles', correct: false},
            { text: 'All of the above', correct: true}
        ]
    },
    {
        question: 'Long Grade Dangerous Hill',
        image: './ProjectPictures/hill.jpg',
        answers: [
            { text: 'Long dangerous hilly terrain', correct: true},
            { text: 'Undulating long road ahead', correct: false},
            { text: 'Smooth safe terrain', correct: false},
            { text: 'Hilly safe terrain', correct: false}
        ]
    },
    {
        question: 'Ferry',
        image: './ProjectPictures/ferry.jpg',
        answers: [
            { text: 'Ferries are means of transportation', correct: false},
            { text: 'This is a ferry path', correct: true},
            { text: 'Fairies pass here', correct: false},
            { text: 'Do not board a ferry here', correct: false}
        ]
    },
    {
        question: 'Loose Chippings',
        image: './ProjectPictures/loose.jpg',
        answers: [
            { text: 'There are ice pellets on the road', correct: false},
            { text: 'The road is slippery', correct: false},
            { text: 'There are loose sharp chippings on the road', correct: true},
            { text: 'There are loose car parts', correct: false}
        ]
    },

    //Section 4: Regulatory Signs

    //Identify These Regulatory Road Signs

    //What Do These Regulatory Road Signs Mean?
    {
        question: 'Diversion',
        image: './ProjectPictures/diversion.png',
        answers: [
            { text: 'Divert your attention to the left', correct: false},
            { text: 'Oncoming vehicles. Make a u-turn', correct: false},
            { text: 'Sharp right bend ahead', correct: false},
            { text: 'No road ahead. Take this diversion', correct: true}
        ]
    },
    {
        question: 'One-Way',
        image: './ProjectPictures/oneway.png',
        answers: [
            { text: 'Only traffic in one direction is allowed', correct: true},
            { text: 'Traffic in both directions is allowed', correct: false},
            { text: 'Traffic in two directions', correct: false},
            { text: 'I do not know', correct: false}
        ]
    },
    {
        question: 'Roundabout',
        image: './ProjectPictures/roundabout.png',
        answers: [
            { text: 'Turn your car twice ahead', correct: false},
            { text: 'Roundabout ahead', correct: true},
            { text: 'Drive round in circles five times', correct: false},
            { text: 'Turn your steering wheel in 360 degrees', correct: false}
        ]
    },
    {
        question: 'Cycle Track',
        image: './ProjectPictures/cycle.png',
        answers: [
            { text: 'No cyclers must use this path', correct: false},
            { text: 'Ensure you know your safety precautions', correct: false},
            { text: 'All cyclers must use this path', correct: true},
            { text: 'All vehicles except cyclers must use this path', correct: false}
        ]
    },
    {
        question: '2-Lane 2-Way Ahead',
        image: './ProjectPictures/twolanes.jpg',
        answers: [
            { text: 'I do not know', correct: false},
            { text: 'I do not know', correct: false},
            { text: 'I do not know', correct: false},
            { text: 'There is no entry for vehicular traffic', correct: true}
        ]
    },
    {
        question: 'Pedestrian Track',
        image: './ProjectPictures/pedestrian.jpg',
        answers: [
            { text: 'Give way to pedestrians crossing', correct: true},
            { text: 'Run over passengers', correct: false},
            { text: 'Do not stop for pedestrians crossing', correct: false},
            { text: 'This shows the colors of a zebra', correct: false}
        ]
    },
    {
        question: 'End Diversion',
        image: './ProjectPictures/end.png',
        answers: [
            { text: 'Sharp right bend ahead', correct: false},
            { text: 'Dead end.Take this diversion', correct: true},
            { text: 'Divert your attention to the left', correct: false},
            { text: 'Oncoming vehicles. Make a u-turn', correct: false},
        ]
    },
    {
        question: 'Pass Either Side',
        image: './ProjectPictures/pass.jpg',
        answers: [
            { text: 'Pass only one side of the road', correct: false},
            { text: 'Drive on only one side of the road', correct: false},
            { text: 'You can take both sides of the road', correct: true},
            { text: 'Swerve right and left', correct: false}
        ]
    },
    {
        question: 'Give Way to Approaching Vehicle',
        image: './ProjectPictures/giveway.png',
        answers: [
            { text: 'Do not yield to approaching vehicles', correct: false},
            { text: 'Roundabout ahead', correct: false},
            { text: 'Double carriageway road', correct: false},
            { text: 'Approaching vehicles have the right of way', correct: true},
        ]
    },
    {
        question: 'Minimum Speed Limit',
        image: './ProjectPictures/speedlimit.png',
        answers: [
            { text: 'Reduce your speed to lower than this speed limit', correct: false},
            { text: 'Maximum speed limit you must attain', correct: false},
            { text: 'Do not exceed this speed limit', correct: false},
            { text: 'Do not drive below this speed limit', correct: true}
        ]
    }

]
 
/*
let score = 0;
for (question in questions) {
    let userAnswer = answers.question;
    if(userAnswer === answers.true) score++;
print(score)
}*/
//export default questions;