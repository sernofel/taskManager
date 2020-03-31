# TASK MANAGER

## 1. MYFIRSTAPP-USESTATE
- Implementation material-ui
- Styles custom through files .scss
- HOOK useState()


> Docu:
  - Material UI —> https://material-ui.com/es/getting-started/installation/
  - Hooks —> https://reactjs.org/docs/hooks-intro.html
---

## 2. MYFIRSTAPP-REDUX-PROPS
- Redux:
  - Create actions as add, remove and complete a task
  - Config reducer
  - Add and test combineReducers() like a test if would have several reducers (this, it would was in the root configuration file of the store)
  - mapStateToProps() y mapDispatchToProps() for replace funcionality with help of the store
- Formularios:
  - formik y validators (yup)
  - Include custom components in the field <Field> of a formik form Añadir custom componentes en campos <field> de un formulario con formik

> Docu:
 - Redux-react —> https://es.redux.js.org/docs/basico/
 - Redux —> https://www.valentinog.com/blog/redux/
 - Formik —> https://jaredpalmer.com/formik/docs/overview 

---

## 3. MYFIRSTAPP
- Redux
  - typesafe-actions
  -  Create selectors
  - Add EPIC and asyncAction()
  - Service to mock request to bbdd (setTimeout())
  - Config store to level global (rootStore)
  - HOOK useDispatch()
  - HOOK useEffect()
- Create ’TASK’module to separate it from global configuration


> Docu:
  - Typesafe actions:
      - https://github.com/piotrwitek/typesafe-actions
      - https://issuehunt.io/r/piotrwitek/typesafe-actions/issues/143
  - Epics —> https://redux-observable.js.org/docs/basics/Epics.html
  
  
After...
- Hook custom --> useModal (management of the state open/close)
- Error handling  in a request. Include operationStatus into state of the store
- Custom theme implemented with Material-UI
