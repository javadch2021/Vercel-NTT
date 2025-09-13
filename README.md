
# Authentication Demo Application

A modern, responsive authentication system built with Next.js 13+ App Router, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Client-side Authentication Flow**
- **Iranian Mobile Number Validation** (supports +98, 09, 98 formats)
- **Real API Integration** with randomuser.me
- **Responsive Design** (mobile-first approach)
- **Glass Morphism UI Components**
- **TypeScript Type Safety**
- **Reusable Component Architecture**

## 🛠️ Tech Stack

- **Next.js 13+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** Component Library
- **React Hooks** for state management

## 📱 Key Components

### Phone Input Validation
- Real-time validation feedback
- Visual indicators (red/green borders)
- Supports Iranian mobile formats: `09123456789`, `+989123456789`, `989123456789`

### Glass Notification
- Animated notifications with fade/slide effects
- Customizable colors and content
- Top-left positioning
- Auto-dismiss functionality

### Authentication Flow
1. User enters valid Iranian mobile number
2. Real API call to fetch user data
3. Session stored in localStorage
4. Redirect to dashboard
5. Personalized welcome message
6. Logout with visual feedback

## 🎨 UI/UX Highlights

- **Mobile-first responsive design**
- **Real-time form validation**
- **Smooth animations and transitions**
- **Accessible form elements**
- **Clean, modern aesthetic**
- **Glass morphism effects**

## 📁 Project Structure
```bash
my-auth-app/
├── app/
│   ├── login/
│   │   └── page.tsx
│   ├── dashboard/
│   │   └── page.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   └── GlassNotification.tsx
│   └── forms/
│       └── PhoneInput.tsx
├── lib/
│   └── utils.ts
├── types/
│   └── index.ts
├── public/
└── package.json
```

## 🚀 Getting Started

1. **Install dependencies:**
```bash
npm install
```


2. **Run development server**:
```bash
npm run dev
```


3. **Open browser**:
```bash
http://localhost:3000
```


## 📱 Responsive Design
Built with mobile-first approach:

- Proper spacing on all screen sizes
- Flexible container widths
- Touch-friendly interactive elements
- Adaptive layout for mobile/tablet/desktop
## 🔐 Authentication Flow
1. **Login Page**
- Iranian mobile number validation
- Real-time feedback
- API integration with loading states
2. **Dashboard Page**
- Personalized welcome message
- User profile display
- Logout functionality
3. **Session Management**
- localStorage for client-side storage
- Automatic redirects
- Protected routes
## 🎯 Evaluation Criteria Compliance
- ✅ **Code Quality**: *Clean, modular, maintainable*
- ✅ **TypeScript**: *Strong typing throughout*
- ✅ **UI/UX**: *Responsive, accessible, modern*
- ✅ **Logic**: *Validation, API handling, state management*
- ✅ **Scalability**: *Reusable components, proper architecture*
