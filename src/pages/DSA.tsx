import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, Brain, Clock, CheckCircle, ExternalLink, Star, Code, Target, Building2, Zap, FileArchive } from "lucide-react";

// --- Data and Helper Functions (No changes here) ---

const companyPrepQuestions = [ /* ... Your full list of company prep questions ... */ 
    // Beginner Level (1-20)
    { id: 1, title: "Contains Duplicate", category: "Arrays", difficulty: "Easy", url: "https://leetcode.com/problems/contains-duplicate/" },
    { id: 2, title: "Valid Anagram", category: "Arrays", difficulty: "Easy", url: "https://leetcode.com/problems/valid-anagram/" },
    { id: 3, title: "Valid Palindrome", category: "Two Pointers", difficulty: "Easy", url: "https://leetcode.com/problems/valid-palindrome/" },
    { id: 4, title: "Best Time to Buy And Sell Stock", category: "Sliding Window", difficulty: "Easy", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
    { id: 5, title: "Valid Parentheses", category: "Stack", difficulty: "Easy", url: "https://leetcode.com/problems/valid-parentheses/" },
    { id: 6, title: "Binary Search", category: "Binary Search", difficulty: "Easy", url: "https://leetcode.com/problems/binary-search/" },
    { id: 7, title: "Reverse Linked List", category: "Linked List", difficulty: "Easy", url: "https://leetcode.com/problems/reverse-linked-list/" },
    { id: 8, title: "Invert Binary Tree", category: "Trees", difficulty: "Easy", url: "https://leetcode.com/problems/invert-binary-tree/" },
    { id: 9, title: "Same Tree", category: "Trees", difficulty: "Easy", url: "https://leetcode.com/problems/same-tree/" },
    { id: 10, title: "Climbing Stairs", category: "1-D DP", difficulty: "Easy", url: "https://leetcode.com/problems/climbing-stairs/" },
    { id: 11, title: "Plus One", category: "Math", difficulty: "Easy", url: "https://leetcode.com/problems/plus-one/" },
    { id: 12, title: "Two Sum", category: "Arrays", difficulty: "Easy", url: "https://leetcode.com/problems/two-sum/" },
    { id: 13, title: "Two Sum II Input Array Is Sorted", category: "Two Pointers", difficulty: "Easy", url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" },
    { id: 14, title: "Min Stack", category: "Stack", difficulty: "Easy", url: "https://leetcode.com/problems/min-stack/" },
    { id: 15, title: "Merge Two Sorted Lists", category: "Linked List", difficulty: "Easy", url: "https://leetcode.com/problems/merge-two-sorted-lists/" },
    { id: 16, title: "Maximum Depth of Binary Tree", category: "Trees", difficulty: "Easy", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
    { id: 17, title: "Kth Largest Element in a Stream", category: "Priority Queue", difficulty: "Easy", url: "https://leetcode.com/problems/kth-largest-element-in-a-stream/" },
    { id: 18, title: "Subsets", category: "Backtracking", difficulty: "Medium", url: "https://leetcode.com/problems/subsets/" },
    { id: 19, title: "Min Cost Climbing Stairs", category: "1-D DP", difficulty: "Easy", url: "https://leetcode.com/problems/min-cost-climbing-stairs/" },
    { id: 20, title: "Happy Number", category: "Math", difficulty: "Easy", url: "https://leetcode.com/problems/happy-number/" },
    
    // Intermediate Level (39-106)
    { id: 39, title: "Group Anagrams", category: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/group-anagrams/" },
    { id: 40, title: "Longest Substring Without Repeating Characters", category: "Sliding Window", difficulty: "Medium", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
    { id: 41, title: "Evaluate Reverse Polish Notation", category: "Stack", difficulty: "Medium", url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/" },
    { id: 42, title: "Koko Eating Bananas", category: "Binary Search", difficulty: "Medium", url: "https://leetcode.com/problems/koko-eating-bananas/" },
    { id: 43, title: "Reorder List", category: "Linked List", difficulty: "Medium", url: "https://leetcode.com/problems/reorder-list/" },
    { id: 44, title: "Subtree of Another Tree", category: "Trees", difficulty: "Easy", url: "https://leetcode.com/problems/subtree-of-another-tree/" },
    { id: 45, title: "K Closest Points to Origin", category: "Priority Queue", difficulty: "Medium", url: "https://leetcode.com/problems/k-closest-points-to-origin/" },
    { id: 46, title: "Combination Sum", category: "Backtracking", difficulty: "Medium", url: "https://leetcode.com/problems/combination-sum/" },
    { id: 47, title: "Permutations", category: "Backtracking", difficulty: "Medium", url: "https://leetcode.com/problems/permutations/" },
    { id: 48, title: "Letter Combinations of a Phone Number", category: "Backtracking", difficulty: "Medium", url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/" },
    { id: 49, title: "Number of Islands", category: "Graphs", difficulty: "Medium", url: "https://leetcode.com/problems/number-of-islands/" },
    { id: 50, title: "Walls And Gates", category: "Graphs", difficulty: "Medium", url: "https://leetcode.com/problems/walls-and-gates/" },
    { id: 51, title: "Rotting Oranges", category: "Graphs", difficulty: "Medium", url: "https://leetcode.com/problems/rotting-oranges/" },
    { id: 52, title: "Longest Palindromic Substring", category: "1-D DP", difficulty: "Medium", url: "https://leetcode.com/problems/longest-palindromic-substring/" },
    { id: 53, title: "Longest Common Subsequence", category: "2-D DP", difficulty: "Medium", url: "https://leetcode.com/problems/longest-common-subsequence/" },
    { id: 54, title: "Gas Station", category: "Greedy", difficulty: "Medium", url: "https://leetcode.com/problems/gas-station/" },
    { id: 55, title: "Merge Intervals", category: "Intervals", difficulty: "Medium", url: "https://leetcode.com/problems/merge-intervals/" },
    { id: 56, title: "Spiral Matrix", category: "Math", difficulty: "Medium", url: "https://leetcode.com/problems/spiral-matrix/" },
    { id: 57, title: "Reverse Bits", category: "Bit Manipulation", difficulty: "Easy", url: "https://leetcode.com/problems/reverse-bits/" },
    { id: 58, title: "Reverse Integer", category: "Bit Manipulation", difficulty: "Medium", url: "https://leetcode.com/problems/reverse-integer/" },
    { id: 59, title: "Top K Frequent Elements", category: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/top-k-frequent-elements/" },
    { id: 60, title: "Generate Parentheses", category: "Stack", difficulty: "Medium", url: "https://leetcode.com/problems/generate-parentheses/" },
    { id: 61, title: "Find Minimum in Rotated Sorted Array", category: "Binary Search", difficulty: "Medium", url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" },
    { id: 62, title: "Remove Nth Node From End of List", category: "Linked List", difficulty: "Medium", url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
    { id: 63, title: "Lowest Common Ancestor of a Binary Search Tree", category: "Trees", difficulty: "Medium", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
    { id: 64, title: "Kth Largest Element in an Array", category: "Priority Queue", difficulty: "Medium", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
    { id: 65, title: "Combination Sum II", category: "Backtracking", difficulty: "Medium", url: "https://leetcode.com/problems/combination-sum-ii/" },
    { id: 66, title: "Subsets II", category: "Backtracking", difficulty: "Medium", url: "https://leetcode.com/problems/subsets-ii/" },
    { id: 67, title: "Surrounded Regions", category: "Graphs", difficulty: "Medium", url: "https://leetcode.com/problems/surrounded-regions/" },
    { id: 68, title: "Palindromic Substrings", category: "1-D DP", difficulty: "Medium", url: "https://leetcode.com/problems/palindromic-substrings/" },
    { id: 69, title: "Best Time to Buy and Sell Stock With Cooldown", category: "2-D DP", difficulty: "Medium", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/" },
    
    // Advanced Level (74-106)
    { id: 74, title: "Encode and Decode Strings", category: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/encode-and-decode-strings/" },
    { id: 75, title: "3Sum", category: "Two Pointers", difficulty: "Medium", url: "https://leetcode.com/problems/3sum/" },
    { id: 76, title: "Longest Repeating Character Replacement", category: "Sliding Window", difficulty: "Medium", url: "https://leetcode.com/problems/longest-repeating-character-replacement/" },
    { id: 77, title: "Daily Temperatures", category: "Stack", difficulty: "Medium", url: "https://leetcode.com/problems/daily-temperatures/" },
    { id: 78, title: "Search in Rotated Sorted Array", category: "Binary Search", difficulty: "Medium", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
    { id: 79, title: "Copy List With Random Pointer", category: "Linked List", difficulty: "Medium", url: "https://leetcode.com/problems/copy-list-with-random-pointer/" },
    { id: 80, title: "Binary Tree Level Order Traversal", category: "Trees", difficulty: "Medium", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
    { id: 81, title: "Task Scheduler", category: "Priority Queue", difficulty: "Medium", url: "https://leetcode.com/problems/task-scheduler/" },
    { id: 82, title: "Word Search", category: "Backtracking", difficulty: "Medium", url: "https://leetcode.com/problems/word-search/" },
    { id: 83, title: "Implement Trie (Prefix Tree)", category: "Tries", difficulty: "Medium", url: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
    { id: 84, title: "Clone Graph", category: "Graphs", difficulty: "Medium", url: "https://leetcode.com/problems/clone-graph/" },
    { id: 85, title: "Decode Ways", category: "1-D DP", difficulty: "Medium", url: "https://leetcode.com/problems/decode-ways/" },
    { id: 86, title: "Coin Change II", category: "2-D DP", difficulty: "Medium", url: "https://leetcode.com/problems/coin-change-ii/" },
    { id: 87, title: "Hand of Straights", category: "Greedy", difficulty: "Medium", url: "https://leetcode.com/problems/hand-of-straights/" },
    { id: 88, title: "Non Overlapping Intervals", category: "Intervals", difficulty: "Medium", url: "https://leetcode.com/problems/non-overlapping-intervals/" },
    { id: 89, title: "Meeting Rooms II", category: "Intervals", difficulty: "Medium", url: "https://leetcode.com/problems/meeting-rooms-ii/" },
    { id: 90, title: "Product of Array Except Self", category: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/product-of-array-except-self/" },
    { id: 91, title: "Container With Most Water", category: "Two Pointers", difficulty: "Medium", url: "https://leetcode.com/problems/container-with-most-water/" },
    { id: 92, title: "Permutation in String", category: "Sliding Window", difficulty: "Medium", url: "https://leetcode.com/problems/permutation-in-string/" },
    { id: 93, title: "Add Two Numbers", category: "Linked List", difficulty: "Medium", url: "https://leetcode.com/problems/add-two-numbers/" },
    { id: 94, title: "Binary Tree Right Side View", category: "Trees", difficulty: "Medium", url: "https://leetcode.com/problems/binary-tree-right-side-view/" },
    { id: 95, title: "Palindrome Partitioning", category: "Backtracking", difficulty: "Medium", url: "https://leetcode.com/problems/palindrome-partitioning/" },
    { id: 96, title: "Pacific Atlantic Water Flow", category: "Graphs", difficulty: "Medium", url: "https://leetcode.com/problems/pacific-atlantic-water-flow/" },
    { id: 97, title: "Coin Change", category: "1-D DP", difficulty: "Medium", url: "https://leetcode.com/problems/coin-change/" },
    { id: 98, title: "Target Sum", category: "2-D DP", difficulty: "Medium", url: "https://leetcode.com/problems/target-sum/" },
    { id: 99, title: "Merge Triplets to Form Target Triplet", category: "Greedy", difficulty: "Medium", url: "https://leetcode.com/problems/merge-triplets-to-form-target-triplet/" },
    { id: 100, title: "Multiply Strings", category: "Math", difficulty: "Medium", url: "https://leetcode.com/problems/multiply-strings/" },
    { id: 101, title: "Valid Sudoku", category: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/valid-sudoku/" },
    { id: 102, title: "Minimum Window Substring", category: "Sliding Window", difficulty: "Hard", url: "https://leetcode.com/problems/minimum-window-substring/" },
    { id: 103, title: "Car Fleet", category: "Stack", difficulty: "Medium", url: "https://leetcode.com/problems/car-fleet/" },
    { id: 104, title: "Time Based Key Value Store", category: "Binary Search", difficulty: "Medium", url: "https://leetcode.com/problems/time-based-key-value-store/" },
    { id: 105, title: "Find The Duplicate Number", category: "Linked List", difficulty: "Medium", url: "https://leetcode.com/problems/find-the-duplicate-number/" },
    { id: 106, title: "Count Good Nodes in Binary Tree", category: "Trees", difficulty: "Medium", url: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/" },
    
    // Expert Level (128-150)
    { id: 128, title: "Longest Consecutive Sequence", category: "Arrays", difficulty: "Medium", url: "https://leetcode.com/problems/longest-consecutive-sequence/" },
    { id: 129, title: "Trapping Rain Water", category: "Two Pointers", difficulty: "Hard", url: "https://leetcode.com/problems/trapping-rain-water/" },
    { id: 130, title: "Largest Rectangle In Histogram", category: "Stack", difficulty: "Hard", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
    { id: 131, title: "Median of Two Sorted Arrays", category: "Binary Search", difficulty: "Hard", url: "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
    { id: 132, title: "Merge K Sorted Lists", category: "Linked List", difficulty: "Hard", url: "https://leetcode.com/problems/merge-k-sorted-lists/" },
    { id: 133, title: "Construct Binary Tree From Preorder And Inorder Traversal", category: "Trees", difficulty: "Medium", url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" },
    { id: 134, title: "Find Median From Data Stream", category: "Priority Queue", difficulty: "Hard", url: "https://leetcode.com/problems/find-median-from-data-stream/" },
    { id: 135, title: "N Queens", category: "Backtracking", difficulty: "Hard", url: "https://leetcode.com/problems/n-queens/" },
    { id: 136, title: "Word Search II", category: "Tries", difficulty: "Hard", url: "https://leetcode.com/problems/word-search-ii/" },
    { id: 137, title: "Word Ladder", category: "Graphs", difficulty: "Hard", url: "https://leetcode.com/problems/word-ladder/" },
    { id: 138, title: "Reconstruct Itinerary", category: "Advanced Graphs", difficulty: "Hard", url: "https://leetcode.com/problems/reconstruct-itinerary/" },
    { id: 139, title: "Partition Equal Subset Sum", category: "1-D DP", difficulty: "Medium", url: "https://leetcode.com/problems/partition-equal-subset-sum/" },
    { id: 140, title: "Distinct Subsequences", category: "2-D DP", difficulty: "Hard", url: "https://leetcode.com/problems/distinct-subsequences/" },
    { id: 141, title: "Edit Distance", category: "2-D DP", difficulty: "Hard", url: "https://leetcode.com/problems/edit-distance/" },
    { id: 142, title: "Reverse Nodes In K Group", category: "Linked List", difficulty: "Hard", url: "https://leetcode.com/problems/reverse-nodes-in-k-group/" },
    { id: 143, title: "Binary Tree Maximum Path Sum", category: "Trees", difficulty: "Hard", url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" },
    { id: 144, title: "Min Cost to Connect All Points", category: "Advanced Graphs", difficulty: "Medium", url: "https://leetcode.com/problems/min-cost-to-connect-all-points/" },
    { id: 145, title: "Cheapest Flights Within K Stops", category: "Advanced Graphs", difficulty: "Medium", url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/" },
    { id: 146, title: "Burst Balloons", category: "2-D DP", difficulty: "Hard", url: "https://leetcode.com/problems/burst-balloons/" },
    { id: 147, title: "Serialize And Deserialize Binary Tree", category: "Trees", difficulty: "Hard", url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" },
    { id: 148, title: "Swim In Rising Water", category: "Advanced Graphs", difficulty: "Hard", url: "https://leetcode.com/problems/swim-in-rising-water/" },
    { id: 149, title: "Alien Dictionary", category: "Advanced Graphs", difficulty: "Hard", url: "https://leetcode.com/problems/alien-dictionary/" },
    { id: 150, title: "Regular Expression Matching", category: "2-D DP", difficulty: "Hard", url: "https://leetcode.com/problems/regular-expression-matching/" }
];
const faangQuestions = { /* ... Your full FAANG questions list ... */ 
    "Array & Matrix": [
      "Two Sum",
      "Best Time to Buy and Sell Stock",
      "Maximum Subarray (Kadanes Algorithm)",
      "Merge Intervals",
      "Product of Array Except Self",
      "Find Duplicate Number",
      "Set Matrix Zeroes",
      "Rotate Image (90 Matrix Rotation)",
      "Spiral Matrix",
      "Longest Consecutive Sequence",
      "Subarray Sum Equals K",
      "Merge Sorted Arrays",
      "Minimum Number of Swaps to Sort",
      "Sliding Window Maximum",
      "Matrix Search (Search in 2D matrix)"
    ],
    "String": [
      "Longest Substring Without Repeating Characters",
      "Valid Anagram",
      "Group Anagrams",
      "Longest Palindromic Substring",
      "Palindrome Partitioning",
      "String to Integer (Atoi)",
      "Implement strStr()",
      "Decode Ways",
      "Roman to Integer",
      "Multiply Strings"
    ],
    "Linked List": [
      "Reverse a Linked List",
      "Detect Cycle in Linked List",
      "Merge Two Sorted Lists",
      "Remove N-th Node from End",
      "Intersection of Two Linked Lists",
      "Add Two Numbers (as Linked Lists)",
      "Copy List with Random Pointer",
      "Reverse Nodes in K-Group",
      "Rotate Linked List",
      "Sort a Linked List"
    ],
    "Stack & Queue": [
      "Valid Parentheses",
      "Min Stack",
      "Evaluate Reverse Polish Notation",
      "Largest Rectangle in Histogram",
      "Daily Temperatures",
      "Sliding Window Maximum",
      "Implement Queue using Stacks",
      "Implement Stack using Queues",
      "Next Greater Element",
      "Remove K Digits"
    ],
    "Trees & Graphs": [
      "Binary Tree Level Order Traversal",
      "Validate Binary Search Tree",
      "Lowest Common Ancestor",
      "Invert Binary Tree",
      "Serialize and Deserialize Binary Tree",
      "Construct Binary Tree from Traversals",
      "Diameter of Binary Tree",
      "Path Sum",
      "Word Ladder",
      "Number of Islands",
      "Clone Graph",
      "Course Schedule (Topological Sort)",
      "Binary Tree Zigzag Level Order",
      "Symmetric Tree",
      "Maximum Depth of Binary Tree"
    ],
    "Heap / Priority Queue": [
      "Merge K Sorted Lists",
      "Find Median from Data Stream",
      "Top K Frequent Elements",
      "Kth Largest Element in Array",
      "Sliding Window Median"
    ],
    "Backtracking": [
      "Subsets",
      "Permutations",
      "Word Search",
      "Sudoku Solver",
      "N-Queens",
      "Combination Sum",
      "Palindrome Partitioning",
      "Letter Combinations of a Phone Number",
      "Generate Parentheses",
      "Rat in a Maze"
    ],
    "Greedy & Interval Problems": [
      "Jump Game",
      "Gas Station",
      "Insert Interval",
      "Non-overlapping Intervals",
      "Minimum Number of Arrows to Burst Balloons"
    ],
    "Dynamic Programming": [
      "Climbing Stairs",
      "Coin Change",
      "Longest Increasing Subsequence",
      "House Robber",
      "House Robber II",
      "Longest Common Subsequence",
      "Edit Distance",
      "Decode Ways",
      "Word Break",
      "Maximum Product Subarray",
      "Unique Paths",
      "Target Sum",
      "Partition Equal Subset Sum",
      "Palindromic Substrings",
      "Rod Cutting Problem"
    ],
    "Bit Manipulation, Math & Others": [
      "Single Number",
      "Counting Bits",
      "Reverse Bits",
      "Power of Two",
      "Majority Element"
    ]
};
const studyPlan = [ /* ... Your study plan data ... */ 
    { week: "Week 1-2", focus: "Arrays, Strings, and Basic Patterns", hours: "2-3 hours/day" },
    { week: "Week 3-4", focus: "Linked Lists and Stacks/Queues", hours: "2-3 hours/day" },
    { week: "Week 5-6", focus: "Trees and Basic Graph Algorithms", hours: "3-4 hours/day" },
    { week: "Week 7-8", focus: "Advanced Data Structures", hours: "3-4 hours/day" },
    { week: "Week 9-10", focus: "Dynamic Programming", hours: "4-5 hours/day" },
    { week: "Week 11-12", focus: "Advanced Algorithms & System Design", hours: "4-5 hours/day" }
];
const platforms = [ /* ... Your platforms data ... */ 
    {
      name: "LeetCode",
      description: "Most popular coding interview preparation platform",
      problems: "3000+",
      url: "https://leetcode.com",
      rating: 4.8
    },
    {
      name: "HackerRank",
      description: "Comprehensive programming challenges and tutorials",
      problems: "2500+",
      url: "https://hackerrank.com",
      rating: 4.6
    },
    {
      name: "GeeksforGeeks",
      description: "Detailed explanations and implementations",
      problems: "5000+",
      url: "https://geeksforgeeks.org",
      rating: 4.7
    },
    {
      name: "CodeChef",
      description: "Competitive programming practice problems",
      problems: "4000+",
      url: "https://codechef.com",
      rating: 4.5
    }
];

const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
        case "Easy": return "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300";
        case "Medium": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300";
        case "Hard": return "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300";
        default: return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    }
};

const DSA = () => {
  const refs = {
    companyPrep: useRef<HTMLDivElement>(null),
    faang: useRef<HTMLDivElement>(null),
    practice: useRef<HTMLDivElement>(null),
    studyPlan: useRef<HTMLDivElement>(null),
    platforms: useRef<HTMLDivElement>(null),
    tips: useRef<HTMLDivElement>(null),
  };

  const handleNav = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  
  const navLinks = [
    { name: "Company Prep Questions", ref: refs.companyPrep },
    { name: "Top FAANG Questions", ref: refs.faang },
    { name: "Top Practice Questions", ref: refs.practice },
    { name: "12-Week Study Plan", ref: refs.studyPlan },
    { name: "Practice Platforms", ref: refs.platforms },
    { name: "Success Tips", ref: refs.tips },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 shadow-sm sticky top-0 z-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/50 rounded-lg">
                    <Brain className="w-8 h-8 text-orange-500" />
                </div>
                <div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">Data Structures & Algorithms</h1>
                    <p className="text-gray-500 dark:text-gray-400">Your ultimate guide to acing technical interviews.</p>
                </div>
            </div>
            <Button variant="outline" size="sm" asChild className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                <Link to="/"><ArrowLeft className="w-4 h-4 mr-2" />Back to Home</Link>
            </Button>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex">
        {/* --- Floating Quick Navigation Sidebar --- */}
        <aside className="hidden lg:block w-64 flex-shrink-0 mr-8">
            <div className="sticky top-28 space-y-2">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 px-3">On this page</h3>
                {navLinks.map(link => (
                    <button
                        key={link.name}
                        onClick={() => handleNav(link.ref)}
                        className="w-full text-left px-3 py-2 text-sm font-medium rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
                    >
                        {link.name}
                    </button>
                ))}
            </div>
        </aside>

        {/* --- Main Content Area --- */}
        <main className="flex-1 min-w-0">
            {/* --- External DSA Vault CTA --- */}
            <Card className="mb-12 bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg">
                <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <FileArchive size={40} />
                        <div>
                            <h3 className="font-bold text-lg">Unlock the DSA Vault</h3>
                            <p className="text-sm opacity-90">Access an expanded collection of premium DSA resources, video solutions, and company-specific question banks.</p>
                        </div>
                    </div>
                    <Button asChild className="bg-white text-orange-600 hover:bg-orange-50 font-bold rounded-full w-full sm:w-auto flex-shrink-0">
                        <a href="https://your-external-link.com" target="_blank" rel="noopener noreferrer"><ExternalLink className="w-4 h-4 mr-2"/> Access the Vault</a>
                    </Button>
                </CardContent>
            </Card>
            
            <div ref={refs.companyPrep} className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Company Prep Questions</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">A curated list of 150 essential problems to master for top tech interviews, sorted by topic and difficulty.</p>
                <Card className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow-sm overflow-hidden">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-16">#</TableHead>
                                <TableHead>Problem</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Difficulty</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {companyPrepQuestions.slice(0, 10).map(q => ( // Show first 10 for brevity
                                <TableRow key={q.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                    <TableCell className="font-mono text-gray-500">{q.id}</TableCell>
                                    <TableCell className="font-semibold text-gray-800 dark:text-gray-200">{q.title}</TableCell>
                                    <TableCell><Badge variant="outline">{q.category}</Badge></TableCell>
                                    <TableCell><Badge className={getDifficultyColor(q.difficulty)}>{q.difficulty}</Badge></TableCell>
                                    <TableCell className="text-right">
                                        <Button asChild size="sm" variant="ghost" className="text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-700">
                                            <a href={q.url} target="_blank" rel="noopener noreferrer">Solve <ExternalLink className="w-3.5 h-3.5 ml-2"/></a>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Card>
            </div>

            <div ref={refs.faang} className="mb-12 scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Top 100 FAANG Questions</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Master these core problems frequently asked at top-tier companies like Google, Meta, Amazon, and Apple.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(faangQuestions).map(([category, problems]) => (
                        <Card key={category} className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow-sm">
                            <CardHeader><CardTitle className="text-lg">{category}</CardTitle></CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    {problems.slice(0, 5).map(p => <li key={p} className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-orange-500 flex-shrink-0"/> {p}</li>)}
                                    {problems.length > 5 && <li className="text-gray-500 dark:text-gray-400 ml-6">...and {problems.length - 5} more</li>}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <div ref={refs.studyPlan} className="mb-12 scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">12-Week Study Plan</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">A structured plan to guide you from fundamentals to advanced topics in just three months.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {studyPlan.map((plan, index) => (
                  <Card key={index} className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow-sm">
                    <CardContent className="p-6">
                      <Badge className="mb-2 bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300">{plan.week}</Badge>
                      <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">{plan.focus}</h3>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400"><Clock className="w-4 h-4 mr-2" /> {plan.hours}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div ref={refs.platforms} className="mb-12 scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Practice Platforms</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">The best websites to hone your coding skills and prepare for interviews.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {platforms.map((platform) => (
                  <Card key={platform.name} className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">{platform.name}</h3>
                        <div className="flex items-center text-sm font-semibold text-yellow-500"><Star className="w-4 h-4 mr-1" /> {platform.rating}</div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{platform.description}</p>
                      <Button asChild size="sm" className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold">
                          <a href={platform.url} target="_blank" rel="noopener noreferrer"><ExternalLink className="w-4 h-4 mr-2" /> Visit Platform</a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div ref={refs.tips} className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">DSA Success Tips</h2>
              <Card className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow-sm">
                  <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Study Strategy</h4>
                          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                              <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-500 flex-shrink-0"/> Focus on understanding, not memorizing.</li>
                              <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-500 flex-shrink-0"/> Practice consistently, even if it's just one problem a day.</li>
                              <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-500 flex-shrink-0"/> Review your solutions to find optimizations.</li>
                          </ul>
                      </div>
                      <div>
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Problem Solving</h4>
                          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                              <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-500 flex-shrink-0"/> Always clarify the problem and constraints first.</li>
                              <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-500 flex-shrink-0"/> Discuss your thought process out loud.</li>
                              <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-500 flex-shrink-0"/> Analyze time and space complexity before coding.</li>
                          </ul>
                      </div>
                  </CardContent>
              </Card>
            </div>

        </main>
      </div>
    </div>
  );
};

export default DSA;