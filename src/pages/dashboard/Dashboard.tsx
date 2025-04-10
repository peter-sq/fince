import{ useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import {
  DashboardContainer,
  Header,
  Logo,
  HeaderContent,
  UserProfile,
  ProfileAvatar,
  ProfileName,
  DropdownIcon,
  DropdownMenu,
  DropdownItem,
  MainLayout,
  Sidebar,
  SidebarToggle,
  SidebarMenu,
  MenuItem,
  MenuIcon,
  MenuText,
  Content,
  ProfileContainer,
  ProfileInfo,
  ProfileEmail,
  ProfileContent,
  BottomLine,
  MobileOverlay,
  TitleSection,
  TitleContent,
  TitleText,
  CaptionText,
  AddButton,
  CardsContainer,
  Card,
  SearchSection,
  SearchInput,
  FilterSection,
  FilterButton,
  PaginationContainer,
  PaginationButton,
  AmountText,
  TableContainer,
  StatusBadge,
  ActionButton
} from './dashboard.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileText, faReceipt, faMoneyBillTransfer, faSave,  faMoneyBill,
  faFilter,
  faChevronLeft,
  faChevronRight,
  faEdit,
  faTrash,
  faUser,
  faHome,
  faUsers,
  faFileAlt,
  faCreditCard,
  faCog,
  faChevronDown,
  faBars,
  faTimes,
  faPlus
 } from '@fortawesome/free-solid-svg-icons';


import logo from '../../assets/logo.png'

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  showBottomLine?: boolean;
}

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user:', error);
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

// Fetch posts using React Query
const { data: posts, isLoading, error } = useQuery({
  queryKey: ['posts'], 
  queryFn: async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  },
});


const { data: users } = useQuery({
  queryKey: ['users'], 
  queryFn: async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  },
});

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const getInitials = (name: string,  showBottomLine = true ) => {
    if (!name) return '';
    const names = name.split(' ');
    return names.map(n => n[0]).join('').toUpperCase();
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <DashboardContainer>
       {/* Header Section */}
      <Header>
        <SidebarToggle onClick={toggleSidebar}>
        {isSidebarOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
        </SidebarToggle>
        <Logo>
          <img src={logo} alt='logo' />
        </Logo>
        <HeaderContent>
          <UserProfile onClick={toggleDropdown}>
            <ProfileAvatar>
                 {user ? getInitials(user.name) : <FontAwesomeIcon icon={faUser} />}
            </ProfileAvatar>
            <ProfileName>{user?.name || 'User'}</ProfileName>
            <DropdownIcon isOpen={isDropdownOpen}>
              <FontAwesomeIcon icon={faChevronDown} />
            </DropdownIcon>
            {isDropdownOpen && (
              <DropdownMenu>
                <DropdownItem>{user?.email || 'user@example.com'}</DropdownItem>
                <DropdownItem>Logout</DropdownItem>
              </DropdownMenu>
            )}
          </UserProfile>
        </HeaderContent>
      </Header>
      <MainLayout>
        <Sidebar isOpen={isSidebarOpen}>
          <SidebarMenu>
            <MenuItem>
              <MenuIcon>
              <ProfileContainer>
              <ProfileContent>
                <ProfileAvatar>
                  {user ? getInitials(user.name || 'User') : <FontAwesomeIcon icon={faUser} />}
                </ProfileAvatar>
                <ProfileInfo>
                  <ProfileName>{user?.name || 'User Name'}</ProfileName>
                  <ProfileEmail>{user?.email || 'user@example.com'}</ProfileEmail>
                </ProfileInfo>
              </ProfileContent>
              <BottomLine />
            </ProfileContainer>
            </MenuIcon>
            </MenuItem>
            <MenuItem>
              <MenuIcon>
            <FontAwesomeIcon icon={faHome} />
                </MenuIcon>
              <MenuText>Overview</MenuText>
            </MenuItem>
            <MenuItem>
              <MenuIcon>
            <FontAwesomeIcon icon={faUsers}  />
                </MenuIcon>
              <MenuText>Users</MenuText>
            </MenuItem>
            <MenuItem>
              <MenuIcon>
                <FontAwesomeIcon icon={faFileText} />
                </MenuIcon>
              <MenuText>Posts</MenuText>
            </MenuItem>
            <MenuItem>
              <MenuIcon>
              <FontAwesomeIcon icon={faMoneyBill} />
                </MenuIcon>
              <MenuText>Transfers</MenuText>
            </MenuItem>
            <MenuItem>
              <MenuIcon>
              <FontAwesomeIcon icon={faCreditCard} />
                </MenuIcon>
              <MenuText>Deposits</MenuText>
            </MenuItem>
            <MenuItem>
              <MenuIcon>
              <FontAwesomeIcon icon={faSave} />
                </MenuIcon>
              <MenuText>Savings</MenuText>
            </MenuItem>
            <MenuItem>
              <MenuIcon>
              <FontAwesomeIcon icon={faMoneyBillTransfer} />
                </MenuIcon>
              <MenuText>Bill Payments</MenuText>
            </MenuItem>
            <MenuItem>
              <MenuIcon>
              <FontAwesomeIcon icon={faReceipt} />
                </MenuIcon>
              <MenuText>Reports</MenuText>
            </MenuItem>
            <MenuItem>
              <MenuIcon>
              <FontAwesomeIcon icon={faFileAlt} />
                </MenuIcon>
              <MenuText>Compliance</MenuText>
            </MenuItem>
            <MenuItem>
              <MenuIcon>
              <FontAwesomeIcon icon={faCog} />
                </MenuIcon>
              <MenuText>Settings</MenuText>
            </MenuItem>
          </SidebarMenu>
        </Sidebar>
        {isSidebarOpen && <MobileOverlay onClick={toggleSidebar} />}
        <Content>
        <TitleSection>
          <TitleContent>
            <TitleText>Post Metric</TitleText>
            <CaptionText>View all your post metrics here</CaptionText>
          </TitleContent>
          <AddButton>
          <FontAwesomeIcon icon={faPlus} size="xl" /> 
          </AddButton>
        </TitleSection>
        {/* Cards Section */}
        <CardsContainer>
          <Card color="#F9F9F9">
            <h3>Total Posts</h3>
            <AmountText>
               139,000 <span>+1 today</span>
            </AmountText>
            <p className="view-details" style={{ color: '#7000F6', fontFamily: "sans-serif", fontSize:"13px", fontWeight: "400" }}>View Details</p>
          </Card>
          <Card color="#F9F9F9">
            <h3>Total Succssful Posts</h3>
            <AmountText>
               89,120 
            </AmountText>
            <p className="view-details" style={{ color: '#008000', fontFamily: "sans-serif", fontSize:"13px", fontWeight: "400" }}>View Details</p>
          </Card>
          <Card color="#F9F9F9">
            <h3>Draft Posts</h3>
            <AmountText>
               12,100 <span>+5 % today</span>
            </AmountText>
            <p className="view-details" style={{ color: '#FF0000', fontFamily: "sans-serif", fontSize:"13px", fontWeight: "400" }}>View Details</p>
          </Card>
        </CardsContainer>
         {/* Table Controls */}
         <SearchSection>
          <SearchInput>
            <input type="text" placeholder="Search Post" />
          </SearchInput>
          <FilterSection>
            <FilterButton>
            <FontAwesomeIcon icon={faFilter} /> 
              <span>Filters</span>
              <FontAwesomeIcon icon={faChevronDown} /> 
            </FilterButton>
            <PaginationContainer>
              <PaginationButton>
              <FontAwesomeIcon icon={faChevronLeft} /> 
              </PaginationButton>
              <span>1 - 10 of 240</span>
              <PaginationButton>
              <FontAwesomeIcon icon={faChevronRight} /> 
              </PaginationButton>
            </PaginationContainer>
          </FilterSection>
        </SearchSection>
         {/* Table */}
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Body Content</th>
                <th>Title</th>
                <th>Post Id</th>
                <th>User</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody> 
              {posts?.slice(0, 10).map((post: Post) => ( 
                <tr key={post.id}>
                   <td data-label="Body Content">{post.body.substring(0, 50)}...</td>
                    <td data-label="Title">{post.title}</td> 
                    <td data-label="Post Id">{post.id}</td> 
                    <td data-label="User">
                       {users?.find((user: User) => user.id === post.userId)?.name || 'Unknown'} 
                       </td> 
                    <td data-label="Status">
                    {(() => {
                         
                          if (post.id % 3 === 0) {
                            return <StatusBadge status="success">Success</StatusBadge>;
                          } else if (post.id % 3 === 1) {
                            return <StatusBadge status="failed">Failed</StatusBadge>;
                          } else {
                            return <StatusBadge status="pending">Pending</StatusBadge>;
                          }
                        })()}
                       </td>
                       <td data-label="Action">
                      <ActionButton variant="edit" >
                        <FontAwesomeIcon icon={faEdit} />
                      </ActionButton>
                      <ActionButton variant="delete" >
                        <FontAwesomeIcon icon={faTrash} />
                      </ActionButton>
                    </td>
                           </tr> ))}
                     </tbody>
                  </table>
                </TableContainer>
                </Content>
              </MainLayout>
            </DashboardContainer>
  );
};

export default Dashboard;


