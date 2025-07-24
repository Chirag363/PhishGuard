
import React from "react";
import FadeInSection from "@/components/FadeInSection";
import DemoCard from "@/components/DemoCard";

const PhishingDemos = () => {
  // All demos data
  const allDemos = [
    {
      id: "email-spoofing",
      title: "Email Spoofing",
      description: "Learn how attackers can forge email headers to make messages appear as if they're coming from trusted sources, and how to identify these deceptive tactics.",
      difficulty: "beginner" as const,
      category: "Email Security",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "fake-login",
      title: "Fake Login Pages",
      description: "Experience how convincing fake login pages can be and discover the telltale signs that can help you distinguish legitimate sites from fraudulent ones.",
      difficulty: "intermediate" as const,
      category: "Web Security",
      image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "smishing",
      title: "SMS Phishing (Smishing)",
      description: "Understand how attackers use text messages to trick users into revealing sensitive information or installing malware, and learn strategies to protect yourself.",
      difficulty: "advanced" as const,
      category: "Mobile Security",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "social-engineering",
      title: "Social Engineering",
      description: "Explore the psychological tactics used in social engineering attacks and how cybercriminals manipulate human behavior to gain unauthorized access to systems or data.",
      difficulty: "intermediate" as const,
      category: "Human Factors",
      image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "spear-phishing",
      title: "Spear Phishing",
      description: "Discover how attackers craft highly targeted phishing attempts using personal information to make their messages more convincing and harder to detect.",
      difficulty: "advanced" as const,
      category: "Email Security",
      image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "malicious-attachments",
      title: "Malicious Attachments",
      description: "Learn about the various types of harmful files that can be attached to emails and how to safely handle attachments to prevent malware infections.",
      difficulty: "beginner" as const,
      category: "Email Security",
      image: "https://images.unsplash.com/photo-1649859396073-13ff3244ec1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "clone-phishing",
      title: "Clone Phishing",
      description: "See how attackers create nearly identical copies of legitimate emails or websites, and learn to spot the subtle differences that reveal their true nature.",
      difficulty: "intermediate" as const,
      category: "Web Security",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "voice-phishing",
      title: "Voice Phishing (Vishing)",
      description: "Understand how phone-based social engineering works and how to protect yourself from callers attempting to extract sensitive information or credentials.",
      difficulty: "advanced" as const,
      category: "Social Engineering",
      image: "https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "qr-code-phishing",
      title: "QR Code Phishing",
      description: "Explore how cybercriminals use malicious QR codes to direct users to fraudulent websites, and learn safe practices for scanning QR codes.",
      difficulty: "intermediate" as const,
      category: "Mobile Security",
      image: "https://images.unsplash.com/photo-1599305529473-724979e1c929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    }
  ];
  
  // Define filters and states
  const [selectedDifficulty, setSelectedDifficulty] = React.useState<string>("all");
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  
  // Extract unique categories
  const categories = ["all", ...new Set(allDemos.map(demo => demo.category))];
  
  // Filter demos based on current selections
  const filteredDemos = allDemos.filter(demo => {
    const matchesDifficulty = selectedDifficulty === "all" || demo.difficulty === selectedDifficulty;
    const matchesCategory = selectedCategory === "all" || demo.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      demo.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      demo.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesDifficulty && matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-16">
        <div className="page-container">
          <FadeInSection>
            <h1 className="heading-lg text-center mb-4">Phishing Attack Demonstrations</h1>
            <p className="body-md text-center max-w-3xl mx-auto text-muted-foreground mb-8">
              Explore our collection of interactive demonstrations to learn how different phishing attacks work and how to protect yourself from them.
            </p>
          </FadeInSection>

          {/* Search and Filters */}
          <FadeInSection delay={0.1}>
            <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search demos..."
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex gap-4">
                  <select
                    className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white"
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                  >
                    <option value="all">All Difficulties</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                  <select
                    className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Demos Grid */}
      <section className="py-12">
        <div className="page-container">
          {filteredDemos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDemos.map((demo, index) => (
                <DemoCard
                  key={demo.id}
                  {...demo}
                  delay={index * 0.1}
                />
              ))}
            </div>
          ) : (
            <FadeInSection>
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No demos match your filters</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your search criteria or filters</p>
                <button
                  onClick={() => {
                    setSelectedDifficulty("all");
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all-200"
                >
                  Reset Filters
                </button>
              </div>
            </FadeInSection>
          )}
        </div>
      </section>
    </div>
  );
};

export default PhishingDemos;
