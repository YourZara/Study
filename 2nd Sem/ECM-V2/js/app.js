/* ENEE 154 Electrical Circuits and Machines - Master Interactive Application */

(function () {
  // 1. Theme Toggle Logic
  const initTheme = () => {
    const savedTheme = localStorage.getItem('ecm_theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  };

  const updateThemeIcon = (theme) => {
    const themeBtn = document.getElementById('themeToggleBtn');
    if (!themeBtn) return;
    themeBtn.innerHTML = theme === 'dark' 
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  };

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('ecm_theme', newTheme);
    updateThemeIcon(newTheme);
  };

  // 2. Mobile Sidebar Drawer Logic
  const initMobileMenu = () => {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.querySelector('.sidebar');
    if (!mobileBtn || !sidebar) return;

    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      sidebar.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && e.target !== mobileBtn) {
        sidebar.classList.remove('open');
      }
    });
  };

  // 3. Search Engine & Quick Index
  const searchIndex = [
    { title: "Course Syllabus & Marking Scheme", url: "syllabus.html", tags: "hours marks exam scheme breakdown ioe" },
    { title: "Master Formula Sheet", url: "formula-sheet.html", tags: "formulas all equations cheat sheet units" },
    { title: "Complete Derivations Sheet", url: "derivations.html", tags: "step by step derivations proofs rlc emf torque" },
    { title: "PYQ Analysis & Question Bank (2081-2083)", url: "pyq-analysis.html", tags: "past questions ioe 2081 2082 2083 solutions" },
    { title: "Last Minute Revision & Traps", url: "revision.html", tags: "must know common traps one-day roadmap quick" },
    
    // Chapter 1
    { title: "Chapter 1: Network Elements & Initial Conditions", url: "chapters/chapter-1.html", tags: "elements nodal mesh matrix initial conditions derivatives di/dt dv/dt" },
    { title: "1.1 Characteristics of Network Elements", url: "chapters/chapter-1.html#sec-1-1", tags: "resistor inductor capacitor active passive linear bilateral" },
    { title: "1.2 Nodal Analysis with Dependent Sources", url: "chapters/chapter-1.html#sec-1-2", tags: "kcl supernode dependent current voltage source" },
    { title: "1.3 Mesh Analysis with Dependent Sources", url: "chapters/chapter-1.html#sec-1-3", tags: "kvl supermesh matrix method dependent source" },
    { title: "1.4 Initial Conditions in R-L-C Networks", url: "chapters/chapter-1.html#sec-1-4", tags: "t=0+ switching inductor open capacitor short di/dt d2i/dt2" },

    // Chapter 2
    { title: "Chapter 2: Classical Transient Analysis", url: "chapters/chapter-2.html", tags: "differential equations complementary particular integral undetermined coefficients" },
    { title: "2.1 RL & RC Transients (DC, Exp, Sinusoidal)", url: "chapters/chapter-2.html#sec-2-1", tags: "first order time constant L/R RC decay growth ac step" },
    { title: "2.2 Series RLC Circuit - DC & Exponential", url: "chapters/chapter-2.html#sec-2-2", tags: "second order overdamped critically damped underdamped roots" },
    { title: "2.3 Parallel RLC Circuit Transients", url: "chapters/chapter-2.html#sec-2-3", tags: "parallel rlc duality damping ratio" },

    // Chapter 3
    { title: "Chapter 3: Laplace Transform Transient Analysis", url: "chapters/chapter-3.html", tags: "laplace s-domain impedance initial condition generators transformed circuits" },
    { title: "3.1 Transformed Models of R, L, C", url: "chapters/chapter-3.html#sec-3-1", tags: "sL - Li(0-) 1/sC + v(0-)/s initial condition models" },
    { title: "3.2 Series & Parallel RLC with Laplace", url: "chapters/chapter-3.html#sec-3-2", tags: "partial fraction expansion s-domain solve step impulse exponential" },

    // Chapter 4
    { title: "Chapter 4: Network Transfer Function & Bode Plots", url: "chapters/chapter-4.html", tags: "transfer function poles zeros frequency response asymptotic bode diagram filter" },
    { title: "4.1 Poles, Zeros & Complex Frequency", url: "chapters/chapter-4.html#sec-4-1", tags: "s = sigma + jw pole zero plot stability transfer function" },
    { title: "4.2 Asymptotic Bode Plots Construction", url: "chapters/chapter-4.html#sec-4-2", tags: "corner frequency 20 log K 20db/dec magnitude phase plot" },
    { title: "4.3 Resonant Circuits & Quality Factor (Q)", url: "chapters/chapter-4.html#sec-4-3", tags: "bandwidth high-q low-q resonance series parallel Q-factor" },
    { title: "4.4 Passive Filters: LPF, HPF, BPF, BSF", url: "chapters/chapter-4.html#sec-4-4", tags: "cut-off frequency filter transfer function bode attenuation" },

    // Chapter 5
    { title: "Chapter 5: Two-Port Parameters", url: "chapters/chapter-5.html", tags: "two-port Z Y T ABCD h g parameters conversion reciprocity symmetry" },
    { title: "5.1 Z, Y, ABCD, and Hybrid (h) Parameters", url: "chapters/chapter-5.html#sec-5-1", tags: "open circuit impedance short circuit admittance transmission" },
    { title: "5.2 Parameter Conversions & Interconnections", url: "chapters/chapter-5.html#sec-5-2", tags: "cascade matrix multiplication series parallel reciprocity AD-BC=1" },

    // Chapter 6
    { title: "Chapter 6: Magnetic Circuits & Induction", url: "chapters/chapter-6.html", tags: "magnetic circuit mmf reluctance flux b-h curve hysteresis eddy current faraday" },
    { title: "6.1 Series & Parallel Magnetic Circuits with Air Gap", url: "chapters/chapter-6.html#sec-6-1", tags: "reluctance air gap fringing leakage flux Ampere turns" },
    { title: "6.2 Hysteresis Loss & Eddy Current Loss", url: "chapters/chapter-6.html#sec-6-2", tags: "steinmetz formula lamination b-h loop iron core loss" },
    { title: "6.3 Statically & Dynamically Induced EMF", url: "chapters/chapter-6.html#sec-6-3", tags: "faraday law lenz law blv sin theta fleming right hand" },

    // Chapter 7
    { title: "Chapter 7: Single-Phase Transformers", url: "chapters/chapter-7.html", tags: "transformer emf equation equivalent circuit oc sc test efficiency regulation" },
    { title: "7.1 Operating Principle & EMF Equation", url: "chapters/chapter-7.html#sec-7-1", tags: "4.44 f N Phi_m core flux constancy ideal transformer" },
    { title: "7.2 Transformer Equivalent Circuit & Phasor Diagram", url: "chapters/chapter-7.html#sec-7-2", tags: "referred parameters primary secondary magnetizing branch" },
    { title: "7.3 Open Circuit (OC) and Short Circuit (SC) Tests", url: "chapters/chapter-7.html#sec-7-3", tags: "core loss copper loss R0 X0 Req Xeq test calculations" },
    { title: "7.4 Voltage Regulation & Maximum Efficiency Condition", url: "chapters/chapter-7.html#sec-7-4", tags: "Pcu = Pi condition power factor all day efficiency" },
    { title: "7.5 Auto-Transformer & Isolation Transformer", url: "chapters/chapter-7.html#sec-7-5", tags: "saving of copper k factor conduction induction" },

    // Chapter 8
    { title: "Chapter 8: DC Machines", url: "chapters/chapter-8.html", tags: "dc generator motor emf equation torque equation back emf starter speed control" },
    { title: "8.1 Construction & Commutator Action", url: "chapters/chapter-8.html#sec-8-1", tags: "yoke armature commutator carbon brushes field windings" },
    { title: "8.2 EMF & Torque Equations of DC Machines", url: "chapters/chapter-8.html#sec-8-2", tags: "Eg = P Phi Z N / 60A T = P Phi Z Ia / 2pi A" },
    { title: "8.3 Back EMF Role & 3-Point Starter", url: "chapters/chapter-8.html#sec-8-3", tags: "Eb = V - IaRa high starting current no-volt coil overload release" },
    { title: "8.4 Speed Control of DC Shunt Motors", url: "chapters/chapter-8.html#sec-8-4", tags: "armature resistance control field flux control below above rated speed" },

    // Chapter 9
    { title: "Chapter 9: AC Motors", url: "chapters/chapter-9.html", tags: "3-phase induction motor rotating magnetic field torque slip single phase bldc stepper universal" },
    { title: "9.1 Production of Rotating Magnetic Field (RMF)", url: "chapters/chapter-9.html#sec-9-1", tags: "1.5 Phi_m proof synchronous speed Ns = 120f/P" },
    { title: "9.2 Torque Equation & Torque-Slip Characteristics", url: "chapters/chapter-9.html#sec-9-2", tags: "standstill running max torque s = R2/X2 effect of rotor resistance" },
    { title: "9.3 Single-Phase Induction Motors & Starting", url: "chapters/chapter-9.html#sec-9-3", tags: "double revolving field theory capacitor start capacitor run shaded pole" },
    { title: "9.4 Special Motors (BLDC, Stepper, Universal, Servo)", url: "chapters/chapter-9.html#sec-9-4", tags: "brushless dc stepper motor step angle hysteresis universal ac dc" }
  ];

  const initSearch = () => {
    const searchModal = document.getElementById('searchModal');
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    if (!searchModal || !searchBtn || !searchInput || !searchResults) return;

    // Detect path depth for linking relative URLs correctly
    const isChapter = window.location.pathname.includes('/chapters/');
    const prefix = isChapter ? '../' : '';

    const openSearch = () => {
      searchModal.classList.add('active');
      searchInput.value = '';
      renderResults(searchIndex);
      setTimeout(() => searchInput.focus(), 50);
    };

    const closeSearch = () => {
      searchModal.classList.remove('active');
    };

    const renderResults = (items) => {
      if (items.length === 0) {
        searchResults.innerHTML = '<div style="padding: 1.5rem; text-align: center; color: var(--text-muted);">No matching topics found.</div>';
        return;
      }
      searchResults.innerHTML = items.map(item => {
        let finalUrl = item.url;
        if (isChapter) {
          if (finalUrl.startsWith('chapters/')) {
            finalUrl = finalUrl.replace('chapters/', '');
          } else {
            finalUrl = '../' + finalUrl;
          }
        }
        return `
          <a href="${finalUrl}" class="search-result-item">
            <div class="search-result-title">${item.title}</div>
            <div class="search-result-context">${item.tags}</div>
          </a>
        `;
      }).join('');
    };

    searchBtn.addEventListener('click', openSearch);
    
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) closeSearch();
    });

    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
      } else if (e.key === 'Escape' && searchModal.classList.contains('active')) {
        closeSearch();
      }
    });

    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        renderResults(searchIndex);
        return;
      }
      const filtered = searchIndex.filter(item => 
        item.title.toLowerCase().includes(q) || item.tags.toLowerCase().includes(q)
      );
      renderResults(filtered);
    });
  };

  // 4. Highlight current sidebar item
  const highlightSidebar = () => {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.sidebar-link');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (currentPath.endsWith(href) || (href === 'index.html' && (currentPath.endsWith('/') || currentPath.endsWith('/index.html')))) {
        link.classList.add('active');
      }
    });
  };

  // Document Ready
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileMenu();
    initSearch();
    highlightSidebar();

    const themeToggleBtn = document.getElementById('themeToggleBtn');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', toggleTheme);
    }
  });
})();
