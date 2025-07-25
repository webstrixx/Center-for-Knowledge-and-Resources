import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Database, Code, Brain, Target, User } from "lucide-react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import clsx from 'clsx';

// --- COMPLETE, UNABRIDGED QUESTION DATA ---

const sqlQuestions = [
    { id: 1, question: "What is SQL?", answer: "SQL (Structured Query Language) is a standard programming language used for managing and manipulating relational databases.", category: "Basics" },
    { id: 2, question: "What is a primary key?", answer: "A primary key is a field (or combination of fields) that uniquely identifies each record in a table. It cannot contain NULL values and must have unique entries.", category: "Keys" },
    { id: 3, question: "What is a foreign key?", answer: "A foreign key is a field (or combination of fields) in one table that refers to the primary key in another table, establishing a relationship between the two tables.", category: "Keys" },
    { id: 4, question: "What are constraints in SQL?", answer: "Constraints are rules applied to table columns to enforce data integrity. Common constraints include: PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK, NOT NULL, and DEFAULT.", category: "Constraints" },
    { id: 5, question: "Write a query to retrieve all records from a table named employees.", answer: "This query selects and displays all columns and rows from the employees table.", code: "SELECT * FROM employees;", category: "Basic Queries" },
    { id: 6, question: "What is the difference between DELETE and TRUNCATE?", answer: "DELETE removes rows based on a condition (can be rolled back). TRUNCATE removes all rows, is faster, and cannot be rolled back.", category: "DML Commands" },
    { id: 7, question: "How do you find the maximum salary from an employees table?", answer: "This query returns the highest salary from the employees table.", code: "SELECT MAX(salary) FROM employees;", category: "Aggregate Functions" },
    { id: 8, question: "Write a query to fetch the second-highest salary from the employees table.", answer: "The subquery finds the maximum salary, and the outer query finds the highest salary that is less than that value.", code: "SELECT MAX(salary) FROM employees\nWHERE salary < (SELECT MAX(salary) FROM employees);", category: "Subqueries" },
    { id: 9, question: "What is a JOIN? Explain its types.", answer: "A JOIN clause combines rows from two or more tables. Types include INNER, LEFT, RIGHT, FULL, and CROSS JOIN.", category: "Joins" },
    { id: 10, question: "Write a query to fetch employee names and department names using JOIN.", answer: "This query joins employees and departments tables on their common ID to display related names.", code: "SELECT e.name, d.department_name\nFROM employees e\nJOIN departments d\nON e.department_id = d.id;", category: "Joins" },
    { id: 11, question: "What is a GROUP BY clause in SQL?", answer: "The GROUP BY clause groups rows with the same values into summary rows, often used with aggregate functions.", category: "Grouping" },
    { id: 12, question: "Write a query to count employees in each department.", answer: "This query groups employees by department and counts the number in each.", code: "SELECT department_id, COUNT(*)\nFROM employees\nGROUP BY department_id;", category: "Grouping" },
    { id: 13, question: "What is the difference between WHERE and HAVING clauses?", answer: "WHERE filters rows before grouping. HAVING filters groups after the GROUP BY clause has been applied.", category: "Filtering" },
    { id: 14, question: "Write a query to fetch departments with more than 5 employees.", answer: "This query counts employees in each department and then filters for groups with a count greater than 5.", code: "SELECT department_id, COUNT(*)\nFROM employees\nGROUP BY department_id\nHAVING COUNT(*) > 5;", category: "Filtering" },
    { id: 15, question: "Explain UNION and UNION ALL.", answer: "UNION combines results and removes duplicates. UNION ALL combines results and includes all duplicates, making it faster.", category: "Set Operations" },
    { id: 16, question: "What is a subquery in SQL?", answer: "A subquery is a query nested within another query, used to retrieve data that will be used in the main query's condition.", category: "Subqueries" },
    { id: 17, question: "Write a query to find all employees whose salary is greater than the average salary.", answer: "This query selects employees with a salary higher than the overall average.", code: "SELECT * FROM employees\nWHERE salary > (SELECT AVG(salary) FROM employees);", category: "Subqueries" },
    { id: 18, question: "What is indexing in SQL?", answer: "Indexing improves the speed of data retrieval operations on a database table at the cost of additional writes and storage space.", category: "Performance" },
    { id: 21, question: "What is normalization?", answer: "Normalization is the process of organizing data to reduce redundancy and improve data integrity. Common forms are 1NF, 2NF, 3NF, and BCNF.", category: "Database Design" },
    { id: 23, question: "Write a query to add a new column 'email' to the employees table.", answer: "This DDL command alters the table structure to add a new column.", code: "ALTER TABLE employees ADD COLUMN email VARCHAR(255);", category: "DDL Commands" },
    { id: 24, question: "What is a stored procedure?", answer: "A stored procedure is a set of SQL statements that can be stored and reused. It improves performance and security.", category: "Procedures" },
    { id: 26, question: "What are triggers in SQL?", answer: "Triggers are special procedures that are automatically executed in response to events like INSERT, UPDATE, or DELETE on a table.", category: "Triggers" },
    { id: 28, question: "What is a VIEW in SQL?", answer: "A VIEW is a virtual table based on the result-set of an SQL statement. It simplifies complex queries and enhances security.", category: "Views" },
    { id: 35, question: "What are the ACID properties in SQL?", answer: "ACID properties ensure reliable database transactions: Atomicity, Consistency, Isolation, Durability.", category: "Transactions" },
];

const codingQuestions = [
    { id: 1, question: "Find the missing number in an array of size n containing numbers from 1 to n+1.", answer: "Calculate the expected sum of numbers from 1 to n+1 and subtract the actual sum of the array elements to find the missing number.", code: `function findMissing(arr) {\n  const n = arr.length + 1;\n  const total = (n * (n + 1)) / 2;\n  const sum = arr.reduce((a, b) => a + b, 0);\n  return total - sum;\n}`, category: "Arrays" },
    { id: 2, question: "Reverse a linked list.", answer: "Iterate through the list using three pointers (previous, current, next) to reverse the direction of the next pointers at each node.", code: `function reverseList(head) {\n  let prev = null, curr = head;\n  while (curr) {\n    let nextTemp = curr.next;\n    curr.next = prev;\n    prev = curr;\n    curr = nextTemp;\n  }\n  return prev;\n}`, category: "Linked List" },
    { id: 3, question: "Find the longest substring without repeating characters.", answer: "Use a sliding window approach with a set to keep track of unique characters. Expand the window to the right, and if a duplicate is found, shrink the window from the left.", code: `function lengthOfLongestSubstring(s) {\n  let set = new Set(), max = 0, left = 0;\n  for (let right = 0; right < s.length; right++) {\n    while (set.has(s[right])) {\n      set.delete(s[left++]);\n    }\n    set.add(s[right]);\n    max = Math.max(max, right - left + 1);\n  }\n  return max;\n}`, category: "Strings" },
    { id: 4, question: "Implement binary search on a sorted array.", answer: "Use two pointers (left, right) to define the search space. Repeatedly check the middle element and narrow the search space by half in each iteration.", code: `function binarySearch(arr, target) {\n  let left = 0, right = arr.length - 1;\n  while (left <= right) {\n    let mid = Math.floor((left + right) / 2);\n    if (arr[mid] === target) return mid;\n    else if (arr[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  return -1;\n}`, category: "Binary Search" },
    { id: 5, question: "Detect a cycle in a linked list.", answer: "Use Floyd's Tortoise and Hare algorithm with two pointers (a slow one moving one step and a fast one moving two steps). If they meet, a cycle exists.", code: `function hasCycle(head) {\n  let slow = head, fast = head;\n  while (fast && fast.next) {\n    slow = slow.next;\n    fast = fast.next.next;\n    if (slow === fast) return true;\n  }\n  return false;\n}`, category: "Linked List" }
];

const systemDesignQuestions = [
    { id: 1, question: "How would you design a URL shortening service like bit.ly?", answer: "Key components include: 1) A unique ID generator for short keys (e.g., base62 encoding). 2) A database to map short keys to original URLs. 3) A redirection service (HTTP 301). 4) Scalability features like caching for popular links, a load balancer, and database sharding.", category: "Web Services" },
    { id: 2, question: "Design a scalable chat application like WhatsApp.", answer: "Core features include: 1) Real-time messaging using WebSockets for persistent connections. 2) A message queuing system (like RabbitMQ or Kafka) for reliability. 3) A database schema for users, chats, and messages. 4) User presence tracking and end-to-end encryption.", category: "Messaging" },
    { id: 3, question: "How would you design a news feed system like Facebook or Twitter?", answer: "Discuss: 1) Feed generation logic (push vs. pull models). 2) A ranking algorithm to personalize the feed. 3) Caching strategies for performance (e.g., Redis for hot posts). 4) Database design to handle the fan-out problem for popular users.", category: "Feeds" }
];

const hrQuestions = [
    { id: 1, question: "Tell me about yourself.", answer: "Provide a concise 2-3 minute summary of your background, key skills, and career goals. Tailor your story to the role you're applying for and end with why you are a great fit for this specific position.", category: "General" },
    { id: 2, question: "Describe a challenging project and how you handled it.", answer: "Use the STAR method: Situation (describe the context), Task (what was your role/goal?), Action (what specific steps did you take?), and Result (what was the outcome?). Focus on teamwork, problem-solving, and what you learned.", category: "Behavioral" },
    { id: 3, question: "How do you handle tight deadlines?", answer: "Explain your process: 1) Prioritize tasks based on impact. 2) Break down large tasks into smaller steps. 3) Communicate potential roadblocks early with stakeholders. 4) Stay organized and focused on the most critical items.", category: "Work Ethic" }
];

const tabs = [
    { id: 'sql', name: 'SQL', icon: Database },
    { id: 'coding', name: 'Coding & DSA', icon: Code },
    { id: 'system', name: 'System Design', icon: Brain },
    { id: 'hr', name: 'HR & Behavioral', icon: User },
];

const InterviewQuestions = () => {
  const [tab, setTab] = useState('sql');
  
  const dataMap = { sql: sqlQuestions, coding: codingQuestions, system: systemDesignQuestions, hr: hrQuestions };
  const currentQuestions = dataMap[tab];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 shadow-sm sticky top-0 z-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/50 rounded-lg"><Target className="w-8 h-8 text-orange-500" /></div>
                <div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">Interview Questions Hub</h1>
                    <p className="text-gray-500 dark:text-gray-400">Your one-stop destination for interview preparation.</p>
                </div>
            </div>
            <Button variant="outline" size="sm" asChild className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                <Link to="/"><ArrowLeft className="w-4 h-4 mr-2" />Back to Home</Link>
            </Button>
        </div>
      </header>
      
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">Ace Your Next Interview</h2>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Practice with a curated list of questions covering SQL, Data Structures, System Design, and Behavioral rounds.
            </p>
        </div>

        <div className="flex justify-center border-b border-gray-200 dark:border-gray-700 mb-12">
            {tabs.map(t => (
                <button
                    key={t.id}
                    onClick={() => setTab(t.id)}
                    className={clsx(
                        'flex items-center gap-2 px-4 py-3 text-sm font-semibold transition-colors duration-200 focus:outline-none',
                        tab === t.id
                        ? 'border-b-2 border-orange-500 text-orange-600 dark:text-orange-400'
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                    )}
                >
                    <t.icon className="w-4 h-4"/> {t.name}
                </button>
            ))}
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {currentQuestions.map((item, index) => (
            <Card key={item.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 flex-1 pr-4">{index + 1}. {item.question}</h3>
                  <Badge variant="secondary">{item.category}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <p>{item.answer}</p>
                  {item.code && (
                    <SyntaxHighlighter language={tab === 'sql' ? 'sql' : 'javascript'} style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', margin: '0' }}>
                      {item.code}
                    </SyntaxHighlighter>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default InterviewQuestions;