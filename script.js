const conversionData = {
    weight: {
        units: ['kg', 'lb', 'oz', 'g'],
        conversions: {
            'kg_lb': 2.20462,
            'kg_g': 1000,
            'kg_oz': 35.274,
            'lb_oz': 16,
            'lb_g': 453.592,
            'g_oz': 0.035274
        },
        common: [
            { from: 1, fromUnit: 'kg', to: 2.20462, toUnit: 'lb' },
            { from: 1, fromUnit: 'lb', to: 0.453592, toUnit: 'kg' },
            { from: 100, fromUnit: 'g', to: 3.52739, toUnit: 'oz' }
        ]
    },
    length: {
        units: ['km', 'mi', 'm', 'ft', 'cm', 'in'],
        conversions: {
            'km_m': 1000,
            'km_cm': 100000,
            'km_mi': 0.621371,
            'km_ft': 3280.84,
            'km_in': 39370.1,
            'mi_m': 1609.34,
            'mi_ft': 5280,
            'mi_in': 63360,
            'mi_cm': 160934,
            'm_cm': 100,
            'm_ft': 3.28084,
            'm_in': 39.3701,
            'ft_in': 12,
            'ft_cm': 30.48,
            'cm_in': 0.393701
        },
        common: [
            { from: 1, fromUnit: 'km', to: 0.621371, toUnit: 'mi' },
            { from: 1, fromUnit: 'mi', to: 1.60934, toUnit: 'km' },
            { from: 1, fromUnit: 'm', to: 3.28084, toUnit: 'ft' }
        ]
    },
    speed: {
        units: ['km/h', 'mph', 'm/s'],
        conversions: {
            'km/h_mph': 0.621371,
            'km/h_m/s': 0.277778,
            'mph_m/s': 0.44704,
            'mph_km/h': 1.60934,
            'm/s_km/h': 3.6,
            'm/s_mph': 2.23694
        },
        common: [
            { from: 100, fromUnit: 'km/h', to: 62.1371, toUnit: 'mph' },
            { from: 60, fromUnit: 'mph', to: 96.5606, toUnit: 'km/h' },
            { from: 1, fromUnit: 'm/s', to: 3.6, toUnit: 'km/h' }
        ]
    },
    temperature: {
        units: ['°C', '°F', 'K'],
        special: true,
        common: [
            { from: 0, fromUnit: '°C', to: 32, toUnit: '°F' },
            { from: 20, fromUnit: '°C', to: 68, toUnit: '°F' },
            { from: 100, fromUnit: '°C', to: 212, toUnit: '°F' }
        ]
    },
    volume: {
        units: ['L', 'gal', 'mL', 'fl oz', 'cup'],
        conversions: {
            'L_mL': 1000,
            'L_gal': 0.264172,
            'L_fl oz': 33.814,
            'L_cup': 4.22675,
            'gal_mL': 3785.41,
            'gal_fl oz': 128,
            'gal_cup': 16,
            'mL_fl oz': 0.033814,
            'mL_cup': 0.00422675,
            'fl oz_mL': 29.5735,
            'fl oz_cup': 0.125,
            'cup_mL': 236.588,
            'cup_fl oz': 8
        },
        common: [
            { from: 1, fromUnit: 'L', to: 0.264172, toUnit: 'gal' },
            { from: 1, fromUnit: 'gal', to: 3.78541, toUnit: 'L' },
            { from: 1, fromUnit: 'cup', to: 236.588, toUnit: 'mL' }
        ]
    },
    shoeSize: {
        units: ['EU', 'US', 'UK'],
        special: true,
        common: [
            { from: 25, fromUnit: 'EU', to: 8, toUnit: 'US' },
            { from: 35, fromUnit: 'EU', to: 4, toUnit: 'US' },
            { from: 40, fromUnit: 'EU', to: 7.5, toUnit: 'US' },
            { from: 45, fromUnit: 'EU', to: 11, toUnit: 'US' }
        ]
    },
    cooking: {
        units: ['cup', 'tbsp', 'tsp', 'mL', 'g', 'oz', 'lb'],
        conversions: {
            'cup_mL': 236.588,
            'cup_tbsp': 16,
            'cup_tsp': 48,
            'tbsp_mL': 14.787,
            'tbsp_tsp': 3,
            'tsp_mL': 4.929,
            'oz_g': 28.3495,
            'oz_mL': 29.5735,
            'lb_g': 453.592,
            'lb_oz': 16
        },
        common: [
            { from: 1, fromUnit: 'cup', to: 236.588, toUnit: 'mL' },
            { from: 1, fromUnit: 'cup', to: 16, toUnit: 'tbsp' },
            { from: 1, fromUnit: 'tbsp', to: 14.787, toUnit: 'mL' },
            { from: 1, fromUnit: 'tsp', to: 4.929, toUnit: 'mL' },
            { from: 1, fromUnit: 'cup', to: 236.588, toUnit: 'g' },
            { from: 1, fromUnit: 'oz', to: 28.35, toUnit: 'g' }
        ]
    },
    surface: {
        units: ['m²', 'ft²', 'yd²', 'acre', 'ha', 'in²'],
        conversions: {
            'm²_ft²': 10.7639,
            'm²_yd²': 1.19599,
            'm²_acre': 0.000247105,
            'm²_ha': 0.0001,
            'm²_in²': 1550.0031,
            'ft²_m²': 0.092903,
            'ft²_yd²': 0.111111,
            'ft²_acre': 0.0000229568,
            'ft²_ha': 0.00000929034,
            'ft²_in²': 144,
            'yd²_m²': 0.836127,
            'yd²_ft²': 9,
            'yd²_acre': 0.000206612,
            'yd²_ha': 0.0000836127,
            'yd²_in²': 1296,
            'acre_m²': 4046.86,
            'acre_ft²': 43560,
            'acre_yd²': 4840,
            'acre_ha': 0.404686,
            'acre_in²': 6272640,
            'ha_m²': 10000,
            'ha_ft²': 107639,
            'ha_yd²': 11959.9,
            'ha_acre': 2.47105,
            'ha_in²': 15500031,
            'in²_m²': 0.00064516,
            'in²_ft²': 0.00694444,
            'in²_yd²': 0.000771605,
            'in²_acre': 1.59423e-7,
            'in²_ha': 6.4516e-8
        },
        common: [
            { from: 1, fromUnit: 'acre', to: 4046.86, toUnit: 'm²' },
            { from: 1, fromUnit: 'ha', to: 2.47105, toUnit: 'acre' },
            { from: 1, fromUnit: 'm²', to: 10.7639, toUnit: 'ft²' },
            { from: 1, fromUnit: 'yd²', to: 0.836127, toUnit: 'm²' }
        ]
    }
};

// Language handling
function getBrowserLanguage() {
    const fullLang = navigator.language || navigator.userLanguage;
    const shortLang = fullLang.split('-')[0]; // Get primary language code (e.g., 'en' from 'en-US')
    return translations[shortLang] ? shortLang : 'en'; // Default to English if browser language not supported
}

let currentLanguage = getBrowserLanguage();


function setLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    
    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Update all translations
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        const translation = getNestedTranslation(translations[lang], key);
        if (translation) element.textContent = translation;
    });

    // Update HTML translations
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
        const key = element.dataset.i18nHtml;
        const translation = getNestedTranslation(translations[lang], key);
        if (translation) element.innerHTML = translation;
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.dataset.i18nPlaceholder;
        const translation = getNestedTranslation(translations[lang], key);
        if (translation) element.placeholder = translation;
    });
    
    // Update category options
    updateCategoryOptions();
    
    // Refresh common conversions
    if (categorySelect) {
        updateCommonConversions(categorySelect.value);
    }
}

function getNestedTranslation(obj, path) {
    return path.split('.').reduce((p, c) => p && p[c], obj);
}

// DOM Elements
const categorySelect = document.getElementById('categorySelect');
const leftInput = document.getElementById('leftInput');
const rightInput = document.getElementById('rightInput');
const leftUnit = document.getElementById('leftUnit');
const rightUnit = document.getElementById('rightUnit');
const swapButton = document.getElementById('swapButton');
const commonConversions = document.getElementById('commonConversions');

// Initialize the page
function init() {
    // Set up language buttons with both click and touch events
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const handleLanguageChange = () => setLanguage(btn.dataset.lang);
        btn.addEventListener('click', handleLanguageChange);
        btn.addEventListener('touchend', (e) => {
            e.preventDefault(); // Prevent double-firing on mobile devices
            handleLanguageChange();
        });
    });
    
    categorySelect.addEventListener('change', handleCategoryChange);
    leftInput.addEventListener('input', handleLeftInput);
    rightInput.addEventListener('input', handleRightInput);
    leftUnit.addEventListener('change', handleLeftUnitChange);
    rightUnit.addEventListener('change', handleRightUnitChange);
    swapButton.addEventListener('click', handleSwap);
    
    // Set initial language to browser language
    setLanguage(currentLanguage);
    
    // Set initial category
    handleCategoryChange();
}

function updateCategoryOptions() {
    const options = categorySelect.options;
    for (let i = 0; i < options.length; i++) {
        const option = options[i];
        const key = option.dataset.i18n;
        const translation = getNestedTranslation(translations[currentLanguage], key);
        if (translation) option.textContent = translation;
    }
}

function handleCategoryChange() {
    const category = categorySelect.value;
    const units = conversionData[category].units;
    
    // Update unit dropdowns
    updateUnitDropdown(leftUnit, units);
    updateUnitDropdown(rightUnit, units, 1);
    
    // Update common conversions
    updateCommonConversions(category);
    
    // Clear inputs
    leftInput.value = '';
    rightInput.value = '';
}

function updateUnitDropdown(select, units, defaultIndex = 0) {
    select.innerHTML = '';
    units.forEach(unit => {
        const option = document.createElement('option');
        option.value = unit;
        option.textContent = unit;
        select.appendChild(option);
    });
    select.selectedIndex = defaultIndex;
}

function convert(value, fromUnit, toUnit, category) {
    if (value === '') return '';
    
    const data = conversionData[category];
    
    if (category === 'temperature') {
        return convertTemperature(parseFloat(value), fromUnit, toUnit);
    }
    
    if (category === 'shoeSize') {
        return convertShoeSize(parseFloat(value), fromUnit, toUnit);
    }
    
    const conversions = data.conversions;
    let result = parseFloat(value);
    
    if (fromUnit === toUnit) return result;

    // Direct conversion if available
    const directKey = `${fromUnit}_${toUnit}`;
    const reverseKey = `${toUnit}_${fromUnit}`;
    
    if (conversions[directKey]) {
        return (result * conversions[directKey]).toFixed(3);
    }
    if (conversions[reverseKey]) {
        return (result / conversions[reverseKey]).toFixed(3);
    }

    // Try two-step conversion
    for (const unit of data.units) {
        const firstKey = `${fromUnit}_${unit}`;
        const secondKey = `${unit}_${toUnit}`;
        
        if (conversions[firstKey] && conversions[secondKey]) {
            result = result * conversions[firstKey] * conversions[secondKey];
            return result.toFixed(3);
        }
        
        const reverseFirstKey = `${unit}_${fromUnit}`;
        const reverseSecondKey = `${toUnit}_${unit}`;
        
        if (conversions[reverseFirstKey] && conversions[reverseSecondKey]) {
            result = result / conversions[reverseFirstKey] / conversions[reverseSecondKey];
            return result.toFixed(3);
        }
    }
    
    return 'N/A';
}

function convertTemperature(value, fromUnit, toUnit) {
    if (fromUnit === toUnit) return value;
    
    let celsius;
    
    // Convert to Celsius first
    switch(fromUnit) {
        case '°C': celsius = value; break;
        case '°F': celsius = (value - 32) * 5/9; break;
        case 'K': celsius = value - 273.15; break;
    }
    
    // Convert from Celsius to target unit
    switch(toUnit) {
        case '°C': return celsius.toFixed(2);
        case '°F': return ((celsius * 9/5) + 32).toFixed(2);
        case 'K': return (celsius + 273.15).toFixed(2);
    }
}

function convertShoeSize(value, fromUnit, toUnit) {
    // Comprehensive conversion table for EU sizes 20-50
    const euToUs = {
        20: 4, 21: 5, 22: 5.5, 23: 6, 24: 7, 25: 8, 26: 9, 27: 10,
        28: 10.5, 29: 11.5, 30: 12, 31: 13, 32: 1, 33: 2, 34: 3,
        35: 4, 36: 4.5, 37: 5.5, 38: 6.5, 39: 7, 40: 7.5,
        41: 8, 42: 8.5, 43: 9.5, 44: 10, 45: 11, 46: 11.5,
        47: 12, 48: 13, 49: 14, 50: 15
    };
    
    const euToUk = {
        20: 3.5, 21: 4.5, 22: 5, 23: 5.5, 24: 6.5, 25: 7.5, 26: 8.5, 27: 9.5,
        28: 10, 29: 11, 30: 11.5, 31: 12.5, 32: 13.5, 33: 1, 34: 2,
        35: 3.5, 36: 4, 37: 5, 38: 6, 39: 6.5, 40: 7,
        41: 7.5, 42: 8, 43: 9, 44: 9.5, 45: 10.5, 46: 11,
        47: 11.5, 48: 12.5, 49: 13.5, 50: 14.5
    };
    
    // Convert everything through EU sizes
    let euSize;
    if (fromUnit === 'EU') {
        euSize = parseInt(value);
        // Check if the EU size is within valid range
        if (euSize < 20 || euSize > 50) return 'N/A';
    } else if (fromUnit === 'US') {
        euSize = Object.entries(euToUs).find(([eu, us]) => Math.abs(us - value) < 0.1)?.[0];
    } else if (fromUnit === 'UK') {
        euSize = Object.entries(euToUk).find(([eu, uk]) => Math.abs(uk - value) < 0.1)?.[0];
    }
    
    if (!euSize) return 'N/A';
    
    if (toUnit === 'EU') return euSize;
    if (toUnit === 'US') return euToUs[euSize] || 'N/A';
    if (toUnit === 'UK') return euToUk[euSize] || 'N/A';
}

function handleLeftInput() {
    const value = leftInput.value;
    const fromUnit = leftUnit.value;
    const toUnit = rightUnit.value;
    const category = categorySelect.value;
    
    rightInput.value = convert(value, fromUnit, toUnit, category);
}

function handleRightInput() {
    const value = rightInput.value;
    const fromUnit = rightUnit.value;
    const toUnit = leftUnit.value;
    const category = categorySelect.value;
    
    leftInput.value = convert(value, fromUnit, toUnit, category);
}

function handleLeftUnitChange() {
    if (leftInput.value) handleLeftInput();
}

function handleRightUnitChange() {
    // Toujours convertir depuis la valeur de gauche
    handleLeftInput();
}

function handleSwap() {
    const tempValue = leftInput.value;
    const tempUnit = leftUnit.value;
    
    leftInput.value = rightInput.value;
    leftUnit.value = rightUnit.value;
    
    rightInput.value = tempValue;
    rightUnit.value = tempUnit;
}

function updateCommonConversions(category) {
    commonConversions.innerHTML = '';
    
    conversionData[category].common.forEach(conv => {
        const div = document.createElement('div');
        div.className = 'conversion-item';
        div.textContent = `${conv.from} ${conv.fromUnit} = ${conv.to} ${conv.toUnit}`;
        commonConversions.appendChild(div);
    });
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
