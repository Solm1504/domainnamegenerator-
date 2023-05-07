const generarNombres = () => {
    const pronoun = ["the", "our"];
    const adj = ["great", "big"];
    const noun = ["jogger", "racoon"];
    const domains = [];
  
    pronoun.forEach(pronounItem => {
      adj.forEach(adjItem => {
        noun.forEach(nounItem => {
          const domainName = `${pronounItem}${adjItem}${nounItem}.com`;
          domains.push(domainName);
        });
      });
    });
  
    console.log(domains);
  };
  