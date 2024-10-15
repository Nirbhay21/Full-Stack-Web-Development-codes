#include <stdio.h>

char name[16] = "Nirbhay";
void printValue(int num)
{
    printf("Value of number is %d\n", num);
    printf("Name - %s\n", name);
}

int main()
{
    const int number = 12;
    printValue(number);
    return 0;
}