

test('Esta prueba no debe de fallar',()=>{

  if ( 'messi' === 'retegui' ){
    throw new Error('No puede dividir entre cero');
  }
})