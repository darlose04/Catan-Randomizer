import React from "react";

const Expansion = ({
  expansionResources,
  expansionNumbers,
  expansionLayout
}) => {
  return (
    <div>
      <button
        type='button'
        className='mt-5 btn btn-danger btn-block'
        data-toggle='modal'
        data-target='#expansionVersion'
      >
        Expansion Version
      </button>

      <div
        className='modal fade'
        id='expansionVersion'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='expansionModal'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='expansionModal'>
                Expansion Layout
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
              {expansionLayout(expansionResources, expansionNumbers)}
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

export default Expansion;
