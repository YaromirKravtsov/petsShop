<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet">
    <title>Document</title>
</head>
<body>
    <div class="basket-wraper"> 
            <div class="basket-desktop">
                 <div class="basket__row">
                <div class="basket__titles">
                    <div class="basket__titles-name">Товар</div>
                    <div class="basket__titles-price">Ціна / ₴</div>
                    <div class="basket__titles-quantity">Кількість</div>   
                    <div class="basket__titles-totalPrice">Загальна ціна / ₴</div>
                    <div class="basket__titles-delete">Видалити</div>

                </div>
                <div class="basket-line"></div>
                <div class="basket__cards"></div>
              <div class="basket-line"></div>
                <div class="basket__total">
                 
                        <div class="basket__total-prise" >Загальна вартість: 0 ₴</div>
                        <div class="basket__total-quantity" id="totalQuantity">Усього товарів: 1</div>
             
                </div>
                <div class="basket-line"></div>
                 
                 <div class="basket__form">
                    <div class="basket__form-column1">
                        <input class = "input"  type="text" placeholder="Введіть ПІБ">
                        <input class = "input"  type="text" placeholder="Введіть номер телефону">
                    </div>
                    <div class="basket__form-column2">
                        <input class= "input"  type="text" placeholder="Введіть електронну пошту">
                        <div class="basket__form__button-row">
                            <div class="basket__form__button" id="continue">Продовжити покупки</div>
                            <div class="basket__form__button" id="send">Зробити замовлення</div>
                        </div>
                    </div>
                 </div>
                </div>
            </div>
            <div class="basket-mobile">
                <h2>Кошик</h2>
                <div class="basket-line-mobile"></div>
                <div class="basket__row-mobile">
                
              </div> 
                <div class="basket-line-mobile"></div>
                <div class="basket-mobile-down-row">
                    <div class="basket-mobile__total"><div class="basket-mobile__total-prise">Загальна вартість: <br> 0 ₴</div><div class="basket-mobile__total-count">Усього товарів: <br> 0</div></div>
                    <div class="basket-line-mobile"></div>
                    <div class="basket-mobile-button" id="continue1">Продовжити покупки</div>
                    <input type="text" class="basket-mobile-input" placeholder="Введіть ПІБ">
                    <input type="text" class="basket-mobile-input" placeholder="Введіть номер телефону">
                    <input type="text" class="basket-mobile-input" placeholder="Введіть електронну пошту">
                    <div class="basket-mobile-button">Зробити замовлення</div>
                </div>
            </div>
    </div>
    <div class="wraper">
   
        <div class="upBoard"></div>
        <div class="header-up">
            <div class="container">
                <div class="header-up__row">
                    <p>Наближаємо перемогу разом! <div class="hearts"></div></p>
                    <img id="basket" src="img/basket.png" alt="">
                </div>
            </div>
        </div>
        <header class="header">
            <div class="container">
                    <div class="header__bottom ">
                        <div class="menu__icon"><span></span></div>
                      
                            <a href="index.html"><img src="img/logo1.png" alt="" class="logo"></a>
                    
                            <nav class="menu__body">
                                <ul class="menu__list">
                                    <li id = "top"><a href="#" class="menu__link">Популярнi товари</a></li>
                                    <li><div class="dropdown">
                                        <div class="dropbtn" id="Toys">Іграшки</div>
                                        <div class="dropdown-content">
                                          <a href="#" id="Interactive">Iнтерактивні</a>
                                          <a href="#" id="Electrical">Електричні</a>
                                          <a href="#" id="Catnip">Котяча м'ята</a>
                                        </div>
                                      </div> <img src="img/arrow.png" alt=""></li>
                                    <li><a href="#" id="Care" class="menu__link">Догляд</a></li> 
                                    <li><a href="#" id="dishes" class="menu__link">Посуд</a></li> 
                                    <li><a href="#" id="food" class="menu__link">Їжа</a></li> 
                                </ul> 
                            
                            </nav> 
                    </div>
            </div>
       </header>
           <div class="content">
            <div class="container-card">
                <div class="content__row">
                </div>
            </div>
           </div>
           <footer>
            <div class="container">
                <div class="footer__row">
                    <div class="footer__column1">
                        <img src="img/logo2.png" alt="">
                    </div>
                    <div class="footer__column2">
                        <h2>Про нас</h2>
                        <p>Магазин для просунутих котобатьків. Ексклюзивні товари, які не знайдеш <br>    на полицях звичайних зоо.</p>
                        <div class="telefon"><img src="img/telefon.png" alt=""> <a href="tel:+380982065957">+ 380 (98) 206 59 57</a></div>
                        <div class="email"><img src="img/email.png" alt=""> <a href = "mailto: kotyatashop@gmail.com ">kotyatashop@gmail.com</a></div> 
                    </div>
                </div>
            </div>
           </footer>

    </div>
    <script src="js/scrypt.js"></script>
    <script src="js/Cards.js"></script>

</body>
</html>
