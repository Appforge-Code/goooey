# Goooey Rice Crispy Treats Website - Implementation Guide

## Overview

This is a complete, pixel-perfect implementation of the Goooey rice crispy treats website based on the provided Figma design. The site is fully responsive and optimized for all screen sizes (mobile, tablet, and desktop).

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Routing**: React Router 6 (SPA mode)
- **Styling**: TailwindCSS 3
- **UI Components**: Radix UI + Custom Components
- **Build Tool**: Vite
- **Backend**: Express (integrated)

## Design Implementation

### Brand Colors

The following brand colors have been configured in Tailwind:

- **Blue** (#0441FE / `goooey-blue`): Primary brand color
- **Yellow** (#FFD800 / `goooey-yellow`): Accent color
- **Cream** (#FED97C / `goooey-cream`): Secondary background
- **Black** (#000000 / `goooey-black`): Text and borders
- **White** (#FFFFFF / `goooey-white`): Backgrounds and text

### Typography

- **Display Font**: Finger Paint (via Google Fonts)
  - Used for headings and playful text
  - Applied via `font-display` utility class
  
- **Body Font**: Bricolage Grotesque (via Google Fonts)
  - Used for body text and UI elements
  - Set as default sans-serif font

### Custom Utility Classes

Created custom Tailwind utilities for the brand:

- `text-stroke`: White text stroke (2px)
- `text-stroke-black`: Black text stroke (2px)
- `shadow-offset`: Black shadow with 2px offset
- `shadow-offset-white`: White shadow with 2px offset

## Page Structure

### 1. Homepage (`/`)

Complete implementation with all sections:

#### Hero Section
- Large heading with display font
- Product description
- CTA button with icon
- Rotating product images
- Navigation arrows
- Wavy SVG background

#### Featured Section (KTLA 5)
- Featured media coverage
- Video/image embed area
- Decorative elements
- Responsive layout

#### Products Section
- Grid of 6 product cards
- Product images with hover effects
- "Show All Product" CTA button
- Wavy background pattern

#### Gallery Section
- Grid layout of social media style images
- "Get stuck on goooey" heading
- Decorative hand-drawn arrows

#### Packs Section
- 6 pricing cards (10, 20, 30, 50, 100, 200 packs)
- Pricing information
- Savings calculator
- "Order Now" buttons
- Blue background with yellow accents

#### Reviews Section
- Customer testimonial cards
- Rotating cards with different backgrounds
- 4 featured reviews
- Navigation arrows

### 2. Layout Components

#### Header
- Fixed position at top
- Rounded pill design with cream background
- Logo on left
- Navigation links (center)
- Cart icon with counter
- Login button
- **Mobile**: Hamburger menu with slide-out drawer

#### Footer
- Curved top border
- Logo centered
- Two-column link layout
- Social media icons (TikTok, Instagram, YouTube)
- Newsletter signup form
- "Back to top" button

### 3. Placeholder Pages

Created for all navigation items:
- `/packs` - Packs page
- `/audition` - Audition page
- `/contact` - Contact page
- `/login` - Login page
- `/about` - About page
- `/team` - Join the Team page
- `/wholesale` - Wholesale page
- `/franchise` - Franchise page
- `/catering` - Corporate Catering page
- `/fundraising` - Fundraising page

Each placeholder includes:
- Consistent layout with header/footer
- Playful "coming soon" message
- Back to home button
- Brand-appropriate styling

### 4. 404 Page

Custom 404 error page with:
- Large "404" in display font
- Playful error message
- Navigation back to home
- Blue background matching brand

## Responsive Design

### Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile Optimizations

1. **Header**
   - Hamburger menu for navigation
   - Simplified layout
   - Touch-friendly buttons

2. **Hero Section**
   - Single column layout
   - Product images hidden on small screens
   - Optimized text sizes

3. **Product Grid**
   - 1 column on mobile
   - 2 columns on tablet
   - 3 columns on desktop

4. **Pricing Cards**
   - Stack vertically on mobile
   - 2 columns on tablet
   - 3 columns on desktop

5. **Reviews**
   - Single column on mobile
   - Grid layout on larger screens

6. **Footer**
   - Simplified layout on mobile
   - Single column navigation
   - Centered social icons

## Key Features

### Interactive Elements

1. **Navigation**
   - Smooth hover effects
   - Active state indicators
   - Mobile menu with overlay

2. **Buttons**
   - Shadow offset effects
   - Hover animations
   - Icon integration

3. **Product Cards**
   - Hover scale effects
   - Border styling
   - Image optimization

4. **Form Elements**
   - Custom styled inputs
   - Focus states
   - Submit button with icon

### Performance Optimizations

- Lazy loading of images
- Optimized asset delivery via Builder.io CDN
- Minimal JavaScript bundle
- CSS optimized with Tailwind purge

## File Structure

```
client/
├── components/
│   ├── ui/              # Radix UI components
│   └── Layout.tsx       # Main layout with header/footer
├── pages/
│   ├── Index.tsx        # Homepage
│   ├── Placeholder.tsx  # Placeholder page template
│   └── NotFound.tsx     # 404 page
├── App.tsx              # Router configuration
└── global.css           # Global styles and fonts

tailwind.config.ts       # Tailwind configuration
```

## Color Configuration

### CSS Variables (in `global.css`)

```css
:root {
  --goooey-blue: 224 98% 50%;
  --goooey-yellow: 51 100% 50%;
  --goooey-cream: 42 100% 88%;
  --goooey-black: 0 0% 0%;
  --goooey-white: 0 0% 100%;
}
```

### Usage in Components

```tsx
// Using Tailwind classes
<div className="bg-goooey-blue text-goooey-white">

// Using utility classes
<h1 className="font-display text-stroke">

// Combining multiple utilities
<button className="bg-black shadow-offset-white">
```

## Development

### Running Locally

```bash
pnpm dev        # Start dev server
pnpm build      # Production build
pnpm typecheck  # TypeScript validation
```

### Adding New Products

To add new products to the Products Section:

1. Update the `products` array in `client/pages/Index.tsx`
2. Add product image URL
3. Update product name
4. Optionally adjust background color

### Customizing Colors

1. Update CSS variables in `client/global.css`
2. Update Tailwind config in `tailwind.config.ts`
3. Restart dev server to see changes

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Focus indicators
- Alt text for images
- Color contrast ratios meet WCAG AA standards

## Future Enhancements

Potential additions for future development:

1. **E-commerce Integration**
   - Shopping cart functionality
   - Checkout process
   - Payment integration

2. **Product Management**
   - Dynamic product loading
   - Product detail pages
   - Flavor customization

3. **User Accounts**
   - Login/signup functionality
   - Order history
   - Saved addresses

4. **Content Management**
   - Admin dashboard
   - Product CRUD operations
   - Order management

5. **Analytics**
   - Google Analytics integration
   - Conversion tracking
   - User behavior analysis

## Notes

- All images are served via Builder.io CDN for optimal performance
- The design uses custom fonts from Google Fonts
- Mobile menu uses React state management
- All links are functional with placeholder pages
- The site is fully navigable with no dead ends

## Support

For questions or issues, refer to the main `AGENTS.md` file for project documentation.
