
export interface CardData {
  title: string;
  items: {
    label?: string;
    text: string;
  }[];
}

export interface DetailSubsection {
  title: string;
  content?: string;
  list?: string[];
}

export interface DetailSection {
  title: string;
  description?: string;
  subsections: DetailSubsection[];
}

export interface SectionData {
  title: string;
  icon: string;
  cards: CardData[];
  details?: DetailSection[];
}

export const homeContent: SectionData = {
  title: "Welcome to Birds Info",
  icon: "🏠",
  cards: [
    {
      title: "🦜 Love Your Birds",
      items: [
        { text: "Birds are intelligent, social creatures that form deep bonds with their owners. Understanding their behavior, providing proper nutrition, and creating a stimulating environment are key to their happiness and well-being." }
      ]
    },
    {
      title: "🏥 Bird Care Essentials",
      items: [
        { text: "Proper bird care includes regular health checkups, balanced diet, clean water, appropriate cage size, mental stimulation, and social interaction. Prevention is always better than treatment." }
      ]
    },
    {
      title: "🥚 Breeding & Reproduction",
      items: [
        { text: "Successful bird breeding requires understanding species-specific needs, proper nesting conditions, nutrition during breeding season, and knowledge of genetics for healthy offspring." }
      ]
    },
    {
      title: "💊 Health & Medicine",
      items: [
        { text: "Learn to recognize signs of illness, understand common bird diseases, know when to consult an avian veterinarian, and maintain proper hygiene to prevent health issues." }
      ]
    }
  ],
  details: [
    {
      title: "Why Birds Make Amazing Companions",
      description: "Birds have been companions to humans for thousands of years. Their intelligence, beauty, and unique personalities make them wonderful pets. From the smallest finch to the largest parrot, each species brings its own charm and requirements.",
      subsections: [
        {
          title: "Benefits of Bird Ownership:",
          list: [
            "Intelligent and interactive companions",
            "Beautiful songs and vocalizations",
            "Long lifespan with proper care",
            "Relatively low maintenance compared to other pets",
            "Can learn tricks and even speak (some species)",
            "Therapeutic presence and stress relief"
          ]
        },
        {
          title: "Getting Started:",
          content: "Before bringing a bird home, research the specific needs of your chosen species. Consider factors like lifespan, noise level, space requirements, and social needs. Explore our dedicated sections for detailed information about different bird types."
        }
      ]
    }
  ]
};

export const birdsContent: SectionData = {
  title: "Big Birds Guide",
  icon: "🦜",
  cards: [
    {
      title: "🦜 Ringneck Parrots",
      items: [
        { label: "Care", text: "Large cage minimum 36\"x24\"x48\", daily flight time outside cage, high-quality pellet diet with fresh fruits/vegetables, 2-3 hours social interaction daily, 65-80°F" },
        { label: "Breeding", text: "Spring breeding season (March-June), nest box 12\"x12\"x18\" deep, 22-24 days incubation, 6-7 weeks fledging, breeding age 2-3 years" },
        { label: "Health", text: "Psittacine Beak and Feather Disease (PBFD) risk, respiratory infections, feather plucking from stress, Vitamin A deficiency common" },
        { label: "Special", text: "Intelligent and trainable, can learn to talk, need mental stimulation, various color mutations available, 20-30 year lifespan" },
      ],
    },
    {
      title: "💕 Love Birds",
      items: [
        { label: "Care", text: "Cage minimum 24\"x18\"x24\", keep in pairs for social needs, seed mix with pellets and fresh vegetables, 70-75°F, 12 hours dark sleep" },
        { label: "Breeding", text: "Year-round breeding in captivity, nest box 8\"x8\"x10\" deep, 4-6 eggs clutch, 23 days incubation, 6-8 weeks weaning age" },
        { label: "Health", text: "Regular vet checkups every 6 months, watch for egg binding in females, prevent fatty liver disease, monitor for mites/parasites" },
        { label: "Special", text: "Strong pair bonds, colorful plumage, playful personality, can be territorial, 10-15 year lifespan, need consistent routine" },
      ],
    },
    {
      title: "🐦 African Grey Parrots",
      items: [
        { label: "Care", text: "Extra large cage minimum 48\"x36\"x60\", mental stimulation with puzzles/toys, high-quality pellets with limited seeds, 4-6 hours social interaction daily" },
        { label: "Breeding", text: "Advanced breeding (experienced breeders only), breeding age 4-6 years, large nest box 16\"x16\"x24\" deep, 28-30 days incubation, hand-feeding required" },
        { label: "Health", text: "Prone to calcium deficiency, feather plucking from stress/boredom, respiratory sensitivity to fumes, regular blood work recommended" },
        { label: "Special", text: "Extremely intelligent, excellent talkers, need consistent routine, 50-80 year lifespan, require experienced owners, emotional sensitivity" },
      ],
    },
    {
      title: "🌈 Other Big Birds",
      items: [
        { label: "Cockatoos", text: "Extremely social birds needing constant attention, produce powder down requiring good ventilation, prone to screaming if neglected, 60-100 year lifespan" },
        { label: "Macaws", text: "Largest parrots requiring enormous cages, powerful beaks need strong toys, high fat diet needs monitoring, very intelligent and trainable, 50-80 years" },
        { label: "Conures", text: "Playful and acrobatic birds, can be noisy especially morning/evening, social birds doing well in pairs, hardy with fewer health issues, 20-30 years" },
        { label: "General", text: "All large parrots need extensive socialization, mental stimulation, consistent training, and long-term commitment due to extended lifespans" },
      ],
    },
    {
      title: "🦜 Cockatiels",
      items: [
        { label: "Care", text: "Cage minimum 24\"x24\"x24\", daily out-of-cage time, seed mix with pellets and fresh vegetables, 70-75°F, 10-12 hours sleep needed" },
        { label: "Breeding", text: "Breeding age 1-2 years, nest box 8\"x8\"x12\" deep, 18-20 days incubation, 5-6 weeks fledging, can breed year-round" },
        { label: "Health", text: "Prone to fatty liver disease, respiratory infections, feather plucking from boredom, regular vet checkups recommended" },
        { label: "Special", text: "Affectionate and playful, can whistle and mimic sounds, enjoy social interaction, 15-20 year lifespan, various color mutations" },
      ],
    },
    {
      title: "🐦 Budgies (Parakeets)",
      items: [
        { label: "Care", text: "Cage minimum 18\"x18\"x18\" per bird, keep in pairs or small groups, quality seed mix with pellets, 65-75°F, 10 hours sleep daily" },
        { label: "Breeding", text: "Breeding age 6-12 months, nest box 6\"x6\"x8\" deep, 18 days incubation, 4-5 weeks fledging, prolific breeders" },
        { label: "Health", text: "Watch for mites and parasites, respiratory infections, fatty tumors, regular cage cleaning essential, vitamin A deficiency common" },
        { label: "Special", text: "Highly social and playful, excellent talkers, colorful plumage varieties, 7-10 year lifespan, need mental stimulation and toys" },
      ],
    }
  ],
  details: [
    {
      title: "🐦 African Grey Parrots",
      subsections: [
        {
          title: "Care Requirements:",
          list: [
            "Extra large cage minimum 48\" x 36\" x 60\"",
            "Mental stimulation with puzzles and toys",
            "High-quality pellets, limited seeds, fresh produce",
            "4-6 hours of social interaction daily",
            "Consistent routine and environment"
          ]
        },
        {
          title: "Breeding (Advanced):",
          list: [
            "Breeding age: 4-6 years",
            "Large nest box: 16\" x 16\" x 24\" deep",
            "Incubation period: 28-30 days",
            "Hand-feeding required for tame babies",
            "Requires experienced breeder"
          ]
        },
        {
          title: "Health & Medicine:",
          list: [
            "Prone to calcium deficiency",
            "Feather plucking from stress/boredom",
            "Respiratory sensitivity to fumes",
            "Regular blood work recommended",
            "Lifespan: 50-80 years with proper care"
          ]
        }
      ]
    },
    {
      title: "🌈 Other Popular Big Birds",
      subsections: [
        {
          title: "Cockatoos:",
          list: [
            "Extremely social, need constant attention",
            "Prone to screaming if neglected",
            "Dust production requires good ventilation",
            "Lifespan: 60-100 years"
          ]
        },
        {
          title: "Macaws:",
          list: [
            "Largest parrots, need enormous cages",
            "Powerful beaks require strong toys",
            "High fat diet needs monitoring",
            "Very intelligent and trainable"
          ]
        },
        {
          title: "Conures:",
          list: [
            "Playful and acrobatic",
            "Can be noisy, especially in morning/evening",
            "Social birds, do well in pairs",
            "Hardy birds with fewer health issues"
          ]
        }
      ]
    }
  ]
};

export const finchesContent: SectionData = {
  title: "Finches Care Guide",
  icon: "🐦",
  cards: [
    {
      title: "🎵 Zebra Finches",
      items: [
        { label: "Care", text: "Flight cage 30\"x18\"x18\", pairs/groups, finch seed mix with millet, 65-75°F, natural lighting 12-14 hours, fresh water daily" },
        { label: "Breeding", text: "Very easy to breed, 4\"x4\"x4\" nest box, provide coconut fiber/grass, 4-6 eggs, 12-14 days incubation, 18-21 days fledging" },
        { label: "Health", text: "Generally hardy, watch for mites/lice, egg binding in females, air sac mites causing breathing issues, scaly face/leg mites" },
        { label: "Diet", text: "Quality finch mix, spray millet treats, fresh vegetables, avoid avocado/chocolate, grit for digestion" },
      ],
    },
    {
      title: "🌟 Canaries",
      items: [
        { label: "Care", text: "Individual cages 18\"x14\"x18\", males territorial, canary seed mix, fresh greens (spinach, broccoli), cuttlebone for calcium" },
        { label: "Breeding", text: "Spring season (March-July), canary nest pan with felt liner, cotton/moss nesting material, 3-5 eggs, 13-14 days incubation" },
        { label: "Health", text: "Respiratory infections from drafts, feather cysts in Norwich canaries, egg binding prevention, regular nail/beak trimming" },
        { label: "Special", text: "Beautiful singers, need regular bathing, multiple broods per season possible, annual vet checkups recommended" },
      ],
    },
    {
      title: "🌈 Gouldian Finches",
      items: [
        { label: "Care", text: "Large flight cage 48\"x24\"x24\", warm environment 70-80°F, high humidity 50-60%, specialized Gouldian mix, avoid temperature changes" },
        { label: "Breeding", text: "More challenging, breeding season in warm months, 6\"x6\"x6\" nest box, 4-6 eggs, 14-16 days incubation, may abandon if stressed" },
        { label: "Health", text: "More sensitive than other finches, prone to air sac mites, stress-related illnesses, require stable environment, 30-day quarantine" },
        { label: "Special", text: "Live/soaked seeds during breeding, beautiful rainbow colors, require experienced care, avoid sudden changes" },
      ],
    },
    {
      title: "🎋 Java Sparrows",
      items: [
        { label: "Care", text: "Large cage 36\"x24\"x24\", pairs/small flocks, high-quality finch mix with larger seeds, 68-78°F, regular bathing" },
        { label: "Breeding", text: "Moderate difficulty, 6\"x6\"x8\" nest box, soft nesting materials (cotton, coconut fiber), 4-6 eggs, 13-14 days incubation, 21-25 days fledging" },
        { label: "Health", text: "Generally robust and hardy, monitor for respiratory infections, watch for overgrown beaks/nails, prone to obesity if overfed" },
        { label: "Special", text: "Can learn simple melodies from parents, calm temperament, larger than typical finches, 30-day quarantine for new birds" },
      ],
    },
    {
      title: "🎶 Society Finches",
      items: [
        { label: "Care", text: "Excellent foster parents for other finches, very social birds - keep in groups, hardy and easy to care for, good beginner finch" },
        { label: "Breeding", text: "Easy breeders, will raise other species' babies, peaceful community birds, standard finch housing requirements" },
        { label: "Health", text: "Generally robust with few health issues, standard finch care applies, regular health monitoring sufficient" },
        { label: "Special", text: "Perfect for mixed finch aviaries, help raise orphaned chicks, calm temperament, available in various colors" },
      ],
    },
    {
      title: "⭐ Star Finches",
      items: [
        { label: "Care", text: "Beautiful red faces and spotted bodies, peaceful community birds, need warmer temperatures than zebra finches, social species" },
        { label: "Breeding", text: "Moderate breeding difficulty, prefer warmer conditions, standard finch nesting requirements, good parents when conditions are right" },
        { label: "Health", text: "Monitor temperature needs carefully, ensure social requirements met, generally hardy when properly cared for" },
        { label: "Special", text: "Stunning appearance with red head markings, spotted plumage, prefer temperatures above 70°F, peaceful mixed aviary birds" },
      ],
    },
  ],
};

export const hensContent: SectionData = {
  title: "Hens & Poultry Guide",
  icon: "🐓",
  cards: [
    {
      title: "🐓 Backyard Chickens",
      items: [
        { label: "Housing", text: "Coop 4 sq ft per bird inside, run 10 sq ft per bird outside, nesting boxes 1 per 4-5 hens (12\"x12\"x12\"), roosting bars 2 feet high with 8-12\" per bird, predator-proof fencing with hardware cloth" },
        { label: "Feeding", text: "Layer feed 16-18% protein for laying hens, starter feed 20-24% for chicks, grower feed 16-20% for pullets, fresh water 24/7 (1 gallon per 4 birds), grit for free-range birds, calcium supplements (oyster shell)" },
        { label: "Eggs", text: "Laying age 18-24 weeks depending on breed, peak production 6 months to 2 years, average 250-300 eggs/year, daylight affects laying (14+ hours optimal), collect twice daily to prevent brooding" },
        { label: "Breeds", text: "Rhode Island Red (hardy, good layers), Leghorn (white eggs, prolific), Buff Orpington (docile, cold-hardy), Australorp (black, excellent layers), Sussex (dual-purpose, friendly)" },
        { label: "Management", text: "Proper ventilation without drafts, deep litter method or weekly cleaning, treats max 10% of diet (vegetables, fruits - no chocolate/avocado/onions), social animals preferring flocks of 3+, 5-10 year lifespan" },
      ],
    },
    {
      title: "🥚 Breeding & Hatching",
      items: [
        { label: "Natural Breeding", text: "Rooster to hen ratio 1:8-12 (heavy breeds) or 1:10-15 (light breeds), fertile eggs develop after 7 days of mating, broody hen sits 21 days, provide quiet safe nesting area away from flock" },
        { label: "Artificial Incubation", text: "21-day period exactly, temperature 99.5°F (37.5°C) forced air or 101°F still air, humidity 55-60% days 1-18 then 65-70% days 19-21, turn eggs 3-5 times daily until day 18, stop turning day 18" },
        { label: "Chick Care", text: "Brooder temperature 95°F first week then reduce 5°F weekly until 70°F, chick starter feed 20-24% protein and clean water in shallow containers, non-slip flooring (paper towels first week), 24-hour light first 48 hours" },
        { label: "Hatching Process", text: "Pip (first hole) day 19-20, zip (cutting around shell) day 20-21, full hatch by day 21, don't help unless absolutely necessary, chicks can survive 48-72 hours without food/water after hatching" },
        { label: "Brooder Setup", text: "1 sq ft per chick first 2 weeks, increase to 2 sq ft by 6 weeks, heat lamp or brooder plate, draft-free but ventilated, waterer and feeder appropriate for chick size" },
      ],
    },
    {
      title: "🐓 Assel Hens",
      items: [
        { label: "Origin & Characteristics", text: "Heritage breed from Hanover, Germany (1800s), dual-purpose for eggs and meat, medium-sized birds (hens 4-5 lbs, roosters 5-6 lbs), excellent foragers reducing feed costs by 30-40%, extremely cold-hardy for northern climates" },
        { label: "Egg Production", text: "Good layers producing 180-200 medium-sized brown eggs per year, start laying at 20-24 weeks, continue laying well into winter, eggs have rich orange yolks from foraging, excellent for baking and cooking" },
        { label: "Breeding & Temperament", text: "Excellent mothers with strong broody tendency, will hatch and raise their own chicks naturally, protective of young but calm with humans, roosters are gentle and good flock protectors, good fertility rates 85-90%" },
        { label: "Health & Longevity", text: "Hardy breed with natural disease resistance, fewer respiratory issues than commercial breeds, live 8-12 years with proper care, slower growth means stronger bones and better overall health" },
        { label: "Conservation Status", text: "Rare heritage breed helping preserve genetic diversity, listed as threatened by livestock conservancy, slower growth than commercial breeds (16-20 weeks to processing), excellent meat quality with superior flavor" },
      ],
    },
    {
      title: "🏥 Health & Medicine",
      items: [
        { label: "Common Issues", text: "Respiratory infections from drafts/dust/ammonia, external parasites (mites, lice, fleas), internal parasites (roundworms, tapeworms, coccidia), egg binding in laying hens, bumblefoot from rough/wet surfaces, sour crop from spoiled food" },
        { label: "Prevention Protocol", text: "Clean coop weekly with deep clean monthly using disinfectant, fresh dry bedding (pine shavings, straw, sand), quarantine new birds 30 days minimum, proper nutrition with complete feed, clean fresh water changed daily" },
        { label: "Health Monitoring", text: "Daily observation for behavior changes, weekly weight checks for breeding birds, monthly flock health assessment, annual fecal parasite testing, vaccination schedule (Marek's, Newcastle, Fowl Pox as recommended by vet)" },
        { label: "Warning Signs", text: "Lethargy and sitting hunched up, loss of appetite or decreased egg production, abnormal droppings (bloody, watery, or very hard), respiratory distress (mouth breathing, wheezing), pale comb and wattles, swollen joints or eyes" },
        { label: "Emergency Care", text: "Isolate sick birds immediately in hospital pen, maintain warmth and hydration, contact avian veterinarian, keep first aid supplies (electrolytes, wound spray, thermometer), record symptoms and treatments for vet consultation" },
      ],
    },
    {
      title: "🦆 Other Poultry",
      items: [
        { label: "Ducks", text: "Need access to water for drinking and bathing, waterfowl feed with higher niacin content, more cold-hardy than chickens, excellent egg layers with larger eggs, 28-day incubation" },
        { label: "Geese", text: "Require larger housing, excellent foragers living on pasture, very hardy in cold weather, good guard animals being very alert, 30-day incubation period" },
        { label: "Quail", text: "Small space requirements perfect for urban settings, quick maturity (6-8 weeks to lay), high protein requirements (24-28%), quiet birds, 17-18 day incubation" },
        { label: "Turkeys", text: "Large birds needing substantial housing, seasonal breeders, excellent mothers, 28-day incubation, heritage breeds more hardy than commercial" },
      ],
    },
    {
      title: "🥚 General Poultry Tips",
      items: [
        { label: "Management", text: "Establish routine feeding and care schedule, provide dust bath areas for parasite control, secure housing from predators (foxes, hawks, raccoons)" },
        { label: "Seasonal", text: "Plan for weather changes and protection, provide adequate lighting for egg production, adjust feed for seasonal needs, prepare for molting periods" },
        { label: "Records", text: "Keep production records and health issue logs, maintain veterinary contact information, track feed consumption and costs, note breeding dates and success rates" },
        { label: "Success", text: "Start with healthy stock from reputable sources, learn about your specific breeds, join local poultry groups, plan for long-term commitment and care" },
      ],
    }
  ],
};


export const medicineContent: SectionData = {
  title: "Bird Medicine & Treatment Guide",
  icon: "💉",
  cards: [
    {
      title: "🚨 Emergency First Aid",
      items: [
        { label: "Immediate Actions", text: "Isolate sick bird in warm, quiet hospital cage (80-85°F), provide heat source (heating pad on low), ensure easy access to food/water" },
        { label: "Emergency Kit", text: "Electrolyte solution, saline solution, cotton swabs, small towels, thermometer, syringe for feeding, emergency vet contact" },
        { label: "Critical Signs", text: "Bleeding, difficulty breathing, seizures, inability to perch, severe lethargy - seek immediate veterinary care" },
        { label: "Transport", text: "Use small, dark, well-ventilated carrier, keep warm, minimize stress, call vet ahead of arrival" },
      ],
    },
    {
      title: "🦠 Common Diseases & Symptoms",
      items: [
        { label: "Respiratory Infections", text: "Symptoms: wheezing, mouth breathing, discharge. Consult avian veterinarian for diagnosis and treatment" },
        { label: "Mites/Lice", text: "Symptoms: scratching, feather damage. Veterinary treatment required, isolate affected birds" },
        { label: "Egg Binding", text: "Symptoms: straining, sitting low. Requires immediate veterinary attention" },
        { label: "Crop Stasis", text: "Symptoms: crop not emptying, vomiting. Requires veterinary evaluation and possible tube feeding" },
      ],
    },
    {
      title: "💊 Finch-Specific Care",
      items: [
        { label: "Air Sac Mites", text: "Common in Gouldians. Consult avian veterinarian for proper diagnosis and treatment options" },
        { label: "Scaly Face/Leg Mites", text: "Veterinary treatment required. Isolate infected birds to prevent spread" },
        { label: "Coccidiosis", text: "Symptoms: bloody droppings, lethargy. Requires veterinary diagnosis and treatment" },
        { label: "Feather Plucking", text: "Treatment: Increase humidity, provide foraging opportunities, check for parasites, reduce stress factors" },
        { label: "Important", text: "Finches require specialized pediatric dosing. Always consult avian veterinarian for proper medication amounts" },
      ],
    },
    {
      title: "🐓 Chicken/Hen Care",
      items: [
        { label: "Bumblefoot", text: "Symptoms: swelling on foot pads. Requires veterinary evaluation and treatment" },
        { label: "Respiratory Disease", text: "Symptoms: coughing, discharge. Consult poultry veterinarian for diagnosis and treatment" },
        { label: "Worms", text: "Symptoms: weight loss, poor performance. Fecal testing and veterinary treatment recommended" },
        { label: "Coccidiosis", text: "Symptoms: bloody droppings. Requires veterinary diagnosis and appropriate treatment" },
        { label: "Egg Binding", text: "Symptoms: straining, sitting low. Requires immediate veterinary attention" },
      ],
    },
    {
      title: "🦜 Large Bird Care",
      items: [
        { label: "Psittacine Beak & Feather Disease", text: "No cure - supportive care, immune support, quarantine, prevent secondary infections" },
        { label: "Aspergillosis", text: "Fungal infection requiring veterinary treatment and improved air quality" },
        { label: "Feather Plucking", text: "Treatment: Behavioral modification, environmental enrichment, consult avian veterinarian" },
        { label: "Heavy Metal Poisoning", text: "Symptoms: neurological signs, lethargy. Requires immediate veterinary chelation therapy" },
        { label: "Vitamin A Deficiency", text: "Symptoms: eye discharge, respiratory issues. Veterinary treatment and dietary improvement needed" },
      ],
    },
    {
      title: "🏥 Medication Administration",
      items: [
        { label: "Oral Medications", text: "Use syringe, aim for right side of beak, give slowly to prevent aspiration, follow with small amount of water" },
        { label: "Water Medications", text: "Change daily, use distilled water, calculate dosage based on daily water consumption" },
        { label: "Topical Treatments", text: "Clean area first, apply thin layer, prevent bird from preening treated area" },
        { label: "Injection Sites", text: "Breast muscle for IM injections, under wing for subcutaneous - veterinary administration recommended" },
        { label: "Dosage Calculations", text: "Always weigh bird first, use gram scale, NEVER guess dosages - consult veterinarian" },
      ],
    },
    {
      title: "🌿 Natural Remedies & Support",
      items: [
        { label: "Probiotics", text: "After antibiotic treatment, use avian-specific probiotics to restore gut flora" },
        { label: "Apple Cider Vinegar", text: "1 tsp per gallon water, 2-3 days per week for digestive health" },
        { label: "Chamomile Tea", text: "Cooled tea for stress relief, can be added to drinking water" },
        { label: "Honey", text: "Small amounts for energy during illness, has antibacterial properties" },
        { label: "Vitamin Supplements", text: "Use during stress, illness recovery, breeding season - follow manufacturer guidelines" },
      ],
    },
    {
      title: "⚠️ Important Warnings",
      items: [
        { label: "Never Use", text: "Human medications, chocolate, avocado, caffeine, alcohol, salt, garlic, onions - all toxic to birds" },
        { label: "Veterinary Care", text: "Always consult avian veterinarian for serious conditions, proper diagnosis essential" },
        { label: "Quarantine", text: "Isolate sick birds immediately, disinfect hands/equipment between birds" },
        { label: "Medication Storage", text: "Keep refrigerated if required, check expiration dates, use proper dosing equipment" },
        { label: "Record Keeping", text: "Document symptoms, treatments, responses, share with veterinarian for better care" },
      ],
    },
    {
      title: "📋 Treatment Protocols",
      items: [
        { label: "Day 1-3", text: "Isolate, provide warmth, assess condition, start supportive care, contact veterinarian" },
        { label: "Day 4-7", text: "Begin specific treatment under veterinary guidance, monitor closely, adjust temperature/humidity as needed" },
        { label: "Day 8-14", text: "Continue treatment, watch for improvement, maintain detailed records" },
        { label: "Recovery", text: "Gradual return to normal housing, continue monitoring, complete full treatment course" },
        { label: "Prevention", text: "Regular health checks, proper nutrition, clean environment, stress reduction" },
      ],
    },
    {
      title: "📞 When to Call Vet",
      items: [
        { label: "Immediate", text: "Bleeding, seizures, inability to breathe, severe trauma, poisoning suspected" },
        { label: "Same Day", text: "Not eating 24+ hours, difficulty breathing, egg binding, severe lethargy" },
        { label: "Within 48 Hours", text: "Changes in droppings, loss of appetite, behavioral changes, minor injuries" },
        { label: "Routine", text: "Annual checkups, pre-breeding exams, fecal testing, nail/beak trimming" },
        { label: "Emergency Contacts", text: "Keep 24-hour emergency vet numbers, know location of nearest avian specialist" },
      ],
    }
  ],
};
