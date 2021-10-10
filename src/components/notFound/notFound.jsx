
import query from 'query-string'
import NavBar from "../navBar/navBar";
const NotFound = ({crumbs, location}) => {

//логика отображения списка избранных
const search = query.parse(location.search)
  if(search?.favorites === 'true'){
    console.log('отображаем избранных')
  }

  //пример простого рендеринга крошек
  return <>
    {crumbs && <Breadcrumbs crumbs={crumbs} specify={'Ошибка'} />}
    <h1>Страница не найдена</h1>
  </>;
};
//пример с передачей специфической последней крошки (заменяем её юзером)
//{crumbs && <Breadcrumbs crumbs={crumbs} specify={'Александр'} />}

//пимер рендеринга крошек через children (теперь навбар сможет их вызывать деструктуризовав children у себя
//   {crumbs &&
//   <NavBar>
//     <Breadcrumbs crumbs={crumbs} />
//   </NavBar>
//   }

//для замены последней крошки (член команды меняем на имя пользователя) - нужно передать пропсом в крошки имя пользователя
//и при рендере крошек заменить последний элемент массива (член команды) на имя пользователя

export default NotFound;
