var quiz = {
  JS: [
    {
      id: 1,
      question: "Сколько параметров можно передать в деструктор?",
      options: [
        {
          a: "Не более 10",
          b: "Не более 15",
          c: "Максимум 1",
          d: "Нельзя передавать параметры в деструктор",
        },
      ],
      answer: "Нельзя передавать параметры в деструктор",
      score: 0,
      status: "",
    },
    {
      id: 2,
      question: "Укажите, какое из нижеследующих утверждений истинное",
      options: [
        {
          a:
            "Когда исполнение программы приостанавливается в контрольной точке, следующим оператором, который будет исполняться, является оператор после контрольной точки.",
          b:
            "Когда значение переменной изменяется, в окнах Autos и Locals оно выделяется желтым цветом.",
          c:
            "Во время отладки команда Step Out исполняет все оставшиеся операторы текущей функции и возвращает управление в точку, где была вызвана функция.",
          d: "Все высказывания истинные",
        },
      ],
      answer:
        "Когда значение переменной изменяется, в окнах Autos и Locals оно выделяется желтым цветом.",
      score: 0,
      status: "",
    },
    {
      id: 3,
      question: "Укажите, какое из нижеследующих утверждений ложное.",
      options: [
        {
          a:
            "Операция взятия по модулю (%) может применяться только к целым числам.",
          b:
            "Все арифметические операции *, /, %, + и – имеют одинаковый уровень приоритета.",
          c:
            "Пустые скобки, следующие за именем функции в прототипе, указывают, что функции для выполнения ее задачи не требуется никаких параметров.",
          d: "Все высказывания истинные",
        },
      ],
      answer:
        "Все арифметические операции *, /, %, + и – имеют одинаковый уровень приоритета.",
      score: 0,
      status: "",
    },
    {
      id: 4,
      question: "Укажите, какое из нижеследующих утверждений ложное.",
      options: [
        {
          a:
            "Тело каждой функции ограничивается левой и правой фигурными скобками ( { и } ).",
          b:
            "Программа на C++, которая выводит три строки, должна содержать три оператора вывода, использующих cout.",
          c:
            "Элементы данных или элемент-функции, объявленные со спецификатором доступа private, доступны для элемент-функций класса, в котором они объявлены.",
          d: "Все высказывания истинные",
        },
      ],
      answer:
        "Элементы данных или элемент-функции, объявленные со спецификатором доступа private, доступны для элемент-функций класса, в котором они объявлены.",
      score: 0,
      status: "",
    },
    {
      id: 5,
      question: "Укажите, какое из нижеследующих утверждений ложное.",
      options: [
        {
          a:
            "Всем переменным, когда они объявляются, должен быть присвоен тип.",
          b: "C++ рассматривает переменные number и NuMbEr как одинаковые.",
          c: "Объявления в теле функции C++ могут появляться почти везде.",
          d: "Все высказывания истинные",
        },
      ],
      answer: "C++ рассматривает переменные number и NuMbEr как одинаковые.",
      score: 0,
      status: "",
    },
    {
      id: 6,
      question: "Укажите, какое из нижеследующих утверждений истинное",
      options: [
        {
          a:
            "В соответствии с соглашением, имена функций начинаются с прописной буквы, и все последующие слова в имени также начинаются с прописной буквы.",
          b:
            "Переменные, объявленные в теле некоторой элемент-функции, называются элементами данных и могут использоваться во всех элемент-функциях класса.",
          c:
            "Для исполнения программы можно использовать любой файл исходного кода, содержащий int main().",
          d: "Указатель, объявленный как void, может быть разыменован.",
        },
      ],
      answer:
        "Для исполнения программы можно использовать любой файл исходного кода, содержащий int main().",
      score: 0,
      status: "",
    },
    {
      id: 7,
      question: "Укажите, какое из нижеследующих утверждений истинное",
      options: [
        {
          a:
            "Выражение, содержащее операцию ||, истинно, если истинны оба операнда этой операции.",
          b: "Массив может хранить много различный типов данных.",
          c:
            "Операция взятия адреса может быть применима только к константам, к выражениям, не дающим в качестве результата ссылки, и к переменным, объявленным с классом памяти register.",
          d: "Все высказывания ложные",
        },
      ],
      answer:
        "Выражение, содержащее операцию ||, истинно, если истинны оба операнда этой операции.",
      score: 0,
      status: "",
    },
    {
      id: 8,
      question: "Укажите, какое из нижеследующих утверждений истинное",
      options: [
        {
          a:
            "Типы аргументов в вызове функции должны быть согласованы с типами соответствующих параметров в списке параметров прототипа функции.",
          b: "В операторе выбора switch должна быть метка default.",
          c:
            "В операторе выбора switch в разделе default требуется оператор break.",
          d: "Все высказывания истинные",
        },
      ],
      answer:
        "Типы аргументов в вызове функции должны быть согласованы с типами соответствующих параметров в списке параметров прототипа функции.",
      score: 0,
      status: "",
    },
    {
      id: 9,
      question: "Укажите, какое из нижеследующих утверждений ложное",
      options: [
        {
          a:
            "Комментарии при выполнении программы вызывают печать компьютером на экране текста после символов //.",
          b:
            "Если вывод осуществляется в cout, то esc-последовательность \n вызывает перемещение курсора к началу следующей строки на экране.",
          c:
            "Все переменные должны быть объявлены до того, как они используются.",
          d: "Все высказывания истинные",
        },
      ],
      answer:
        "Комментарии при выполнении программы вызывают печать компьютером на экране текста после символов //.",
      score: 0,
      status: "",
    },
    {
      id: 10,
      question: "Укажите, какое из нижеследующих утверждений ложно",
      options: [
        {
          a:
            "Указатели разных типов нельзя присваивать друг другу без операции приведения типа.",
          b: "Выражение (х > у && а < b) истинно, если х > у или а < b.",
          c: "Все высказывания ложные.",
          d: "Индексы массива обычно должны иметь тип float.",
        },
      ],
      answer: "Выражение (х > у && а < b) истинно, если х > у или а < b.",
      score: 0,
      status: "",
    },
    {
      id: 11,
      question: "Укажите, какое из нижеследующих утверждений истинное.",
      options: [
        {
          a:
            "Если количество начальных значений в списке инициализации меньше, чем количество элементов массива, оставшиеся элементы автоматически получают в качестве начальных значений последние значения из списка инициализации.",
          b:
            "Если список инициализации содержит начальных значений больше, чем элементов массива, то это – ошибка.",
          c:
            "Отдельный элемент массива, который передается функции и модифицируется в этой функции, будет содержать модифицированное значение после завершения выполнения вызываемой функции.",
          d: "Все высказывания ложные",
        },
      ],
      answer:
        "Если список инициализации содержит начальных значений больше, чем элементов массива, то это – ошибка.",
      score: 0,
      status: "",
    },
    {
      id: 12,
      question:
        "Число, используемое для обращения к отдельному элементу массива называется …",
      options: [
        {
          a: "тип",
          b: "индекс",
          c: "значение",
          d: "позиция",
        },
      ],
      answer: "индекс",
      score: 0,
      status: "",
    },
    {
      id: 13,
      question:
        "Оператор выбора … используется для выполнения одного действия, если его условие истинно, и другого действия, если условие ложно",
      options: [
        {
          a: "If",
          b: "If…then",
          c: "If…then…else",
          d: "If…else",
        },
      ],
      answer: "If…else",
      score: 0,
      status: "",
    },
    {
      id: 14,
      question: "Выполнение каждой программы на C++ начинается с функции…",
      options: [
        {
          a: "void",
          b: "include",
          c: "main",
          d: "using",
        },
      ],
      answer: "main",
      score: 0,
      status: "",
    },
    {
      id: 15,
      question:
        "Повторение набора инструкций заданное число раз называется … повторений",
      options: [
        {
          a: "управляемым счетчиком",
          b: "числом",
          c: "заданием",
        },
      ],
      answer: "",
      score: 0,
      status: "",
    },
    {
      id: 16,
      question: "Каждый оператор заканчивается…",
      options: [
        {
          a: "endl",
          b: "return",
          c: "точкой с запятой",
          d: "управляющей последовательностью",
        },
      ],
      answer: "управляющей последовательностью",
      score: 0,
      status: "",
    },
    {
      id: 17,
      question:
        "Для объявления размера массива должна использоваться …, потому что она делает программу более масштабируемой",
      options: [
        {
          a: "переменная",
          b: "константа",
          c: "именованная константа",
          d: "символ",
        },
      ],
      answer: "константа",
      score: 0,
      status: "",
    },
    {
      id: 18,
      question:
        "Когда заранее не известно, сколько раз должна исполняться группа операторов, для прерывания повторения можно использовать … значение",
      options: [
        {
          a: "контрольное",
          b: "сигнальное",
          c: "фиктивное",
          d: "все ответы верны",
        },
      ],
      answer: "сигнальное",
      score: 0,
      status: "",
    },
    {
      id: 19,
      question: "Элементы массива связаны тем, что они имеют одни и те же …",
      options: [
        {
          a: "имя",
          b: "тип",
          c: "значения",
          d: "размерность",
        },
      ],
      answer: "тип",
      score: 0,
      status: "",
    },
    {
      id: 20,
      question: "Списки и таблицы значений хранятся в …",
      options: [
        {
          a: "массиве",
          b: "указателе",
          c: "списке",
          d: "стандартной библиотеке",
        },
      ],
      answer: "массиве",
      score: 0,
      status: "",
    },
    {
      id: 21,
      question: "Оператор … используется для принятия решений",
      options: [
        {
          a: "cout",
          b: "if",
          c: "while",
          d: "for",
        },
      ],
      answer: "if",
      score: 0,
      status: "",
    },
    {
      id: 22,
      question:
        "Число, используемое для обращения к отдельному элементу массива называется …",
      options: [
        {
          a: "тип",
          b: "индекс",
          c: "значение",
          d: "позиция",
        },
      ],
      answer: "индекс",
      score: 0,
      status: "",
    },
    {
      id: 23,
      question:
        "Процесс определения значения ключа, содержащегося в массиве, называется …",
      options: [
        {
          a: "сортировка",
          b: "поиск",
          c: "проверка",
          d: "изменение",
        },
      ],
      answer: "поиск",
      score: 0,
      status: "",
    },
    {
      id: 24,
      question:
        "Указатель – это переменная, которая содержит в качестве своего значения … другой переменной",
      options: [
        {
          a: "индекс",
          b: "адрес",
          c: "код",
          d: "ссылку",
        },
      ],
      answer: "адрес",
      score: 0,
      status: "",
    },
    {
      id: 25,
      question: "Какая из операций не относится к операции сравнения?",
      options: [
        {
          a: "(=)",
          b: "(>)",
          c: "(<)",
          d: "(==)",
          e: "(!=)",
        },
      ],
      answer: "(=+)",
      score: 0,
      status: "",
    },

    {
      id: 26,
      question: "В идентификаторах можно использовать",
      options: [
        {
          a: "заглавные и строчные латинские буквы, цифры и знак подчеркивания",
          b: "заглавные и строчные латинские буквы, цифры и знак подчеркивания",
          c: "заглавные и строчные латинские буквы",
          d: "заглавные и строчные латинские буквы, цифры",
          e: "заглавные и строчные латинские буквы, знак подчеркивания",
        },
      ],
      answer:
        "заглавные и строчные латинские буквы, цифры и знак подчеркивания",
      score: 0,
      status: "",
    },

    {
      id: 27,
      question:
        "Процесс упорядоченного размещения элементов в массиве называется …",
      options: [
        {
          a: "сортировка",
          b: "поиск",
          c: "проверка",
          d: "изменение",
        },
      ],
      answer: "сортировка",
      score: 0,
      status: "",
    },

    {
      id: 28,
      question: "Целое, которое может быть присвоено указателю, является",
      options: [
        {
          a: "0",
          b: "положительным",
          c: "отрицательным",
          d: "все перечисленное",
        },
      ],
      answer: "0",
      score: 0,
      status: "",
    },

    {
      id: 29,
      question: "Для инициализации указателя можно использовать",
      options: [
        {
          a: "null",
          b: "0",
          c: "адрес",
          d: "все перечисленное",
        },
      ],
      answer: "адрес",
      score: 0,
      status: "",
    },

    {
      id: 30,
      question: "Что является выражениями в языке Си++ ?",
      options: [
        {
          a:
            "это переменные, функции и константы объединенные знаками операций",
          b: "это переменные объединенные знаками операций",
          c: "это функции объединенные знаками операций",
          d: "это константы объединенные знаками операций",
        },
      ],
      answer: "это функции объединенные знаками операций",
      score: 0,
      status: "",
    },

    {
      id: 31,
      question: "Что такое идентификаторы в языке Си++ ?",
      options: [
        {
          a:
            "это последовательность знаков, начинающаяся с буквы или знака подчеркивания",
          b: "это последовательность знаков",
          c: "это последовательность знаков, начинающаяся с буквы",
          d:
            "это последовательность знаков, начинающаяся со знака подчеркивания",
        },
      ],
      answer: "это последовательность знаков, начинающаяся с буквы",
      score: 0,
      status: "",
    },

    {
      id: 32,
      question:
        "В результате успешной компиляции текста программы на C++ с каким расширением будет получен файл?",
      options: [
        {
          a: ".obj",
          b: ".exe",
          c: ".cpp",
          d: ".h",
        },
      ],
      answer: ".exe",
      score: 0,
      status: "",
    },

    {
      id: 33,
      question:
        "Если не будет указан базовый тип, то какай тип будет подразумеваться по умолчанию",
      options: [
        {
          a: "int",
          b: "char",
          c: "short",
          d: "long",
        },
      ],
      answer: "char",
      score: 0,
      status: "",
    },

    {
      id: 34,
      question: "К каким числам применима операция %?",
      options: [
        {
          a: "к целым",
          b: "к вещественным",
          c: "и к целым и к вещественным",
        },
      ],
      answer: "к целым",
      score: 0,
      status: "",
    },

    {
      id: 35,
      question: "Оператор while соответствует оператору for:",
      options: [
        {
          a: "for ( ; условие ; ) оператор",
          b: "for ( условие; ; ) оператор",
          c: "for ( ; ; условие) оператор",
        },
      ],
      answer: "for ( ; условие ; ) оператор",
      score: 0,
      status: "",
    },

    {
      id: 36,
      question: "В языке Си++ указатель – это:",
      options: [
        {
          a:
            "специальный значок, показывающий, что это динамическая переменная",
          b: "символическое представление адреса ячейки памяти",
          c: "символ, указывающий на что-либо",
          d: "метка",
        },
      ],
      answer: "символическое представление адреса ячейки памяти",
      score: 0,
      status: "",
    },
    {
      id: 37,
      question: "Комментарии заключаются в скобки:",
      options: [
        {
          a: "{ }",
          b: "/* */",
          c: "[ ]",
          d: "/% %/",
        },
      ],
      answer: "/* */",
      score: 0,
      status: "",
    },
    {
      id: 38,
      question: "К чему применяется операция инкримента?",
      options: [
        {
          a: "к переменным",
          b: "к константам",
          c: "к выражениям",
          d: "к строкам",
        },
      ],
      answer: "к переменным",
      score: 0,
      status: "",
    },
    {
      id: 39,
      question: "В языке Си++ лексема – это:",
      options: [
        {
          a: "набор специальных символов и директив",
          b: "множество строк, определяющих состояние программы",
          c: "процедура, выполняющая определенные задания",
          d:
            "последовательности символов языка, разделяющиеся пробелами и другими неграфическими символами",
        },
      ],
      answer:
        "последовательности символов языка, разделяющиеся пробелами и другими неграфическими символами",
      score: 0,
      status: "",
    },
    {
      id: 40,
      question: "Из чего состоит оператор объявления имени?",
      options: [
        {
          a: "из названия типа и объявляемого имени",
          b: "из названия типа",
          c: "из объявляемого имени",
        },
      ],
      answer: "из названия типа и объявляемого имени",
      score: 0,
      status: "",
    },
    {
      id: 41,
      question: "Какой операции нет в C++?",
      options: [
        {
          a: "последовательной",
          b: "унарной",
          c: "бинарной",
          d: "тернарная",
        },
      ],
      answer: "последовательной",
      score: 0,
      status: "",
    },
    {
      id: 42,
      question: "В языке Си++ литерал – это:",
      options: [
        {
          a: "переменная зарезервированного типа",
          b: "неизменяемый объект языка",
          c: "строка",
          d: "буква",
        },
      ],
      answer: "буква",
      score: 0,
      status: "",
    },
    {
      id: 43,
      question: "Спецификация типа – это:",
      options: [
        {
          a: "задание типа переменной",
          b: "список переменных",
          c: "перечисление всех переменных, которые использовались в программе",
          d: "список типов переменных, которые использовались в программе",
        },
      ],
      answer: "задание типа переменной",
      score: 0,
      status: "",
    },
    {
      id: 44,
      question: "Фактический адрес в указателях – это:",
      options: [
        {
          a: "строка",
          b: "указатель",
          c: "число",
          d: "буква",
        },
      ],
      answer: "число",
      score: 0,
      status: "",
    },
    {
      id: 45,
      question: "Логическое «не равно» обозначается:",
      options: [
        {
          a: "<>",
          b: "||",
          c: "!",
          d: "!=",
        },
      ],
      answer: "!=",
      score: 0,
      status: "",
    },
    {
      id: 46,
      question: "Идентификатор – это:",
      options: [
        {
          a:
            "последовательность латинских букв, цифр и символа «_», начинающаяся с буквы или символа «_»",
          b: "неизменяемые объекты языка (константы)",
          c: "последовательность латинских и русских букв",
          d:
            "способ кодирования, допустимые преобразования над значением данной переменной",
        },
      ],
      answer:
        "последовательность латинских букв, цифр и символа «_», начинающаяся с буквы или символа «_»",
      score: 0,
      status: "",
    },
    {
      id: 47,
      question: "Битовая операция исключающего «или» обозначается:",
      options: [
        {
          a: "~",
          b: "~",
          c: "||",
          d: "&&",
        },
      ],
      answer: "&&",
      score: 0,
      status: "",
    },
    {
      id: 48,
      question: "Логическое «не» обозначается:",
      options: [
        {
          a: "!",
          b: "!!",
          c: "||",
          d: "not",
        },
      ],
      answer: "!",
      score: 0,
      status: "",
    },
    {
      id: 49,
      question: "Составной оператор – это:",
      options: [
        {
          a: "последовательность операторов, заключенная в фигурные скобки { }",
          b: "последовательность операторов, заключенная квадратные скобки [ ]",
          c:
            "последовательность операторов, заключенная в операторные скобки begin … end",
          d: "последовательность операторов, заключенная в круглые скобки ( )",
        },
      ],
      answer:
        "последовательность операторов, заключенная в операторные скобки begin … end",
      score: 0,
      status: "",
    },
    {
      id: 50,
      question: "Логическое «и» обозначается:",
      options: [
        {
          a: "=",
          b: "||",
          c: "&",
          d: "&&",
        },
      ],
      answer: "&&",
      score: 0,
      status: "",
    },
  ],
};

var quizApp = function () {
  this.score = 0;
  this.qno = 1;
  this.currentque = 0;
  var totalque = quiz.JS.length;

  this.displayQuiz = function (cque) {
    this.currentque = cque;
    if (this.currentque < totalque) {
      $("#tque").html(totalque);
      $("#previous").attr("disabled", false);
      $("#next").attr("disabled", false);
      $("#qid").html(quiz.JS[this.currentque].id + ".");

      $("#question").html(quiz.JS[this.currentque].question);
      $("#question-options").html("");
      for (var key in quiz.JS[this.currentque].options[0]) {
        if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
          $("#question-options").append(
            "<div class='form-check option-block'>" +
              "<label class='form-check-label'>" +
              "<input type='radio' class='form-check-input' name='option'   id='q" +
              key +
              "' value='" +
              quiz.JS[this.currentque].options[0][key] +
              "'><span id='optionval'>" +
              quiz.JS[this.currentque].options[0][key] +
              "</span></label>"
          );
        }
      }
    }
    if (this.currentque <= 0) {
      $("#previous").attr("disabled", true);
    }
    if (this.currentque >= totalque) {
      $("#next").attr("disabled", true);
      for (var i = 0; i < totalque; i++) {
        this.score = this.score + quiz.JS[i].score;
      }
      return this.showResult(this.score);
    }
  };

  this.showResult = function (scr) {
    $("#result").addClass("result");
    $("#result").html(
      "<h1 class='res-header'>Total Score: &nbsp;" +
        scr +
        "/" +
        totalque +
        "</h1>"
    );
    for (var j = 0; j < totalque; j++) {
      var res;
      if (quiz.JS[j].score == 0) {
        res =
          '<span class="wrong">' +
          quiz.JS[j].score +
          '</span><i class="fa fa-remove c-wrong"></i>';
      } else {
        res =
          '<span class="correct">' +
          quiz.JS[j].score +
          '</span><i class="fa fa-check c-correct"></i>';
      }
      $("#result").append(
        '<div class="result-question"><span>Q ' +
          quiz.JS[j].id +
          "</span> &nbsp;" +
          quiz.JS[j].question +
          "</div>" +
          "<div><b>Correct answer:</b> &nbsp;" +
          quiz.JS[j].answer +
          "</div>" +
          '<div class="last-row"><b>Score:</b> &nbsp;' +
          res +
          "</div>"
      );
    }
  };

  this.checkAnswer = function (option) {
    var answer = quiz.JS[this.currentque].answer;
    option = option.replace(/\</g, "&lt;"); //for <
    option = option.replace(/\>/g, "&gt;"); //for >
    option = option.replace(/"/g, "&quot;");

    if (option == quiz.JS[this.currentque].answer) {
      if (quiz.JS[this.currentque].score == "") {
        quiz.JS[this.currentque].score = 1;
        quiz.JS[this.currentque].status = "correct";
      }
    } else {
      quiz.JS[this.currentque].status = "wrong";
    }
  };

  this.changeQuestion = function (cque) {
    this.currentque = this.currentque + cque;
    this.displayQuiz(this.currentque);
  };
};

var jsq = new quizApp();

var selectedopt;
$(document).ready(function () {
  jsq.displayQuiz(0);

  $("#question-options").on(
    "change",
    "input[type=radio][name=option]",
    function (e) {
      //var radio = $(this).find('input:radio');
      $(this).prop("checked", true);
      selectedopt = $(this).val();
    }
  );
});

$("#next").click(function (e) {
  e.preventDefault();
  if (selectedopt) {
    jsq.checkAnswer(selectedopt);
  }
  jsq.changeQuestion(1);
});

$("#previous").click(function (e) {
  e.preventDefault();
  if (selectedopt) {
    jsq.checkAnswer(selectedopt);
  }
  jsq.changeQuestion(-1);
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 45) {
    document.querySelector(".navbar").classList.add("white");
    document.querySelector(".navbar").classList.remove("transparent");
  } else {
    document.querySelector(".navbar").classList.remove("white");
    document.querySelector(".navbar").classList.add("transparent");
  }
});
