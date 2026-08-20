Cross-Validation

Cross-validation is a technique used to evaluate how well a machine learning model generalizes to unseen data.

Instead of evaluating the model on only one train-test split, the dataset is divided into multiple parts (folds). The model is trained and evaluated multiple times, using a different fold as the validation set each time.

K-Fold Cross-Validation

In K-Fold Cross-Validation:

Split the dataset into K folds.
Train the model on K-1 folds.
Validate it on the remaining fold.
Repeat this process K times.
Calculate the average score.

Example with 5-Fold CV:

Fold 1 → Train: 2,3,4,5 | Validate: 1
Fold 2 → Train: 1,3,4,5 | Validate: 2
Fold 3 → Train: 1,2,4,5 | Validate: 3
Fold 4 → Train: 1,2,3,5 | Validate: 4
Fold 5 → Train: 1,2,3,4 | Validate: 5
Scikit-Learn Example
from sklearn.model_selection import cross_val_score

scores = cross_val_score(
    model,
    X,
    y,
    cv=5,
    scoring="r2"
)

print("CV Scores:", scores)
print("Mean CV Score:", scores.mean())
Why Use Cross-Validation?
Gives a more reliable estimate of model performance
Reduces dependence on a single train-test split
Helps detect overfitting
Useful for model comparison
Commonly used with hyperparameter tuning

Important: Cross-validation should be performed only on the training data when you have a separate test set. The test set should remain untouched until the final evaluation.