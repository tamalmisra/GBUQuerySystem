function showContent(id) {
    // Hide all faq-box elements
    var faqBoxes = document.querySelectorAll('.faq-box');
    faqBoxes.forEach(function (box) {
        box.classList.remove('active');
    });

    // Remove 'active' class from all faq-li elements
    var faqLinks = document.querySelectorAll('.faq-li');
    faqLinks.forEach(function (link) {
        link.classList.remove('active');
    });

    // Show the selected faq-box
    var selectedBox = document.getElementById(id);
    if (selectedBox) {
        selectedBox.classList.add('active');
        // Find the clicked faq-li and add 'active' class to it
        var selectedLink = document.querySelector('.faq-li[onclick="showContent(\'' + id + '\')"]');
        if (selectedLink) {
            selectedLink.classList.add('active');
        }
    }
}

document.querySelector('.search input').addEventListener('input', function () {
    var searchTerm = this.value.toLowerCase();
    showSearchSuggestions(searchTerm);
});

function showSearchSuggestions(searchTerm) {
    var suggestionsContainer = document.getElementById('search-suggestions');
    suggestionsContainer.innerHTML = ''; // Clear previous suggestions

    // Loop through all questions and check for a match
    var allQuestions = document.querySelectorAll('.faq-title');
    allQuestions.forEach(function (question) {
        var questionText = question.innerText.toLowerCase();
        if (questionText.includes(searchTerm)) {
            // Create a suggestion element
            var suggestion = document.createElement('div');
            suggestion.classList.add('search-suggestion');
            suggestion.innerText = questionText;

            // Add click event to handle selecting a suggestion
            suggestion.addEventListener('click', function () {
                // Close the suggestions modal
                suggestionsContainer.innerHTML = '';

                var answer = getAnswerForQuestion(questionText);

                // Display the question and answer in a modal
                displayModal(questionText, answer);
            });

            // Append suggestion to the container
            suggestionsContainer.appendChild(suggestion);
        }
    });
}

function getAnswerForQuestion(questionText) {
    // Assume your JSON data is stored in a variable named 'faqData'
    var faqData = {
        "about": [
            {
                "question": "Is GBU a deemed university?",
                "answer": "Gautam Buddha University is a state university established by the Uttar Pradesh Government under the Gautam Buddha University Act of 2002."
            },
            {
                "question": "Is GBU NAAC accredited?",
                "answer": "Yes, GBU is recognized under UGC Section 12B and NAAC accredited with B+ Grade."
            },
            {
                "question": "What is the rank of GBU in NIRF?",
                "answer": "GBU is at 99th position in NIRF ranking."
            },
            {
                "question": "How big is the GBU campus?",
                "answer": "It is a 511 acres lush green campus."
            },
            {
                "question": "Who built Gautam Buddha University?",
                "answer": "Gautam Buddha University was the dream project of former chief minister of Uttar Pradesh, Ms. Mayawati. The university was established by the Uttar Pradesh Government under the Gautam Buddha University Act of 2002 and began its first academic session in 2008."
            },
            {
                "question": "Who approved Gautam Buddha University?",
                "answer": "Recognition by the University Grants Commission of India (UGC): Gautam Buddha University is recognized by the University Grants Commission of India vide F. 9-18/2009 (CRP-I) dated 13 May 2009 under section 2(f) of UGC Act 1956."
            }
        ],
        "admission": [
            {
                "question": "What is the percentage required for Gautam Buddha University?",
                "answer": "Eligibility 10+2 with Mathematics securing minimum 50% marks (45% for SC/ST) or equivalent grade."
            },
            {
                "question": "Can I get direct admission in GBU?",
                "answer": "Admission in Gautam Buddha University is either through entrance examination or by direct mode. For admission in Engineering, you need to write GPTU while for seeking admission in Professional courses or Ph. D you'll have to write GPTR."
            },
            {
                "question": "Can foreign students also seek admission in GBU?",
                "answer": "Yes, the University has made its presence globally and is open for admission in all UG, PG and doctoral programmes for foreign students. Some of the countries from where the students have taken admission since GBU’s inception are: Vietnam, Cambodia, Afghanistan, South Korea, Thailand, USA, etc."
            },
            {
                "question": "Is there any negative marking in GBU entrance exam?",
                "answer": "No, there is no negative markings in the entrance exam at GBU."
            },
            {
                "question": "Is the entrance exam of GBU hard?",
                "answer": "No, GBU entrance exam is completely based on the basics of class 12, it is not so much hard. It depends on your capabilities how you take difficulties. Not at all hard. If u have a basic knowledge (only NCERT) what was taught you in 11th and 12th then also you can clear the entrance exam."
            },
            {
                "question": "How can I check my GBU entrance result?",
                "answer": "Applicants just go by the given steps to check their Result 2023: Visit the official website link. Then, hit the Result link. Check your exam & click on that link."
            }
        ],
        "schools": [
            {
                "question": "What is the curriculum of studies in all schools under Gautam Buddha University?",
                "answer": "The study curriculum can be seen in the Gautam Buddha University Time Table Application available on the Play Store for each and every course that comes under the schools of Gautam Buddha University."
            },
            {
                "question": "What are the facilities provided on Gautam Buddha University’s School premises?",
                "answer": "The schools provide well atmosphere for study. Other facilities include air-conditioned classrooms, friendly teacher-student environment, a well-maintained library and 24x7 study centre is also available to study at any time."
            },
            {
                "question": "What is the timing of classes in the morning?",
                "answer": "The classes are from 9 am to 5 pm roughly. All other changes are done according to the timetable provided by each and every school."
            },
            {
                "question": "Lab conditions of Gautam Buddha University?",
                "answer": "The labs of GBU are well maintained all across campus. The labs in ICT contain well-maintained systems and required material according to practical needs to be performed. The labs in the Biotechnology department also are well-equipped with all the essential equipment required for practical. The same goes for all the other department labs in all the schools."
            },
            {
                "question": "Name of all schools present at Gautam Buddha University?",
                "answer": "University School of Management, University School of Biotechnology, University School of Information & Communications Technology, University School of Engineering, University School of Humanities & Social Sciences, University School of Vocational Studies & Applied Sciences, University School of Law Justice & Governance and University School of Buddhist Studies & Civilizations."
            }
        ],
        "students-teachers": [
            {
                "question": "Availibilty of teachers and staffs",
                "answer": "Assistant Professor, Guest Faculty, Research Associate, Guest Faculty Lecturer, Technical Assistant, Lab Technician, Office Assistant, PHD Research Scholar, Lab Assistant, Research Scholar, Lecturer, Guest Lecturer, Assistant professor and Guest Faculty, Post DOC fellow."
            },
            {
                "question": "Is Gautam Buddha University good or bad?",
                "answer": "Gautam Buddha University has an overall rating of 3.5 out of 5, based on over 28 reviews left anonymously by employees."
            },
            {
                "question": "How do I get scholarships at Gautam Buddha University?",
                "answer": "At GBU, the scholarships are only provided through the Uttar Pradesh government scholarship scheme. A form is announced by govt and students with a domicile in the same state can apply for a scholarship. The scholarship is somewhere between 50k to 70k. Also university provides fee concessions (approximately half of the fee is removed i.e. 50% concession) for Scheduled Cast and Scheduled Tribes categories. They must provide their caste certificate for the above privileges. Secondly, the branch toppers are awarded with a cash prize for their remarkable performance throughout the year. The cash prize awarded is around 10k."
            },
            {
                "question": "What are the admission criteria of Gautam Buddha University?",
                "answer": "Admissions to the university is through the entrance exam conducted by the university itself, the Gautam Buddha University Entrance Test (GBU-ET). Applicants must register for this exam online. If seats are available after GBU-ET, then the university might consider national-level test scores like JEE Main, GATE, CLAT, etc."
            },
            {
                "question": "Is Gautam Buddha University a ragging-free campus or not?",
                "answer": "Yes, GBU is a ragging-free campus. Seniors are very friendly and will go to any extent to help you out if there is a problem. In addition to this, GBU has some very strict guidelines when it comes to ragging which also acts as a deterrence. Also if any such activity occurs on university premises then the matter is looked after by the Anti-Ragging Committee-GBU."
            }
        ],
        "placement": [
            {
                "question": "How many companies visit during Gautam Buddha University placements?",
                "answer": "More than 50 companies visited the campus during Gautam Buddha University placements 2023. Further, a fluctuating trend was witnessed in the number of companies visited during Gautam Buddha University placements over the past three years."
            },
            {
                "question": "Is GBU good for placement?",
                "answer": "Placement is average. If you have proper skills, you could get placed. Many students have been placed. This college has its own placement cell which contacts companies for internship opportunities and placement."
            },
            {
                "question": "What are the placement results at Gautam Buddha University?",
                "answer": "The highest and the average package offered during Gautam Buddha University placements in 2023 stood at INR 24 LPA and INR 4.5 LPA, respectively."
            }
        ],
        "clubs-events": [
            {
                "question": "What are the cultural events of Gautam Buddha University?",
                "answer": "Gautam Buddha University’s annual cultural event is Abhivyanjana. Abhivyanjana intends to add wings to the intellect, imagination and creativity of our students. Every year, students from Gautam Buddha University get together to celebrate the spirit of life by participating in various cultural, technical and social events in various dimensions of performing arts and visual arts. Abhivyanjana aims to dissolve cultural demarcations and help facilitate a new school of thought where every student thinks beyond boundaries but is still grounded in his/her values. It intends to add wings to the intellect, imagination and creativity of students. The Cultural Fest is packed with various cultural and technical events ranging from debate, photography, music, dance, poetry, storytelling, robotics, painting, poster making, programming, and Ad-mad to name a few."
            },
            {
                "question": "Cultural clubs present in Gautam Buddha University?",
                "answer": "The cultural council of the University consists of thirteen clubs: Dramatics Club (Dishayan), Music Club(Swaranjali), Dance Club, Debating Society (Drishtikon) , Photography Club(Pratibimb), Audio Visual Education Club (Pradarsh), Adventure Club, Art Club (Chitrakala), Literary Club, Natures Club, Techno-Cultural Club, Social Service Club and Creativity Club."
            },
            {
                "question": "Sports events held in Gautam Buddha University?",
                "answer": "The main sports events in Gautam Buddha University are Branch Premier League, Gautam Buddha University Cricket League, Sarvepalli Radhakrishnan tournament, Inter-school cricket league, Basketball tournaments, Badminton leagues and Shauryotsav – university’s biggest sports festival."
            }
        ],
        "hostel": [
            {
                "question": "Can we go outside from college hostel?",
                "answer": "Without permission of Parents and warden, the resident cannot stay outside. No student shall leave the hostel without prior permission of the hostel warden."
            },
            {
                "question": "Can I take my phone in the hostel?",
                "answer": "Yes, mobile phones are allowed in hostels."
            },
            {
                "question": "Do hostel rooms have bathrooms?",
                "answer": "Most hostels have a communal bathroom with private shower stalls. So while they're technically “communal”, you'll still have a sense of privacy."
            },
            {
                "question": "Is WIFI available in GBU hostel?",
                "answer": "Yes, LANs connectivity in each and every hostel. The network has 10/100/1000 Mbps transmission capacity and is linked through fiber optic cables."
            },
            {
                "question": "What are the hostel facilities in Gautam Buddha University?",
                "answer": "The hostels are equipped with facilities like internet, common rooms, separate TV, visitor's rooms, table tennis court, reading rooms, first aid facility, indoor games facility, gymnasium, badminton court and many other facilities."
            },
            {
                "question": "Is hostel compulsory in GBU 2023?",
                "answer": "Yes, the hostels are compulsory but you won't have much problem as they are single-occupancy based."
            }
        ]
    }

    // Loop through each category in faqData
    for (var category in faqData) {
        if (faqData.hasOwnProperty(category)) {
            // Loop through each question in the category
            for (var i = 0; i < faqData[category].length; i++) {
                var currentQuestion = faqData[category][i].question.toLowerCase();
                if (currentQuestion === questionText) {
                    // Return the corresponding answer
                    return faqData[category][i].answer;
                }
            }
        }
    }

    // Return a default message if the question is not found
    return 'Answer not found';
}

function displayModal(question, answer) {
    // You can modify this function to display the modal as per your UI requirements
    // alert('Question: ' + question + '\n\nAnswer: ' + answer);
    showModal(question, answer);
}

var modal = document.getElementById('myModal');
var span = document.getElementsByClassName('close')[0];

function showModal(question, answer) {
    document.getElementById('modal-question').innerHTML = question;
    document.getElementById('modal-answer').innerHTML = answer;
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
};

// function showContent(id) {
//     var question = document.getElementById(id).querySelector('.faq-title').innerText;
//     var answer = document.getElementById(id).querySelector('.faq-detail').innerText;
//     showModal(question, answer);
// }

