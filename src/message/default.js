module.exports = {
  welcome: [
    'Beep beep boop\n\nOlá, eu sou o bot do grupo FEMUG-PE',
    'O Front-End Meet-Up Group é um projeto que nasceu da necessidade de unir os desenvolvedores para que o acesso à informação seja feito em qualquer lugar que haja interesse do aprendizado.',
    'Faça parte do nosso grupo!\nConvite: https://bit.ly/2uOzSxs \nMeetup: https://bit.ly/2LtCpYx \nFacebook: https://bit.ly/2zTiQEp'
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
  joke: ['dispense', 'é tu nada, visse', 'apois viu', 'e arroi'],
  error_default: `Ocorreu um erro na busca, desculpa! : /`,
  new_member: message => {
    return `Mais um Front-ender chegando no grupo!\n\nSeja bem-vindo(a) ${message.from.first_name}! Tudo tranquilo? Só na marosidade?`
  }
}
