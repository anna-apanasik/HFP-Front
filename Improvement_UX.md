# Оценка разрабатываемого ПО
## 1. Распознаваемость соответствия
Данное web-приложение содержит необходимый минимальный функционал для работы с текстом, что и требуется для пользователя, заинтересованного в создании статьи или текстовой инструкции.
## 2. Обучаемость
В приложении присутствуют шаблоны заполнения текстовых полей. Кроме того, присутствует описание действий, которые требуются от пользователя.
## 3. Используемость
Интерфейс приложения содержит информацию о том, что необходимо сделать пользователю. Однако некоторые корректировки внести можно, например исправление перехода к просмотру статьи.
## 4. Защита от ошибок пользователя
Присутствует фильтрация вводимых пользователем данных, а также уведомление пользователя об этих ошибках в реальном времени. 
## 5. Эстетика GUI
Возможно корректировка некоторых графических элементов, что позволит улучшить качество работы с приложением.
## 6. Доступность
Данное приложение может использоваться подавляющим большинством людей с определёнными особенностями.

### Вывод:
В ходе анализа атрибутов качества ПО группы “Usability” установлено, что приложение соответствует основным требованиям. Однако определён ряд мероприятий по улучшению качества ПО.

# Улучшение UX
## Мероприятия:
* Улучшение читабельности текста
* Переход к просмотру статьи по клику на превью
* Привидение кнопок одной группы к одинаковому типу отображения
* Добавление информационных полей (подсказок)
* Изменение header ("навигационное меню"): добавление кнопок, изменение надписей, добавление подсказок

Были проведены вышеописанные мероприятия, вместе с тем удалился неиспользуемый код, был произведен рефакторинг, добавлен некоторый функционал.

# Примеры проведенных улучшениий

* ##  Улучшение читабельности текста
    ### Информация о пользователе 
    ####  До ![alt text](https://github.com/anyablischik/HFP-Front/blob/master/Improvement_UX_Examples/userInfoBefore.png)
    ####  После ![alt text](https://github.com/anyablischik/HFP-Front/blob/master/Improvement_UX_Examples/userInfoAfter.png)
  
    ### Превью инструкции 
    ####  До ![alt text](https://github.com/anyablischik/HFP-Front/blob/master/Improvement_UX_Examples/previewInstructionBefore.png)
    ####  После ![alt text](https://github.com/anyablischik/HFP-Front/blob/master/Improvement_UX_Examples/previewInstructionAfter.png)

    ### Увеличение шрифтов
    ####  До ![alt text](https://github.com/anyablischik/HFP-Front/blob/master/Improvement_UX_Examples/Capture2.PNG)
    ####  После ![alt text](https://github.com/anyablischik/HFP-Front/blob/master/Improvement_UX_Examples/Capture3.PNG)

* ## Привидение кнопок одной группы к одинаковому типу отображения
    ####  До 
    ![alt text](https://github.com/anyablischik/HFP-Front/blob/master/Improvement_UX_Examples/buttonsBefore.png)
    ####  После 
    ![alt text](https://github.com/anyablischik/HFP-Front/blob/master/Improvement_UX_Examples/buttonsAfter.png)
    
* ## Добавление информационных полей (подсказок) 
    ### Добавление столбца с информацией о текузем статусе пользователя
    ####  До ![alt text](https://github.com/anyablischik/HFP-Front/blob/master/Improvement_UX_Examples/Снимок%20экрана%202018-04-28%20в%200.57.56.png)
    ####  После ![alt text](https://github.com/anyablischik/HFP-Front/blob/master/Improvement_UX_Examples/Снимок%20экрана%202018-04-28%20в%201.37.18.png)

    ### Добавление placeholder'ов в качестве подсказки
    ####  До ![alt text](https://github.com/anyablischik/HFP-Front/blob/master/Improvement_UX_Examples/Capture4.PNG)
    ####  После ![alt text](https://github.com/anyablischik/HFP-Front/blob/master/Improvement_UX_Examples/Capture5.PNG)

 * ## Исправление навигационного меню
    ### Изменение кнопок, добавление кнопки "Профиль" и подсказок при наведении на кнопку, приведение в единный стиль
    ####  До ![alt text](https://github.com/anyablischik/HFP-Front/blob/master/Improvement_UX_Examples/Capture.PNG)
    ####  После: добавление кнопки ![alt text](https://github.com/anyablischik/HFP-Front/blob/master/Improvement_UX_Examples/Capture1.PNG)
    ####  После: при наведении на кнопки появляются подсказки 
    ![alt text](https://github.com/anyablischik/HFP-Front/blob/master/Improvement_UX_Examples/buttonHeader1.jpg)
    ![alt text](https://github.com/anyablischik/HFP-Front/blob/master/Improvement_UX_Examples/buttonHeader2.jpg)
    ![alt text](https://github.com/anyablischik/HFP-Front/blob/master/Improvement_UX_Examples/buttonHeader3.jpg)
