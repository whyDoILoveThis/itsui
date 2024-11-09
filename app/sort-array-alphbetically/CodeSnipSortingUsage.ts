export const CodeSnipSortingUsage = `
// Sorting array of strings
      {arrayToSort
        .sort((a, b) => a.localeCompare(b))
        .map((item, index) => (
            <p key={index}>{item}</p>
        ))}

// Sorting array of objects with a string property
     {links
        .sort((a, b) => a.label.localeCompare(b.label)) // Sorts the links alphabetically by label
        .map((link, index) => (
        <Link
            key={index}
            href={link.href}
        >
            {link.label}
        </Link>
        ))}
`