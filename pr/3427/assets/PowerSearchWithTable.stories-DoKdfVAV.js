import{ah as d,a1 as r}from"./iframe-BXEZE0I4.js";import{P as u}from"./PowerSearch-B7trp3AY.js";import{u as m}from"./usePowerSearchConfig-KN52_WVe.js";import{T as h,f as p,p as c}from"./Table-CET24gIP.js";import"./preload-helper-Ct5FWWRu.js";import"./Tokenizer-D-bjULYy.js";import"./BaseTypeahead-BqnRgHVq.js";import"./usePopover-Do4rPJpi.js";import"./TypeaheadItem-Byl65FxV.js";import"./getKey-DyRdrWhf.js";import"./Field-DU4F2j-S.js";import"./FieldStatus-mEorRRp9.js";import"./inputStyles.stylex-Bpqcd25J.js";import"./InputClearButton-DkAuJWVX.js";import"./Token-DYm9xQ8j.js";import"./useInteractiveRole-JQgfhiPA.js";import"./OverflowList-BVXNv_uZ.js";import"./Avatar-D05EJkdP.js";import"./Selector-D_AOLDvC.js";import"./Divider-B_EonROC.js";import"./utils-_uNaBhDK.js";import"./hooks-5vLonZWe.js";import"./Item-B3K8nSdX.js";import"./computeTargetAndRel-BlG0ENK0.js";import"./TreeList-DjKprLDd.js";import"./TextInput-CkAhoX-x.js";import"./groupStyles-B7SwcRNB.js";import"./useInputContainer-hdFpcvKa.js";import"./useClickableContainer-CymQ-npF.js";import"./NumberInput-TDpdKkjK.js";import"./DateInput-Derdlv3U.js";import"./Calendar-CQT6zs9a.js";import"./plainDate-C-ANv9VG.js";import"./dateParser-XTIqkafj.js";import"./TimeInput-CO6jXOep.js";import"./timeParser-CAi7zy_b.js";import"./Typeahead-BcRnHG74.js";import"./VStack-7es-l1T9.js";import"./Stack-CppBkEmg.js";import"./stack.stylex-BlarxY2N.js";import"./HStack-VS43MeCK.js";import"./ContextMenu-CPQD_9Av.js";import"./renderDropdownItems-Binx0HF8.js";import"./useListFocus-BFKuena8.js";import"./EmptyState-DtfrKdYb.js";const y=[{value:"fiction",label:"Fiction"},{value:"non-fiction",label:"Non-Fiction"},{value:"sci-fi",label:"Science Fiction"},{value:"fantasy",label:"Fantasy"},{value:"mystery",label:"Mystery"},{value:"romance",label:"Romance"},{value:"biography",label:"Biography"},{value:"history",label:"History"}],f=[{key:"title",type:"string",label:"Title"},{key:"author",type:"string",label:"Author"},{key:"year",type:"number",label:"Publication Year"},{key:"genre",type:"enum",label:"Genre",enumValues:y}],g=[{id:"1",title:"Dune",author:"Frank Herbert",year:1965,genre:"sci-fi"},{id:"2",title:"Pride and Prejudice",author:"Jane Austen",year:1813,genre:"romance"},{id:"3",title:"The Great Gatsby",author:"F. Scott Fitzgerald",year:1925,genre:"fiction"},{id:"4",title:"1984",author:"George Orwell",year:1949,genre:"sci-fi"},{id:"5",title:"To Kill a Mockingbird",author:"Harper Lee",year:1960,genre:"fiction"},{id:"6",title:"The Hobbit",author:"J.R.R. Tolkien",year:1937,genre:"fantasy"},{id:"7",title:"Sapiens",author:"Yuval Noah Harari",year:2011,genre:"non-fiction"},{id:"8",title:"The Name of the Wind",author:"Patrick Rothfuss",year:2007,genre:"fantasy"},{id:"9",title:"Gone Girl",author:"Gillian Flynn",year:2012,genre:"mystery"},{id:"10",title:"Steve Jobs",author:"Walter Isaacson",year:2011,genre:"biography"},{id:"11",title:"A Brief History of Time",author:"Stephen Hawking",year:1988,genre:"non-fiction"},{id:"12",title:"The Shining",author:"Stephen King",year:1977,genre:"mystery"},{id:"13",title:"The Handmaid's Tale",author:"Margaret Atwood",year:1985,genre:"sci-fi"},{id:"14",title:"Outlander",author:"Diana Gabaldon",year:1991,genre:"romance"},{id:"15",title:"The Guns of August",author:"Barbara Tuchman",year:1962,genre:"history"}],b=[{key:"title",header:"Title",width:p(2)},{key:"author",header:"Author",width:p(2)},{key:"year",header:"Year",width:c(100)},{key:"genre",header:"Genre",width:c(140),renderCell:e=>y.find(t=>t.value===e.genre)?.label??e.genre}],ce={title:"Core/PowerSearchWithTable",tags:["autodocs"],decorators:[e=>r.jsx("div",{style:{width:800},children:r.jsx(e,{})})]},o={render:()=>{const[e,t]=d.useState([]),{config:l,applyFilters:s}=m(f,"Books"),i=s(e,g);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[r.jsx(u,{config:l,filters:e,onChange:n=>t([...n]),placeholder:"Filter books by title, author, year, genre...",resultCount:i.length}),r.jsx(h,{data:i,columns:b,idKey:"id",hasHover:!0})]})}},a={render:()=>{const[e,t]=d.useState([{field:"genre",operator:"is",value:{type:"enum",value:"sci-fi"}}]),{config:l,applyFilters:s}=m(f,"Books"),i=s(e,g);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[r.jsx(u,{config:l,filters:e,onChange:n=>t([...n]),placeholder:"Filter books...",resultCount:i.length}),r.jsx(h,{data:i,columns:b,idKey:"id",hasHover:!0,isStriped:!0})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [filters, setFilters] = useState<PowerSearchFilter[]>([]);
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs, 'Books');
    const filteredBooks = applyFilters(filters, books);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <PowerSearch config={config} filters={filters} onChange={newFilters => setFilters([...newFilters])} placeholder="Filter books by title, author, year, genre..." resultCount={filteredBooks.length} />
        <Table data={filteredBooks} columns={columns} idKey="id" hasHover />
      </div>;
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [filters, setFilters] = useState<PowerSearchFilter[]>([{
      field: 'genre',
      operator: 'is',
      value: {
        type: 'enum',
        value: 'sci-fi'
      }
    }]);
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs, 'Books');
    const filteredBooks = applyFilters(filters, books);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <PowerSearch config={config} filters={filters} onChange={newFilters => setFilters([...newFilters])} placeholder="Filter books..." resultCount={filteredBooks.length} />
        <Table data={filteredBooks} columns={columns} idKey="id" hasHover isStriped />
      </div>;
  }
}`,...a.parameters?.docs?.source}}};const de=["Default","WithPresetFilters"];export{o as Default,a as WithPresetFilters,de as __namedExportsOrder,ce as default};
