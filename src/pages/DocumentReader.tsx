
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Clock, Download, Share2 } from "lucide-react";

const DocumentReader = () => {
  const { id } = useParams();

  // Sample content - in a real app, this would be fetched based on the ID
  const sampleDocument = {
    title: "C Programming Complete Guide",
    description: "Comprehensive guide to C programming covering basics to advanced concepts",
    author: "Engineering Faculty",
    lastUpdated: "Jan 2025",
    readTime: "3 hours",
    difficulty: "Beginner",
    content: `
# C Programming Complete Guide

## Table of Contents
1. Introduction to C Programming
2. Basic Syntax and Data Types
3. Control Structures
4. Functions
5. Pointers and Memory Management
6. Advanced Topics

## 1. Introduction to C Programming

C is a general-purpose programming language created by Dennis Ritchie at Bell Labs in 1972. It is one of the most widely used programming languages and serves as the foundation for many other languages.

### Why Learn C?
- **Foundation Language**: Understanding C helps you learn other programming languages more easily
- **System Programming**: C is extensively used in system programming and embedded systems
- **Performance**: C programs are typically fast and efficient
- **Portability**: C programs can run on various platforms with minimal modifications

## 2. Basic Syntax and Data Types

### Basic Structure of a C Program

\`\`\`c
#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}
\`\`\`

### Data Types
- **int**: Integer numbers
- **float**: Floating-point numbers
- **double**: Double-precision floating-point numbers
- **char**: Characters

### Variable Declaration
\`\`\`c
int age = 25;
float salary = 45000.50;
char grade = 'A';
\`\`\`

## 3. Control Structures

### Conditional Statements
\`\`\`c
if (condition) {
    // code block
} else if (another_condition) {
    // code block
} else {
    // code block
}
\`\`\`

### Loops
\`\`\`c
// For loop
for (int i = 0; i < 10; i++) {
    printf("%d ", i);
}

// While loop
int i = 0;
while (i < 10) {
    printf("%d ", i);
    i++;
}
\`\`\`

## 4. Functions

Functions in C allow you to break down complex problems into smaller, manageable pieces.

\`\`\`c
// Function declaration
int add(int a, int b);

// Function definition
int add(int a, int b) {
    return a + b;
}

// Function call
int result = add(5, 3);
\`\`\`

## 5. Pointers and Memory Management

Pointers are one of the most powerful features of C programming.

\`\`\`c
int x = 10;
int *ptr = &x;  // ptr points to the address of x

printf("Value: %d", *ptr);  // Dereference pointer to get value
\`\`\`

### Dynamic Memory Allocation
\`\`\`c
#include <stdlib.h>

int *arr = (int*)malloc(5 * sizeof(int));
// Use the array
free(arr);  // Don't forget to free memory
\`\`\`

## 6. Advanced Topics

### Structures
\`\`\`c
struct Student {
    char name[50];
    int age;
    float gpa;
};

struct Student student1;
strcpy(student1.name, "John Doe");
student1.age = 20;
student1.gpa = 3.8;
\`\`\`

### File I/O
\`\`\`c
FILE *file = fopen("data.txt", "w");
fprintf(file, "Hello, File!");
fclose(file);
\`\`\`

## Practice Exercises

1. Write a program to calculate the factorial of a number
2. Create a function to check if a number is prime
3. Implement a simple calculator using switch statements
4. Write a program to reverse a string using pointers

## Conclusion

This guide covers the fundamental concepts of C programming. Practice regularly and work on projects to strengthen your understanding. Remember that mastering C will make learning other programming languages much easier.

## Additional Resources

- The C Programming Language by Kernighan and Ritchie
- Online C compilers for practice
- GitHub repositories with C projects
- Stack Overflow for troubleshooting
    `
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-300 bg-white sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" asChild className="text-blue-600 hover:bg-blue-50">
              <Link to="/documents">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to Documents
              </Link>
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-1" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-1" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <Card className="mb-8 border-2 border-blue-200">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold text-black mb-4">{sampleDocument.title}</h1>
            <p className="text-gray-700 mb-4">{sampleDocument.description}</p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <BookOpen className="w-4 h-4 mr-1" />
                By {sampleDocument.author}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {sampleDocument.readTime}
              </div>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                {sampleDocument.difficulty}
              </span>
              <span className="text-gray-500">Updated {sampleDocument.lastUpdated}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: sampleDocument.content.replace(/\n/g, '<br/>').replace(/```c\n([\s\S]*?)\n```/g, '<pre class="bg-gray-100 p-4 rounded overflow-x-auto"><code>$1</code></pre>').replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-1 rounded">$1</code>').replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold mt-8 mb-4">$1</h1>').replace(/^## (.*$)/gm, '<h2 class="text-xl font-semibold mt-6 mb-3">$1</h2>').replace(/^### (.*$)/gm, '<h3 class="text-lg font-medium mt-4 mb-2">$1</h3>').replace(/^\* (.*$)/gm, '<li class="ml-4">$1</li>').replace(/^- (.*$)/gm, '<li class="ml-4">$1</li>') }} />
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default DocumentReader;
