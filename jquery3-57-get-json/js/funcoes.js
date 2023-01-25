/* Exibe o conteúdo */
$.getJSON('json/db_conteudo.json', function(json) {
	json.sort(function(a, b){
    return b.codigo - a.codigo;
});		
	$.each(json, function(i, data){
	var destaque = (data.codigo == json.length)?'#c0c0c0':'#ffffff';
		 $("#tbodyConteudo").append("<tr bgcolor='"+ destaque +"'>" + 
		 "<td><a href='postagem.html?id="+ data.codigo +"'>" + data.codigo + "</a></td>" + 
		 "<td><img src='imgs/" + data.imagem_1 + "' width='150'></td>" + 
		 "<td>" + data.titulo + "</td>" + 
		 "<td>" + data.corpo.substr(0,250) + "</td>" + 
		 "</tr>");
	})
});
		
/* Exibe a postagem */	
$.getJSON('json/db_conteudo.json', function(json) {

	let params = (new URL(document.location)).searchParams;
	let id = params.get('id');	
		
	$.each(json, function(i, data){
	if(data.codigo == id){
		 $("#tbodyConteudo2").append("<tr bgcolor='#ffffff'>" + 
		 "<td><a href='postagem.html?id="+ data.codigo +"'>" + data.codigo + "</a></td>" + 
		 "<td><img src='imgs/" + data.imagem_1 + "' width='150'></td>" + 
		 "<td>" + data.titulo + "</td>" + 
		 "<td>" + data.corpo + "</td>" + 
		 "</tr>");}
	})
});