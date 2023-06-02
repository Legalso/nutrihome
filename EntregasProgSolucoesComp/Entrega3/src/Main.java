import java.util.Scanner;
import java.lang.Math;


public class Main {
    public static void main(String[] args) {
    /*
    1 - IMC com Constante
    2 - IMC com Scanner
    3 - IMC com Scanner + Math
*/

        //Constante
        double w = 70;
        double h = 1.83;
        double imc1= w / (h*h);
        System.out.println("Seu IMC em Constante é: " + imc1);
        //Scanner
        Scanner scanner = new Scanner(System.in);
        double peso;
        double altura;
        System.out.println("Write your weight: ");
        peso = scanner.nextDouble();
        System.out.println("Write your height: ");
        altura = scanner.nextDouble();
        double imc2= peso / (altura*altura);
        System.out.println("Seu IMC é: " + imc2);

        //Scanner + Math
        double pesom;
        double alturam;
        System.out.println("Write your weight: ");
        pesom = scanner.nextDouble();
        System.out.println("Write your height: ");
        alturam = scanner.nextDouble();

        double imc3 = pesom / Math.pow(alturam,2);
        System.out.println("Your IMC is: " + imc3);
}}