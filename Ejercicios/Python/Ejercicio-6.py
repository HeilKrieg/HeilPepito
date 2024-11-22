#Se necesita calcular la superficie de un triángulo, y se dispone solamente de los valores de su base y altura.
#Definir también que tipo de valor es aconsejable para las variables con la información que se tiene.
#**No se podrá usar valores fijos en las fórmulas del algoritmo. Solo variables y/o constantes.**

base = int(input("ingrese la base del triangulo"))
altura = int(input("ingrese la altura del triangulo"))

superficie = (base * altura) / 2

print("la superficie del triangulo es", superficie)