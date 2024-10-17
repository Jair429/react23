import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => { 
  test('getUser debe de retornar un objeto', () => { 

    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const user = getUser()
    // console.log(user)

    expect( testUser ).toEqual( user )

   })

   test('getUsuario debe de retornar un objeto',()=>{


    // const testUser2 = {
    //   uid: 'ABC567',
    //   username: name
    // }


    const name = 'Lamine'

    const user2 = getUsuarioActivo(name)
    console.log(user2)

    expect( user2 ).toEqual({
      uid:'ABC567',
      username: name
    })
   })

 })