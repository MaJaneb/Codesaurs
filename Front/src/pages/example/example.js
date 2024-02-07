// example page
import React from "react";
// css styles
import "./example.css";
// imported items
// код своей страницы старайтесь делить на отдельные компоненты, для этого можете в своей папке создать соответствующие файлы и затем импротировать в основной файл вашей страницы

const ExamplePage = () => {
  return (
    <div className="examplePage_container">
      <a href="https://app.uizard.io/p/e7ac8abb/preview" target="_blank">
        Ссылка на макет
      </a>
    </div>
  );
};

export { ExamplePage };
