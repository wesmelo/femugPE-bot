module.exports = {
  welcome: [
    'Beep beep boop\n\nOlá, eu sou o bot do grupo FEMUG-PE',
    'O Front-End Meet-Up Group é um projeto que nasceu da necessidade de unir os desenvolvedores para que o acesso à informação seja feito em qualquer lugar que haja interesse do aprendizado.',
    'Faça parte do nosso grupo!\nConvite: https://goo.gl/qp7Jrw \nMeetup: https://bit.ly/2LtCpYx \nFacebook: https://bit.ly/2zTiQEp'
  ],
  best_regards: message => {
    return [
      `Beep boop, ${message.from.first_name}`,
      `Faaaaaaala ${message.from.first_name}!`,
      `Dale ${message.from.first_name}!`,
      `Alo alo alo ${message.from.first_name}`,
      `Eae ${message.from.first_name}`,
      'É quente...',
      'É rocha!',
      'Tudo tranquilo ctg?',
      `Só na marosidade, ${message.from.first_name}?`
    ]
  },
  joke: [`dispense`, 
         `é tu nada, visse`,
         `apois viu`,
         `essa musica do strokes e tao boa q vou ter q repetilia`,
         `e arroi`,
        `qual a cidade que todo mundo sabe SQL?\n\nJoinville`,
        `e o país de quem gosta de nosql?\n\nMongo-lia`,
        `e o país que é o maior root Linux?\n\nSudão`,
        `qual cidade todos programam em Pascal?\n\nDelfinópolis`,
        `por que a linguagem C não pode frequentar a alta sociedade?\n\nPorque ela não tem classe`],
  error_default: `Ocorreu um erro na busca, desculpa! : /`,
  new_member: message => {
    return `Mais um Front-ender chegando no grupo!\n\nSeja bem-vindo(a) ${message.from.first_name}! Tudo tranquilo? Só na marosidade?`
  },
  hacktober: [
    'Quer participar da #Hacktoberfest?\n\nSite sobre o Hacktoberfest:\nhttps://hacktoberfest.digitalocean.com/\n\nGuia prático sobre como contribuir no GitHub:\nhttps://blog.da2k.com.br/2015/02/04/git-e-github-do-clone-ao-pull-request/',
    'Não sabe que projeto contribuir?\n\nCuradoria de projetos brasileiros para contribuir:\nhttps://medium.com/@jessicatemporal/projetos-brasileiros-para-contribuir-nesse-hacktoberfest-vers%C3%A3o-2018-4925959b9411\n\nLista Maravilhosa de Projetos Open-Source:\nhttps://github.com/camilatigre/listamaravilhosaopensource\n\nDivertidalista:\nhttps://github.com/training-center/divertidalista',
    'Participe do evento TOP que vai rolar próxima semana (06/10):\nhttps://www.sympla.com.br/hacktoberfest-em-recife__367675',
    'Para quem quer achar issues específicas. Use a barra de pesquisa do github com state:open label:{OqVoceProcura}.\nex: state:open label:UI (para procurar por issues marcadas como UI)\n\nE para quem é novato ainda e não sabe muito no que pode ajudar, procure por state:open label:first-timers-only. São issues examente para quem nunca contribuiu'
  ]
}
