#Mongo Api - Day 2

#  8 Useful JavaScript String Methods


![screenshots of example app](/images/screenshots@1x.png)


###  ✅ indexOf

The indexOf() method returns the index of (the position of) the first occurrence of a specified text.

```
Example Code :

const str ='I have Js, Wait I love Js'
console.log(str.indexOf('Js'));

Output: 7

```

### ✅ length

The length property returns the length of a string.

```
Example Code :

const str = 'ILoveJs'
str.length;

Output: 7


```

###  ✅slice

slice() extracts a part of a string and returns the extracted part in a new string.

```
Example Code :

const str = 'ILoveJs';
str.slice(2,5);

Output: ove

```

### ✅replace

The replace() method replaces a specified value with another value in a string.

```
Example Code :

const str = 'IHateJs';
console.log(str.replace('Hate', 'Love')); 

Output: ILoveJs

```

### ✅upper and lower case

This method converts a string to lowercase or uppercase

```
Example Code :

const str="ILoveJs";
console.log(str.toLowerCase());
console.log(str.toUpperCase());

Output: ilovejs  ILOVEJS

```


### ✅trim


The trim() methods removes whitespace from both sides of the string

```
Example Code :

const str = '        ILoveJs'      ;
console.log(str.trim());

Output: ILoveJs

```

### ✅concat

concat() joins two or more strings. The concat() method can be used instead of the plus operator

```
Example Code :

const str = 'Ilove';
console.log(str.concat('Js'));

Output: ILoveJs

```

### ✅split

A string can ve converted to an array with the split() method

```
Example Code :

const str = 'I,Love,Js'; 
str.split(',');

Output: ['I', 'Love', 'Js']

```


Thanks For Reading. 🙂 Hope you like the content.
