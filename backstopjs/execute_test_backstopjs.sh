#!/bin/bash

########################################## post

# Ejecutar prueba con la configuración de los escenarios post de Ghost 3.4.2
backstop test --config=backstop_post_old_version

# Aprobar los resultados de la prueba con la configuración de los escenarios post de Ghost 3.4.2
backstop approve --config=backstop_post_old_version

# Ejecutar prueba con la configuración de los escenarios post de Ghost 5.14.1
backstop test --config=backstop_post_new_version

########################################## page

# Ejecutar prueba con la configuración de los escenarios page de Ghost 3.4.2
backstop test --config=backstop_page_old_version

# Aprobar los resultados de la prueba con la configuración de los escenarios page de Ghost 3.4.2
backstop approve --config=backstop_page_old_version

# Ejecutar prueba con la configuración de los escenarios page de Ghost 5.14.1
backstop test --config=backstop_page_new_version

########################################## profile

# Ejecutar prueba con la configuración de los escenarios profile de Ghost 3.4.2
backstop test --config=backstop_profile_old_version

# Aprobar los resultados de la prueba con la configuración de los escenarios profile de Ghost 3.4.2
backstop approve --config=backstop_profile_old_version

# Ejecutar prueba con la configuración de los escenarios profile de Ghost 5.14.1
backstop test --config=backstop_profile_new_version

######################################### tag

# Ejecutar prueba con la configuración de los escenarios profile de Ghost 3.4.2
backstop test --config=backstop_tag_old_version

# Aprobar los resultados de la prueba con la configuración de los escenarios profile de Ghost 3.4.2
backstop approve --config=backstop_tag_old_version

# Ejecutar prueba con la configuración de los escenarios profile de Ghost 5.14.1
backstop test --config=backstop_tag_new_version