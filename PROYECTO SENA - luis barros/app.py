import mysql.connector
from mysql.connector import Error

def insertar_usuario(idUsuario, nombre_completo, email, contraseña, celular):
    try:
        conexion = mysql.connector.connect(
            host="localhost",
            user="root",
            passwd="ProyectoSena",
            database="datos"
        )

        if conexion.is_connected():
            print("Conectado correctamente")

            cursor = conexion.cursor()
            
            # Consulta de inserción usando marcadores de posición
            sql_insert_query = """INSERT INTO usuarios (idUsuario, nombre_completo, email, contraseña, celular) 
                                  VALUES (%s, %s, %s, %s, %s)"""
            
            # Datos a insertar
            record_tuple = (idUsuario, nombre_completo, email, contraseña, celular)
            
            # Ejecutar la consulta
            cursor.execute(sql_insert_query, record_tuple)
            
            # Confirmar los cambios en la base de datos
            conexion.commit()
            print("Registro insertado correctamente")

            # Cerrar el cursor
            cursor.close()

    except Error as e:
        print(f"Error al conectarse o insertar datos: {e}")
    finally:
        if conexion.is_connected():
            conexion.close()
            print("Conexión cerrada")

# Insertar datos de ejemplo
insertar_usuario(1, "luis barros", "lu199725is@gmail.com", "abc123", "3188294610")
insertar_usuario(2, "pruebas", "pruebas@gmail.com", "123456", "3188888888")
