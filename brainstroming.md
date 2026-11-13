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
mongoose.Schema.Types.Boolean.get(v => v === 'yes' ? true : false);

const Order = mongoose.model('Order', new Schema({ isPaid: Boolean }));
new Order({ isPaid: false }).isPaid; // 'no'
```

Source: https://mongoosejs.com/docs/api/schemaboolean.html
Basically: val = yes/no `{set: (val) => (val === yes || Yes ? true : false)}, // set for setter in MongoDB

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

- Scenario: Input multiple students with multiple dates of homework & attendance history
  Can be sorted and searched by date '25/03/2025', by month 'march'

  const months = [
  'january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december'
  ];

function findMonth(date) {
return months[date.split('/')[1] - 1];
}

## Attempt - 2

- Scenario: 1 student, and multiple assigned dates. Student's homework & attendance history
- Dates will go as Strings, with regex(DD/MM/YYYY) along with homework.
  Problem: how to look up a student and then append a date and homework

## Attempt - 3

## Attempt - 4

## Attempt - 5

#### mongodb uri - mongodb+srv://TalhaDevDaily:%40R0146306c@nodejs-sandbox.zmstzzn.mongodb.net/attendanceDB

### Attendees

Michael Jackson
Stanley Marsh
Kyle Broflovski
Eric Cartman
Kenneth McCormick
Butters Stotch

### Dates

01/01/2027
23/01/2027

14/02/2027
18/02/2027

25/03/2027
26/03/2027
