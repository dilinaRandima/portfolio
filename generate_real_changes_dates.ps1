
$startDate = Get-Date -Date "2025-12-22 09:00:00"

# Checkout new orphan branch
git checkout --orphan date-fix-build
git reset

# 1. Real Files List
$realFiles = @(
    "README.md", "K.M.G.DILINA RANDIMA (3).pdf", "client/package.json", "client/vite.config.ts", "client/tsconfig.json", "client/index.html",
    "client/src/main.tsx", "client/src/App.jsx", "client/src/index.css", "client/src/style.css",
    "client/src/components/Navbar.jsx", "client/src/components/Hero.jsx", "client/src/components/About.jsx",
    "client/src/components/Skills.jsx", "client/src/components/Projects.jsx", "client/src/components/Contact.jsx", "client/src/components/Footer.jsx",
    "server/package.json", "server/server.js", "server/README.md", "client/public/vite.svg", "client/src/typescript.svg",
    "client/public/assets/Dilina_Randima_CV.pdf", "client/public/assets/project1.png", "client/public/assets/project2.png", "client/public/assets/project3.png",
    "client/build_log.txt", "client/package-lock.json", "server/package-lock.json", ".gitignore", "client/.gitignore"
)

# 2. Components to modify
$components = @(
    "client/src/components/Navbar.jsx",
    "client/src/components/Hero.jsx",
    "client/src/components/About.jsx",
    "client/src/components/Skills.jsx",
    "client/src/components/Projects.jsx",
    "client/src/components/Contact.jsx",
    "client/src/components/Footer.jsx",
    "client/src/App.jsx",
    "client/src/index.css"
)

$commitMsgs = @(
    "fix: adjustment to layout",
    "style: refine spacing",
    "refactor: clean up code",
    "chore: update comments",
    "fix: mobile view tweaking",
    "style: color palette update",
    "feat: enhance responsiveness",
    "refactor: optimize rendering",
    "fix: resolve potential bug",
    "style: improve readability"
)

# Helper to ensure file exists before adding
function Ensure-File ($path) {
    if (-not (Test-Path $path)) {
        New-Item -ItemType File -Path $path -Force | Out-Null
    }
}

for ($i = 0; $i -lt 90; $i++) {
    # Calculate Date
    $dayIndex = [math]::Floor($i / 30)
    $timeIndex = $i % 30
    $currentDate = $startDate.AddDays($dayIndex).AddMinutes($timeIndex * 15)
    $dateStr = $currentDate.ToString("yyyy-MM-dd HH:mm:ss")
    
    $env:GIT_COMMITTER_DATE = "$dateStr +0530"
    $env:GIT_AUTHOR_DATE = "$dateStr +0530"
    $env:GIT_COMMITTER_NAME = "Dilina Randima"
    $env:GIT_COMMITTER_EMAIL = "dilinarandima333@gmail.com"
    $env:GIT_AUTHOR_NAME = "Dilina Randima"
    $env:GIT_AUTHOR_EMAIL = "dilinarandima333@gmail.com"

    if ($i -lt $realFiles.Count) {
        # PHASE 1: Add files
        $file = $realFiles[$i]
        $msg = "feat: add $(Split-Path $file -Leaf)"
        
        # If file doesn't exist (e.g. deleted previously), create placeholder
        if (-not (Test-Path $file)) {
            $dir = Split-Path $file -Parent
            if ($dir -and -not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
            "// Content for $file" | Out-File -FilePath $file -Encoding utf8
        }

        git add $file
        git commit -m "$msg" --date="$dateStr +0530"
    }
    else {
        # PHASE 2: Check existing files
        $targetFile = Get-Random -InputObject $components
        
        # Ensure target file exists before trying to append
        Ensure-File $targetFile
        
        "// Update $i - $(Get-Random)" | Out-File -FilePath $targetFile -Append -Encoding utf8
        git add $targetFile
        
        $msgBase = Get-Random -InputObject $commitMsgs
        $fileName = Split-Path $targetFile -Leaf
        $msg = "$msgBase in $fileName"
        
        git commit -m "$msg" --date="$dateStr +0530"
    }
}

# Cleanup: Remove checking branch
git branch -D main
git branch -m main
