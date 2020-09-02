/* import { Employee } from "./employee/Employee.js"; */

export class AuthenticationSystem {

    /* POLYMORPHISM
    static login(employee, password) {
        if(employee instanceof Employee) {
            return employee.password == password;
        } else {
            console.log("Entity informed is not a valid employee!");
            return false;
        }
    }
    */
   
    /* INTERFACES
      To emulate Java interfaces, JS uses polymorphism
      To attend the criteria, the object must have the method called into the static method
    */
    static login(authenticable, password) {
        if(AuthenticationSystem.isAuthenticable(authenticable)) {
            return authenticable.authenticate(password);
        }

        return false;        
    }

    static isAuthenticable(authenticable) {
        /* Checking into RAM if 'authenticable' has a method named 'authenticate' and if 'authenticate' is a method of 'authenticable' */
        return "authenticate" in authenticable && authenticable.authenticate instanceof Function;
    }
}