 document.getElementById('sobre').addEventListener('click', function() {
  this.classList.toggle('abierto');
});


document.addEventListener("DOMContentLoaded", function() {
    const messages = [
        "Amo tu sonrisa, ilumina mis días.",
"Eres mi mejor amiga y confidente.",//1 ener
"Tus ojos color sol me hacen sentir en casa.",//2 enero
"Eres increíblemente inteligente y eso me inspira.",//3 enero
"Tu bondad es un faro en este mundo.",//4 enero
"Feliz, de cumplir un mes más a tu lado amorcito de mi vida. Te am❤️",//5 enero
"Que este inicio oficial de año laboral sea el arranque de mucho éxito y prosperidad. 🐝",//6 enero
"Tu risa es mi música favorita. Y tus ojitos, algo como la mejor pelicula. 💕",//7 enero
"Amo cómo cuidas de los demás, eso es algo invaluable. 🐘❤️",//8 enero
"Sigue constante, que todo lo que haces poco a poco esta dando sus frutos. 🌱",//9 enero
"Tus abrazos son mi refugio, y ahi pertenezco. 🏠",//enero 10
"Tu alegría es contagiosa, que nunca se apague. 🙈💞",//enero 11
"Una concha de chocolate. jajjaa, me encanta tu sentido del humor. ☕",//enero 12
"Ojala que, ya estemos en baile, y ya hayamos dado la primer caminata al cerrito. Te amo mucho 🧜‍♀️",//enero 13
"Recuerda que siempre que me necesites, estaré para ti. 💟",//enero 14
"Siempre sabes cómo animarme, un besito, un abrazo, un silecion a tu lado. 💙",//enero 15
"Así con tu escencia, eres perfecta. 💘",//enero 16
"Me gusta mucho escuchar tus anecdotas, que nunca terminen. 🙆‍♂️",//enero 17
"Eres un ejemplo de resiliencia (capacidad de adaptarse y superarse ante situaciones difíciles o adversas). Si se puede. ❤️‍🩹",//enero 18
"Agradezco mucho que siempre me incluyes. Así me siento -->🤴",//enero 19
"Eres mi compañera de aventuras. La mejor compañera. 👫",//enero 20
"Me traes tranquilidad, y sentir eso es lo mejor. 💖",//enero 21
"Me haces sentir amado y valorado. Mi lugar felíz. 💕",//enero 22
"Eres un pilar fundamental en mi vida. 🥰",//enero 23
"Recuerda, lo importante eres tú. Que te valga chetos de bolita lo que pueda pensar la gente. 🙊",//enero 24
"Hoy plan de pelis mi amor. Yujuuuu",//enero 25
"Tu presencia me trae paz. Es algo que necesito en todos mis días. ❤️‍🩹",//enero 26
"Si sirenita de ojitos color sol, los mas bonitos. 🌞",//enero 27
"Adoro tus pequeños gestos de amor. Que llenan mi corazoncito. 🌚",//enero 28
"Tan dura como un pan de la semana pasada, jajaja. Hablando en serio eres mi roca en tiempos difíciles. 🥰",//enero 29
"Tu voz es calmante. Y mas cuendo me dices SIRENO CALMATE POR FAVOR!!!",//enero 30
"Me inspiras a soñar en grande. Dios quiera que logremos todo lo que planeamos. 💌",//enero 31
"Eres increíblemente fuerte.",//febrero 1
"Amo cómo me apoyas en todo.",//febrero 2
"Eres mi motivación diaria.",//febrero 3
"Admiro tu capacidad de amar incondicionalmente.",//febrero 4
"Gracias por un mes más a lado de una maravillosa persona. Mi sirena. ❤️",//febrero 5
"Siempre necesitamos de alguien más, y tu no estas sola. 💌",//febrero 6
"Eres mi razón para sonreír cada día. Que afortunado que soy. ♥️",//febrero 7
"Tu amor es un regalo invaluable. Un tesoro. 🥰",//febrero 8
"Eres una luchadora. Mi pequeña luchadora. 🐜",//febrero 9
"Me encanta tu sinceridad. Me das mucha paz. 🌼",//febrero 10
"Me da mucha emoción verte. Eres la mejor parte de mis días. 🌚",//febrero 11
"Amo cómo me entiendes. Eres una chica muy comprensiva, y eso es amor. 💞",//febrero 12
"Tan solo un abrazo discipa todo, eres mi refugio emocional. 💖",//febrero 13
"Eres mi mejor 14 de Febrero. Te amo❤️.",//febrero 14
"Recuerda que eres una chica inspiradora. 🤩",//febrero 15
"Eres mi compañera ideal. Que venga muuchisimos años. 💞",//febrero 16
"Tu apoyo incondicional me da fuerza. Gracias sirenita. 💌",//febrero 17
"Que tu corazoncito siga creciendo. Amo tus sueños y metas. 💟",//febrero 18
"Eres, serás mi mejor elección. Sirenita de mi corazón. 💓",//febrero 19
"Admiro tu ética de trabajo, y vas por buen camino mi amor. 👩‍💼",//febrero 20
"Que tus bonitos ojos brillen por la eternidad. 🌞",//febrero 21
"Tacos o hamburguesitas? 🙊",//febrero 22
"Amo cada parte de ti, mi sirena chabocha. 😍🤤",//febrero 23
"Eres una persona muy especial. Y unica. 🌹",//febrero 24
"Tus abracitos son tranquilizadores. ❤️‍🩹",//febrero 25
"Eres mi mayor bendición. ❣️",//febrero 26
"Eres una chica muy inteligente, una chica que resuelve. 🥇",//febrero 27
"Amo cómo me cuidas. 🌚",//febrero 28
"Eres mi compañera en todo.", //marzo 1
"Admiro tu fortaleza interior.",//marzo 2
"Eres un ejemplo de integridad.",//marzo 3
"Amo tu forma de amar.",//marzo 4
"Eres una persona que tiene una forma de ser tan linda, y soy afortunado de estar contigo. Gracias por un mes más de aprendizajes ❤️.",//marzo 5
"Adoro tus caricias.",//marzo 6
"Eres mi motivación para ser mejor.",//marzo 7
"Tu bondad es un regalo.",//marzo 8
"Eres mi fuente de felicidad.",//marzo 9
"Amo cómo ves lo mejor en los demás.",//marzo 10
"Eres mi razón para ser agradecido.",//marzo 11
"Admiro tu pasión por la vida.",//marzo 12
"Eres la persona que siempre he soñado.",//marzo 13
"Tu presencia me hace sentir completo.",//marzo 14
"Amo tus ojos color sol.",//marzo 15
"Eres mi compañera de vida.",//marzo 16
"Adoro cómo me haces sentir.",//marzo 17
"Eres una persona maravillosa.",//marzo 18
"Tu amor me hace fuerte.",//marzo 19
"Eres mi inspiración diaria.",//marzo 20
"Amo tu risa.",//marzo 21
"Eres mi razón para luchar.",//marzo 22
"Admiro tu compromiso.",//marzo 23
"Eres mi mejor mitad.",//marzo 24
"Tu bondad ilumina mi vida.",//marzo 25
"Amo cómo me apoyas.",//marzo 26
"Eres mi ancla en este mundo.",//marzo 27
"Adoro tus besos.",//marzo 28
"Eres mi mayor alegría.",//marzo 29
"Tu amor es mi tesoro.",//marzo 30
"Eres mi guía.",//marzo 31
"Que este sea el inicio de un mes increible. 💕",//abril 1
"Como dice Habif, eres INQUEBRANTABLE, por eso eres mi fortaleza. 🏠",//abril 2
"Admiro tu independencia.",//abril 3
"Me llenas de orgullo sirenita. Eres mi inspiración para ser mejor.",//abril 4
"Un 5 mas con la bella chica de ojos color sol, los mas bonitos.",//abril 5
"Ademas de mi novia, eres mi mejor amiga.",//abril 6
"Amo tu generosidad.",//abril 7
"Eres mi luz en la oscuridad.",//abril 8
"Tu amor me da paz.",//abril 9
"Eres mi mayor logro.",//abril 10
"Adoro tus gestos de cariño.",//abril 11
"Eres mi razón de ser.",//abril 12
"Tu amor es mi ancla.",//abril 13
"Eres mi mayor apoyo.",//abril 14
"Amo tu valentía.",//abril 15
"Eres mi musa.",//abril 16
"Admiro tu compasión.",//abril 17
"Eres mi razón para sonreír.",//abril 18
"Tu amor me hace completo.",//abril 19
"Eres mi inspiración diaria.",//abril 20
"Amo tu capacidad de perdonar.",//abril 21
"Eres mi motivación para mejorar.",//abril 22
"Adoro cómo me haces sentir especial.",//abril 23
"Eres mi mayor bendición.",//abril 24
"Tu amor es mi fuerza.",//abril 25
"Eres mi mejor elección.",//abril 26
"Amo cómo me entiendes sin palabras.",//abril 27
"Eres mi razón para seguir adelante.",//abril 28
"Tu presencia es mi calma.",//abril 29
"Eres mi mayor tesoro.",//abril 30
"Amo tu sabiduría.",//mayo 1
"Eres mi luz en la oscuridad.",//mayo 2
"Admiro tu paciencia.",//mayo 3
"Eres mi mayor alegría.",//mayo 4
"Tu amor es mi refugio.",//mayo 5
"Cuando uno está verdaderamente triste le gusta ver las puestas de sol. Y para puestas de sol, el de tus ojitos. 💕",//mayo 6
"Amo tu capacidad de amar.",//mayo 7
"Fue necesario que soportara dos o tres orugas si quería conocer la mariposa. Y al final apareciste tú. Y entonces valio la pena esperar. 💕",//mayo 8
"Verte, escucharte, sentirte cerca mío, es lo mejor. Si vienes, por ejemplo, a las cuatro de la tarde, comenzaré a ser feliz desde las tres. 💕",//mayo 9
"Me dejé llevar como un niño que sigue la voz de su intuición y el brillo de su curiosidad, sin miedo, en un mundo que insiste en la lógica y la rutina. Y es que, cuando el misterio es demasiado impresionante, no es posible desobedecer. Así llegué a ti, sin saberlo, guiado por algo más grande que yo… y encontré a una persona que cambió por completo mi manera de mirar el mundo.",//mayo 10
"Admiro profundamente tu capacidad de empatía, esa forma tan tuya de regalarnos una sonrisa, incluso cuando los tiempos son difíciles. Dicen que, si se deshollinan bien los volcanes, arden suave y regularmente, sin erupciones. Tú haces lo mismo con tu interior: cuidas tu fuego con paciencia y ternura, y por eso logras irradiar calma incluso en medio del caos.",//mayo 11
"Y llego un día que, dormias en mis brazos. Y me parecía cargar un frágil tesoro. A la luz de la luna, miré tu frente pálida, tus ojos cerrados, tu cabello sobre tus mejillas y me dije: Lo que veo, aquí, es solo una corteza. Lo más importante es invisible. Y mi corazón lo sabía, estaba en el lugar correcto.",//mayo 12
"Caminamos apurados, entre cuentas, relojes y papeles. Así somos, y las personas grandes nunca comprenden nada por sí solas. Pero a veces, un gesto, una risa o una pregunta nos puede despertar al niño que fuimos, y entonces, lo comprendemos todo.",//mayo 13
"Pensaba en semillas, prácticamente son invisibles, pueden traer plantas buenas, pero si se trata de una planta mala, debe arrancarse la planta inmediatamente, en cuanto se ha podido reconocerla. Cuidemos así el amor que crece en nosotros, merecemos la más bello: raíces limpias, amor sincero... y flores bellas, como tú. ",//mayo 14
"Amo cómo me haces reír.",//mayo 15
"Quinientos un millones seiscientos veintidos mil setecientos treinta y una veces podría contar estrellas y aún así ni todas juntas tendrían el valor de un solo instante contigo.",//mayo 16
"Si amas a una flor que está en una estrella, mirar el cielo por la noche es suficiente para sentirla cerca. Basta alzar la vista, cerrar los ojos y pensar en ti… y entonces, todas las estrellas se encienden como si pronunciaran tu nombre. No importa cuán lejos estés, porque cuando te pienso, estás aquí —tan cerca— como si mi corazón pudiera alcanzarte solo con sentir.”.",//mayo 17
"Eres mi mayor apoyo.",//mayo 18
"La vida en ocasiones nos hace sentir como en medio del desierto. Y sin embargo, lo que embellece al desierto es que esconde un pozo en cualquier parte. Y tu eres ese pozo que añoro descubrir, y que día a día descubro, porque en el fondo de este corazón, tú eres ese pozo escondido que siempre da vida y alegría.",//mayo 19
"Eres mi luz en la vida.",//mayo 20
"Tal vez sea absurdo, [...] pero tiene sentido. Cuando enciende el farol es como si hiciera nacer una estrella, o una flor. Cuando apaga el farol, hace dormir a la flor o a la estrella. Encender el farol, significa cada uno de tus gestos, desde el más intrépido al más simple. Sin embargo, la constancia de ello es lo realmente valioso.",//mayo 21
"Yo me he preguntado, ¿por qué no anotan las flores?, porque son efímeras, dicen. Como si lo breve no tuviera valor. Pero yo he aprendido que hay cosas que, aunque no duren para simepre, marcan para siempre. Es decir, una mirada de tus ojos color sol, ¿no se anota?, claro que se anota, algo de esa magnitud se guarda en el alma.",//mayo 22
"Mi flor, mi flor es afímera, y solo tiene cuatro espinas para defenderse contra el mundo, y la he dejado totalmente sola en mi casa. Hay momentos en que no pensamos en lo frágil que puede ser aquello que más importa, pero no necesita lástima, necesita presencia. Nos necesitan nuestreos sueños, emociones, convicciones. Dejemos de ignorar nuestras propias flores.",//mayo 23
"Eres mi razón para ser feliz.",//mayo 24
"Feliz Día a la Contadora que día con día saca siempre lo mejor. Que sin importar cuan dificil sean las cosas siempre hace todo por resolver. Que cada día luce más bella, y no solo por fuera. Feliz Día a la chica que inspira. Feliz Día a tí. 💕",//mayo 25
"Una emoción que se siente al verte, el saber que en algun momento de nuestras vidas hemos podido coincidir. Gracias por eso, y por muchas cosas. 💞",//mayo 26
"Amo tu valentía.",//mayo 27
"Eres mi mejor amiga.",//mayo 28
"No se ve bien si no con el corazón. Lo esencial es invisible a los ojos... y es que pasamos tanto tiempo buscando fuera lo que solo puede sentirse dentro. Están en lo que no se dice pero se intuye, en lo que el alma reconoce antes que la mente lo entienda.",//mayo 29
"Eres mi razón para seguir adelante.",//mayo 30
"Amo tu capacidad de perdonar.",//mayo 31
"Solo los niños saben lo que buscan. Tienen suerte. Es bueno siempre ver a la Celia de niña, a través de esos bonitos ojos color sol, mediante una risa espontanea. Que siempre se mantenga.",// junio 1
"Si tuviera cincuenta y tres minutos para gastar, caminaría muy suavemente hacia una fuente. Caminaríamos juntos, de la mano.",// junio 2
"Y tanto que nos complicamos. En nuestra tierra, los hombres cultivan cinco mil rosas en un mismo jardín... Y no encuentran lo que buscan... Y, sin embargo, lo que buscan podría encontrarse en una sola rosa o en un poco de agua (recuerdas el pozo enmedio del desierto?)...",//junio 3
"Y al final de todo, ahí enmedio del desierto, podemos lograr alcanzar nuestras metas. Y decir... Estoy muy contento de que hayas encontrado lo que faltaba a tu máquina. Vas a poder volver a tu casa... Yo también, hoy vuelvo a mi casa (y no estoy hablando de máquinas ni casas)... ",//junio 4
"Si algo puedo darte, es un sentimiento. Quiero decir; Cuando mires al cielo, por la noche, como yo habitaré en una (Estrella. Mayo 17) de ellas, como yo reiré en una de ellas, será para ti como si rieran todas las estrellas. ¡Tú tendrás estrellas que saben reír!. Te amo ❤️",//junio 5
"Tu amor me completa.",
"Eres mi razón para ser feliz.",
"Amo cómo me entiendes sin palabras.",
"Siempre apareciste en mis sueños, aún sin siquiera conocerte. 💖",//junio 9
"Y es que nadie te ama... Asi como yoo. 💓",
"Gracias por siempre estar, Diosito me bendijo contigo. 💖",
"Amo tu generosidad. Es algo que nace de tu corazoncito. 💕",//junio 12
"Las espinas no nos alejan. Nos pueden enseñar dónde cuidar con más suavidad. 🌹",//junio 13
"Aprendí que cuidar no siempre es quedarse. A veces es marcharse con el corazón lleno y los volcanes limpios, confiando en que la rosa sabrá florecer sin miedo. Porque si alguien te quiere de verdad, no te encierra en un globo de cristal... te deja partir, aunque le duela, y te espera —no con cadenas— sino con raíces en el alma. El Principito. ❤️",//junio 14
"Aprendí que no se ama dando órdenes, sino conociendo al otro y respetando su ritmo. Porque no se trata de tener a alguien para sentirse rey… sino de mirar juntos el mismo cielo, y saber que ninguno necesita imponerse para brillar. El Principito. ❤️",//junio 15
"Hoy vi a un hombre que solo quería aplausos. Nunca había sentido tanta soledad envuelta en tanta vanidad. Y entonces pensé en ti… Tú no buscas ser admirado, solo comprendido. Y por eso, aún te escucho en silencio.. El Piloto. ❤️",//junio 16
"Eres mi razón para soñar.",//junio 17
"Unos ojitos como los tuyos, no se olvidan, ojos color sol que, dan calor a mi corazón.",//junio 18
"Luchemos por lo que queremos en nuestras vidas, juntitos.",//junio 19
"Amo tu risa. Tiene un brillo especial.",//junio 20
"Me gusta mucho salir e ir a tu lado, platicar contigo, o correr en silencio.",//junio 21
"Y aunque no soy nada bueno, tambien me gusta bailar contigo.",//junio 22
"Eres mi mayor tesoro.",//junio 23
"Amo tu capacidad de amar.",//junio 24
"Eres mi luz en la oscuridad.",//junio 25
"Tu amor es mi refugio.",//junio 26
"Eres mi mayor alegría.",//junio 27
"Amo cómo me haces reír.",//junio 28
"Eres mi razón de ser.",//junio 29
"Un día creí que eras como todas las demás… hasta que recordé cuánto has significado para mí. Puede que otras se parezcan por fuera, pero ninguna me ha enseñado a cuidar, a esperar y a sentir como tú. No eres única por cómo luces, sino por todo lo que hemos vivido juntos. Mi Sirenita.",//junio 30
"¿Sabes por qué ahora te busco con el corazón, aunque no estés cerca? Porque me tomaste el tiempo, me hablaste con paciencia, me miraste como nadie. Y así… me domesticaron los ojos, y desde entonces, ya no puedo ver igual. Puedo sentir esos bonitos ojos color sol.",
"Hay personas que corren todo el tiempo, pero no saben a quién están buscando. Contigo aprendí que vale más caminar lento, si es para encontrarte de verdad. Porque no quiero llegar rápido a ninguna parte, si no es contigo. Así tal como nos conocimos y fuimos construyendonos. Sirenita de mi corazón.",
"Una vez conocí a alguien que vendía pastillas para no tener sed, para no perder tiempo. Pero contigo aprendí que el tiempo que se ''pierde'' con amor, en realidad se guarda en el alma. No quiero ahorrar minutos… quiero gastarlos en ti.",// julio 3
"Recuerdo que antes de conocerte, creí que no sentiría amor bonito. No sé si era el agua o el silencio, pero cuando te tengo cerca, todo es más valioso. No fue el pozo lo que me dio esperanza, fue tu forma de buscarlo conmigo. Porque las cosas no brillan por lo que son, sino por lo que compartimos al encontrarlas.",// julio 4
"Mi flor, mi pequeña, mi única. No necesito estar todo el día contigo para darme cuenta, porque en el fondo… vives en cada rincón de mi corazoncito.",// julio 5
"Sirenita de mi corazón. A veces te pienso, como cuando de pronto, en la noche uno ve las estrella, en silencio, pero con todo el corazón...",// julio 6
"Sirenita de mi corazón. Aprendí que cuando alguien se vuelve parte de ti, no se va del todo…",// julio 7
"Se transforma en una risa suave al mirar al cielo, así bonita como la luna, unos ojitos bonitos color sol, en una flor invisible que florece por dentro. Mi sirenita.",// julio 8
"Eres la chica más bonita del universo universal.",
"Admiro mucho el empeño que pones en realizar las cosas. Te amo wapota.",
"Eres mi razón para ser feliz.",
"Tu amor es mi fortaleza.",
"Eres mi mayor inspiración.",
"Amo tu risa.",
"Eres mi mejor amiga.",//julio 15
"Tu voz tiene un efecto calmante en mí.",
"Amo cómo encuentras alegría en las pequeñas cosas.",
"Eres la persona más auténtica que conozco.",
"Tu perseverancia es admirable.",
"Amo cómo enfrentas los desafíos con valentía.",
"Eres mi razón para sonreír en los días difíciles.",
"Tu espíritu generoso inspira a todos a tu alrededor.",
"Amo cómo siempre ves lo positivo en cada situación.",
"Eres mi modelo a seguir.",
"Tu capacidad para escuchar me hace sentir valorado.",
"Amo cómo haces que cada día sea especial.",
"Eres la razón por la que creo en el amor verdadero.",
"Tu entusiasmo por la vida es contagioso.",
"Amo cómo siempre estás dispuesta a ayudar a los demás.",
"Eres mi luz en los momentos oscuros.",//julio 30 
"Tu espíritu libre me inspira a ser más aventurero.",//julio 31
"Amo cómo siempre sabes qué decir para hacerme sentir mejor.",//agosto 1
"Eres mi mayor apoyo en todo lo que hago.",
"Tu risa es el sonido más hermoso del mundo.",
"Amo cómo haces que cada lugar se sienta como hogar.",
"Gracias por todas las enseñanzas y momentos juntos. Eres mi compañera ideal en esta aventura llamada vida. Feliz 5 Amorcito de mi vida.",// agosto 5
"Tu amor me da la fuerza para enfrentar cualquier cosa.",
"Amo cómo siempre encuentras una solución creativa.",
"Eres mi motivación para seguir creciendo y aprendiendo.",
"Tu presencia me llena de paz y tranquilidad.",
"Amo cómo haces que todo sea más fácil.",
"Eres mi razón para seguir creyendo en los sueños.",
"Tu espíritu optimista es una bendición.",
"Amo cómo me haces sentir amado todos los días.",
"A veces me pregunto, ¿Cómo puedo ser tan suertudo para tener el privilegio de darte un beso?",//13 agosto 2024
"Me sigues fascinando y provocando el mismo interés de lo desconocido, déjame seguir descubriéndote.",
"La comida tiene otro sabor a tu lado.",//15
"Eres mi sirena. Y eso lo es todo.",
"Tu amor incondicional me da confianza.",
"Eres mi amorcito.",
"Si el Miguel del pasado supiera lo que hoy esta viviendo a tu lado[...]",
"[...] se que daría, iremos al infinito y más allá.",//21/08
"Sigue luchando sirenita, tu puedes lograrlo, estoy muy orgulloso de lo que eres.",
"Eres mi razón para mantener la esperanza.",
"Tu piel me da una tranquilidad, pero a la vez es una chispa que enciende.",
"Que bonito fue haber coincidido. Que diosito nos permita seguir conociendonos.",//8/25
"Muchas veces tenemos que ser pacientes. Que lo mejor esta por llegar.",//08/25
"Eres una maravillosa persona y muy valiosa, a nombre de todos GRACIAS!!!.",
"Hay muchos gestos de ti que me enamoran, que dicha la mía.",
"[...] que es nuestra vida al lado de la vida del cosmos.",
"Siempre fuiste, eres y serás mi 11:11, solo que aun no te conocía.",
"Amo cómo siempre encuentras el lado bueno de las cosas. Y si no, aquí estoy yo.",//30/08
"Sirenita mía. Me encatas mas cada día. Que este nuevo mes este lleno de bendiciones. Te amo.",//31/08
"Como olvidar esa primer canción que bailamos juntos.",
"Amo cómo haces que cada día sea una nueva oportunidad.",
"Eres mi fuente de inspiración constante.",//03/09
"Me la paso soñando que de tus ojos yo soy el dueño... Amorcito mío gracias por cada instante. Te amo. Feliz 5.",//04/09
"Mi Sirena, única en el mundo",//05/09
"Eres mi razón para seguir creyendo en la bondad.",
"Tu sonrisa hace que el mundo sea un lugar mejor.",
"Desde que me quieres comprendí, que Dios tenia otros planes para mí. (Lo tienes todo - Julión Álvarez).",
"Los lunes son bonitos desde que te conocí, por que es el día que te vuelvo a ver.",
"No olvidemos que tus ojitos son unos bellos ojotos color sol..",//10/09
"Poco a poco, te fuiste metiendo en mi vida.",
"Sin malas intenciones lo nuestro se fue construyendo y dando, eso es lo mejor.",
"Quiero llegar a viejitos juntos.",
"Dios quiera que mi lugar sea a tu lado.",//15/09
"Bendito yo, por encontrarte. 😍.",//16/09
"La verdad es que para mí eres un ejemplo a seguir.",
"Amo cómo siempre tienes una palabra de aliento.",
"Eres mi razón para mantener la fe.",
"Tu amor me hace sentir afortunado",
"Admiro el esfuerzo que haces para cumplir con tus objetivos. Te admiro mucho sirenita. Pronto tendrás lo que mereces, sigue así.",//20/09
"Que se cumpla todo lo que deseas amorcito. Te amote.",
"Me gusta mucho comer, y más si es a tí. ❤️",
"Una chica muy bella esta leyendo esto. 😍",
"Eres mi razón para ser mejor. 🥰",
"Tu amor es mi lugar feliz. 🏠",//25/09
"El día que no estoy contigo, es como una mañana de frío sin mi café. ☕ Sin mi pan. 🥖",
"Porque a pesar de todo, estas conmigo. Gracias. ❤️",
"Eres como la música en mis días. 🌻",
"Aunque sea de aqui a la esquina, pero disfruto mucho caminar contigo. Y eso es desde hace tiempo. 🍦",
"¿Sabes qué? Eres una buena razón para ser feliz. 💕",//30/09
"Tu amor me da la confianza para ser yo mismo.",
"Amo cómo siempre encuentras la manera de animarme.",
"Qué bueno que paso lo que paso para que nos conociéramos. 💟",//03/10
"Eres una prioridad, mi sirena. Gracias por un 5 más amorcito mío 💐",//04/10
"Pido a Dios que nos permita una vida juntos. 🧜‍♀️",//05/10
"Vales muchisimo mi amor, como novia, como profesionista, como persona en general. 🌚",//06/10
"Agradecido de estar con una chica que siempre me incluye en todo.🌒",//07/20
"Tienes una sonrisa que le da una alegría a mi corazoncito. 🌓",//08/10
"Eres mi razón para mejorar. 🌔",//09/10
"Tu sonrisa ilumina mi mas oscura noche, asi como la luna en las penumbras. 🌝",//10/10
"Amo cómo siempre encuentras una razón para ser feliz.",//11/10
"Eres mi razón para seguir adelante con alegría.",//12/10
"Tu amor es mi refugio en tiempos de tormenta.",//13/10
"Amo cómo siempre haces que me sienta valorado.",//14/10
"Eres mi motivo para sonreír todos los días.",//15/10
"Tu presencia me da paz.",//16/10
"Amo cómo siempre haces que me sienta amado.",//17/10
"Eres mi razón para seguir soñando.",//19/10
"Tu amor me da la fuerza para seguir adelante.",//20/10
"Hoy cumple años una chica maravillosa, con una calidad de persona increible. Que diosito te bendiga siempre, y nunca dejes de soñar. Feliz Cumpleaños amor de mi vida",//22/10
"De que manera te digo... que no quiero ser tu amigo ni tu confidente quiero mas que eso 💕",//22//10
"Hay algo en tu mirada, que recorre mi silencio.",//23/10
"Te veo y me encantas más y más.",//24/10
"Así fue como me dí cuenta que estaba enamorado de tí, te veía mi corazón tucum tucum.",//25/10
"Sinceramente creo que le alegras el día hasta a tu más grande hater.",//26/10
"Tu eres mi luna, en el cielo lleno de estrellas.",//27/10
"Hermosota 😍.",//28/10
"Gracias a tí sirenita, al fin me enamoré. ❤️",//29/10
"Tu amor me da la confianza para enfrentar el día.",//30/10
"Amo cómo siempre encuentras el lado bueno de las cosas.",//31/10
"Eres mi inspiración para ser más positivo.",//1/11
"Tu presencia hace que cada día sea mejor.",//2/11
"Amo cómo siempre haces que todo valga la pena.",//3/11
"Gracias mi sirenita por un mes increible, y que vengan muchos más. ❤️",//4/11
"Gracias mi sirenita por un mes increible, y que vengan muchos más. ❤️",//4/11
"Tu amor me da la fuerza para ser mejor persona.",//5/11
"Amo cómo siempre encuentras la manera de animarme.",//6/11
"Eres mi fuente de alegría.",
"Tu presencia me da paz y tranquilidad.",
"Amo cómo siempre haces que me sienta especial.",
"Eres mi razón para ser agradecido.",
"Tu amor me da la confianza para soñar en grande.",
"Amo cómo siempre encuentras una razón para ser feliz.",
"Eres mi motivación para seguir adelante.",
"Tu presencia es mi refugio emocional.",
"Amo cómo siempre haces que me sienta amado.",
"Tienes que ser muy valiente, definitivamente, muy valiente. Pd. Come frutas y verduras. Atentamente: La sirena del pasado. 💪",//Mensaje sirena 13/09
"Tu amor me da la fuerza para enfrentar cualquier cosa.",
"Amo cómo siempre encuentras una solución creativa.",
"Eres mi inspiración para ser más generoso.",
"Tu presencia me llena de paz.",
"Amo cómo siempre haces que todo sea posible.",
"Eres mi razón para mantener la fe.",
"Tu amor me hace sentir invencible.",
"Amo cómo siempre encuentras una manera de hacerme feliz.",//25/11
"Eres mi motivación para seguir luchando.",//26/11
"Tu presencia es mi refugio en momentos difíciles.",//27/11
"Amo cómo siempre haces que me sienta importante.",//28/11
"Espero tu regreso con muchas ansias. Ánimo mi sirenita.",//29/11
"Diosito sabe porque pasa cada cosa mi amor.",//30/11
"Tenemos 31 días para terminar muy bien este gran año.",//1/12
"Eres mi inspiración para ser más positivo.",//2/12
"Tu presencia hace que cada día sea mejor.",//3/12
"Amo cómo siempre haces que todo valga la pena.",//4/12
"Gracias por año y 6 meses a tu lado, conocerte es algo de lo que sin duda, estoy muy felíz. Te amo ❤️",//5/12
"Tu amor me da la fuerza para ser mejor persona.",//6/12
"Amo cómo siempre encuentras la manera de animarme.",//7/12
"Eres mi fuente de alegría.",//8/12
"Tu presencia me da paz y tranquilidad.",//9/12
"Amo cómo siempre haces que me sienta especial.",//10/12
"Eres mi razón para ser agradecido.",//11/12
"Tu amor me da la confianza para soñar en grande.",//12/12
"Amo cómo siempre encuentras una razón para ser feliz.",//13/11
"Eres mi motivación para seguir adelante."//14/11
    ];

    function getDayOfYear(date) {
        const start = new Date(date.getFullYear(), 0, 0);
        const diff = date - start;
        const oneDay = 1000 * 60 * 60 * 24;
        return Math.floor(diff / oneDay);
    }

    const today = new Date();
    const dayOfYear = getDayOfYear(today);

    document.getElementById("reason").textContent = messages[dayOfYear % messages.length];

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("date").textContent = today.toLocaleDateString('es-ES', options);

    const playButton = document.getElementById("play-button");
    const audio = document.getElementById("background-music");

    playButton.addEventListener("click", function() {
        audio.play();
        playButton.classList.add("clicked");
    });
   // Crear destellos
    const numStars = 100;
    const backgroundAnimation = document.getElementById("background-animation");

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 2 + 1}s`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        backgroundAnimation.appendChild(star);
    }

});

