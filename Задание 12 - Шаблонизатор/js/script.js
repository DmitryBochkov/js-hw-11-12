$(document).ready(function() {

  var html = $('#about').html();
  var data = {
    header: {
      title: 'Бочков Дмитрий Сергеевич'
    },
    image: {
      source: 'img/myphoto.jpg',
      alt: 'Моя фотография',
      title: 'Это я'
    },
    photoCaption: 'Студент курса GoFrontend Online#2',
    motivationTitle: 'Хочу учить фронтенд, потому что:',
    motivationReasons: [
      'Заборы строить не интересно.',
      'Платят мало.',
      'Приходится работать по ночам.'
    ],
    phoneNumber: {
        title: 'Мой контактный телефон',
        details: '+380669186545'
      },
    vk: {
        title: 'Мой профиль Вконтакте',
        details: 'https://vk.com/id86160567',
        linkContent: 'vk.com'
      },
    feedback: {
        title: 'Мой фидбек:',
        details: 'Если нужно, могу построить вам забор.',
      }
  };

  var content = tmpl(html, data);
  $('body').append(content);
});
