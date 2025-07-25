
import { useParams, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Eye, Download, Star, Clock } from "lucide-react";

const NotesViewer = () => {
  const { id } = useParams();
  const location = useLocation();
  const isPreview = location.pathname.includes('/preview');

  // Sample content - in a real app, this would be fetched based on the ID
  const sampleNote = {
    title: "Engineering Mathematics I",
    description: "Calculus, differential equations, and linear algebra notes",
    subject: "Mathematics",
    pages: 45,
    rating: 4.8,
    downloads: 1250,
    lastUpdated: "Jan 2025",
    content: `
# Engineering Mathematics I - Study Notes

## Chapter 1: Differential Calculus

### 1.1 Limits and Continuity
- Definition of limits
- Properties of limits
- Continuity of functions
- Types of discontinuities

### 1.2 Derivatives
- Definition of derivative
- Rules of differentiation
- Chain rule, product rule, quotient rule
- Implicit differentiation

**Important Formulas:**
- d/dx(x^n) = nx^(n-1)
- d/dx(sin x) = cos x
- d/dx(cos x) = -sin x
- d/dx(e^x) = e^x
- d/dx(ln x) = 1/x

### 1.3 Applications of Derivatives
- Maxima and minima
- Rate of change problems
- Related rates
- Curve sketching

## Chapter 2: Integral Calculus

### 2.1 Indefinite Integrals
- Definition of antiderivative
- Basic integration formulas
- Integration by substitution
- Integration by parts

### 2.2 Definite Integrals
- Fundamental theorem of calculus
- Properties of definite integrals
- Applications to area calculation

## Chapter 3: Differential Equations

### 3.1 First Order Differential Equations
- Separable equations
- Linear first-order equations
- Exact equations
- Homogeneous equations

### 3.2 Second Order Differential Equations
- Linear homogeneous equations with constant coefficients
- Method of undetermined coefficients
- Variation of parameters

## Chapter 4: Linear Algebra

### 4.1 Matrices
- Matrix operations
- Determinants
- Inverse of a matrix
- Rank of a matrix

### 4.2 System of Linear Equations
- Gaussian elimination
- Cramer's rule
- Matrix method

### 4.3 Eigenvalues and Eigenvectors
- Characteristic equation
- Diagonalization
- Applications

## Practice Problems

1. Find the derivative of f(x) = x³ - 2x² + 5x - 1
2. Evaluate ∫(2x + 3)dx
3. Solve the differential equation dy/dx = x²y
4. Find the determinant of the 3×3 matrix A

## Tips for Exam Preparation

- Practice derivative and integration formulas daily
- Work on solved examples from textbooks
- Focus on application problems
- Create formula sheets for quick reference
- Form study groups for discussion

## Important Theorems

1. **Mean Value Theorem**: If f is continuous on [a,b] and differentiable on (a,b), then there exists c in (a,b) such that f'(c) = [f(b) - f(a)]/(b - a)

2. **Fundamental Theorem of Calculus**: If f is continuous on [a,b], then ∫[a to b] f(x)dx = F(b) - F(a), where F'(x) = f(x)

3. **Rolle's Theorem**: Special case of MVT when f(a) = f(b)
    `
  };

  const previewContent = sampleNote.content.substring(0, 800) + "...";

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-300 bg-white sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" asChild className="text-blue-600 hover:bg-blue-50">
              <Link to="/notes">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to Notes
              </Link>
            </Button>
            <div className="flex gap-2">
              {isPreview ? (
                <Button variant="default" size="sm" asChild>
                  <Link to={`/notes/${id}`}>
                    <Download className="w-4 h-4 mr-1" />
                    Read Full Notes
                  </Link>
                </Button>
              ) : (
                <>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/notes/${id}/preview`}>
                      <Eye className="w-4 h-4 mr-1" />
                      Preview
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-1" />
                    Download PDF
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {isPreview && (
          <Card className="mb-6 border-2 border-yellow-200 bg-yellow-50">
            <CardContent className="p-4">
              <h3 className="font-semibold text-yellow-800 mb-2">Preview Mode</h3>
              <p className="text-yellow-700 text-sm">
                You are viewing a preview of this note. To access the complete content, 
                click "Read Full Notes" above.
              </p>
            </CardContent>
          </Card>
        )}

        <Card className="mb-8 border-2 border-blue-200">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold text-black mb-4">{sampleNote.title}</h1>
            <p className="text-gray-700 mb-4">{sampleNote.description}</p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                {sampleNote.subject}
              </span>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className={`w-3 h-3 ${i < Math.floor(sampleNote.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                ))}
                <span className="text-gray-600 ml-1">{sampleNote.rating}</span>
              </div>
              <span className="text-gray-600">{sampleNote.pages} pages</span>
              <span className="text-gray-600">{sampleNote.downloads.toLocaleString()} downloads</span>
              <div className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-1" />
                Updated {sampleNote.lastUpdated}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ 
                __html: (isPreview ? previewContent : sampleNote.content)
                  .replace(/\n/g, '<br/>')
                  .replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold mt-8 mb-4">$1</h1>')
                  .replace(/^## (.*$)/gm, '<h2 class="text-xl font-semibold mt-6 mb-3">$2</h2>')
                  .replace(/^### (.*$)/gm, '<h3 class="text-lg font-medium mt-4 mb-2">$1</h3>')
                  .replace(/^\*\* (.*$)/gm, '<h4 class="font-semibold mt-3 mb-2">$1</h4>')
                  .replace(/^- (.*$)/gm, '<li class="ml-4 mb-1">$1</li>')
                  .replace(/^\d+\. (.*$)/gm, '<li class="ml-4 mb-1">$1</li>')
              }} />
              
              {isPreview && (
                <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg text-center">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Want to read more?</h3>
                  <p className="text-blue-700 mb-4">
                    Get access to the complete notes with detailed explanations, examples, and practice problems.
                  </p>
                  <Button asChild>
                    <Link to={`/notes/${id}`}>
                      <Download className="w-4 h-4 mr-1" />
                      Read Full Notes
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default NotesViewer;
