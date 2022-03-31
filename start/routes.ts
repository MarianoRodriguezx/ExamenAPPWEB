/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(()=>{
  Route.resource('partida', 'PartidasController')
  Route.resource('detalle_partida', 'DetallePartidasController')

  Route.post('insertarBarco', 'PartidasController.InsertarBarcos')
  Route.post('insertarAtacante', 'PartidasController.InsertarAtacante')
  Route.get('verCuadrilla/:id', 'PartidasController.Cuadricula')
  Route.post('logout', 'UsersController.logout');

}).middleware(['auth'])


Route.post('login', 'UsersController.login');
Route.post('signup', 'UsersController.signup');
