public class IMC {
    public static double calcular(Pessoa pessoa){
        double imc = pessoa.getPeso() / (pessoa.getAltura()* pessoa.getAltura());
        return imc;
    }
}
