const symptomsDataset = [
    { code: "itching", description: "Itching" },
    { code: "skin_rash", description: "Skin Rash" },
    { code: "nodal_skin_eruptions", description: "Nodal Skin Eruptions" },
    { code: "continuous_sneezing", description: "Continuous Sneezing" },
    { code: "shivering", description: "Shivering" },
    { code: "chills", description: "Chills" },
    { code: "joint_pain", description: "Joint Pain" },
    { code: "stomach_pain", description: "Stomach Pain" },
    { code: "acidity", description: "Acidity" },
    { code: "ulcers_on_tongue", description: "Ulcers on Tongue" },
    { code: "muscle_wasting", description: "Muscle Wasting" },
    { code: "vomiting", description: "Vomiting" },
    { code: "burning_micturition", description: "Burning Micturition" },
    { code: "spotting_urination", description: "Spotting Urination" },
    { code: "fatigue", description: "Fatigue" },
    { code: "weight_gain", description: "Weight Gain" },
    { code: "anxiety", description: "Anxiety" },
    { code: "cold_hands_and_feets", description: "Cold Hands and Feet" },
    { code: "mood_swings", description: "Mood Swings" },
    { code: "weight_loss", description: "Weight Loss" },
    { code: "restlessness", description: "Restlessness" },
    { code: "lethargy", description: "Lethargy" },
    { code: "patches_in_throat", description: "Patches in Throat" },
    { code: "irregular_sugar_level", description: "Irregular Sugar Level" },
    { code: "cough", description: "Cough" },
    { code: "high_fever", description: "High Fever" },
    { code: "sunken_eyes", description: "Sunken Eyes" },
    { code: "breathlessness", description: "Breathlessness" },
    { code: "sweating", description: "Sweating" },
    { code: "dehydration", description: "Dehydration" },
    { code: "indigestion", description: "Indigestion" },
    { code: "headache", description: "Headache" },
    { code: "yellowish_skin", description: "Yellowish Skin" },
    { code: "dark_urine", description: "Dark Urine" },
    { code: "nausea", description: "Nausea" },
    { code: "loss_of_appetite", description: "Loss of Appetite" },
    { code: "pain_behind_the_eyes", description: "Pain Behind the Eyes" },
    { code: "back_pain", description: "Back Pain" },
    { code: "constipation", description: "Constipation" },
    { code: "abdominal_pain", description: "Abdominal Pain" },
    { code: "diarrhoea", description: "Diarrhoea" },
    { code: "mild_fever", description: "Mild Fever" },
    { code: "yellow_urine", description: "Yellow Urine" },
    { code: "yellowing_of_eyes", description: "Yellowing of Eyes" },
    { code: "acute_liver_failure", description: "Acute Liver Failure" },
    { code: "fluid_overload", description: "Fluid Overload" },
    { code: "swelling_of_stomach", description: "Swelling of Stomach" },
    { code: "swelled_lymph_nodes", description: "Swelled Lymph Nodes" },
    { code: "malaise", description: "Malaise" },
    { code: "blurred_and_distorted_vision", description: "Blurred and Distorted Vision" },
    { code: "phlegm", description: "Phlegm" },
    { code: "throat_irritation", description: "Throat Irritation" },
    { code: "redness_of_eyes", description: "Redness of Eyes" },
    { code: "sinus_pressure", description: "Sinus Pressure" },
    { code: "runny_nose", description: "Runny Nose" },
    { code: "congestion", description: "Congestion" },
    { code: "chest_pain", description: "Chest Pain" },
    { code: "weakness_in_limbs", description: "Weakness in Limbs" },
    { code: "fast_heart_rate", description: "Fast Heart Rate" },
    { code: "pain_during_bowel_movements", description: "Pain During Bowel Movements" },
    { code: "pain_in_anal_region", description: "Pain in Anal Region" },
    { code: "bloody_stool", description: "Bloody Stool" },
    { code: "irritation_in_anus", description: "Irritation in Anus" },
    { code: "neck_pain", description: "Neck Pain" },
    { code: "dizziness", description: "Dizziness" },
    { code: "cramps", description: "Cramps" },
    { code: "bruising", description: "Bruising" },
    { code: "obesity", description: "Obesity" },
    { code: "swollen_legs", description: "Swollen Legs" },
    { code: "swollen_blood_vessels", description: "Swollen Blood Vessels" },
    { code: "puffy_face_and_eyes", description: "Puffy Face and Eyes" },
    { code: "enlarged_thyroid", description: "Enlarged Thyroid" },
    { code: "brittle_nails", description: "Brittle Nails" },
    { code: "swollen_extremeties", description: "Swollen Extremities" },
    { code: "excessive_hunger", description: "Excessive Hunger" },
    { code: "extra_marital_contacts", description: "Extra-Marital Contacts" },
    { code: "drying_and_tingling_lips", description: "Drying and Tingling Lips" },
    { code: "slurred_speech", description: "Slurred Speech" },
    { code: "knee_pain", description: "Knee Pain" },
    { code: "hip_joint_pain", description: "Hip Joint Pain" },
    { code: "muscle_weakness", description: "Muscle Weakness" },
    { code: "stiff_neck", description: "Stiff Neck" },
    { code: "swelling_joints", description: "Swelling Joints" },
    { code: "movement_stiffness", description: "Movement Stiffness" },
    { code: "spinning_movements", description: "Spinning Movements" },
    { code: "loss_of_balance", description: "Loss of Balance" },
    { code: "unsteadiness", description: "Unsteadiness" },
    { code: "weakness_of_one_body_side", description: "Weakness of One Body Side" },
    { code: "loss_of_smell", description: "Loss of Smell" },
    { code: "bladder_discomfort", description: "Bladder Discomfort" },
    { code: "foul_smell_of_urine", description: "Foul Smell of Urine" },
    { code: "continuous_feel_of_urine", description: "Continuous Feel of Urine" },
    { code: "passage_of_gases", description: "Passage of Gases" },
    { code: "internal_itching", description: "Internal Itching" },
    { code: "toxic_look_(typhos)", description: "Toxic Look (Typhos)" },
    { code: "depression", description: "Depression" },
    { code: "irritability", description: "Irritability" },
    { code: "muscle_pain", description: "Muscle Pain" },
    { code: "altered_sensorium", description: "Altered Sensorium" },
    { code: "red_spots_over_body", description: "Red Spots Over Body" },
    { code: "belly_pain", description: "Belly Pain" },
    { code: "abnormal_menstruation", description: "Abnormal Menstruation" },
    { code: "dischromic_patches", description: "Dischromic Patches" },
    { code: "watering_from_eyes", description: "Watering from Eyes" },
    { code: "increased_appetite", description: "Increased Appetite" },
    { code: "polyuria", description: "Polyuria" },
    { code: "family_history", description: "Family History" },
    { code: "mucoid_sputum", description: "Mucoid Sputum" },
    { code: "rusty_sputum", description: "Rusty Sputum" },
    { code: "lack_of_concentration", description: "Lack of Concentration" },
    { code: "visual_disturbances", description: "Visual Disturbances" },
    { code: "receiving_blood_transfusion", description: "Receiving Blood Transfusion" },
    { code: "receiving_unsterile_injections", description: "Receiving Unsterile Injections" },
    { code: "coma", description: "Coma" },
    { code: "stomach_bleeding", description: "Stomach Bleeding" },
    { code: "distention_of_abdomen", description: "Distention of Abdomen" },
    { code: "history_of_alcohol_consumption", description: "History of Alcohol Consumption" },
    { code: "fluid_overload.1", description: "Fluid Overload (Repeated)" },
    { code: "blood_in_sputum", description: "Blood in Sputum" },
    { code: "prominent_veins_on_calf", description: "Prominent Veins on Calf" },
    { code: "palpitations", description: "Palpitations" },
    { code: "painful_walking", description: "Painful Walking" },
    { code: "pus_filled_pimples", description: "Pus-Filled Pimples" },
    { code: "blackheads", description: "Blackheads" },
    { code: "scurring", description: "Scarring" },
    { code: "skin_peeling", description: "Skin Peeling" },
    { code: "silver_like_dusting", description: "Silver-Like Dusting" },
    { code: "small_dents_in_nails", description: "Small Dents in Nails" },
    { code: "inflammatory_nails", description: "Inflammatory Nails" },
    { code: "blister", description: "Blister" },
    { code: "red_sore_around_nose", description: "Red Sore Around Nose" },
    { code: "yellow_crust_ooze", description: "Yellow Crust Ooze" },
];

      function addSymptom(symptomCode) {
        const symptomsInput = document.getElementById("symptoms");
        const currentInput = symptomsInput.value.trim();

        const inputParts = currentInput.split(",").map((part) => part.trim());
        inputParts[inputParts.length - 1] = symptomCode;

        symptomsInput.value = inputParts.join(", ");

        const modalElement = document.getElementById("symptomsModal");
        if (modalElement) {
          const modal = bootstrap.Modal.getInstance(modalElement);
          if (modal) modal.hide();
        }

        showSuggestions("");
      }

      function showSuggestions(input) {
        const suggestionsBox = document.getElementById("suggestions");
        suggestionsBox.innerHTML = "";
        if (input.length === 0) return;

        const filteredSymptoms = symptomsDataset.filter((symptom) =>
          symptom.description.toLowerCase().includes(input.toLowerCase())
        );

        filteredSymptoms.forEach((symptom) => {
          const suggestionItem = document.createElement("li");
          suggestionItem.textContent = symptom.description;
          suggestionItem.style.cursor = "pointer";
          suggestionItem.style.padding = "5px";
          suggestionItem.onclick = () => {
            addSymptom(symptom.code);
            suggestionsBox.innerHTML = "";
          };
          suggestionsBox.appendChild(suggestionItem);
        });
        suggestionsBox.style.display = "block";
      }
      

      function handleSymptomInput(event) {
        const symptomsInput = document.getElementById("symptoms");
        const inputText = symptomsInput.value.trim();

        if (inputText.endsWith(",")) {
          showSuggestions("");
        } else {
          const lastWord = inputText.split(",").pop().trim();
          showSuggestions(lastWord);
        }
      }

      document
        .getElementById("symptoms")
        .addEventListener("input", handleSymptomInput);

        document.addEventListener("click", (event) => {
  const suggestionsBox = document.getElementById("suggestions");
  const inputField = document.getElementById("symptoms"); 

  if (
    event.target !== suggestionsBox &&
    event.target !== inputField &&
    !suggestionsBox.contains(event.target)
  ) {
    suggestionsBox.innerHTML = ""; 
    suggestionsBox.style.display = "none"; 
  }
});