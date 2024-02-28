//(a+b)2=a2+b2+2ab program using Function in C

#include <stdio.h>
void doMathFormula(int a, int b)
{
  int result;
  result = (a * a) + (b * b) + (2 * a * b);
  printf("Result : %d\n", result);
}
int main()
{

  doMathFormula(10, 12);
  doMathFormula(333, 56);

  return 0;
}