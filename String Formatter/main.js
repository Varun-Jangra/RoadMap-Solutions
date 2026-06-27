function cleanText(name) {
    let newName = name.trim();
    return newName;
}

function capitalize(name) {
    if (!name) return "";
    return name.charAt(0).toUpperCase() + name.slice(1);
}

function formatDisplayName(firstName, lastName) {
  // FIX: Clean the text first, THEN capitalize it
  const cleanFirstName = capitalize(cleanText(firstName));
  const cleanLastName = capitalize(cleanText(lastName));
  
  return `${cleanFirstName} ${cleanLastName}`;
}

console.log(formatDisplayName('varunn     ', 'jangra'));