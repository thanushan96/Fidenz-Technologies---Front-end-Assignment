const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = {
      month: 'short',
      day: 'numeric'
    };
    const locale = 'en-US';
    return date.toLocaleString(locale, options);
  };
  
  
  export { formatDate };
  