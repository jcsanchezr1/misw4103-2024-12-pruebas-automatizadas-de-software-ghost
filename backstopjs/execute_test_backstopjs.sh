#!/bin/bash

# Ejecutar prueba con la configuración de los escenarios Ghost 3.4.2
backstop test --config=backstop_old_version

# Aprobar los resultados de la prueba con la configuración de los escenarios Ghost 3.4.2
backstop approve --config=backstop_old_version

# Ejecutar prueba con la configuración de los escenarios Ghost 5.14.1
backstop test --config=backstop_new_version