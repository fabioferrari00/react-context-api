import React from 'react'
import { NavLink, useBeforeUnload } from 'react-router-dom'
import { useBudget } from '../contexts/BudgetContext';

const Header = () => {

  const { budgetMode, toggleBudgetMode } = useBudget();

  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <ul className="list-unstyled d-flex">
                <li className='me-3'><NavLink to="/">Home</NavLink></li>
                <li className='me-3'><NavLink to="/about-us">About us</NavLink></li>
                <li className='me-3'><NavLink to="/products">Products</NavLink></li>
              </ul>
              <button className='btn btn-primary' onClick={toggleBudgetMode}>
                {budgetMode ? 'Disattiva modalità budget' : 'Attiva modalità budget'}
              </button>
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
