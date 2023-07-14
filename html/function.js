// formulaire //
const DOMstrings = {
  stepsBtnClass: 'multisteps-form__progress-btn',
  stepsBtns: document.querySelectorAll(`.multisteps-form__progress-btn`),
  stepsBar: document.querySelector('.multisteps-form__progress'),
  stepsForm: document.querySelector('.multisteps-form__form'),
  stepsFormTextareas: document.querySelectorAll('.multisteps-form__textarea'),
  stepFormPanelClass: 'multisteps-form__panel',
  stepFormPanels: document.querySelectorAll('.multisteps-form__panel'),
  stepPrevBtnClass: 'js-btn-prev',
  stepNextBtnClass: 'js-btn-next' };


const removeClasses = (elemSet, className) => {

  elemSet.forEach(elem => {

    elem.classList.remove(className);

  });

};

const findParent = (elem, parentClass) => {

  let currentNode = elem;

  while (!currentNode.classList.contains(parentClass)) {
    currentNode = currentNode.parentNode;
  }

  return currentNode;

};

const getActiveStep = elem => {
  return Array.from(DOMstrings.stepsBtns).indexOf(elem);
};

const setActiveStep = activeStepNum => {

  removeClasses(DOMstrings.stepsBtns, 'js-active');

  DOMstrings.stepsBtns.forEach((elem, index) => {

    if (index <= activeStepNum) {
      elem.classList.add('js-active');
    }

  });
};

const getActivePanel = () => {

  let activePanel;

  DOMstrings.stepFormPanels.forEach(elem => {

    if (elem.classList.contains('js-active')) {

      activePanel = elem;

    }

  });

  return activePanel;

};

const setActivePanel = activePanelNum => {

  removeClasses(DOMstrings.stepFormPanels, 'js-active');

  DOMstrings.stepFormPanels.forEach((elem, index) => {
    if (index === activePanelNum) {

      elem.classList.add('js-active');

      setFormHeight(elem);

    }
  });

};

const formHeight = activePanel => {

  const activePanelHeight = activePanel.offsetHeight;

  DOMstrings.stepsForm.style.height = `${activePanelHeight}px`;

};

const setFormHeight = () => {
  const activePanel = getActivePanel();

  formHeight(activePanel);
};

DOMstrings.stepsBar.addEventListener('click', e => {

  const eventTarget = e.target;

  if (!eventTarget.classList.contains(`${DOMstrings.stepsBtnClass}`)) {
    return;
  }

  const activeStep = getActiveStep(eventTarget);

  setActiveStep(activeStep);

  setActivePanel(activeStep);
});

DOMstrings.stepsForm.addEventListener('click', e => {

  const eventTarget = e.target;

  if (!(eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`) || eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`)))
  {
    return;
  }

  const activePanel = findParent(eventTarget, `${DOMstrings.stepFormPanelClass}`);

  let activePanelNum = Array.from(DOMstrings.stepFormPanels).indexOf(activePanel);

  if (eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`)) {
    activePanelNum--;

  } else {

    activePanelNum++;

  }

  setActiveStep(activePanelNum);
  setActivePanel(activePanelNum);

});

window.addEventListener('load', setFormHeight, false);

window.addEventListener('resize', setFormHeight, false);


const setAnimationType = newType => {
  DOMstrings.stepFormPanels.forEach(elem => {
    elem.dataset.animation = newType;
  });
};

//error message form//
function validation(){
     //var nom = document.getElementById('nom').value;
     //var prenom = document.getElementById('prenom').value;
     //var date = document.getElementById('date').value;
    // var lieu = document.getElementById('lieu').value;
    // var commune = document.getElementById('commune').value;
    // var baladia = document.getElementById('baladia').value;
     //var numid = document.getElementById('numid').value;
     //var dateid = document.getElementById('dateid').value;
     var email = document.getElementById('email').value;
     var tel = document.getElementById('tel').value;
     var tel1 = document.getElementById('tel1').value;

     
    

    
     //swal("vous étes inscrit !", "vous aller recevoir un email de confirmation ", "success"); 

    /*if((email.indexOf("@") == 1)|| (email.length > 10)) {
      if((tel.length = 9) && (tel1.length = 9)){
          swal("vous étes inscrit !", "vous aller recevoir un email de confirmation ", "success");
        
      
    }}*/
    /*if(nom.length < 4){
      swal ( "Oops" ,  "veuillez entrer un nom valide" ,  "error" ); 
      return false;
    }
    if(prenom.length < 4){
      swal ( "Oops" ,  "veuillez entrer un prenom valide" ,  "error" ); 
      return false;

    }
    if(lieu < 4){
      swal ( "Oops" ,  "veuillez entrer votre lieu de naissance" ,  "error" ); 
      return false;

    }if(commune < 4){
      swal ( "Oops" ,  "veuillez entrer votre commune" ,  "error" ); 
      return false;

    }if(baladia < 4){
      swal ( "Oops" ,  "veuillez entrer votre baladia" ,  "error" ); 
      return false;

    }*/
    if(email.indexOf("@") == -1 || email.length < 10){
      swal ( "Oops" ,  "veuillez entrer votre email" ,  "error" ); 
      return false;
    }
    if(isNaN(tel) || tel.length != 10){
      swal ( "Oops" ,  "veuillez entrer votre numero telephone" ,  "error" ); 
      return false;
    }
    if(isNaN(tel1) || tel1.length != 10){
      swal ( "Oops" ,  "veuillez entrer votre numero telephone" ,  "error" ); 
      return false;
    }
    else{
      swal("vous étes inscrit !", "vous aller recevoir un email de confirmation ", "success");

    }
    
return false;
};




