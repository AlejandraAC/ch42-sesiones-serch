package com.pakasio.app.service;

import com.pakasio.app.model.User;

/**
 *  Una interfaz es una declaración formal de un contrato, en la
 *  cuál los métodos no contienen implementaciones.
 *  Es similar a los métodos abstractos.
 *  
 *  Una clase puede implementar varias interfaces.
 *  
 *  Las interfaces son adecuadas para proporcionar funcionalidad
 *  a clases que no están relacionadas entre si.
 *  
 *  
 *  Para patrones de diseño, se suele utilizar interfaces.
 */
public interface UserService {
	// Los atributos en las interfaces son de tipo public, final y static
	
	// Los métodos por default son de tipo public, abstract
	User createUser(User user);
	User getUserById(Long id);
	User getUserByEmail(String email);
	Iterable<User> getAllActiveUsers();
	Iterable<User> getAllInactiveUsers();
	Iterable<User> getAllUser(boolean isActive);
	User updateUser(User user, Long id);
	void deleteUser(Long id);
	
	// A partir de la versión 8 de Java, se pueden tener
	// métodos con implementaciones.
	// Estos métodos deben ser default
	default String grreting() {
		return "Hola Grillo";
	}

}
