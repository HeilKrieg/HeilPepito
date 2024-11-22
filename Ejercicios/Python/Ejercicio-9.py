#Dada una fecha que se lee en formato numérico DDMMAAAA (dos números para el día, dos para el mes, cuatro
#para el año), se solicita obtener el día el mes y año por separado en tres variables. (usar descomposición
#matemática)

fecha = 23072024  


dia = fecha // 10_000_000          
mes = (fecha // 100_000) % 100     
anio = fecha % 10_000              

print(f"Día: {dia}, Mes: {mes}, Año: {anio}")