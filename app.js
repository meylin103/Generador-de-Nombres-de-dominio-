  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];

  for (let i = 0; i < pronoun.length; i++) {
    let pronounActual = pronoun[i]

   for (let j = 0; j < adj.length; j++) {
    let adjActual = adj[j]

   for (let a = 0; a < noun.length; a++) {
    let nounActual = noun[a]

    let domain = pronounActual + adjActual + nounActual + ".com"

    console.log(domain);
}
}
  }