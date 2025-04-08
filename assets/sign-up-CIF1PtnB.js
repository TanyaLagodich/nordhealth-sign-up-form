import{d as V,m as U,u as k,r as p,c,w as v,v as S,a as f,b as o,e as x,o as w,f as E,g,h as M,i as b,j as a,t as P,k as y,l as T,n as $}from"./index-D_ZXvWNH.js";const q=["label","type","error"],C=["name"],N=V({__name:"input-password",props:U({label:{},error:{}},{password:{},passwordModifiers:{}}),emits:["update:password"],setup(m){const s=k(m,"password"),r=p(!1),u=c(()=>r.value?"interface-edit-off":"interface-edit-on"),i=c(()=>r.value?"text":"password");return(d,l)=>v((w(),f("provet-input",{"onUpdate:modelValue":l[1]||(l[1]=e=>s.value=e),label:d.label,type:i.value,required:!0,error:d.error,style:{"--n-input-inline-size":"100%"}},[l[2]||(l[2]=o("provet-icon",{slot:"start",name:"interface-password"},null,-1)),o("provet-button",{slot:"end",square:"",onClick:l[0]||(l[0]=x(e=>r.value=!r.value,["prevent"]))},[o("provet-icon",{name:u.value},null,8,C)])],8,q)),[[S,s.value]])}}),_=()=>{const m=E(),s=p({email:"",password:"",receiveUpdates:!1}),r=p({email:void 0,password:void 0}),u=p(null),i=p(!1),d=()=>{r.value={email:void 0,password:void 0},u.value=null},l=async n=>{if(await new Promise(t=>setTimeout(t,2e3)),n.email==="test@example.com")throw new Error("This email is already registered");return{success:!0,message:"User registered successfully"}};return{data:s,errors:r,isLoading:i,formError:u,handleSubmit:async()=>{d();let n=!0;if(s.value.email?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.value.email)||(r.value.email="Please enter a valid email address",n=!1):(r.value.email="Email is required",n=!1),s.value.password||(r.value.password="Password is required",n=!1),!n)return!1;i.value=!0;try{return await l({email:s.value.email,password:s.value.password,receiveUpdates:s.value.receiveUpdates}),await m.push("/home"),!0}catch(t){return u.value=t.message||"Registration failed. Please try again.",!1}finally{i.value=!1}}}},z={padding:"l",style:{"max-width":"400px",margin:"var(--n-space-xl) auto"}},B=["error"],D={key:0,shadow:"",variant:"danger"},I=["loading"],A=V({__name:"sign-up",setup(m){const{data:s,errors:r,isLoading:u,formError:i,handleSubmit:d}=_();return(l,e)=>{const n=$("router-link");return w(),f("provet-card",z,[e[8]||(e[8]=o("h1",null,"Sign up",-1)),o("form",{class:"n-margin-be-m",onSubmit:e[4]||(e[4]=x((...t)=>a(d)&&a(d)(...t),["prevent"]))},[o("provet-stack",null,[v(o("provet-input",{"onUpdate:modelValue":e[0]||(e[0]=t=>a(s).email=t),label:"Email",type:"email",required:"",error:a(r).email,style:{"--n-input-inline-size":"100%"},onInput:e[1]||(e[1]=t=>a(r).email=void 0)},e[5]||(e[5]=[o("provet-icon",{slot:"start",name:"interface-email"},null,-1)]),40,B),[[b,a(s).email]]),g(a(N),{modelValue:a(s).password,"onUpdate:modelValue":e[2]||(e[2]=t=>a(s).password=t),label:"Password",error:a(r).password},null,8,["modelValue","error"]),v(o("provet-checkbox",{"onUpdate:modelValue":e[3]||(e[3]=t=>a(s).receiveUpdates=t),label:"I’d like to receive occasional product updates and announcements.",size:"s"},null,512),[[b,a(s).receiveUpdates]]),a(i)?(w(),f("provet-banner",D,P(a(i)),1)):M("",!0),o("provet-button",{type:"submit",expand:"",variant:"primary",loading:a(u)}," Sign up ",8,I)])],32),o("p",null,[e[7]||(e[7]=y(" Already have an account? ")),g(n,{to:{name:"sign-in"}},{default:T(()=>e[6]||(e[6]=[y("Login in")])),_:1})])])}}});export{A as default};
