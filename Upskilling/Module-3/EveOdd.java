import java.util.*;

public class EveOdd {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println((n % 2 == 0) ? "Even" : "Odd");
        sc.close();
    }
}
