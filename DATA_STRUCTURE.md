# Data Structure Documentation

## Overview
The portfolio data has been refactored into a clean, modular structure that separates concerns and eliminates JSX from data files.

## File Structure

```
src/data/
├── index.tsx              # Barrel export with icon mapping
├── personal-data.ts       # Personal info, education, experience (pure data)
├── projects-data.ts       # Projects data (pure data)
├── skills-data.ts         # Skills data (pure data)
└── types.ts              # TypeScript interfaces
```

## Data Files

### 1. `personal-data.ts` (Pure Data)
Contains:
- `personalInfo` - Name, title, email, links, bio
- `education` - Educational background
- `experience` - Work experience

**No JSX, no icons - just clean data structures.**

### 2. `projects-data.ts` (Pure Data)
Contains:
- `projectsData` - Array of projects with string descriptions

**Key improvement:** Descriptions are now plain strings instead of JSX, making them easier to:
- Edit and maintain
- Store in a database
- Translate to other languages
- Test and validate

### 3. `skills-data.ts` (Pure Data)
Contains:
- `skillsData` - Object with skill categories as string arrays

**Benefits:**
- Easy to add/remove skills
- No icon dependencies
- Can be stored in JSON
- Simple to test

### 4. `index.tsx` (Icon Mapping Layer)
This is the only file with JSX. It:
- Imports pure data from other files
- Maps skill names to their icons
- Creates the final `skills` object with icons
- Exports everything for components to use

**Why separate?**
- Icons are presentation logic, not data
- Makes data portable and reusable
- Easier to change icon libraries
- Better for testing

## Usage in Components

### Before (Bad)
```tsx
import {skills, personalInfo, experience} from '@/data/portfolio-data'
// Everything mixed together, JSX in data
```

### After (Good)
```tsx
// Import from specific modules
import {personalInfo} from '@/data/personal-data'
import {experience} from '@/data/personal-data'
import {skills} from '@/data' // Icons added here
import {projectsData} from '@/data/projects-data'
```

## Benefits of This Structure

### 1. Separation of Concerns
- **Data** (personal-data.ts, projects-data.ts, skills-data.ts)
- **Presentation** (index.tsx adds icons)
- **Types** (types.ts)

### 2. Maintainability
- Easy to find and edit specific data
- No JSX mixed with data
- Clear file purposes

### 3. Testability
- Pure data files can be tested without React
- No need to mock JSX
- Simple JSON validation

### 4. Portability
- Data can be moved to a database
- Can be exported to JSON
- Easy to integrate with CMS

### 5. Type Safety
- All data properly typed
- TypeScript catches errors
- Better IDE autocomplete

## Migration Guide

If you need to add new data:

### Adding a new skill:
```typescript
// skills-data.ts
export const skillsData = {
  languages: ['JavaScript', 'TypeScript', 'NewLanguage'], // Add here
  // ...
}

// index.tsx - add icon mapping
const skillIconMap = {
  // ...
  'NewLanguage': <SiNewLanguageIcon />
}
```

### Adding a new project:
```typescript
// projects-data.ts
export const projectsData: Project[] = [
  {
    title: 'New Project',
    tech: ['React', 'Node.js'],
    description: [
      'Plain string description',
      'Another point'
    ],
    // ...
  }
]
```

### Adding experience:
```typescript
// personal-data.ts
export const experience: Experience[] = [
  {
    role: 'New Role',
    organization: 'Company',
    duration: 'Jan 2026 - Present',
    points: ['Achievement 1', 'Achievement 2']
  }
]
```

## Future Improvements

### Potential Next Steps:
1. **Move to CMS**: Data structure is ready for Sanity/Contentful
2. **i18n Support**: Easy to add translations
3. **Database Integration**: Can store in PostgreSQL/MongoDB
4. **API Layer**: Create REST/GraphQL endpoints
5. **Validation**: Add Zod schemas for runtime validation

## File Sizes
- `personal-data.ts`: ~3KB (pure data)
- `projects-data.ts`: ~1KB (pure data)
- `skills-data.ts`: ~1KB (pure data)
- `index.tsx`: ~4KB (icon mapping)

**Total: ~9KB** vs old single file with mixed concerns

## Conclusion

This structure follows best practices:
- ✅ Separation of concerns
- ✅ Single responsibility principle
- ✅ Easy to maintain and test
- ✅ Ready for scaling
- ✅ Type-safe
- ✅ No JSX in data files
