const results = [
    { conditions: ["Tinggi", "Normal", "Normal"], risks: "Penyakit jantung, stroke", causes: "Pola makan tinggi lemak jenuh, kurang olahraga, faktor genetik", advice: "Kurangi makanan berlemak dan rajin berolahraga." },
    { conditions: ["Normal", "Normal", "Tinggi"], risks: "Gout (rematik asam urat)", causes: "Konsumsi makanan tinggi purin (daging merah, jeroan), gangguan ginjal, faktor genetik", advice: "Kurangi konsumsi makanan tinggi purin dan periksa kesehatan ginjal secara rutin." },
    { conditions: ["Normal", "Diabetes", "Normal"], risks: "Diabetes melitus", causes: "Resistensi insulin, kurang olahraga, obesitas, faktor genetik", advice: "Jaga pola makan sehat dan rutin berolahraga untuk mengelola gula darah." },
    { conditions: ["Normal", "Diabetes", "Tinggi"], risks: "Gout, diabetes melitus", causes: "Kombinasi faktor risiko dari asam urat tinggi dan gula darah tinggi", advice: "Kurangi konsumsi makanan tinggi purin dan manis, serta jaga pola makan sehat." },
    { conditions: ["Tinggi", "Normal", "Normal"], risks: "Penyakit jantung, stroke", causes: "Kombinasi faktor risiko dari kolesterol tinggi", advice: "Kurangi konsumsi makanan berlemak dan rajin berolahraga." },
    { conditions: ["Tinggi", "Normal", "Tinggi"], risks: "Penyakit jantung, stroke, gout", causes: "Kombinasi faktor risiko dari kolesterol tinggi dan asam urat tinggi", advice: "Kurangi konsumsi makanan berlemak dan tinggi purin, serta rajin berolahraga." },
    { conditions: ["Tinggi", "Diabetes", "Normal"], risks: "Penyakit jantung, stroke, diabetes melitus", causes: "Kombinasi faktor risiko dari kolesterol tinggi dan gula darah tinggi", advice: "Hindari makanan berlemak dan manis, serta rutin berolahraga." },
    { conditions: ["Tinggi", "Diabetes", "Tinggi"], risks: "Penyakit jantung, stroke, gout, diabetes melitus", causes: "Kombinasi faktor risiko dari ketiga kondisi tersebut", advice: "Konsultasikan dengan dokter untuk penanganan lebih lanjut dan jaga pola hidup sehat." },
    { conditions: ["Normal", "Normal", "Normal"], risks: "Risiko rendah", causes: "Kondisi kesehatan yang baik secara umum", advice: "Teruskan gaya hidup sehat dan pemeriksaan rutin." },
    { conditions: ["Normal", "Prediabetes", "Normal"], risks: "Risiko prediabetes", causes: "Kombinasi pola makan tinggi gula dan kurang olahraga", advice: "Perbaiki pola makan, rutin berolahraga, dan periksa gula darah secara berkala." },
    { conditions: ["Normal", "Prediabetes", "Tinggi"], risks: "Prediabetes, gout", causes: "Kombinasi pola makan tinggi gula dan purin", advice: "Kurangi konsumsi makanan tinggi gula dan purin, serta jaga pola makan sehat." },
    { conditions: ["Rendah", "Normal", "Normal"], risks: "Anemia", causes: "Kekurangan zat besi atau masalah kesehatan lainnya", advice: "Periksa pola makan dan pertimbangkan suplemen zat besi." },
    { conditions: ["Rendah", "Normal", "Tinggi"], risks: "Anemia, gout", causes: "Kekurangan zat besi, konsumsi makanan tinggi purin", advice: "Periksa pola makan, pertimbangkan suplemen zat besi, dan kurangi konsumsi makanan tinggi purin." },
    { conditions: ["Rendah", "Prediabetes", "Normal"], risks: "Anemia, risiko diabetes melitus", causes: "Kekurangan zat besi, pola makan tinggi gula, kurang olahraga", advice: "Periksa pola makan, pertimbangkan suplemen zat besi, jaga pola makan sehat, dan rutin berolahraga." },
    { conditions: ["Rendah", "Prediabetes", "Tinggi"], risks: "Anemia, gout, risiko diabetes melitus", causes: "Kekurangan zat besi, konsumsi makanan tinggi purin dan gula, gangguan ginjal", advice: "Periksa pola makan, pertimbangkan suplemen zat besi, kurangi konsumsi makanan tinggi purin dan manis, serta periksa kesehatan ginjal." },
    { conditions: ["Normal", "Normal", "Tinggi"], risks: "Kemungkinan gangguan kesehatan lainnya, gout", causes: "Masalah hormonal atau kondisi medis tertentu, konsumsi makanan tinggi purin", advice: "Konsultasikan dengan dokter untuk diagnosis lebih lanjut, kurangi konsumsi makanan tinggi purin, dan periksa kesehatan ginjal secara rutin." },
    { conditions: ["Normal", "Prediabetes", "Tinggi"], risks: "Kemungkinan gangguan kesehatan lainnya, gout, risiko diabetes melitus", causes: "Masalah hormonal atau kondisi medis tertentu, konsumsi makanan tinggi purin dan gula", advice: "Konsultasikan dengan dokter untuk diagnosis lebih lanjut, kurangi konsumsi makanan tinggi purin dan manis, serta periksa kesehatan ginjal secara rutin." },
];

function calculateHealth() {
    const cholesterol = parseInt(document.getElementById('cholesterol').value);
    const glucose = parseInt(document.getElementById('glucose').value);
    const uricAcid = parseFloat(document.getElementById('uricAcid').value);
    const glucoseType = document.getElementById('glucoseType').value;
    const gender = document.getElementById('gender').value;

    let glucoseCondition;
    if (glucoseType === 'fasting') {
        glucoseCondition = glucose < 100 ? "Normal" : (glucose <= 125 ? "Prediabetes" : "Diabetes");
    } else {
        glucoseCondition = glucose < 140 ? "Normal" : (glucose <= 199 ? "Prediabetes" : "Diabetes");
    }

    let uricAcidCondition;
    if (gender === 'female') {
        uricAcidCondition = uricAcid > 6.0 ? "Tinggi" : "Normal";
    } else {
        uricAcidCondition = uricAcid > 7.0 ? "Tinggi" : "Normal";
    }

    const cholesterolCondition = cholesterol < 125 ? "Rendah" : (cholesterol <= 200 ? "Normal" : "Tinggi");

    const result = results.find(r => 
        r.conditions[0] === cholesterolCondition &&
        r.conditions[1] === glucoseCondition &&
        r.conditions[2] === uricAcidCondition
    );

    const resultDiv = document.getElementById('result');
    if (result) {
        resultDiv.innerHTML = `
            <h2 class="text-xl font-bold mb-2">Hasil:</h2>
            <p><strong>Risiko:</strong> ${result.risks}</p>
            <p><strong>Penyebab:</strong> ${result.causes}</p>
            <p><strong>Saran:</strong> ${result.advice}</p>
        `;
    } else {
        resultDiv.innerHTML = '<p class="text-red-500">Data tidak ditemukan. Silakan cek input Anda.</p>';
    }
}
