### Think of sending 1 data first

# Problem

Database to be send:

- Name: String
- Attendence: Boolean (yes/no preffered)
- Homework: Boolean (yes/no preffered)
- Date: Self-insert (DD/MM/YYYY preffered)

Bonus:

- Date: Assigned (DD/MM/YYYY preffered)

Query:

- Data can be searched from MongoDB by Date

Solution:
Y/N =>

```
mongoose.Schema.Types.Boolean.get(v => v === true ? 'yes' : 'no');

const Order = mongoose.model('Order', new Schema({ isPaid: Boolean }));
new Order({ isPaid: false }).isPaid; // 'no'
```

Source: https://mongoosejs.com/docs/api/schemaboolean.html
Basically: `{get: (val) => (val ? 'Yes' : 'No')},

Date =>
regex = ^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$
Source: https://stackoverflow.com/questions/15491894/regex-to-validate-date-formats-dd-mm-yyyy-dd-mm-yyyy-dd-mm-yyyy-dd-mmm-yyyy

function separateDates (date) {
date.split('/')
}

separateDate('25/03/2025')

Queries:
fullDate: 25/05/2026
Date: 25
Month: March
Year: 2026

## Attempt - 1

- Scenario: 1 student, and multiple assigned dates

## Attempt - 2

## Attempt - 3

## Attempt - 4

## Attempt - 5
