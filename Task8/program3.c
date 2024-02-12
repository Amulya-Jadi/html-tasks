//Avg of three numbers using Function


#include <stdio.h>
int doAvg(int a,int b,int c)
{
    int result;
    result=(a+b+c)/3;
     printf("Average of three numbersv: %d\n",result);
}
int main() {
     
  doAvg(11,16,19);
   doAvg(25,46,78);

    return 0;
} 