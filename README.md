# TASK MANAGER

## 1. MYFIRSTAPP-USESTATE
- Implementación de material-ui
- Styles personalizados mediante archivo scss
- HOOK useState()


> Docu:
  - Material UI —> https://material-ui.com/es/getting-started/installation/
  - Hooks —> https://reactjs.org/docs/hooks-intro.html
---

## 2. MYFIRSTAPP-REDUX-PROPS
- Redux:
  - Crear acciones como añadir, eliminar y completar una tarea
  - Configurar reducer
  - Se incluye combineReducers() con la prueba de que tuviéramos varios y probar funcionamiento (esto iría a archivo root de configuración de la store de todo el proyecto)
  - mapStateToProps() y mapDispatchToProps() para sustituir funcionalidades con ayuda de la store
- Formularios:
  - Implementar formik y validaciones (yup)
  - Añadir custom componentes en campos <field> de un formulario con formik


> Docu:
 - Redux-react —> https://es.redux.js.org/docs/basico/
 - Redux —> https://www.valentinog.com/blog/redux/
 - Formik —> https://jaredpalmer.com/formik/docs/overview 

---

## 3. MYFIRSTAPP
- Redux
  - Implementar typesafe-actions
  - Crear selectores
  - Añadir EPIC y crear acción asíncrona (createAsyncAction())
  - Servicio que simula una petición a bbdd (setTimeout())
  - Configurar store a nivel global (rootStore)
  - HOOK useDispatch()
  - HOOK useEffect()
- Crear módulo ’TASK’ para separarlo de la configuración global


> Docu:
  - Typesafe actions:
      - https://github.com/piotrwitek/typesafe-actions
      - https://issuehunt.io/r/piotrwitek/typesafe-actions/issues/143
  - Epics —> https://redux-observable.js.org/docs/basics/Epics.html
