## StandardScaler
# What does StandardScaler do: 
It transforms each feature approximately to:
z=
σ
x−μ
So features are centered around 0 with standard deviation 1.
Example:
age:     20, 30, 40, 50
income:  20000, 50000, 80000, 120000
Income has a much larger numerical scale than age. Scaling makes their ranges comparable.


# How to check a dataset?
Before deciding, inspect the feature ranges:
print(X.describe())
For example:
             age        income       bmi
mean         40       65000        27
std          12       20000         5
min          18       20000        15
max          80      150000        45

Here, income is on a dramatically different scale.
You can then consider scaling:
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)


# When to use it?

SVM → ✅
KNN → ✅
Logistic Regression → ✅
K-Means → ✅
PCA → ✅
Neural Networks → ✅
Ridge/Lasso → ✅

1. Usually don't need it

Decision Tree → ❌
Random Forest → ❌
Gradient Boosting → ❌
XGBoost → ❌

2. Linear Regression

Ordinary Linear Regression → ⚠️ Not mandatory
Ridge/Lasso/ElasticNet → ✅ Recommended

3. Golden Rule

Distance/scale-sensitive models → Scale.
Tree-based models → Usually don't scale.

4. Important

scaler.fit(X_train)
X_train = scaler.transform(X_train)
X_test = scaler.transform(X_test)

Never fit the scaler on the entire dataset before splitting.