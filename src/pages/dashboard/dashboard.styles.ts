import styled, { css } from 'styled-components';


  interface StatusBadgeProps {
    status: 'success' | 'failed' | 'pending';
  }

  interface ActionButtonProps {
    variant: 'edit' | 'delete';
  }


  
export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f7fa;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;

  @media (min-width: 768px) {
    padding: 0 30px;
    height: 70px;
  }
`;

export const Logo = styled.div`
  margin-left: 10px;

  @media (min-width: 768px) {
    font-size: 22px;
    margin-left: 0;
  }
`;

export const SidebarToggle = styled.button`
  background: none;
  border: none;
  color: #2c3e50;
  cursor: pointer;
  display: block;
  
  @media (min-width: 992px) {
    display: none;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    background-color: #f8f9fa;
  }

  @media (min-width: 768px) {
    padding: 10px 15px;
  }
`;

export const ProfileAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #3498db;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 8px;
  font-size: 12px;

  @media (min-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 14px;
    margin-right: 12px;
  }
`;

export const ProfileName = styled.span`
  font-weight: 600;
  font-size: 12px;
  color: #2c3e50;
  margin-right: 6px;
  display: none;

  @media (min-width: 480px) {
    display: inline;
    font-size: 14px;
    margin-right: 8px;
  }
`;

export const DropdownIcon = styled.span<{ isOpen: boolean }>`
  transition: transform 0.2s ease;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  display: flex;
  align-items: center;
  font-size: 14px;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 180px;
  padding: 8px 0;
  z-index: 10;

  @media (min-width: 768px) {
    min-width: 200px;
    padding: 10px 0;
  }
`;

export const DropdownItem = styled.div`
  padding: 8px 16px;
  font-size: 13px;
  color: #2c3e50;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f8f9fa;
  }

  &:first-child {
    color: #7f8c8d;
    border-bottom: 1px solid #ecf0f1;
    margin-bottom: 4px;
    cursor: default;
    
    &:hover {
      background-color: transparent;
    }
  }

  @media (min-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

export const MainLayout = styled.div`
  display: flex;
  flex: 1;
  position: relative;
`;

export const Sidebar = styled.aside<{ isOpen: boolean }>`
  width: 240px;
  background-color: #7000F6;
  border-right: 1px solid #ecf0f1;
  padding: 20px 1px;
  position: fixed;
  top: 60px;
  bottom: 0;
  left: 0;
  z-index: 90;
  transform: translateX(-100%);
  transition: transform 0.3s ease;

  ${props => props.isOpen && css`
    transform: translateX(0);
  `}

  @media (min-width: 992px) {
    position: static;
    transform: translateX(0);
    top: auto;
  }
`;

export const MobileOverlay = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 80;

  @media (min-width: 992px) {
    display: none;
  }
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  padding: 60px 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color:rgb(188, 128, 244);
  }

  @media (min-width: 768px) {
    padding: 12px 25px;
  }
`;

export const MenuIcon = styled.span`
  margin-right: 10px;
  color: #FFFFFFB8;
  font-size: 11px;
  display: flex;
  border:1.33px
  align-items: center;

  @media (min-width: 768px) {
    font-size: 18px;
    margin-right: 15px;
  }
`;

export const MenuText = styled.span`
  font-size: 16px;
  color: #FFFFFFB8;
  font-weight: 500;
  letter-spacing: -3%;
  font-family: 'Satoshi', sans-serif;;
  line-height: 24px

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2px;
`;

export const TitleContent = styled.div``;

export const TitleText = styled.h2`
  font-size: 32px !important;
  color: #0A090B;
  font-weight: 500 !imortant;
  line-height: 120%;
  letter-spacing:-1%

  font-family: 'Satoshi', sans-serif !important;
`;

export const CaptionText = styled.p`
  color: #7F7D83;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
 font-family: 'Satoshi', sans-serif;
`;

export const AddButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #7000F6;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #7000F6;
    transform: scale(1.05);
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

export const Card = styled.div<{ color: string }>`
  background-color: ${props => props.color};
  border-radius: 8px;
  padding: 16px;
  width: 258px;
  gap:24px;


  h3 {
    font-size: 12px;
    color: #223E3B;
    margin-bottom: 15px;
    line-height: 100%;
      font-family: 'Satoshi', sans-serif;
      font-weight: 500;
  }

  .amount {
    font-size: 32px;
    font-weight: 500;
    color: #0A090B;
    margin-bottom: 5px;
     font-family: 'Satoshi', sans-serif;
  }

  .view-details {
    font-size: 13px;
    cursor: pointer;
    display: inline-block;
   
  }
`;

export const AmountText = styled.p`
  font-size: 32px !important;
  color: #0A090B !important;
  font-weight: 500;
  line-height: 80%;
  font-family: 'Satoshi', sans-serif !important;

  
  span {
    color: green; 
    font-weight: 400;
    color:#7F7D83;
    font-size:13px;
      font-family: 'Satoshi', sans-serif !important;
  }
`;

export const SearchSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 15px;


`;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 2px;
  padding: 10px 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    

  min-width: 250px;

      input {
    border: #E4E4E7;
    outline: none;
    width: 50%;
    font-size: 14px;
  }
`;

export const FilterSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: white;
  border: 1px solid #ecf0f1;
  border-radius: 8px;
  padding: 10px 15px;
  font-size: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Satoshi', sans-serif !important;

  &:hover {
    background-color: #f8f9fa;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #71717A;
  font-family: sans-serf;
  background-color: white;
  border: 1px solid #ecf0f1;
    padding: 10px 15px;
`;

export const PaginationButton = styled.button`
  background-color: white!important;
  border: 0px solid #ecf0f1;
  border-radius: 6px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
    &:hover {
    background-color: #f8f9fa;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

// Table styles
export const TableContainer = styled.div`
width: 100%;
overflow-x: auto;
-webkit-overflow-scrolling: touch;
margin-top: 20px;
border-radius: 8px;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
background: white;

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 600px; 

  th, td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #ecf0f1;
    color: #111827;
    font-size: 14px;
  }

  th {
    background-color: #f8f9fa;
    font-weight: 600;
    color: #2c3e50;
    position: sticky;
    top: 0;
  }

  tr:hover {
    background-color: #f8f9fa;
  }

 

  @media (max-width: 768px) {
    min-width: unset;
    width: 100%;

    th {
      display: none;
    }

    tr {
      display: block;
      margin-bottom: 15px;
      border-bottom: 2px solid #ecf0f1;
    }

    td {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 15px;
      border-bottom: 1px dotted #ecf0f1;

      &::before {
        content: attr(data-label);
        font-weight: 600;
        color: #7f8c8d;
        margin-right: 15px;
      }

      &:last-child {
        border-bottom: none;
      }

      &.action-cell {
        justify-content: flex-end;
      }
    }
  }
}
`;

// Button styles for table actions
export const EditButton = styled.button`
background: none;
border: none;
color: #3498db;
cursor: pointer;
padding: 5px;
border-radius: 4px;
transition: all 0.2s ease;

&:hover {
  background-color: #f0f7fc;
}
`;

export const DeleteButton = styled.button`
background: none;
border: none;
color: #e74c3c ;
cursor: pointer;
padding: 5px;
border-radius: 4px;
transition: all 0.2s ease;

&:hover {
  background-color: #fdf0f0;
}
`;



  

  export const StatusBadge = styled.span<StatusBadgeProps>`
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    gap: 4px;
  
    ${props => props.status === 'success' && css`
      background-color: #E8FFF6;
      color: #1ACE37;
      border: 1px solid #E8FFF6;
    `}
  
  
    ${props => props.status === 'failed' && css`
      background-color: #FFF5F5;
      color: #FF0F00;
      border: 1px solid #FFF5F5;
    `}
  
  
    ${props => props.status === 'pending' && css`
      background-color: #FFF6ED;
      color: #EA872D;
      border: 1px solid #FFF6ED;
    `}
  
   
    &::before {
     
      width: 6px;
      height: 6px;
      border-radius: 50%;
      display: inline-block;
  
      ${props => props.status === 'success' && css`
        background-color: #28a745;
      `}
  
      ${props => props.status === 'failed' && css`
        background-color: #dc3545;
      `}
  
      ${props => props.status === 'pending' && css`
        background-color: #ffc107;
      `}
    }
  `;

  export const ActionButton = styled.button<ActionButtonProps>`
  border: none;
  border-radius: 4px;
  padding: 6px 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  margin: 0 4px;

  // Edit button styles
  ${props => props.variant === 'edit' && css`
    background-color: #f0f0f0;  // Light gray background
    color: #333;               // Black icon
    &:hover {
      background-color: #e0e0e0;  // Slightly darker gray on hover
    }
  `}

  // Delete button styles
  ${props => props.variant === 'delete' && css`
    background-color: #ffebee;  // Light red background
    color: #f44336;            // Red icon
    &:hover {
      background-color: #ffcdd2;  // Slightly darker light red on hover
    }
  `}

  // Icon sizing
  svg {
    width: 14px;
    height: 14px;
  }
`;

  
export const Content = styled.main`
  flex: 1;
  padding: 40px;
  background-color: white;
  margin-top: 60px;

  @media (min-width: 992px) {
    // margin-left: 240px;
    margin-top: 0;
    padding: 30px;
  }

  h2 {
    color: #2c3e50;
    margin-bottom: 15px;
    font-size: 20px;

    @media (min-width: 768px) {
      font-size: 24px;
    }
  }

  p {
    color: #7f8c8d;
    margin-bottom: 20px;
  }

  .table-responsive {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    margin-top: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    background: white;

    table {
      width: 100%;
      border-collapse: collapse;

      th, td {
        padding: 12px 15px;
        text-align: left;
        border-bottom: 1px solid #ecf0f1;
      }

      th {
        background-color: #f8f9fa;
        font-weight: 600;
        color: #2c3e50;
      }

      tr:hover {
        background-color: #f8f9fa;
      }

      button {
        padding: 6px 12px;
        margin-right: 8px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 12px;

        &:first-child {
          background-color: #3498db;
          color: white;
        }

        &:last-child {
          background-color: #e74c3c;
          color: white;
        }
      }

      @media (max-width: 768px) {
        th {
          display: none;
        }

        tr {
          display: block;
          margin-bottom: 15px;
          border-bottom: 2px solid #ecf0f1;
        }

        td {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 15px;
          border-bottom: 1px dotted #ecf0f1;

          &::before {
            content: attr(data-label);
            font-weight: 600;
            color: #7f8c8d;
            margin-right: 15px;
          }

          &:last-child {
            border-bottom: none;
          }
        }
      }
    }
  }
`;
