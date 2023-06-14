const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };
    return date.toLocaleString('en-US', options);
  };

export{ formatTime };