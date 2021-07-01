´´´function calculaNota(ex, p1, p2) {
  
  const calculaNota = (ex * 1) + (p1 * 2) + (p2 * 3)
  
  const mediaPonderada = calculaNota / 1 + 2 + 3 
  
  let conceitoAluno;
  
  if(mediaPonderada >= 9){ conceitoAluno = "A"
    
  }else if(mediaPonderada < 9 && mediaPonderada >= 7.5){
    
    conceitoAluno = "B"
    
  }else if(mediaPonderada < 7.5 && mediaPonderada >= 6){
    
    conceitoAluno = "C"
    
  }else{conceitoAluno = "D"}
  
  return conceitoAluno
}´´´