function theBeatlesPlay (musicians,instruments) {
var array = []
for (let i= 0, l= musicians.length; i < l; i++){
array.push( `${musicians[i]} plays ${instruments[i]}`)
}
  return array
}

function johnLennonFacts (facts) {
const facts = ["he is great",
"he is superb",
"he likes to eat"
];
let i=0
while (i < facts.length) {
  facts.push (`${facts[i]}!!!`)
}
return facts
 }
