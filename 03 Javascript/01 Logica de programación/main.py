def encontrar_maximo(a, b):
    if a > b:
        maximo = a
    else:
        maximo = b
    mensaje = f"El máximo entre {a} y {b} es: {maximo}"
    print(mensaje)
encontrar_maximo(5, 10)
