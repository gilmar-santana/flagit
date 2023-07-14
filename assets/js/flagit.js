(function( $ ){
	$.fn.flagit = function(options){
		let defaults = {
			data: [
				['ac','ac','Acre'],
				['al','al','Alagoas'],
				['ap','ap','Amapá'],
				['am','am','Amazonas'],
				['ba','ba','Bahia'],
				['ce','ce','Ceará'],
				['df','df','Distrito Federal'],
				['es','es','Espírito Santo'],
				['go','go','Goiás'],
				['ma','ma','Maranhão'],
				['mt','mt','Mato Grosso'],
				['ms','ms','Mato Grosso do Sul'],
				['mg','mg','Minas Gerais'],
				['pa','pa','Pará'],
				['pb','pb','Paraíba'],
				['pr','pr','Paraná'],
				['pe','pe','Pernambuco'],
				['pi','pi','Piauí'],
				['rj','rj','Rio de Janeiro'],
				['rn','rn','Rio Grande do Norte'],
				['rs','rs','Rio Grande do Sul'],
				['ro','ro','Rondônia'],
				['rr','rr','Roraima'],
				['sc','sc','Santa Catarina'],
				['sp','sp','São Paulo'],
				['se','se','Sergipe'],
				['to','to','Tocantins']
			],
			flags: true,
			placeholder: 'Estados...',
			path: 'img/flags/',
			ext: 'png',
		}

		let settings = $.extend( {}, defaults, options );

		let items = '';
		let list = '';
		let flag = '';

        list += '<li class="pt-1 pb-1 border-bottom"><button class="dropdown-item" type="button" data-code="0" data-region="'+settings.placeholder+'">' + settings.placeholder + '</button></li>';

		for(let [code, img, title] of settings.data){
			if(settings.flags == true){
				flag = '<img src="'+settings.path+img+'.'+settings.ext+'" width="30" class="me-2">';
			}

			items += '<option value="'+code+'" data-thumbnail="'+img+'.'+settings.ext+'">'+title+'</option>';
			list += '<li class="pt-1 pb-1 border-bottom"><button class="dropdown-item" type="button" data-code="'+code+'" data-region="'+title+'">'+ flag + title+'</button></li>';
		}

		$(this).append('<option>'+ settings.placeholder +'</option>'+items).after('<div class="btn-group mb-5 flagit"><button class="btn btn-light border dropdown-toggle" type="button" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">' + settings.placeholder + '</button><ul class="dropdown-menu scrollbar" aria-labelledby="dropdown">' + list +'</ul></div>');

		let el = '.'+$(this).attr("class") + ' option';
		
		$(document).on('click', '.dropdown-menu button', function(){
            let region;
            let code;

            if($(this).data('code') != 0){
                region = '<img src="'+settings.path+$(this).data("code")+'.'+settings.ext+'" width="30" class="me-2">' + $(this).data("region");
                code = $(this).data("code");
            }else{
                region = $(this).data("region");
                code = $(this).data("code");
            }
			
			$('.flagit #dropdown').html(region);
		
			$(el).removeAttr('selected').filter('[value='+code+']').attr('selected', true);

		});

	}
})( jQuery );