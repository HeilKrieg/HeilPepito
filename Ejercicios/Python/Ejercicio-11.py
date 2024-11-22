#Una concesionaria de autos paga a su personal, un salario de 5500 pesos por mes, mas una comisión del 200
#pesos por cada auto vendido y un adicional del 5% del valor del auto vendido. Diseñar un algoritmo para calcular
#el salario total del vendedor. Conociendo solamente el número de autos vendidos y el valor de venta de la
#unidad.

autos_vendidos = int(input("Ingrese el número de autos vendidos: "))
valor_auto = float(input("Ingrese el valor de venta de cada auto: "))

salario_base = 5500
comision_por_auto = 200
comision_porcentaje = 0.05

comision_total_fija = autos_vendidos * comision_por_auto
comision_total_porcentaje = autos_vendidos * valor_auto * comision_porcentaje
salario_total = salario_base + comision_total_fija + comision_total_porcentaje

print(f"El salario total del vendedor es: ${salario_total:.2f}")