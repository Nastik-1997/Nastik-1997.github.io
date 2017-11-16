<!--
  var maxSize = 1;
  var temp1, temp2, temp3, temp4, temp5, temp6  
                 
  var txt = new Array();
function fullArray(number, paramether, valueParamether){
   this.number = number;
   this.paramether = paramether;
   this.valueParamether = valueParamether;
  }
txt[0] = new fullArray("Номер", "Товар", "Цена");
txt[1] = new fullArray("7", "Корм для кошек", "6,20");
txt[2] = new fullArray("6", "Ошейник для собак", "7,50");
txt[3] = new fullArray("8", "Клетка для грызунов", "10,44");
txt[4] = new fullArray("1", "Аквариум", "12,20");
txt[5] = new fullArray("2", "Лоток для кошек", "44,52");
txt[6] = new fullArray("3", "Кость для собак", "32,00");
txt[7] = new fullArray("5", "Корм для грызунов", "5,50");
txt[8] = new fullArray("4", "Корм для рыбок", "2,16");

function createTable(){
   var counter2 = 0;
   var getIDs = document.getElementById("testremover");  

   //  В самом начале функции мы получаем ссылки 
   //  на уже существующие элементы нашей страницы.  
   //  В теле документа, как вы увидите это позднее, 
   //  обязательно должны присутствовать теги <table id="test">
   //  <tbody id="testremover">. Если тег <tbody> отсутствует, 
   //  значит уже было произведено удаление тела таблицы, 
   //  и необходимо создать новый тег.

   if(!getIDs){
    var getIDTest = document.getElementById("test");
    var crtID = document.createElement("tbody");
    crtID.id = "testremover";
    getIDTest.appendChild(crtID); 
    getIDs = document.getElementById("testremover");
   }	

  //Создав <tbody> и присвоив ему указанный id 
  //(безусловно, имя id может быть любым), 
  //мы уже создали остов нашей таблицы.

  for(var counter=0; counter<=txt.length-1; counter++){ 
   var crtTr = document.createElement("tr");  

  //Первый цикл определяет количество строк, 
  //после него указана только одна переменная, 
  //она создает элемент "tr", в который будет добавлена 
  //информация из следующего цикла.

   for(var count=0; count<=2; count++){ 

  //Логическое условие второго цикла представляет 
  //собой количество аргументов массива, 
  //проще говоря количество его столбцов. 

    counter2++;
    var crtTd = document.createElement("td"); 
    if(counter2 == 1){
     var crtTxtNd = document.createTextNode(txt[counter].number);
    }  
    else if(counter2 == 2){
     var crtTxtNd = document.createTextNode(txt[counter].paramether);
    }
    else{
     var crtTxtNd = document.createTextNode(txt[counter].valueParamether);
     counter2 = 0;
    }
    crtTd.appendChild(crtTxtNd);
    crtTr.appendChild(crtTd);
    getIDs.appendChild(crtTr);
   }
  }
 }
 
function sortArrNumber(){
   for(counter=1; counter < txt.length-1; counter++){
 
    // Вначале определяется первый цикл, 
    // его переменная counter будет определять порядковый
    // номер первого массива взятого для сравнения.

    maxSize++
    for(count=maxSize; count <= txt.length-1; count++){

     //  Переменная maxSize обеспечивает такое значение 
     //  для переменной второго цикла, которое
     //  всегда будет больше на единицу переменной counter. 
     //  То есть, мы будем сравнивать 
     //  первый и второй массив, затем первый и третий... 
     //  второй и третий, и т. д.  
                                
     for(var counts=0; counts <= 100; counts++){

      // Следующий, третий цикл, инициализирует переменную counts 
      // нулем и ставит ей логическое условие <= 100.
      // Число сто условно, это количество сравниваемых букв или 
      // цифр в цикле (вряд-ли найдется такая фраза, 
      // в которой будут дважды повторяться одни и те же слова 
      // в одинаковом порядке, впрочем, если такое возможно, 
      //    то условие можно увеличивать вплоть до 9007199254740992).
	                       
      if(txt[counter].number.charCodeAt(counts) 
          < txt[count].number.charCodeAt(counts)){
       temp1 = txt[counter].number;
       temp2 = txt[counter].paramether;
       temp3 = txt[counter].valueParamether;
       temp4 = txt[count].number;
       temp5 = txt[count].paramether;
       temp6 = txt[count].valueParamether;
       txt[count].number = temp1;
       txt[count].paramether = temp2;
       txt[count].valueParamether = temp3;
       txt[counter].number = temp4;
       txt[counter].paramether = temp5;
       txt[counter].valueParamether = temp6;
       break
      }

      // Затем начинается сравнение. 
      // Если порядковый символ массива с номером counter и столбцом,
      // по которому мы сортируем ( if (txt[counter].years) меньше 
      // (или больше, вы вправе менять эти условия), то значения массивов 
      // меняются, и цикл, который определяет char'овский код
      // сравниваемых символов, прерывается. 
      // Счетчик второго массива изменяется на единицу, 
      // и проверка начинается по новой.

     else if(txt[counter].number.charCodeAt(counts) 
            == txt[count].number.charCodeAt(counts)){
      continue
     }

     //Если значения равны, внутренний цикл увеличивает значение на единицу 
     //и сравнивает уже вторые символы и т. д.

     else{
          break
	 }

    // В противном случае, значение считается отвечающим условию сортировки
    // и внутренний цикл завершается.

     }
    }
   }
   maxSize=1
   createTable()
  }
  function sortByParamether(){
  
   for(counter=1; counter < txt.length-1; counter++){
 
    maxSize++
    for(count=maxSize; count <= txt.length-1; count++){
                                
     for(var counts=0; counts <= 100; counts++){
	                       
      if(txt[counter].paramether.charCodeAt(counts) 
          < txt[count].paramether.charCodeAt(counts)){
       temp1 = txt[counter].number;
       temp2 = txt[counter].paramether;
       temp3 = txt[counter].valueParamether;
       temp4 = txt[count].number;
       temp5 = txt[count].paramether;
       temp6 = txt[count].valueParamether;
       txt[count].number = temp1;
       txt[count].paramether = temp2;
       txt[count].valueParamether = temp3;
       txt[counter].number = temp4;
       txt[counter].paramether = temp5;
       txt[counter].valueParamether = temp6;
       break
      }

     else if(txt[counter].paramether.charCodeAt(counts) 
            == txt[count].paramether.charCodeAt(counts)){
      continue
     }

     else{
          break
	 }
		
     }
    }
   }
   maxSize=1
   createTable()
  }
  
    function sortByParametherReverse(){
  
   for(counter=1; counter < txt.length-1; counter++){
    maxSize++
    for(count=maxSize; count <= txt.length-1; count++){

     for(var counts=0; counts <= 100; counts++){
	                       
      if(txt[counter].paramether.charCodeAt(counts) 
          > txt[count].paramether.charCodeAt(counts)){
       temp1 = txt[counter].number;
       temp2 = txt[counter].paramether;
       temp3 = txt[counter].valueParamether;
       temp4 = txt[count].number;
       temp5 = txt[count].paramether;
       temp6 = txt[count].valueParamether;
       txt[count].number = temp1;
       txt[count].paramether = temp2;
       txt[count].valueParamether = temp3;
       txt[counter].number = temp4;
       txt[counter].paramether = temp5;
       txt[counter].valueParamether = temp6;
       break
      }

     else if(txt[counter].paramether.charCodeAt(counts) 
            == txt[count].paramether.charCodeAt(counts)){
      continue
     }

     else{
          break
	 }
		
     }
    }
   }
   maxSize=1
   createTable()
  }
  
function sortArrNumberReverse(){
   for(counter=1; counter < txt.length-1; counter++){
    maxSize++
    for(count=maxSize; count <= txt.length-1; count++){
                        
     for(var counts=0; counts <= 100; counts++){
	                       
      if(txt[counter].number.charCodeAt(counts) 
          > txt[count].number.charCodeAt(counts)){
       temp1 = txt[counter].number;
       temp2 = txt[counter].paramether;
       temp3 = txt[counter].valueParamether;
       temp4 = txt[count].number;
       temp5 = txt[count].paramether;
       temp6 = txt[count].valueParamether;
       txt[count].number = temp1;
       txt[count].paramether = temp2;
       txt[count].valueParamether = temp3;
       txt[counter].number = temp4;
       txt[counter].paramether = temp5;
       txt[counter].valueParamether = temp6;
       break
      }

     else if(txt[counter].number.charCodeAt(counts) 
            == txt[count].number.charCodeAt(counts)){
      continue
     }

     else{
          break
	 }
     }
    }
   }
   maxSize=1
   createTable()
  }
function allocator(){
   var a = document.sorter.Selector.value
   var GetRem = document.getElementById("test");
   var cloneGetRem = document.getElementById("testremover");
   GetRem.removeChild(cloneGetRem);

   // Удалив тело таблицы, мы проверяем селекторы выпадающего списка,
   // и, в соответствии с результатами проверки, 
   // вызываем необходимую нам функцию сортировки. 
   // Как ее изменить указано выше. 
 
   if(a == "Z-A"){
    sortByParamether()
   }
   else if(a == "A-Z"){
    sortByParametherReverse()
   }
   else if(a == "D-D"){
    sortArrNumber()
   }
   else{
    sortArrNumberReverse()
   }
  }
//-->
