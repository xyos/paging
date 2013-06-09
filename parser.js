if(process.argv.length >= 4){
  var size = process.argv[2];
  var address = process.argv[3];
  if ( size != 0 && ( size & (size - 1) ) == 0 ){
    console.log('La dirección ' + address + ' corresponde a:'
                + '\nnúmero de página = ' + parseInt( address / size )
                + '\ncorrimiento = ' + ( address % size ));
  } else {
    console.log('el tamaño de pågina no es potencia de 2');
  }
} else {
  console.log('modo de uso: \n parser.js page_size location');
}
