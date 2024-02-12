// Non-Function Program in C
// Average of three numbers
#include <stdio.h>

int main()
{
    int a, b, c;
    a = 30;
    b = 50;
    c = 70;

    float avg = (a + b + c) / 3;
    printf("Average of three numbers: %f\n", avg);

    a = 45;
    b = 455;
    c = 67;
    
    avg = (a + b + c) / 3;
    printf("Average of three numbers : %f", avg);
    return 0;
}