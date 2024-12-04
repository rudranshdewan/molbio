// DNA Purity Calculator
function calculatePurity() {
    const od260 = parseFloat(document.getElementById('od260').value);
    const od280 = parseFloat(document.getElementById('od280').value);
    
    if (isNaN(od260) || isNaN(od280)) {
        alert("Please enter valid numbers for OD260 and OD280.");
        return;
    }
    
    const ratio = od260 / od280;
    let category = "Unknown";

    if (ratio >= 1.8 && ratio <= 2.0) {
        category = "Pure";
    } else if (ratio < 1.8) {
        category = "Contaminated (Protein)";
    } else if (ratio > 2.0) {
        category = "Contaminated (RNA)";
    }

    document.getElementById('purityResult').innerText = `Purity Ratio: ${ratio.toFixed(2)}, Category: ${category}`;
}

// DNA Concentration Calculator
function calculateConcentration() {
    const od260 = parseFloat(document.getElementById('od260_conc').value);
    const dilutionFactor = parseFloat(document.getElementById('dilutionFactor').value);

    if (isNaN(od260) || isNaN(dilutionFactor)) {
        alert("Please enter valid numbers for OD260 and Dilution Factor.");
        return;
    }

    const concentration = od260 * dilutionFactor * 50;
    document.getElementById('concentrationResult').innerText = `DNA Concentration: ${concentration.toFixed(2)} µg/mL`;
}

// Normality Calculator
function calculateNormality() {
    const equivalentWeight = parseFloat(document.getElementById('equivalent').value);
    const volume = parseFloat(document.getElementById('volume').value);
    const mass = parseFloat(document.getElementById('mass').value);

    if (isNaN(equivalentWeight) || isNaN(volume) || isNaN(mass)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    const normality = mass / (equivalentWeight * volume);
    document.getElementById('normalityResult').innerText = `Normality: ${normality.toFixed(2)} N`;
}

// Molarity Calculator
function calculateMolarity() {
    const molarMass = parseFloat(document.getElementById('molarMass').value);
    const volume = parseFloat(document.getElementById('molarityVolume').value);
    const mass = parseFloat(document.getElementById('molarityMass').value);

    if (isNaN(molarMass) || isNaN(volume) || isNaN(mass)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    const molarity = mass / (molarMass * volume);
    document.getElementById('molarityResult').innerText = `Molarity: ${molarity.toFixed(2)} M`;
}

// Molality Calculator
function calculateMolality() {
    const soluteMass = parseFloat(document.getElementById('soluteMass').value);
    const solventMass = parseFloat(document.getElementById('solventMass').value);
    const molarMass = parseFloat(document.getElementById('molMass').value);

    if (isNaN(soluteMass) || isNaN(solventMass) || isNaN(molarMass)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    const molality = soluteMass / (molarMass * solventMass);
    document.getElementById('molalityResult').innerText = `Molality: ${molality.toFixed(2)} m`;
}

// Dilution Factor Calculator
function calculateDilution() {
    const c1 = parseFloat(document.getElementById('c1').value);
    const v1 = parseFloat(document.getElementById('v1').value);
    const v2 = parseFloat(document.getElementById('v2').value);

    if (isNaN(c1) || isNaN(v1) || isNaN(v2)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    const c2 = (c1 * v1) / v2;
    document.getElementById('dilutionResult').innerText = `Diluted Concentration (C2): ${c2.toFixed(2)}`;
}
