@echo off

echo 🚀 Starting Vite Build...
call npm run build

if %errorlevel% neq 0 (
  echo ❌ Build failed. Exiting.
  exit /b %errorlevel%
)

:: ------------------ GIT DEPLOY ------------------
cd dist
echo 🌀 Initializing Git...
git init
git remote add origin https://github.com/sathish-kumar-repo/digital-work-archive.git
git checkout -b main
git add .
git commit -m "Deploy %date% %time%"
git push --force origin main

cd ..
rmdir /s /q dist\.git
echo ✅ Deployment done 
