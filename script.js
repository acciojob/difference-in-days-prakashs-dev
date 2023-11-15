var dateDiffInDays = function (date1, date2) {
  //   write your code here
	date1 = new Date(date1);
	date2 = new Date(date2);
	const diff = date2 - date1;
    const days = Math.ceil(diff/(1000*60*60*24));
	return days;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
