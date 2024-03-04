
import React from 'react';
import './DataTable.css';

export default function DataTable() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="data-table-fluid mt-3">
      <div className="row">
        <div className="col">
          <table className="table table-bordered table-merge-with-navbar">
            <colgroup>
              <col /> 
              <col />
              <col style={{ backgroundColor: ' rgb(153, 237, 98)' }}/>
            </colgroup>
            <tbody>
              <tr height="50">
                <td>
                  <img
                    src="/media1.png"
                    alt="image"
                    width="80"
                    height="30"
                  />
                </td>
                <td>Don't Sweat it Subscribe</td>
                <td className="text-center">
                  <button
                    onClick={scrollToBottom}
                    className="btn btn-primary"
                    style={{ color: 'black',
                    backgroundColor: ' rgb(153, 237, 98)',
                    borderColor: ' rgb(153, 237, 98)', 
                  }}
                  >
                    Contact Us
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  );
}
