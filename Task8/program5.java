//Using Method in Java

class Main {
    public static void doSquare(int a,int b)
    {
          int result;
        result=(a*a)+(b*b)+(2*a*b);
         System.out.println("Square of two numbers is : "+result);
    }
    
    
      
        public static void main(String[] args) {
        doSquare(2,4);
            doSquare(12,13);
       
        }
    }