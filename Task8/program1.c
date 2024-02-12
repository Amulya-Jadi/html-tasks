//Non Function Program in C
//(a+b)2=a2+b2+2ab
#include<stdio.h>
int main() {
 int a,b,result;
 a=34;
 b=45;
 result=(a*a)+(b*b)+(2*a*b);
  printf("Result : %d\n",result);
  a=56;
  b=34;
  printf("Result : %d",result);

    return 0;
}