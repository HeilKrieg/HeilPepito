#Se ingresan 3 números que representan horas, minutos y segundos. Se pide informar el resultado expresado en
#segundos. Determinar qué tipo de valor es el aconsejable para los datos solicitados

def calcular_segundos(horas, minutos, segundos):
    total_segundos = horas * 3600 + minutos * 60 + segundos
    return total_segundos

horas = int(input("ingrese la cantidad de horas"))
minutos = int(input("ingrese la cantidad de minutos"))
segundos = int(input("ingrese la cantidad de segundos"))

total_segundos = calcular_segundos(horas, minutos, segundos)
print("Total de segundos:", total_segundos)
