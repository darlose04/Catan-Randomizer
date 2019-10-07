import React from "react";

const Regular = ({ regularResources, regularNumbers, regularLayout }) => {
  return (
    <div>
      <button
        type='button'
        className='mt-5 btn btn-primary btn-block'
        data-toggle='modal'
        data-target='#regularModal'
      >
        Regular Version
      </button>

      <div
        className='modal fade'
        id='regularModal'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='regularVersion'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='regularVersion'>
                Regular Layout
              </h5>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              {regularLayout(regularResources, regularNumbers)}
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regular;
