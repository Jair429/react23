import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"

describe('Pruebas en 08-imp-exp', () => {


  test('getHeroesById debe de retornar un héroe por ID', () => { 

    const id = 1
    const hero = getHeroeById(id)
    // console.log(hero)

    // expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })

   })
  test('getHeroesById debe de retornar undefined si no existe', () => { 

    const id = 100
    const hero = getHeroeById(id)
    // console.log(hero)

    // expect( hero ).toBeFalsy();

   })

  //  Tarea:
  //  Debe de retornar un arreglo con los héroes de DC
  //  Length === 3
  //  toEqual al arreglo filtrado

  //  debe de retornar un arreglo con los héroes de Marvel
  //  legth === 2

  test('getHeroesByOwner debe de retornar héroe DC', () => { 

    const owner = 'DC'
    const hero = getHeroesByOwner(owner)
    // console.log(hero , '<------')

    expect(hero.length).toBe(3)
    expect(hero).toEqual([
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' }
    ] )
    expect(hero).toEqual(hero.filter( (heroe) => heroe.owner === owner ))

   })

   test('getHeroesByOwner debe de retornar héroe MARVEL', () => { 

    const owner = 'Marvel'
    const hero = getHeroesByOwner(owner)
    // console.log(hero , '<------')

    expect(hero.length).toBe(2)

   })



 })