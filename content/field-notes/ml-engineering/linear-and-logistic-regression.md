---
title: "Linear and Logistic Regression"
description: "The two models every ML engineer reaches for first - one predicts numbers, the other predicts categories."
date: "2026-04-05"
---

## Linear Regression

Linear regression predicts a continuous target variable from one or more input features. It sounds basic, but it is the foundation almost every other regression technique builds on. If you understand it well, you understand half of machine learning.

The model fits a straight line (or hyperplane in higher dimensions) through the data by finding the coefficients that minimize the gap between predictions and actual values.

### The Equation

```
y = B0 + B1*x1 + B2*x2 + ... + Bp*xp + e
```

- **y** - the thing you are trying to predict
- **x1 ... xp** - your input features
- **B0** - the intercept (baseline prediction when all features are zero)
- **B1 ... Bp** - coefficients that tell you how much each feature moves the prediction
- **e** - noise the model cannot capture

When there is one feature, it is simple linear regression. When there are multiple, it is multiple linear regression. The math is the same either way.

### Assumptions Worth Knowing

Linear regression makes a few assumptions about your data. In practice you will violate some of them and still get useful results, but knowing them helps you debug when things go wrong.

- **Linearity** - the relationship between features and target is linear in the coefficients. You can still include polynomial terms like x^2 as long as the equation stays linear in the parameters.
- **Independent errors** - residuals should not correlate with each other. This matters most in time series data.
- **Constant variance (homoscedasticity)** - the spread of residuals should be roughly the same across all prediction levels. If it fans out, your model is more reliable for some ranges than others.
- **Normally distributed errors** - matters mainly if you are doing hypothesis testing or computing confidence intervals.
- **Low multicollinearity** - if two features are highly correlated, the model cannot tell which one is doing the work. Coefficients become unstable and hard to interpret.

### How It Learns

The model finds coefficients by minimizing the sum of squared errors between predicted and actual values.

Two main approaches:

**Normal Equation** - a closed-form solution that directly computes the optimal coefficients. Works great for small to medium datasets.

```
B_hat = (X^T * X)^(-1) * X^T * y
```

**Gradient Descent** - an iterative approach that nudges coefficients in the direction that reduces error. Better for large datasets where inverting matrices gets expensive.

```
Bj = Bj - alpha * (d/dBj) MSE
```

The learning rate alpha controls step size. Too large and you overshoot. Too small and training takes forever.

### Evaluating the Model

**MSE (Mean Squared Error)** - average of squared differences between predicted and actual values. Lower is better.

```
MSE = (1/n) * SUM(yi - yi_hat)^2
```

**R-squared** - the proportion of variance your model explains. An R-squared of 0.8 means 80% of the variation in the target is captured by the model. The remaining 20% is noise or missing features.

```
R^2 = 1 - SUM(yi - yi_hat)^2 / SUM(yi - y_bar)^2
```

### Extending Linear Regression

- **Ridge and Lasso** - add penalty terms to prevent overfitting. Ridge shrinks coefficients, Lasso can zero them out entirely (built-in feature selection).
- **Polynomial regression** - add x^2, x^3 terms to capture curves. Still linear in the parameters, just non-linear in the features.

---

## Logistic Regression

Despite the name, logistic regression is a classification algorithm. It predicts the probability that an observation belongs to one of two classes - spam or not spam, approved or denied, positive or negative.

The key idea: take the same linear equation from linear regression, but pass the output through a sigmoid function so it maps to a probability between 0 and 1.

### The Equation

```
P(y=1|X) = 1 / (1 + e^(-z))

where z = B0 + B1*x1 + B2*x2 + ... + Bk*xk
```

The sigmoid function is what makes this work. A raw linear output z can be anything from negative infinity to positive infinity. The sigmoid squashes it into the (0, 1) range, giving you a proper probability.

Once you have a probability, you apply a threshold (usually 0.5) to make the final classification. Predicted probability above 0.5 means class 1, below means class 0. You can shift the threshold depending on whether you care more about precision or recall.

### Why Not Just Use Linear Regression for Classification?

Linear regression can output values like -0.3 or 1.7, which make no sense as probabilities. Logistic regression fixes this by wrapping the output in a sigmoid. The model is guaranteed to produce values between 0 and 1.

### The Loss Function - Log-Loss

You cannot use MSE for logistic regression because the sigmoid makes the error surface non-convex with MSE. Instead we use log-loss (binary cross-entropy):

```
Log-Loss = -SUM(yi * log(pi) + (1 - yi) * log(1 - pi))
```

This penalizes confident wrong predictions heavily. If the model says 0.99 for a sample that is actually class 0, the penalty is massive. This is exactly the behavior you want.

### How It Learns

Same two options as linear regression:

**Gradient Descent** - iteratively update coefficients to minimize log-loss. This is the standard approach.

**Maximum Likelihood Estimation (MLE)** - find the coefficients that make the observed data most probable. Mathematically equivalent to minimizing log-loss.

### Interpreting the Coefficients

This is where logistic regression gets interesting. The coefficients represent changes in log-odds, not probabilities.

```
Odds = p / (1 - p)
Log-Odds = ln(p / (1 - p)) = B0 + B1*x1 + ...
```

A coefficient of 0.7 for a feature means a one-unit increase in that feature multiplies the odds by e^0.7, which is roughly 2x. So the odds of the positive class double for every unit increase.

This log-odds framing is also why the sigmoid appears naturally. The sigmoid is just the inverse of the logit (log-odds) function.

---

## Further Reading

- [MLU-Explain: Linear Regression](https://mlu-explain.github.io/linear-regression/)
- [MLU-Explain: Logistic Regression](https://mlu-explain.github.io/logistic-regression/)

---

## Citation

If you found this article useful, please cite it as:

```
@article{Cheema2026LinearLogisticRegression,
  title   = {Linear and Logistic Regression},
  author  = {Cheema, Musa Dildar Ahmed},
  journal = {Field Notes},
  year    = {2026},
  note    = {\url{https://musadac.github.io/field-notes/ml-engineering/linear-and-logistic-regression}}
}
```
