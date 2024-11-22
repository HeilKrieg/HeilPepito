#En un curso de ciencias de la computación la calificación final del estudiante se determina a partir del
#rendimiento en tres aspectos del trabajo. A) Existe una calificación por los exámenes parciales que representa el
#30% del valor total de la nota final. B) la calificación por los trabajos prácticos corresponde al 20% del valor de #la
#nota final. C) el examen integrador que corresponde al 50% restante. (los valores de las notas pueden ir de 0 a
#10)

examenes_parciales = float(input("Ingrese la calificación de los exámenes parciales (0-10): "))
trabajos_practicos = float(input("Ingrese la calificación de los trabajos prácticos (0-10): "))
examen_integrador = float(input("Ingrese la calificación del examen integrador (0-10): "))


if not (0 <= examenes_parciales <= 10 and 0 <= trabajos_practicos <= 10 and 0 <= examen_integrador <= 10):
    print("Error: Todas las calificaciones deben estar entre 0 y 10.")
else:
    
    nota_final = (
        examenes_parciales * 0.30 +
        trabajos_practicos * 0.20 +
        examen_integrador * 0.50
    )


    print(f"La calificación final del estudiante es: {nota_final:.2f}")