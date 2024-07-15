import{r as _,j as s,L as l,a as u,c as I}from"./index-DatKeztj.js";import{c as f,a as m,u as x,o as h}from"./yup-CQr8x3mQ.js";import{L as j}from"./Logo-CSyR4F_j.js";import{s as T,D as N}from"./DocumentTitle-BIjFlJ9C.js";import{G as w}from"./GoogleBtn-D67uyLqp.js";import{u as b}from"./useTranslation-va2joCJA.js";import{A as R}from"./AdvantagesSection-g0UMHIV7.js";import"./iconBase-BcIcenge.js";const S="_signInFormWrapper_131s9_1",v="_signInContainer_131s9_7",L="_inputConatiner_131s9_14",C="_logoSingIn_131s9_20",F="_formRegistration_131s9_24",E="_singUpIcon_131s9_30",M="_formTitle_131s9_34",V="_labelRegistration_131s9_43",W="_formRegistrationText_131s9_49",$="_inputIconWrapper_131s9_57",k="_formInputRegistration_131s9_61",y="_formInputError_131s9_72",A="_formInputValid_131s9_83",P="_submitBtn_131s9_112",U="_signInInfo_131s9_132",B="_forgotPasswordText_131s9_139",q="_errorMsg_131s9_157",D="_registrationText_131s9_164",G="_registrationTextInfo_131s9_173",H="_signInLink_131s9_178",n={signInFormWrapper:S,signInContainer:v,inputConatiner:L,logoSingIn:C,formRegistration:F,singUpIcon:E,formTitle:M,labelRegistration:V,formRegistrationText:W,inputIconWrapper:$,formInputRegistration:k,formInputError:y,formInputValid:A,submitBtn:P,signInInfo:U,forgotPasswordText:B,errorMsg:q,registrationText:D,registrationTextInfo:G,signInLink:H},O=f().shape({email:m().email("Must be a valid email!").required("Email is required"),password:m().min(6,"Too Short!").max(50,"Too Long!").required("Password is required")}),z={email:"",password:""},J=({onLogin:t})=>{const{t:r}=b(),{register:i,handleSubmit:c,formState:{errors:e,touchedFields:o}}=x({resolver:h(O),defaultValues:z}),[a,p]=_.useState(!1),g=d=>{t(d)};return s.jsxs("div",{className:n.signInFormWrapper,children:[s.jsx("div",{className:n.logoSingIn,children:s.jsx(j,{})}),s.jsx("div",{className:n.signInContainer,children:s.jsxs("form",{className:n.formRegistration,onSubmit:c(g),children:[s.jsx("h1",{className:n.formTitle,children:r("sign_in")}),s.jsxs("div",{className:n.inputConatiner,children:[s.jsxs("label",{className:n.labelRegistration,children:[s.jsx("span",{className:n.formRegistrationText,children:r("email")}),s.jsx("input",{className:`${n.formInputRegistration} ${e.email&&o.email?n.formInputError:o.email?n.formInputValid:""}`,type:"email",...i("email"),autoComplete:"email",placeholder:r("placeholder.email")}),e.email&&o.email?s.jsx("div",{className:n.errorMsg,children:e.email.message}):null]}),s.jsxs("label",{className:n.labelRegistration,children:[s.jsx("span",{className:n.formRegistrationText,children:r("password")}),s.jsxs("div",{className:n.inputIconWrapper,children:[s.jsx("input",{className:`${n.formInputRegistration} ${e.password&&o.password?n.formInputError:o.password?n.formInputValid:""}`,type:a?"text":"password",...i("password"),autoComplete:"new-password",placeholder:r("placeholder.password")}),s.jsx("svg",{width:"20",height:"20",className:n.singUpIcon,onClick:()=>p(!a),children:s.jsx("use",{href:`${T}#icon-${a?"eye":"eye-off"}`})})]}),e.password&&o.password?s.jsx("div",{className:n.errorMsg,children:e.password.message}):null]})]}),s.jsx("button",{className:n.submitBtn,type:"submit",title:"Click to register user","aria-label":"Add user",children:r("sign_in")}),s.jsxs("div",{className:n.signInInfo,children:[s.jsxs(l,{to:"/password-recover",className:n.forgotPasswordText,children:[r("forgot_password"),"?"]}),s.jsxs("p",{className:n.registrationText,children:[s.jsxs("span",{className:n.registrationTextInfo,children:[r("have_not_acc"),"? "]})," ",s.jsxs(l,{to:"/signup",className:n.signInLink,children:[" ",r("sign_up")]})]}),s.jsx(w,{type:r("sign_in")})]})]})})]})},es=()=>{const t=u(),r=i=>{t(I(i))};return s.jsxs(s.Fragment,{children:[s.jsx(N,{children:"Sign In"}),s.jsx(J,{onLogin:r}),s.jsx(R,{isHideMobile:!0})]})};export{es as default};
//# sourceMappingURL=SignInPage-CTba-hWc.js.map