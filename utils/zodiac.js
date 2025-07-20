const getZodiacSign = (birthdate) => {
    const date = new Date(birthdate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    console.log(month, day, date);
    
  
    const zodiac = [
      ["Capricorn", 1, 19], ["Aquarius", 2, 18], ["Pisces", 3, 20],
      ["Aries", 4, 19], ["Taurus", 5, 20], ["Gemini", 6, 20],
      ["Cancer", 7, 22], ["Leo", 8, 22], ["Virgo", 9, 22],
      ["Libra", 10, 22], ["Scorpio", 11, 21], ["Sagittarius", 12, 21], ["Capricorn", 12, 31]
    ];
  
    return zodiac.find(([sign, m, d]) => month <= m && day <= d)[0];
  };
  
  module.exports = { getZodiacSign };
  