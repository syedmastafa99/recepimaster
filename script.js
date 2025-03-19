document.addEventListener('DOMContentLoaded', () => {
    const ingredientsInput = document.getElementById('ingredients');
    const generateBtn = document.getElementById('generateBtn');
    const recipeListDiv = document.getElementById('recipeList');
    const cuisineFilter = document.getElementById('cuisine');
    const dietaryFilter = document.getElementById('dietary');

    // Updated and expanded recipe database with corrections
    const recipes = [
        {
            "title": "Classic Margherita Pizza",
            "cuisine": "Italian",
            "dietaryRestrictions": ["Vegetarian"],
            "ingredients": [
                { "name": "Pizza dough", "amount": "1 ball (about 250g)" },
                { "name": "Tomato sauce", "amount": "1/2 cup" },
                { "name": "Fresh mozzarella cheese", "amount": "4 oz, sliced" },
                { "name": "Fresh basil leaves", "amount": "1/4 cup" },
                { "name": "Olive oil", "amount": "1 tbsp" },
                { "name": "Salt", "amount": "to taste" },
                { "name": "Black pepper", "amount": "to taste" }
            ],
            "instructions": "1. Preheat oven to 450°F (232°C). 2. Stretch pizza dough to desired size. 3. Spread tomato sauce evenly over the dough. 4. Arrange mozzarella slices on top. 5. Drizzle with olive oil and season with salt and pepper. 6. Bake for 12-15 minutes, or until crust is golden and cheese is melted and bubbly. 7. Remove from oven and top with fresh basil leaves before serving."
        },
        {
            "title": "Simple Chicken Stir-Fry",
            "cuisine": "Asian",
            "dietaryRestrictions":,
            "ingredients": [
                { "name": "Boneless, skinless chicken breasts", "amount": "1 lb, cut into bite-sized pieces" },
                { "name": "Soy sauce", "amount": "3 tbsp" },
                { "name": "Cornstarch", "amount": "1 tbsp" },
                { "name": "Vegetable oil", "amount": "2 tbsp" },
                { "name": "Broccoli florets", "amount": "1 cup" },
                { "name": "Bell pepper (any color)", "amount": "1, sliced" },
                { "name": "Onion", "amount": "1/2, sliced" },
                { "name": "Garlic", "amount": "2 cloves, minced" },
                { "name": "Ginger", "amount": "1 tsp, grated" },
                { "name": "Cooked rice", "amount": "for serving" }
            ],
            "instructions": "1. In a bowl, toss chicken with soy sauce and cornstarch. 2. Heat vegetable oil in a large skillet or wok over medium-high heat. 3. Add chicken and cook until browned and cooked through. Remove from skillet and set aside. 4. Add broccoli, bell pepper, and onion to the skillet and stir-fry for 3-5 minutes until slightly tender-crisp. 5. Add garlic and ginger and cook for another minute until fragrant. 6. Return chicken to the skillet. 7. Serve immediately over cooked rice."
        },
        {
            "title": "Creamy Tomato Pasta",
            "cuisine": "Italian",
            "dietaryRestrictions":,
            "ingredients": [
                { "name": "Pasta (penne, spaghetti, etc.)", "amount": "8 oz" },
                { "name": "Olive oil", "amount": "2 tbsp" },
                { "name": "Onion", "amount": "1/2, chopped" },
                { "name": "Garlic", "amount": "2 cloves, minced" },
                { "name": "Crushed tomatoes", "amount": "1 (28 oz) can" },
                { "name": "Heavy cream", "amount": "1/2 cup" },
                { "name": "Dried oregano", "amount": "1 tsp" },
                { "name": "Dried basil", "amount": "1 tsp" },
                { "name": "Salt", "amount": "to taste" },
                { "name": "Black pepper", "amount": "to taste" },
                { "name": "Grated Parmesan cheese", "amount": "for serving" }
            ],
            "instructions": "1. Cook pasta according to package directions. Drain and set aside. 2. Heat olive oil in a large saucepan over medium heat. Add onion and cook until softened, about 5 minutes. 3. Add garlic and cook for another minute until fragrant. 4. Stir in crushed tomatoes, oregano, and basil. Season with salt and pepper. Bring to a simmer and cook for 10-15 minutes, stirring occasionally. 5. Stir in heavy cream and cook for another 2-3 minutes until heated through. Do not boil. 6. Add cooked pasta to the sauce and toss to coat. 7. Serve hot, topped with grated Parmesan cheese."
        },
        {
            "title": "Scrambled Eggs",
            "cuisine": "American",
            "dietaryRestrictions": ["Vegetarian", "Gluten-Free"],
            "ingredients": [
                { "name": "Eggs", "amount": "2" },
                { "name": "Milk or cream", "amount": "1 tbsp" },
                { "name": "Butter", "amount": "1 tsp" },
                { "name": "Salt", "amount": "to taste" },
                { "name": "Black pepper", "amount": "to taste" }
            ],
            "instructions": "1. In a bowl, whisk together eggs and milk or cream. Season with salt and pepper. 2. Melt butter in a non-stick skillet over medium heat. 3. Pour egg mixture into the skillet. As the edges begin to set, gently push the cooked egg towards the center, allowing uncooked egg to flow underneath. 4. Continue cooking until eggs are set but still slightly moist. Do not overcook. 5. Serve immediately."
        },
        {
            "title": "Lentil Soup",
            "cuisine": "Mediterranean",
            "dietaryRestrictions": ["Vegetarian", "Vegan", "Gluten-Free"],
            "ingredients": [
                { "name": "Dried lentils", "amount": "1 cup, rinsed" },
                { "name": "Vegetable broth", "amount": "4 cups" },
                { "name": "Water", "amount": "2 cups" },
                { "name": "Carrot", "amount": "1, diced" },
                { "name": "Celery stalk", "amount": "1, diced" },
                { "name": "Onion", "amount": "1, chopped" },
                { "name": "Garlic", "amount": "2 cloves, minced" },
                { "name": "Diced tomatoes", "amount": "1 (14.5 oz) can, undrained" },
                { "name": "Dried thyme", "amount": "1/2 tsp" },
                { "name": "Bay leaf", "amount": "1" },
                { "name": "Olive oil", "amount": "1 tbsp" },
                { "name": "Salt", "amount": "to taste" },
                { "name": "Black pepper", "amount": "to taste" }
            ],
            "instructions": "1. Heat olive oil in a large pot over medium heat. Add onion, carrot, and celery and cook until softened, about 5-7 minutes. 2. Add garlic and cook for another minute until fragrant. 3. Stir in lentils, vegetable broth, water, diced tomatoes, thyme, and bay leaf. Season with salt and pepper. 4. Bring to a boil, then reduce heat and simmer for 25-30 minutes, or until lentils are tender. 5. Remove bay leaf before serving."
        },
        {
            "title": "Guacamole",
            "cuisine": "Mexican",
            "dietaryRestrictions": ["Vegetarian", "Vegan", "Gluten-Free"],
            "ingredients": [
                { "name": "Ripe avocados", "amount": "2" },
                { "name": "Red onion", "amount": "1/4 cup, finely chopped" },
                { "name": "Fresh cilantro", "amount": "2 tbsp, chopped" },
                { "name": "Lime juice", "amount": "2 tbsp" },
                { "name": "Jalapeño (optional)", "amount": "1/2, seeded and minced" },
                { "name": "Salt", "amount": "to taste" }
            ],
            "instructions": "1. Halve avocados, remove pits, and scoop the flesh into a bowl. 2. Mash the avocado with a fork to your desired consistency. 3. Stir in red onion, cilantro, lime juice, and jalapeño (if using). 4. Season with salt to taste. 5. Serve immediately with tortilla chips or as a topping."
        },
        {
            "title": "Peanut Butter Cookies",
            "cuisine": "American",
            "dietaryRestrictions": ["Vegetarian"],
            "ingredients": [
                { "name": "Creamy peanut butter", "amount": "1 cup" },
                { "name": "Granulated sugar", "amount": "1 cup" },
                { "name": "Egg", "amount": "1" },
                { "name": "Vanilla extract", "amount": "1 tsp" }
            ],
            "instructions": "1. Preheat oven to 350°F (175°C). 2. In a medium bowl, combine peanut butter, sugar, egg, and vanilla extract. Mix until well combined. 3. Roll dough into 1-inch balls and place on a baking sheet lined with parchment paper. 4. Press each ball down with a fork in a crisscross pattern. 5. Bake for 10-12 minutes, or until edges are lightly golden. 6. Let cool on the baking sheet for a few minutes before transferring to a wire rack to cool completely."
        },
        {
            "title": "Baked Salmon with Lemon and Dill",
            "cuisine": "American",
            "dietaryRestrictions": ["Gluten-Free"],
            "ingredients": [
                { "name": "Salmon fillets", "amount": "2 (about 6 oz each)" },
                { "name": "Lemon", "amount": "1, sliced" },
                { "name": "Fresh dill", "amount": "2 tbsp, chopped" },
                { "name": "Olive oil", "amount": "1 tbsp" },
                { "name": "Salt", "amount": "to taste" },
                { "name": "Black pepper", "amount": "to taste" }
            ],
            "instructions": "1. Preheat oven to 400°F (200°C). 2. Line a baking sheet with parchment paper. Place salmon fillets on the prepared sheet. 3. Drizzle salmon with olive oil and season with salt and pepper. 4. Top each fillet with lemon slices and fresh dill. 5. Bake for 12-15 minutes, or until salmon is cooked through and flakes easily with a fork."
        },
        {
            "title": "Chicken and Vegetable Skewers",
            "cuisine": "Mediterranean",
            "dietaryRestrictions": ["Gluten-Free"],
            "ingredients": [
                { "name": "Boneless, skinless chicken thighs or breasts", "amount": "1 lb, cut into 1-inch cubes" },
                { "name": "Bell peppers (various colors)", "amount": "2, cut into 1-inch pieces" },
                { "name": "Red onion", "amount": "1, cut into wedges" },
                { "name": "Zucchini", "amount": "1, sliced into thick rounds" },
                { "name": "Olive oil", "amount": "2 tbsp" },
                { "name": "Dried oregano", "amount": "1 tsp" },
                { "name": "Salt", "amount": "to taste" },
                { "name": "Black pepper", "amount": "to taste" },
                { "name": "Wooden or metal skewers", "amount": "as needed" }
            ],
            "instructions": "1. If using wooden skewers, soak them in water for at least 30 minutes to prevent burning. 2. In a bowl, toss chicken and vegetables with olive oil, oregano, salt, and pepper. 3. Thread chicken and vegetables onto skewers, alternating between them. 4. Preheat grill to medium heat or preheat oven to 400°F (200°C). 5. Grill skewers for 15-20 minutes, turning occasionally, until chicken is cooked through and vegetables are tender. Or, bake in the oven for 20-25 minutes, flipping halfway through."
        },
        {
            "title": "Overnight Oats",
            "cuisine": "American",
            "dietaryRestrictions": ["Vegetarian", "Gluten-Free"],
            "ingredients": [
                { "name": "Rolled oats", "amount": "1/2 cup" },
                { "name": "Milk (dairy or non-dairy)", "amount": "1 cup" },
                { "name": "Chia seeds", "amount": "1 tbsp" },
                { "name": "Maple syrup or honey", "amount": "1 tbsp (or to taste)" },
                { "name": "Vanilla extract", "amount": "1/2 tsp" },
                { "name": "Optional toppings", "amount": "fruit, nuts, seeds, etc." }
            ],
            "instructions": "1. In a jar or container, combine rolled oats, milk, chia seeds, maple syrup or honey, and vanilla extract. 2. Stir well to combine. 3. Cover and refrigerate overnight or for at least 4 hours. 4. In the morning, stir again and add your favorite toppings before serving."
        },
        {
            "title": "Chicken Tikka Masala",
            "cuisine": "Indian",
            "dietaryRestrictions": ["Gluten-Free"],
            "ingredients": [
                { "name": "Chicken thighs or breasts", "amount": "1.5 lbs, cut into 1-inch pieces" },
                { "name": "Plain yogurt", "amount": "1/2 cup" },
                { "name": "Lemon juice", "amount": "2 tbsp" },
                { "name": "Ginger-garlic paste", "amount": "1 tbsp" },
                { "name": "Tandoori masala", "amount": "2 tbsp" },
                { "name": "Vegetable oil", "amount": "2 tbsp" },
                { "name": "Onion", "amount": "1, chopped" },
                { "name": "Crushed tomatoes", "amount": "1 (28 oz) can" },
                { "name": "Heavy cream", "amount": "1/2 cup" },
                { "name": "Garam masala", "amount": "1 tsp" },
                { "name": "Cilantro", "amount": "for garnish" },
                { "name": "Cooked rice or naan", "amount": "for serving" }
            ],
            "instructions": "1. Marinate chicken in yogurt, lemon juice, ginger-garlic paste, and tandoori masala for at least 30 minutes. 2. Heat oil in a pot over medium heat. Add onion and cook until golden brown. 3. Stir in crushed tomatoes and cook for 10 minutes. 4. Add marinated chicken and cook until browned. 5. Stir in heavy cream and garam masala. Simmer for 15-20 minutes. 6. Garnish with cilantro and serve with rice or naan."
        },
        {
            "title": "Black Bean Burgers",
            "cuisine": "American",
            "dietaryRestrictions": ["Vegetarian", "Vegan"],
            "ingredients": [
                { "name": "Black beans", "amount": "2 (15 oz) cans, rinsed and drained" },
                { "name": "Breadcrumbs", "amount": "1/2 cup" },
                { "name": "Onion", "amount": "1/4 cup, chopped" },
                { "name": "Bell pepper", "amount": "1/4 cup, chopped" },
                { "name": "Garlic", "amount": "2 cloves, minced" },
                { "name": "Cumin", "amount": "1 tsp" },
                { "name": "Chili powder", "amount": "1/2 tsp" },
                { "name": "Olive oil", "amount": "1 tbsp" },
                { "name": "Burger buns", "amount": "as needed" },
                { "name": "Toppings", "amount": "lettuce, tomato, onion, etc." }
            ],
            "instructions": "1. Mash black beans in a large bowl. 2. Sauté onion and bell pepper in olive oil until softened. Add garlic, cumin, and chili powder and cook for 1 minute. 3. Add sautéed vegetables and breadcrumbs to the mashed beans. Mix well. 4. Form into burger patties. 5. Cook in a skillet or on a grill until heated through and slightly browned. 6. Serve on burger buns with your favorite toppings."
        },
        {
            "title": "Spaghetti Aglio e Olio",
            "cuisine": "Italian",
            "dietaryRestrictions": ["Vegetarian", "Vegan"],
            "ingredients": [
                { "name": "Spaghetti", "amount": "8 oz" },
                { "name": "Olive oil", "amount": "1/2 cup" },
                { "name": "Garlic", "amount": "6 cloves, thinly sliced" },
                { "name": "Red pepper flakes", "amount": "1/2 tsp (or to taste)" },
                { "name": "Fresh parsley", "amount": "1/4 cup, chopped" },
                { "name": "Salt", "amount": "to taste" },
                { "name": "Black pepper", "amount": "to taste" },
                { "name": "Grated Parmesan cheese (optional)", "amount": "for serving" }
            ],
            "instructions": "1. Cook spaghetti according to package directions. Reserve about 1/2 cup of the pasta water before draining. 2. While pasta is cooking, heat olive oil in a large skillet over low heat. Add garlic and red pepper flakes and cook gently until garlic is fragrant and lightly golden (do not burn). 3. Add drained spaghetti to the skillet along with the reserved pasta water. Toss to coat. 4. Stir in fresh parsley. Season with salt and pepper to taste. 5. Serve immediately, topped with grated Parmesan cheese if desired."
        },
        {
            "title": "Tacos al Pastor",
            "cuisine": "Mexican",
            "dietaryRestrictions": ["Gluten-Free"],
            "ingredients": [
                { "name": "Pork shoulder", "amount": "2 lbs, thinly sliced" },
                { "name": "Pineapple juice", "amount": "1/2 cup" },
                { "name": "White vinegar", "amount": "1/4 cup" },
                { "name": "Achiote paste", "amount": "2 oz" },
                { "name": "Dried oregano", "amount": "1 tsp" },
                { "name": "Cumin", "amount": "1 tsp" },
                { "name": "Garlic", "amount": "4 cloves, minced" },
                { "name": "Small corn tortillas", "amount": "as needed" },
                { "name": "Pineapple", "amount": "1/2, cored and thinly sliced" },
                { "name": "White onion", "amount": "1/2, finely chopped" },
                { "name": "Cilantro", "amount": "for garnish" },
                { "name": "Lime wedges", "amount": "for serving" }
            ],
            "instructions": "1. In a blender, combine pineapple juice, vinegar, achiote paste, oregano, cumin, and garlic. Blend until smooth. 2. Marinate pork in the mixture for at least 2 hours or overnight. 3. Cook marinated pork in a skillet or on a grill until cooked through and slightly charred. 4. Warm corn tortillas. 5. Serve pork in tortillas with pineapple, onion, cilantro, and lime wedges."
        },
        {
            "title": "Vegetable Curry",
            "cuisine": "Indian",
            "dietaryRestrictions": ["Vegetarian", "Vegan", "Gluten-Free"],
            "ingredients": [
                { "name": "Mixed vegetables (carrots, potatoes, peas, cauliflower, etc.)", "amount": "3 cups, chopped" },
                { "name": "Onion", "amount": "1, chopped" },
                { "name": "Garlic", "amount": "2 cloves, minced" },
                { "name": "Ginger", "amount": "1 tsp, grated" },
                { "name": "Curry powder", "amount": "2 tbsp" },
                { "name": "Coconut milk", "amount": "1 (13.5 oz) can" },
                { "name": "Vegetable broth", "amount": "1/2 cup" },
                { "name": "Oil", "amount": "2 tbsp" },
                { "name": "Salt", "amount": "to taste" },
                { "name": "Cilantro", "amount": "for garnish" },
                { "name": "Cooked rice or naan", "amount": "for serving" }
            ],
            "instructions": "1. Heat oil in a pot over medium heat. Add onion and cook until softened. 2. Add garlic and ginger and cook for 1 minute. 3. Stir in curry powder and cook for another minute. 4. Add mixed vegetables, coconut milk, and vegetable broth. Season with salt. 5. Bring to a simmer, cover, and cook until vegetables are tender, about 15-20 minutes. 6. Garnish with cilantro and serve with rice or naan."
        },
        {
            "title": "Greek Salad",
            "cuisine": "Mediterranean",
            "dietaryRestrictions": ["Vegetarian", "Gluten-Free"],
            "ingredients": [
                { "name": "Cucumber", "amount": "1, chopped" },
                { "name": "Tomato", "amount": "2, chopped" },
                { "name": "Red onion", "amount": "1/2, thinly sliced" },
                { "name": "Kalamata olives", "amount": "1/2 cup" },
                { "name": "Feta cheese", "amount": "4 oz, crumbled" },
                { "name": "Olive oil", "amount": "3 tbsp" },
                { "name": "Red wine vinegar", "amount": "1 tbsp" },
                { "name": "Dried oregano", "amount": "1/2 tsp" },
                { "name": "Salt", "amount": "to taste" },
                { "name": "Black pepper", "amount": "to taste" }
            ],
            "instructions": "1. In a large bowl, combine cucumber, tomato, red onion, and olives. 2. In a small bowl, whisk together olive oil, red wine vinegar, oregano, salt, and pepper. 3. Pour dressing over the vegetables and toss to combine. 4. Top with crumbled feta cheese before serving."
        },
        {
            "title": "Pad Thai",
            "cuisine": "Asian",
            "dietaryRestrictions": ["Gluten-Free"],
            "ingredients": [
                { "name": "Rice noodles (flat)", "amount": "8 oz" },
                { "name": "Tofu (firm or extra-firm)", "amount": "1 block, pressed and cubed" },
                { "name": "Eggs", "amount": "2, lightly beaten" },
                { "name": "Bean sprouts", "amount": "1 cup" },
                { "name": "Scallions", "amount": "2, chopped" },
                { "name": "Peanuts (roasted, chopped)", "amount": "1/4 cup" },
                { "name": "Lime wedges", "amount": "for serving" },
                { "name": "Pad Thai sauce", "amount": "4 tbsp (store-bought or homemade)" },
                { "name": "Vegetable oil", "amount": "2 tbsp" }
            ],
            "instructions": "1. Soak rice noodles according to package directions. 2. Heat oil in a large skillet or wok over medium-high heat. Add tofu and cook until golden brown. Remove and set aside. 3. Push everything to one side of the pan and pour in the beaten eggs. Scramble until cooked, then mix with the tofu. 4. Add the soaked noodles and Pad Thai sauce to the pan. Stir-fry until noodles are tender and well coated. 5. Add bean sprouts and scallions and stir-fry for another minute. 6. Serve immediately, topped with chopped peanuts and a lime wedge."
        },
        {
            "title": "Caprese Salad",
            "cuisine": "Italian",
            "dietaryRestrictions": ["Vegetarian", "Gluten-Free"],
            "ingredients": [
                { "name": "Fresh mozzarella cheese", "amount": "8 oz, sliced" },
                { "name": "Ripe tomatoes", "amount": "2-3, sliced" },
                { "name": "Fresh basil leaves", "amount": "as needed" },
                { "name": "Balsamic glaze", "amount": "to drizzle" },
                { "name": "Olive oil", "amount": "to drizzle" },
                { "name": "Salt", "amount": "to taste" },
                { "name": "Black pepper", "amount": "to taste" }
            ],
            "instructions": "1. Arrange slices of mozzarella and tomatoes on a platter, alternating them. 2. Tuck fresh basil leaves between the mozzarella and tomato slices. 3. Drizzle with balsamic glaze and olive oil. 4. Season with salt and black pepper to taste. Serve immediately."
        },
        {
            "title": "Quesadillas",
            "cuisine": "Mexican",
            "dietaryRestrictions": ["Vegetarian"],
            "ingredients": [
                { "name": "Flour tortillas", "amount": "4" },
                { "name": "Shredded cheese (cheddar, Monterey Jack, etc.)", "amount": "1 cup" },
                { "name": "Optional fillings", "amount": "cooked vegetables, beans, etc." },
                { "name": "Oil or butter", "amount": "for cooking" }
            ],
            "instructions": "1. Heat a lightly oiled skillet or griddle over medium heat. 2. Place one tortilla in the skillet and sprinkle half of it with cheese and any desired fillings. 3. Top with another tortilla. 4. Cook for 2-3 minutes per side, or until golden brown and cheese is melted. 5. Cut into wedges and serve."
        },
        {
            "title": "Hummus",
            "cuisine": "Mediterranean",
            "dietaryRestrictions": ["Vegetarian", "Vegan", "Gluten-Free"],
            "ingredients": [
                { "name": "Chickpeas (canned or cooked)", "amount": "1 (15 oz) can, drained and rinsed" },
                { "name": "Tahini", "amount": "1/4 cup" },
                { "name": "Lemon juice", "amount": "2 tbsp" },
                { "name": "Garlic", "amount": "1 clove" },
                { "name": "Olive oil", "amount": "2 tbsp, plus more for serving" },
                { "name": "Water", "amount": "2-4 tbsp" },
                { "name": "Salt", "amount": "to taste" },
                { "name": "Paprika (optional)", "amount": "for serving" }
            ],
            "instructions": "1. In a food processor, combine tahini and lemon juice and process for 1 minute. Scrape down the sides. 2. Add garlic and process for 30 seconds more. 3. Add chickpeas, olive oil, and salt. Process until very smooth, scraping down the sides as needed. 4. With the food processor running, slowly add water, 1 tablespoon at a time, until desired consistency is reached. 5. Transfer to a serving bowl, drizzle with olive oil, and sprinkle with paprika if desired. Serve with pita bread, vegetables, or crackers."
        },
        {
            "title": "Chicken Noodle Soup",
            "cuisine": "American",
            "dietaryRestrictions":,
            "ingredients": [
                { "name": "Chicken broth", "amount": "8 cups" },
                { "name": "Cooked chicken (shredded)", "amount": "2 cups" },
                { "name": "Egg noodles", "amount": "1 cup" },
                { "name": "Carrot", "amount": "1 cup, sliced" },
                { "name": "Celery", "amount": "1 cup, sliced" },
                { "name": "Onion", "amount": "1/2 cup, chopped" },
                { "name": "Bay leaf", "amount": "1" },
                { "name": "Salt", "amount": "to taste" },
                { "name": "Black pepper", "amount": "to taste" },
                { "name": "Fresh parsley (optional)", "amount": "for garnish" }
            ],
            "instructions": "1. In a large pot, bring chicken broth to a boil. Add carrots, celery, and onion and cook until tender, about 10 minutes. 2. Stir in egg noodles and cook according to package directions. 3. Add shredded chicken and bay leaf. Season with salt and pepper. 4. Simmer for another 5 minutes. 5. Remove bay leaf before serving. Garnish with fresh parsley if desired."
        },
        {
            "title": "Sushi Rolls (California Rolls)",
            "cuisine": "Asian",
            "dietaryRestrictions": ["Gluten-Free"],
            "ingredients": [
                { "name": "Sushi rice", "amount": "2 cups, cooked" },
                { "name": "Nori sheets", "amount": "4" },
                { "name": "Imitation crab meat", "amount": "4 oz, shredded" },
                { "name": "Avocado", "amount": "1, sliced" },
                { "name": "Cucumber", "amount": "1/2, seeded and thinly sliced" },
                { "name": "Sesame seeds", "amount": "for rolling" },
                { "name": "Soy sauce or tamari", "amount": "for serving" },
                { "name": "Wasabi", "amount": "for serving" },
                { "name": "Pickled ginger", "amount": "for serving" }
            ],
            "instructions": "1. Prepare sushi rice according to package directions. Let cool slightly. 2. Place a nori sheet on a bamboo rolling mat. Spread a thin layer of sushi rice evenly over the nori, leaving about an inch at the top edge. Sprinkle with sesame seeds. 3. Flip the nori sheet so the rice is facing down. Place shredded crab meat, avocado slices, and cucumber slices along the edge closest to you. 4. Roll the mat tightly away from you, pressing gently to form a roll. 5. Moisten the top edge of the nori with a little water to seal the roll. 6. Slice the roll into 6-8 pieces. Serve with soy sauce or tamari, wasabi, and pickled ginger."
        },
        {
            "title": "Shepherd's Pie",
            "cuisine": "American",
            "dietaryRestrictions":,
            "ingredients": [
                { "name": "Ground lamb or beef", "amount": "1 lb" },
                { "name": "Onion", "amount": "1, chopped" },
                { "name": "Carrot", "amount": "1, diced" },
                { "name": "Celery", "amount": "1 stalk, diced" },
                { "name": "Peas (frozen)", "amount": "1 cup" },
                { "name": "Beef broth", "amount": "1 cup" },
                { "name": "Worcestershire sauce", "amount": "1 tbsp" },
                { "name": "Dried thyme", "amount": "1/2 tsp" },
                { "name": "Mashed potatoes", "amount": "4 cups (prepared)" },
                { "name": "Butter", "amount": "1 tbsp" },
                { "name": "Milk", "amount": "1/4 cup" },
                { "name": "Salt", "amount": "to taste" },
                { "name": "Black pepper", "amount": "to taste" }
            ],
            "instructions": "1. Preheat oven to 375°F (190°C). 2. Brown ground meat in a skillet over medium heat. Drain any excess fat. 3. Add onion, carrot, and celery and cook until softened. 4. Stir in peas, beef broth, Worcestershire sauce, and thyme. Season with salt and pepper. Simmer for 10 minutes. 5. Prepare mashed potatoes if not already done. 6. Transfer the meat mixture to a baking dish. Spread mashed potatoes evenly over the top. 7. Dot with butter. 8. Bake for 20-25 minutes, or until the topping is lightly golden brown and the filling is bubbly."
        },
        {
            "title": "Chicken Fajitas",
            "cuisine": "Mexican",
            "dietaryRestrictions": ["Gluten-Free"],
            "ingredients": [
                { "name": "Chicken breasts", "amount": "1.5 lbs, thinly sliced" },
                { "name": "Bell peppers (various colors)", "amount": "2, thinly sliced" },
                { "name": "Onion", "amount": "1, thinly sliced" },
                { "name": "Fajita seasoning", "amount": "2 tbsp" },
                { "name": "Olive oil", "amount": "2 tbsp" },
                { "name": "Corn tortillas", "amount": "as needed" },
                { "name": "Optional toppings", "amount": "salsa, guacamole, sour cream, cheese" }
            ],
            "instructions": "1. In a bowl, toss chicken with fajita seasoning and 1 tablespoon of olive oil. 2. Heat the remaining olive oil in a large skillet over medium-high heat. Add bell peppers and onion and cook until softened, about 5-7 minutes. Remove from skillet and set aside. 3. Add chicken to the skillet and cook until browned and cooked through. 4. Return the vegetables to the skillet and toss to combine. 5. Warm tortillas according to package directions. 6. Serve chicken and vegetables in tortillas with your favorite toppings."
        },
        {
            "title": "Mushroom Risotto",
            "cuisine": "Italian",
            "dietaryRestrictions": ["Vegetarian", "Gluten-Free"],
            "ingredients": [
                { "name": "Arborio rice", "amount": "1.5 cups" },
                { "name": "Mushrooms (cremini, shiitake, or mixed)", "amount": "1 lb, sliced" },
                { "name": "Onion", "amount": "1/2, finely chopped" },
                { "name": "Garlic", "amount": "2 cloves, minced" },
                { "name": "Vegetable broth", "amount": "6 cups, warm" },
                { "name": "Dry white wine", "amount": "1/2 cup (optional)" },
                { "name": "Olive oil", "amount": "2 tbsp" },
                { "name": "Butter", "amount": "2 tbsp" },
                { "name": "Grated Parmesan cheese", "amount": "1/2 cup" },
                { "name": "Fresh parsley", "amount": "2 tbsp, chopped" },
                { "name": "Salt", "amount": "to taste" },
                { "name": "Black pepper", "amount": "to taste" }
            ],
            "instructions": "1. Heat olive oil and 1 tablespoon of butter in a large pot over medium heat. Add onion and cook until softened. Add garlic and mushrooms and cook until mushrooms are browned and have released their liquid. 2. Add arborio rice and cook for 1-2 minutes, stirring constantly, until the edges of the grains are translucent. 3. If using, pour in white wine and cook until absorbed. 4. Add warm vegetable broth, one ladleful at a time, stirring constantly and allowing each ladleful to be absorbed before adding the next. Continue until the rice is creamy and al dente, about 20-25 minutes. 5. Remove from heat and stir in the remaining 1 tablespoon of butter and grated Parmesan cheese. Season with salt and pepper. 6. Stir in fresh parsley and serve immediately."
        }
    ];

    function filterAndMatchRecipes(ingredientsText, selectedCuisine, selectedDietary) {
        const inputIngredients = ingredientsText.toLowerCase().split(',').map(ing => ing.trim()).filter(ing => ing !== '');

        return recipes.filter(recipe => {
            const matchesIngredients = inputIngredients.every(inputIng =>
                recipe.ingredients.some(recipeIng => recipeIng.name.toLowerCase().includes(inputIng))
            );

            const matchesCuisine = selectedCuisine === '' || recipe.cuisine === selectedCuisine;

            const matchesDietary = selectedDietary === '' || recipe.dietaryRestrictions.includes(selectedDietary);

            return matchesIngredients && matchesCuisine && matchesDietary;
        });
    }

    function displayRecipes(filteredRecipes) {
        recipeListDiv.innerHTML = ''; // Clear previous results

        if (filteredRecipes.length === 0) {
            recipeListDiv.innerHTML = '<p>No recipes found matching your criteria. Try entering fewer ingredients or adjusting filters.</p>';
            return;
        }

        filteredRecipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('bg-white', 'shadow-md', 'rounded-md', 'p-4', 'mb-4');

            const title = document.createElement('h3');
            title.classList.add('text-xl', 'font-semibold', 'mb-2');
            title.textContent = recipe.title;

            const ingredientsTitle = document.createElement('h4');
            ingredientsTitle.classList.add('text-lg', 'font-semibold', 'mb-1');
            ingredientsTitle.textContent = 'Ingredients:';

            const ingredientsList = document.createElement('ul');
            ingredientsList.classList.add('list-disc', 'ml-5', 'mb-2');
            recipe.ingredients.forEach(ingredient => {
                const listItem = document.createElement('li');
                listItem.textContent = `${ingredient.name} - ${ingredient.amount}`;
                ingredientsList.appendChild(listItem);
            });

            const instructionsTitle = document.createElement('h4');
            instructionsTitle.classList.add('text-lg', 'font-semibold', 'mb-1');
            instructionsTitle.textContent = 'Instructions:';

            const instructionsParagraph = document.createElement('p');
            instructionsParagraph.classList.add('text-gray-700', 'mb-2');
            instructionsParagraph.textContent = recipe.instructions;

            recipeCard.appendChild(title);
            recipeCard.appendChild(ingredientsTitle);
            recipeCard.appendChild(ingredientsList);
            recipeCard.appendChild(instructionsTitle);
            recipeCard.appendChild(instructionsParagraph);

            recipeListDiv.appendChild(recipeCard);
        });
    }

    generateBtn.addEventListener('click', () => {
        const ingredientsText = ingredientsInput.value;
        const selectedCuisine = cuisineFilter.value;
        const selectedDietary = dietaryFilter.value;

        const matchedRecipes = filterAndMatchRecipes(ingredientsText, selectedCuisine, selectedDietary);
        displayRecipes(matchedRecipes);
    });
});
