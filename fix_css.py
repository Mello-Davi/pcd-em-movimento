import os
import glob

for root, _, files in os.walk("app/components"):
    for file in files:
        if file.endswith("styles.module.css"):
            path = os.path.join(root, file)
            # Calculate depth from app/components/... to app/
            depth = path.count('/') - 1
            rel_path = "../" * depth + "app.css"
            
            with open(path, 'r') as f:
                content = f.read()
            
            content = content.replace('@reference "tailwindcss";', f'@reference "{rel_path}";')
            
            with open(path, 'w') as f:
                f.write(content)

# Also fix app.css issue if any
