
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Clock, Share2 } from "lucide-react";

const TheoryReader = () => {
  const { id } = useParams();

  // Sample content - in a real app, this would be fetched based on the ID
  const sampleTheory = {
    title: "Set Theory and Mathematical Logic",
    description: "Fundamental concepts of sets, relations, functions, and logical reasoning",
    difficulty: "Beginner",
    readTime: "45 min",
    applications: "Database design, Programming logic",
    year: "1st Year",
    content: `
# Set Theory and Mathematical Logic

## Introduction

Set theory is the branch of mathematical logic that studies sets, which are collections of objects. Mathematical logic provides the foundation for rigorous mathematical reasoning and is essential for computer science applications.

## 1. Basic Set Concepts

### Definition of a Set
A set is a well-defined collection of distinct objects. These objects are called elements or members of the set.

**Notation:**
- Sets are usually denoted by capital letters: A, B, C, etc.
- Elements are denoted by lowercase letters: a, b, c, etc.
- If x is an element of set A, we write: x ∈ A
- If x is not an element of set A, we write: x ∉ A

### Ways to Represent Sets

1. **Roster Method**: List all elements
   - A = {1, 2, 3, 4, 5}
   - B = {red, blue, green}

2. **Set-Builder Notation**: Describe the property of elements
   - A = {x | x is a positive integer ≤ 5}
   - B = {x | x is a primary color}

3. **Venn Diagrams**: Visual representation using circles

### Types of Sets

- **Empty Set (∅)**: Contains no elements
- **Finite Set**: Has a limited number of elements
- **Infinite Set**: Has unlimited elements
- **Universal Set (U)**: Contains all elements under consideration
- **Subset**: A ⊆ B if every element of A is also in B
- **Proper Subset**: A ⊂ B if A ⊆ B and A ≠ B

## 2. Set Operations

### Union (A ∪ B)
The union of two sets contains all elements that are in either set.
- A ∪ B = {x | x ∈ A or x ∈ B}

### Intersection (A ∩ B)
The intersection contains elements that are in both sets.
- A ∩ B = {x | x ∈ A and x ∈ B}

### Difference (A - B)
The difference contains elements in A but not in B.
- A - B = {x | x ∈ A and x ∉ B}

### Complement (A')
The complement contains all elements in the universal set but not in A.
- A' = {x | x ∈ U and x ∉ A}

### Properties of Set Operations

1. **Commutative Laws**:
   - A ∪ B = B ∪ A
   - A ∩ B = B ∩ A

2. **Associative Laws**:
   - (A ∪ B) ∪ C = A ∪ (B ∪ C)
   - (A ∩ B) ∩ C = A ∩ (B ∩ C)

3. **Distributive Laws**:
   - A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)
   - A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)

4. **De Morgan's Laws**:
   - (A ∪ B)' = A' ∩ B'
   - (A ∩ B)' = A' ∪ B'

## 3. Relations

### Definition
A relation R from set A to set B is a subset of the Cartesian product A × B.

### Types of Relations

1. **Reflexive**: aRa for all a ∈ A
2. **Symmetric**: If aRb, then bRa
3. **Transitive**: If aRb and bRc, then aRc
4. **Equivalence Relation**: Reflexive, symmetric, and transitive

### Functions
A function f: A → B is a special type of relation where each element in A is related to exactly one element in B.

## 4. Mathematical Logic

### Propositions
A proposition is a declarative statement that is either true or false.

### Logical Connectives

1. **Negation (¬)**: "not p"
2. **Conjunction (∧)**: "p and q"
3. **Disjunction (∨)**: "p or q"
4. **Implication (→)**: "if p then q"
5. **Biconditional (↔)**: "p if and only if q"

### Truth Tables

| p | q | p∧q | p∨q | p→q | p↔q |
|---|---|-----|-----|-----|-----|
| T | T |  T  |  T  |  T  |  T  |
| T | F |  F  |  T  |  F  |  F  |
| F | T |  F  |  T  |  T  |  F  |
| F | F |  F  |  F  |  T  |  T  |

### Logical Equivalences

1. **Identity Laws**:
   - p ∧ T ≡ p
   - p ∨ F ≡ p

2. **Domination Laws**:
   - p ∨ T ≡ T
   - p ∧ F ≡ F

3. **Idempotent Laws**:
   - p ∨ p ≡ p
   - p ∧ p ≡ p

4. **Double Negation**:
   - ¬(¬p) ≡ p

## 5. Applications in Computer Science

### Database Design
- Sets represent collections of data
- Relations model relationships between data entities
- Set operations correspond to database queries (JOIN, UNION, etc.)

### Programming Logic
- Boolean algebra based on logical operations
- Conditional statements use logical connectives
- Loop conditions involve logical expressions

### Algorithm Design
- Set operations used in algorithm analysis
- Mathematical induction for proving correctness
- Logical reasoning for problem decomposition

## Practice Problems

1. If A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, find:
   - A ∪ B
   - A ∩ B
   - A - B
   - B - A

2. Prove that A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)

3. Construct truth tables for:
   - (p ∧ q) → (p ∨ q)
   - ¬(p → q) ↔ (p ∧ ¬q)

4. Determine if the relation R = {(1,1), (2,2), (3,3), (1,2), (2,1)} on set {1, 2, 3} is reflexive, symmetric, or transitive.

## Conclusion

Set theory and mathematical logic provide the foundation for mathematical reasoning and computer science applications. Understanding these concepts is crucial for database design, algorithm development, and logical programming.

## Further Reading

- "Set Theory and Logic" by Robert Stoll
- "Mathematical Logic" by Stephen Kleene
- Online resources and practice problems
- Applications in discrete mathematics courses
    `
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-300 bg-white sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" asChild className="text-blue-600 hover:bg-blue-50">
              <Link to="/theories">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to Theories
              </Link>
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-1" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <BookOpen className="w-4 h-4 mr-1" />
                Study Mode
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <Card className="mb-8 border-2 border-blue-200">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold text-black mb-4">{sampleTheory.title}</h1>
            <p className="text-gray-700 mb-4">{sampleTheory.description}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Difficulty:</span>
                <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium mt-1">
                  {sampleTheory.difficulty}
                </div>
              </div>
              <div>
                <span className="text-gray-600">Year:</span>
                <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium mt-1">
                  {sampleTheory.year}
                </div>
              </div>
              <div>
                <span className="text-gray-600">Read Time:</span>
                <div className="flex items-center mt-1">
                  <Clock className="w-3 h-3 mr-1" />
                  {sampleTheory.readTime}
                </div>
              </div>
              <div>
                <span className="text-gray-600">Applications:</span>
                <div className="text-blue-700 text-xs mt-1">
                  {sampleTheory.applications}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ 
                __html: sampleTheory.content
                  .replace(/\n/g, '<br/>')
                  .replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold mt-8 mb-4">$1</h1>')
                  .replace(/^## (.*$)/gm, '<h2 class="text-xl font-semibold mt-6 mb-3">$1</h2>')
                  .replace(/^### (.*$)/gm, '<h3 class="text-lg font-medium mt-4 mb-2">$1</h3>')
                  .replace(/^\*\* (.*$)/gm, '<h4 class="font-semibold mt-3 mb-2">$1</h4>')
                  .replace(/^- (.*$)/gm, '<li class="ml-4 mb-1">$1</li>')
                  .replace(/^\d+\. (.*$)/gm, '<li class="ml-4 mb-1">$1</li>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em>$1</em>')
              }} />
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default TheoryReader;
