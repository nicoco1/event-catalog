module.exports = {
  rules: {
    // Schema validation rules
    'schema/required-fields': 'error',
    'schema/valid-semver': 'error', 
    'schema/valid-email': 'warn',
    
    // Reference validation rules
    'refs/owner-exists': 'off',
    'refs/valid-version-range': 'off',
    
    // Best practice rules
    'best-practices/summary-required': 'error',
    'best-practices/owner-required': 'off',
  },
  
  // Ignore certain paths
  ignorePatterns: ['**/archived/**', '**/drafts/**'],
  
  // Override rules for specific file patterns
  overrides: [
    {
      files: ['**/experimental/**'],
      rules: {
        'best-practices/owner-required': 'off'
      }
    }
  ]
};