interface Date {
    addDaysToCurrentDay(days: number): Date;
}

Date.prototype.addDaysToCurrentDay = function(days: number): Date{
    let dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
}

window.onload = function(){
    var currentDay = new Date();
    console.log(formatDate(currentDay));
    console.log(formatDate(currentDay.addDaysToCurrentDay(15)));
}

function formatDate(fecha = new Date) {
    let month = fecha.getMonth() + 1;
    let day = fecha.getDate();
    const year = fecha.getFullYear();

  
    return `${day}/${month}/${year}`;
  }