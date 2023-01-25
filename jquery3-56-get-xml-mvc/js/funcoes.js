/* Exibe o conteúdo */
$.get('xml/db_conteudo.xml', function(varPostagem){     
		var varConteudo = $(varPostagem).find('postagem');
		
		varConteudo.sort(function(a,b){
		return $(b).attr('codigo').localeCompare($(a).attr('codigo'));
		});
			varConteudo.each(function(i,v){
			var destaque = ($(v).attr('codigo') == varConteudo.length)?'#c0c0c0':'#ffffff';
			$('#tbodyConteudo').append(
				'<tr bgcolor="'+ destaque +'"><td><a href="postagem.html?id='+ $(v).attr('codigo') +'">' + $(v).attr('codigo') + '</a></td> ' +
				'<td><img src="imgs/' + $(v).find('imagem_1').text() + '" width="150"></td>' +
				'<td>' + $(v).find('titulo').text() + '</td> ' +
				'<td>' + $(v).find('corpo').text().substr(0,250) + '</td></tr>');
			});
		});
		
/* Exibe a postagem */	
$.get('xml/db_conteudo.xml', function(varPostagem){     
		var varConteudo = $(varPostagem).find('postagem');
			
		let params = (new URL(document.location)).searchParams;
		let id = params.get('id');

			varConteudo.each(function(i,v){
			if(parseInt($(v).attr('codigo')) == id){
			$('#tbodyConteudo2').append(
				'<tr bgcolor="#ffffff"><td><a href="postagem.html?id='+ $(v).attr('codigo') +'">' + $(v).attr('codigo') + '</a></td> ' +
				'<td><img src="imgs/' + $(v).find('imagem_1').text() + '" width="150"></td>' +
				'<td>' + $(v).find('titulo').text() + '</td> ' +
				'<td>' + $(v).find('corpo').text() + '</td></tr>');}
			});
		}); 