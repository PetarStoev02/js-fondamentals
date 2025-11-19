# JS Fundamentals Practice Sets

This repository collects small, focused JavaScript exercises grouped by topic (arrays, data types, control flow, regular expressions, exams, and more). Each file contains a single task designed to reinforce a specific concept from the **Programming Fundamentals with JavaScript** course.

## Repo Layout

- `Arrays - Lab/` and `Arrays - Exercise/` — practice with array traversal, transformation, and basic algorithms.
- `Basic Syntax, Conditional Statements and Loops - Lab/` plus the accompanying `More Exercise/` set — warm-up problems on variables, branching, and loops.
- `Data Types and Variables - Exercise/` and `Lab Data Types and Variables/` — string/number manipulation, units conversion, and simple calculations.
- `Exercise JS Basic Syntax Conditional Statements/` — mixed drills that combine control flow, math, and text processing.
- `Objects and Classes - Exercise/` — tasks that use plain objects/classes to model data.
- `Regular Expressions - Exercise/` — pattern-matching challenges with `RegExp`.
- `Programming Fundamentals Mid Exam - *` — mock exam problems modeled after SoftUni mid-term exams.
- Additional topic folders (`ConditionalStatements/`, `TypesAndVariables/`, etc.) provide more targeted practice.

## Getting Started

1. **Requirements**: Node.js 14+ (or any modern version) is sufficient.
2. **Install dependencies**: None are required; each file is standalone.
3. **Run a solution**:
   ```bash
   node "Arrays - Exercise/01. Add and Subtract.js"
   ```
   Most scripts read input from hardcoded arrays or arguments; adjust the input at the top of the file as needed.

## Workflow Tips

- Work on one task at a time. If a file exports a function, add temporary `console.log` calls for quick testing.
- For tasks that expect console output, keep the formatting identical to the problem statement.
- Consider creating a `tests/` folder or using Node’s `readline` for interactive input if you want to generalize the scripts.

## Contributing

If you add new exercises or improvements:

1. Follow the existing folder naming conventions.
2. Keep filenames numbered to preserve the intended order.
3. Use ES2015+ syntax (e.g., `const`, `let`, arrow functions) unless the task explicitly requires otherwise.
4. Submit pull requests with a brief description of the problem and solution approach.

Happy coding!