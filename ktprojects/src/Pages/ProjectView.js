 
import '../App.css';
import Logo from "../assets/logo.png"; 
import BeepBop from "../assets/beepBop.png"; 
import { read } from '../components/supabase/functions';
import { useState } from 'react';
import SearchBar from "react-js-search"; 
import SearchInput from "react-search-input"; 
import slide5 from "../assets/slide5.png"
import {GraphCanvas} from "reagraph";
import { useLocation, useNavigate, useRoutes } from 'react-router-dom';
export default function Projects({params}) {
   const testArr = [1,1,1,1,1]; 
   const {state} = useLocation();
   const [selectedNode, setSelectedNode] = useState(null);
   const [selectedDetailNode, setSelectedDetailNode] = useState(null);
   const [selectedDocument, setSelectedDocument] = useState(null);
   const [documentContent, setDocumentContent] = useState('');
    
   const projectMetadata = state.payload;

   // Document data for each detailed node
   const documentData = {
     'd-2': [
       { id: 'doc-1', name: 'Vision Statement', type: 'doc', date: 'Nov 10, 2025' },
       { id: 'doc-2', name: 'Strategic Goals', type: 'doc', date: 'Nov 8, 2025' },
       { id: 'doc-3', name: 'Roadmap', type: 'doc', date: 'Nov 5, 2025' },
     ],
     'd-3': [
       { id: 'doc-4', name: 'Objectives Overview', type: 'doc', date: 'Nov 10, 2025' },
       { id: 'doc-5', name: 'Success Metrics', type: 'doc', date: 'Nov 7, 2025' },
       { id: 'doc-6', name: 'Requirements', type: 'doc', date: 'Nov 4, 2025' },
     ],
     'd-4': [
       { id: 'doc-7', name: 'Timeline Plan', type: 'doc', date: 'Nov 10, 2025' },
       { id: 'doc-8', name: 'Milestones', type: 'doc', date: 'Nov 6, 2025' },
       { id: 'doc-9', name: 'Schedule', type: 'doc', date: 'Nov 3, 2025' },
     ],
     'd-2-contrib': [
       { id: 'doc-10', name: 'Team Lead Profile', type: 'doc', date: 'Nov 10, 2025' },
       { id: 'doc-11', name: 'Contact Info', type: 'doc', date: 'Nov 9, 2025' },
     ],
     'd-3-contrib': [
       { id: 'doc-12', name: 'Developer List', type: 'doc', date: 'Nov 10, 2025' },
       { id: 'doc-13', name: 'Skill Set', type: 'doc', date: 'Nov 8, 2025' },
       { id: 'doc-14', name: 'Availability', type: 'doc', date: 'Nov 7, 2025' },
     ],
     'd-4-contrib': [
       { id: 'doc-15', name: 'Design System', type: 'doc', date: 'Nov 10, 2025' },
       { id: 'doc-16', name: 'UI Guidelines', type: 'doc', date: 'Nov 8, 2025' },
       { id: 'doc-17', name: 'Prototypes', type: 'doc', date: 'Nov 5, 2025' },
     ],
     'd-2-product': [
       { id: 'doc-18', name: 'Features List', type: 'doc', date: 'Nov 10, 2025' },
       { id: 'doc-19', name: 'Feature Specs', type: 'doc', date: 'Nov 8, 2025' },
     ],
     'd-3-product': [
       { id: 'doc-20', name: 'Tech Stack', type: 'doc', date: 'Nov 10, 2025' },
       { id: 'doc-21', name: 'Architecture', type: 'doc', date: 'Nov 7, 2025' },
       { id: 'doc-22', name: 'Database Schema', type: 'doc', date: 'Nov 6, 2025' },
     ],
     'd-4-product': [
       { id: 'doc-23', name: 'Release Notes', type: 'doc', date: 'Nov 10, 2025' },
       { id: 'doc-24', name: 'Deployment Guide', type: 'doc', date: 'Nov 8, 2025' },
     ],
   };

   // Detailed graph data for each node
   const detailedGraphData = {
     'n-1': {
       label: 'Project Name',
       nodes: [
         { id: 'd-1', label: 'Project Name' },
         { id: 'd-2', label: 'Vision' },
         { id: 'd-3', label: 'Objectives' },
         { id: 'd-4', label: 'Timeline' },
       ],
       edges: [
         { id: 'd-e1', source: 'd-1', target: 'd-2', label: '' },
         { id: 'd-e2', source: 'd-1', target: 'd-3', label: '' },
         { id: 'd-e3', source: 'd-1', target: 'd-4', label: '' },
       ]
     },
     'n-2': {
       label: 'Contributors',
       nodes: [
         { id: 'd-1', label: 'Contributors' },
         { id: 'd-2', label: 'Team Lead' },
         { id: 'd-3', label: 'Developers' },
         { id: 'd-4', label: 'Designers' },
       ],
       edges: [
         { id: 'd-e1', source: 'd-1', target: 'd-2', label: '' },
         { id: 'd-e2', source: 'd-1', target: 'd-3', label: '' },
         { id: 'd-e3', source: 'd-1', target: 'd-4', label: '' },
       ]
     },
     'n-3': {
       label: 'Product',
       nodes: [
         { id: 'd-1', label: 'Product' },
         { id: 'd-2', label: 'Features' },
         { id: 'd-3', label: 'Technology' },
         { id: 'd-4', label: 'Release' },
       ],
       edges: [
         { id: 'd-e1', source: 'd-1', target: 'd-2', label: '' },
         { id: 'd-e2', source: 'd-1', target: 'd-3', label: '' },
         { id: 'd-e3', source: 'd-1', target: 'd-4', label: '' },
       ]
     },
     'n-4': {
       label: 'Governance',
       nodes: [
         { id: 'd-1', label: 'Governance' },
         { id: 'd-2', label: 'Leadership' },
         { id: 'd-3', label: 'Decisions' },
         { id: 'd-4', label: 'Resources' },
       ],
       edges: [
         { id: 'd-e1', source: 'd-1', target: 'd-2', label: '' },
         { id: 'd-e2', source: 'd-1', target: 'd-3', label: '' },
         { id: 'd-e3', source: 'd-1', target: 'd-4', label: '' },
       ]
     },
     'n-5': {
       label: 'Media',
       nodes: [
         { id: 'd-1', label: 'Media' },
         { id: 'd-2', label: 'Images' },
         { id: 'd-3', label: 'Videos' },
         { id: 'd-4', label: 'Documentation' },
       ],
       edges: [
         { id: 'd-e1', source: 'd-1', target: 'd-2', label: '' },
         { id: 'd-e2', source: 'd-1', target: 'd-3', label: '' },
         { id: 'd-e3', source: 'd-1', target: 'd-4', label: '' },
       ]
     }
   }; 


   
   
 const testUI = (
       <p>props passed on: {
 
 
            <>
            <h1>{projectMetadata.title}</h1>
            <img src = {projectMetadata.img}/>
            <p>{projectMetadata.description}</p>
            </>
        
    
    }</p>
 );

  return (
    <div className="App" >

        <div 
        style = {{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            paddingInline: 25, 
            borderBottom:"solid rgba(1,1,1,.25) 1px",
            paddingBottom: 15, 
            marginInline: 25,
            
        }}
        className = "headerRepo" 
        >
            <img style = {{borderRadius: 100}} src = {projectMetadata.img} width={75}/>
            <h2 style = {{fontSize: 20}}>{projectMetadata.title}</h2>
            </div>
 
   

   <div 
   style = {{
   position:"relative",
   display:"flex",
   height: 500,
   width: "100%",
   padding: 5,

   }}>
       {selectedDocument ? (
         // Document Editor View
         <div style={{
           width: '100%',
           display: 'flex',
           flexDirection: 'column',
           backgroundColor: '#fafafa'
         }}>
           <div style={{
             padding: '16px 20px',
             borderBottom: '1px solid rgba(0, 73, 151, 0.2)',
             backgroundColor: 'white',
             display: 'flex',
             justifyContent: 'space-between',
             alignItems: 'center'
           }}>
             <h2 style={{
               margin: '0',
               color: 'rgba(0, 73, 151, 1)',
               fontSize: '20px'
             }}>
               {selectedDocument.name}
             </h2>
             <div style={{
               display: 'flex',
               gap: '10px'
             }}>
               <button
                 onClick={() => {
                   alert('Document saved!');
                 }}
                 style={{
                   padding: '8px 16px',
                   fontSize: '14px',
                   backgroundColor: 'rgba(0, 73, 151, 1)',
                   color: 'white',
                   border: 'none',
                   borderRadius: '4px',
                   cursor: 'pointer',
                   transition: 'background-color 0.3s ease'
                 }}
                 onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0, 100, 200, 1)'}
                 onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0, 73, 151, 1)'}
               >
                 💾 Save
               </button>
               <button
                 onClick={() => {
                   alert('Document archived!');
                 }}
                 style={{
                   padding: '8px 16px',
                   fontSize: '14px',
                   backgroundColor: 'rgba(100, 100, 100, 1)',
                   color: 'white',
                   border: 'none',
                   borderRadius: '4px',
                   cursor: 'pointer',
                   transition: 'background-color 0.3s ease'
                 }}
                 onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(120, 120, 120, 1)'}
                 onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(100, 100, 100, 1)'}
               >
                 📦 Archive
               </button>
             </div>
           </div>
           <textarea
             value={documentContent}
             onChange={(e) => setDocumentContent(e.target.value)}
             style={{
               flex: 1,
               padding: '20px',
               border: 'none',
               backgroundColor: 'white',
               fontFamily: 'monospace',
               fontSize: '14px',
               color: 'rgba(0, 0, 0, 0.8)',
               resize: 'none',
               outline: 'none'
             }}
             placeholder="Start typing..."
           />
           <div style={{
             padding: '12px 20px',
             borderTop: '1px solid rgba(0, 73, 151, 0.2)',
             backgroundColor: 'white',
             fontSize: '12px',
             color: 'rgba(0, 0, 0, 0.5)'
           }}>
             Last modified: {selectedDocument.date} | Words: {documentContent.split(/\s+/).length}
           </div>
         </div>
       ) : !selectedDetailNode ? (
         <GraphCanvas 
         onNodeClick={(node) => {
           // If in main view, drill into detail
           if (!selectedNode) {
             setSelectedNode(node.id);
             return;
           }
           // If in detailed view, check if it's a non-central node
           if (selectedNode && node.id !== 'd-1') {
             setSelectedDetailNode(node.id);
           }
         }}
         sizingType='centrality'
         sizingAttribute='70px'
         minNodeSize={10}
         
       theme={{ canvas: { 
          background: '#fafafa' }, 
          node: { 
              fill: 'rgba(0, 73, 151, 1)', 
              activeFill: 'rgba(0, 100, 200, 1)', 
              opacity: 1, 
              selectedOpacity: 1, 
              inactiveOpacity: 0.6, 
              label: { 
                color: 'rgba(0, 73, 151, 1)', 
                stroke: 'transparent', 
                activeColor: 'rgba(0, 73, 151, 1)',
                fontSize: 12,
                fontWeight: 'bold'
              }, 
              subLabel: { 
                color: 'rgba(0, 73, 151, 1)', 
                stroke: 'transparent', 
                activeColor: 'rgba(0, 73, 151, 1)' 
              } 
          }, 
          lasso: { 
            border: '2px solid rgba(0, 73, 151, 1)', 
            background: 'rgba(0, 73, 151, 0.1)' 
          }, 
          ring: { 
            fill: 'rgba(0, 73, 151, 0.2)', 
            activeFill: 'rgba(0, 100, 200, 1)' 
          }, 
          edge: { 
            fill: 'rgba(0, 73, 151, 0.5)', 
            activeFill: 'rgba(0, 100, 200, 1)', 
            opacity: 0.8, 
            selectedOpacity: 1, 
            inactiveOpacity: 0.2, 
            label: { 
              stroke: 'transparent', 
              color: 'rgba(0, 73, 151, 1)', 
              activeColor: 'rgba(0, 100, 200, 1)', 
              fontSize: 6 
            }, 
            subLabel: { 
              color: '#ddd', 
              stroke: 'transparent', 
              activeColor: 'rgba(0, 100, 200, 1)' 
            } 
          }, 
          arrow: { 
            fill: 'rgba(0, 73, 151, 0.5)', 
            activeFill: 'rgba(0, 100, 200, 1)' 
          }, 
          cluster: { 
            stroke: 'rgba(0, 73, 151, 1)', 
            opacity: 1, 
            selectedOpacity: 1, 
            inactiveOpacity: 0.3, 
            label: { 
              stroke: 'transparent', 
              color: 'rgba(0, 73, 151, 1)' 
            } 
          } 
        }}
        nodes={selectedNode ? detailedGraphData[selectedNode].nodes : [
        {
          id: 'n-1',
          label: 'Project Name'
        },
        {
          id: 'n-2',
          label: 'Contributors'
        },
        {
          id: 'n-3',
          label: 'Product'
        },
        {
          id: 'n-4',
          label: 'Governance'
        },
           {
          id: 'n-5',
          label: 'Media'
        }
      ]}
      edges={selectedNode ? detailedGraphData[selectedNode].edges : [
        {
          id: '1->2',
          source: 'n-1',
          target: 'n-2',
          label: ''
        },
        {
          id: '1->3',
          source: 'n-1',
          target: 'n-3',
          label: ''
        },
        {
          id: '1->4',
          source: 'n-1',
          target: 'n-4',
          label: ''
        },
      {
          id: '1->5',
          source: 'n-1',
          target: 'n-5',
          label: ''
        },
        
      ]}
         />
       ) : (
         // Document List View
         <div style={{
           width: '100%',
           display: 'flex',
           flexDirection: 'column',
           gap: '12px',
           padding: '20px',
           backgroundColor: '#fafafa',
           overflowY: 'auto'
         }}>
           {documentData[selectedDetailNode]?.map((doc) => (
             <div 
               key={doc.id}
               onClick={() => {
                 setSelectedDocument(doc);
                 setDocumentContent(`# ${doc.name}\n\nDocument created on ${doc.date}\n\n[Your content here...]`);
               }}
               style={{
                 display: 'flex',
                 alignItems: 'center',
                 padding: '16px',
                 backgroundColor: 'white',
                 border: '1px solid rgba(0, 73, 151, 0.2)',
                 borderRadius: '8px',
                 cursor: 'pointer',
                 transition: 'all 0.3s ease',
                 boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
               }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.backgroundColor = 'rgba(0, 73, 151, 0.05)';
                 e.currentTarget.style.borderColor = 'rgba(0, 73, 151, 0.5)';
                 e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 73, 151, 0.1)';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.backgroundColor = 'white';
                 e.currentTarget.style.borderColor = 'rgba(0, 73, 151, 0.2)';
                 e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
               }}
             >
               <div style={{
                 width: '40px',
                 height: '40px',
                 borderRadius: '6px',
                 backgroundColor: 'rgba(0, 73, 151, 0.1)',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 marginRight: '16px',
                 fontSize: '20px'
               }}>
                 📄
               </div>
               <div style={{ flex: 1 }}>
                 <h4 style={{
                   margin: '0 0 4px 0',
                   color: 'rgba(0, 73, 151, 1)',
                   fontSize: '16px',
                   fontWeight: '600'
                 }}>
                   {doc.name}
                 </h4>
                 <p style={{
                   margin: '0',
                   color: 'rgba(0, 0, 0, 0.5)',
                   fontSize: '12px'
                 }}>
                   {doc.date}
                 </p>
               </div>
               <div style={{
                 color: 'rgba(0, 73, 151, 0.6)',
                 fontSize: '18px'
               }}>
                 →
               </div>
             </div>
           ))}
         </div>
       )}
    </div>

    <div style={{ 
      marginTop: '20px', 
      marginBottom: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingInline: '25px'
    }}>
      <div style={{ display: 'flex', gap: '10px' }}>
        {(selectedNode || selectedDetailNode || selectedDocument) && (
          <button 
            onClick={() => {
              if (selectedDocument) {
                setSelectedDocument(null);
                setDocumentContent('');
              } else if (selectedDetailNode) {
                setSelectedDetailNode(null);
              } else {
                setSelectedNode(null);
              }
            }}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: 'rgba(0, 73, 151, 1)',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0, 100, 200, 1)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0, 73, 151, 1)'}
          >
            ← {selectedDocument ? 'Back to Documents' : selectedDetailNode ? 'Back to Details' : 'Back to Main View'}
          </button>
        )}
      </div>
      {(selectedNode || selectedDetailNode || selectedDocument) && (
        <h3 style={{ 
          color: 'rgba(0, 73, 151, 1)', 
          margin: '0',
          fontSize: '18px'
        }}>
          {selectedDocument 
            ? `Editing: ${selectedDocument.name}` 
            : selectedDetailNode 
            ? `Viewing Documents` 
            : `Viewing: ${detailedGraphData[selectedNode]?.label}`}
        </h3>
      )}
    </div>

    <div style = {{paddingInline: 0, borderTop:"solid rgba(1,1,1,.25) 1px", marginInline: 20}}>
        <h1 style = {{textAlign:"left", fontSize: 25, fontWeight: 340, color: "rgba(9, 69, 160, 1)"}}>Check out related projects</h1>
    </div>

       </div>
  );
}