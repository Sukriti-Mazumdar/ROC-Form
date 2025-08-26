import React, { useState } from 'react';

const ROCDetailsForm = ({ onLogout }) => {
  
  const [formData, setFormData] = useState({
    companyName: '',
    formName: '',
    yearPeriod: '',
    dateOfFiling: '',
    srn: '',
    amount: '',
    noDuplicacy: false,
    resubmissionOfForm: false,
    attachments: [],
    pendingFormScanning: false,
    incorporationDocument: '',
    certificateOfIncorporation: '',
    panCard: '',
    moa: '',
    ptax: '',
    comments: ''
  });

  const [searchCriteria, setSearchCriteria] = useState({
    searchType: 'companies',
    searchValue: ''
  });

  const [summaryFilter, setSummaryFilter] = useState({
    type: 'completed',
    filterBy: 'year'
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...files]
    }));
  };

  const removeAttachment = (index) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }));
  };

    

  const handleReset = () => {
    setFormData({
      companyName: '',
      formName: '',
      yearPeriod: '',
      dateOfFiling: '',
      srn: '',
      amount: '',
      noDuplicacy: false,
      resubmissionOfForm: false,
      attachments: [],
      pendingFormScanning: false,
      incorporationDocument: '',
      certificateOfIncorporation: '',
      panCard: '',
      moa: '',
      ptax: '',
      comments: ''
    });
  };

  const handleSearch = () => {
    console.log('Searching:', searchCriteria);
    alert(`Searching ${searchCriteria.searchType} for: ${searchCriteria.searchValue}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('ROC Details saved successfully!');
  };

  const formStyles = {
    container: {
      maxWidth: '1200px',
      margin: '20px auto',
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif'
    },
    title: {
      textAlign: 'center',
      color: '#333',
      marginBottom: '30px',
      fontSize: '24px',
      fontWeight: 'bold'
    },
    section: {
      marginBottom: '25px',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '6px',
      backgroundColor: '#f9f9f9'
    },
    sectionTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '15px',
      color: '#444',
      borderBottom: '2px solid #007bff',
      paddingBottom: '5px'
    },
    formRow: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '15px',
      marginBottom: '15px'
    },
    formGroup: {
      flex: '1',
      minWidth: '200px',
      display: 'flex',
      flexDirection: 'column'
    },
    label: {
      fontSize: '14px',
      fontWeight: 'bold',
      marginBottom: '5px',
      color: '#333'
    },
    input: {
      padding: '8px 12px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '14px',
      transition: 'border-color 0.3s'
    },
    select: {
      padding: '8px 12px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '14px',
      backgroundColor: 'white',
      cursor: 'pointer'
    },
    textarea: {
      padding: '8px 12px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '14px',
      minHeight: '80px',
      resize: 'vertical'
    },
    checkbox: {
      marginRight: '8px',
      transform: 'scale(1.2)'
    },
    checkboxLabel: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '14px',
      cursor: 'pointer'
    },
    fileUpload: {
      padding: '10px',
      border: '2px dashed #ccc',
      borderRadius: '6px',
      textAlign: 'center',
      cursor: 'pointer',
      backgroundColor: '#fafafa'
    },
    attachmentList: {
      marginTop: '10px'
    },
    attachmentItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '5px 10px',
      backgroundColor: 'white',
      border: '1px solid #ddd',
      borderRadius: '4px',
      marginBottom: '5px'
    },
    removeBtn: {
      backgroundColor: '#dc3545',
      color: 'white',
      border: 'none',
      padding: '2px 8px',
      borderRadius: '3px',
      cursor: 'pointer',
      fontSize: '12px'
    },
    buttonGroup: {
      display: 'flex',
      gap: '15px',
      justifyContent: 'center',
      marginTop: '30px'
    },
    button: {
      padding: '12px 30px',
      fontSize: '16px',
      borderRadius: '6px',
      border: 'none',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'background-color 0.3s'
    },
    saveBtn: {
      backgroundColor: '#2868f0ff',
      color: 'white'
    },
    resetBtn: {
      backgroundColor: '#6c757d',
      color: 'white'
    },
    searchBtn: {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '8px 15px',
      fontSize: '14px'
    }
  };

  return (
    <div style={formStyles.container}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={formStyles.title}>ROC Details Entry</h1>
        <button 
          onClick={onLogout} 
          style={{
            padding: '8px 16px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Logout
        </button>
      </div>
      
      <form onSubmit={handleSubmit}>
        {/* Basic Company Information */}
        <div style={formStyles.section}>
          <h2 style={formStyles.sectionTitle}>Company Information</h2>
          <div style={formStyles.formRow}>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label}>Company Name *</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                style={formStyles.input}
                placeholder="Enter company name"
                required
              />
            </div>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label}>Form Name *</label>
              <input
                type="text"
                name="formName"
                value={formData.formName}
                onChange={handleInputChange}
                style={formStyles.input}
                placeholder="Enter form name"
                required
              />
            </div>
          </div>
          
          <div style={formStyles.formRow}>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label}>Year/Period *</label>
              <input
                type="text"
                name="yearPeriod"
                value={formData.yearPeriod}
                onChange={handleInputChange}
                style={formStyles.input}
                placeholder="Enter year/period"
                required
              />
            </div>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label}>Date of Filing *</label>
              <input
                type="date"
                name="dateOfFiling"
                value={formData.dateOfFiling}
                onChange={handleInputChange}
                style={formStyles.input}
                required
              />
            </div>
          </div>
          
          <div style={formStyles.formRow}>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label}>SRN (Service Request Number)</label>
              <input
                type="text"
                name="srn"
                value={formData.srn}
                onChange={handleInputChange}
                style={formStyles.input}
                placeholder="Enter SRN"
              />
            </div>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label}>Amount</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                style={formStyles.input}
                placeholder="Enter amount"
                min="0"
                step="0.01"
              />
            </div>
          </div>
        </div>

        {/* Form Status */}
        <div style={formStyles.section}>
          <h2 style={formStyles.sectionTitle}>Form Status</h2>
          <div style={formStyles.formRow}>
            <div style={formStyles.formGroup}>
              <label style={formStyles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="noDuplicacy"
                  checked={formData.noDuplicacy}
                  onChange={handleInputChange}
                  style={formStyles.checkbox}
                />
                No Duplicacy
              </label>
            </div>
            <div style={formStyles.formGroup}>
              <label style={formStyles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="resubmissionOfForm"
                  checked={formData.resubmissionOfForm}
                  onChange={handleInputChange}
                  style={formStyles.checkbox}
                />
                Resubmission of Form
              </label>
            </div>
            <div style={formStyles.formGroup}>
              <label style={formStyles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="pendingFormScanning"
                  checked={formData.pendingFormScanning}
                  onChange={handleInputChange}
                  style={formStyles.checkbox}
                />
                Pending Form for Scanning
              </label>
            </div>
          </div>
        </div>

        {/* Documents */}
        <div style={formStyles.section}>
          <h2 style={formStyles.sectionTitle}>Documents</h2>
          <div style={formStyles.formRow}>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label}>Incorporation Document</label>
              <input
                type="text"
                name="incorporationDocument"
                value={formData.incorporationDocument}
                onChange={handleInputChange}
                style={formStyles.input}
                placeholder="Enter document details"
              />
            </div>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label}>Certificate of Incorporation</label>
              <input
                type="text"
                name="certificateOfIncorporation"
                value={formData.certificateOfIncorporation}
                onChange={handleInputChange}
                style={formStyles.input}
                placeholder="Enter certificate details"
              />
            </div>
          </div>
          
          <div style={formStyles.formRow}>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label}>PAN Card</label>
              <input
                type="text"
                name="panCard"
                value={formData.panCard}
                onChange={handleInputChange}
                style={formStyles.input}
                placeholder="Enter PAN details"
              />
            </div>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label}>MOA (Memorandum of Association)</label>
              <input
                type="text"
                name="moa"
                value={formData.moa}
                onChange={handleInputChange}
                style={formStyles.input}
                placeholder="Enter MOA details"
              />
            </div>
          </div>
          
          <div style={formStyles.formRow}>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label}>PTAX</label>
              <input
                type="text"
                name="ptax"
                value={formData.ptax}
                onChange={handleInputChange}
                style={formStyles.input}
                placeholder="Enter PTAX details"
              />
            </div>
          </div>
        </div>

        {/* File Attachments */}
        <div style={formStyles.section}>
          <h2 style={formStyles.sectionTitle}>Attachments</h2>
          <div style={formStyles.fileUpload}>
            <input
              type="file"
              multiple
              onChange={handleFileUpload}
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              style={{ display: 'none' }}
              id="fileUpload"
            />
            <label htmlFor="fileUpload" style={{ cursor: 'pointer' }}>
              Click to upload files or drag and drop
              <br />
              <small>Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB each)</small>
            </label>
          </div>
          
          {formData.attachments.length > 0 && (
            <div style={formStyles.attachmentList}>
              {formData.attachments.map((file, index) => (
                <div key={index} style={formStyles.attachmentItem}>
                  <span>{file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                  <button
                    type="button"
                    onClick={() => removeAttachment(index)}
                    style={formStyles.removeBtn}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Search Functionality */}
        <div style={formStyles.section}>
          <h2 style={formStyles.sectionTitle}>Search & Filter</h2>
          <div style={formStyles.formRow}>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label}>Search By</label>
              <select
                value={searchCriteria.searchType}
                onChange={(e) => setSearchCriteria(prev => ({ ...prev, searchType: e.target.value }))}
                style={formStyles.select}
              >
                <option value="companies">Companies Wise</option>
                <option value="year">Year Wise</option>
                <option value="form">Form Wise</option>
                <option value="fees">Fees Wise</option>
                <option value="group">Group Wise</option>
                <option value="srn">SRN No Based</option>
                <option value="period">Period Based</option>
                <option value="dateRange">Date Range Wise</option>
              </select>
            </div>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label}>Search Value</label>
              <input
                type="text"
                value={searchCriteria.searchValue}
                onChange={(e) => setSearchCriteria(prev => ({ ...prev, searchValue: e.target.value }))}
                style={formStyles.input}
                placeholder="Enter search value"
              />
            </div>
            <div style={formStyles.formGroup}>
              <button
                type="button"
                onClick={handleSearch}
                style={{ ...formStyles.button, ...formStyles.searchBtn, marginTop: '25px' }}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Summary Options */}
        <div style={formStyles.section}>
          <h2 style={formStyles.sectionTitle}>Summary Options</h2>
          <div style={formStyles.formRow}>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label}>Summary Type</label>
              <select
                value={summaryFilter.type}
                onChange={(e) => setSummaryFilter(prev => ({ ...prev, type: e.target.value }))}
                style={formStyles.select}
              >
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
              </select>
            </div>
            <div style={formStyles.formGroup}>
              <label style={formStyles.label}>Filter By</label>
              <select
                value={summaryFilter.filterBy}
                onChange={(e) => setSummaryFilter(prev => ({ ...prev, filterBy: e.target.value }))}
                style={formStyles.select}
              >
                <option value="year">Year Wise</option>
                <option value="form">Form Wise</option>
                <option value="client">Client Wise</option>
                <option value="group">Group Wise</option>
              </select>
            </div>
          </div>
        </div>

        {/* Comments */}
        <div style={formStyles.section}>
          <h2 style={formStyles.sectionTitle}>Comments/Remarks</h2>
          <div style={formStyles.formGroup}>
            <label style={formStyles.label}>Additional Comments</label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleInputChange}
              style={formStyles.textarea}
              placeholder="Enter any additional remarks or comments..."
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div style={formStyles.buttonGroup}>
          <button
            type="button"
            onClick={handleReset}
            style={{ ...formStyles.button, ...formStyles.resetBtn }}
          >
            Reset
          </button>
          <button
            type="submit"
            style={{ ...formStyles.button, ...formStyles.saveBtn }}
          >
            Save ROC Details
          </button>
        </div>
      </form>
    </div>
  );
};

export default ROCDetailsForm;