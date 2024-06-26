import {gql, request} from 'graphql-request'

const MASTER_URL="https://api-ap-south-1.hygraph.com/v2/clvpxu18o05vr07wgcsi6pecf/master"
const getSlider=async()=>{
    const query = gql`
    query GetSlider {
        sliders {
          id
          name
          image {
            url
          }
        }
      }
      
  `
  const result = await request(MASTER_URL, query);
  return result;
}

const getCategories=async()=>{
  const query = gql`
  query GetCatogory {
    categories {
      id
      name
      icon {
        url
      }
    }
  }
    
`
const result = await request(MASTER_URL, query);
return result;
}

const getBusinessList=async()=>{
  const query = gql`
  query getBusinessList {
    businessLists {
      id
      name
      email
      contactPerson
      category {
        name
      }
      address
      about
      images {
        url
      }
    }
  }
    
`
const result = await request(MASTER_URL, query);
return result;
}

const getBusinessListByCategory=async(category)=>{
  const query = gql`
  query getBusinessList {
    businessLists(where: {category: {name: "`+category+`"}}) {
      id
      name
      email
      contactPerson
      category {
        name
      }
      address
      about
      images {
        url
      }
    }
  }
    
`
const result = await request(MASTER_URL, query);
return result;
}


export default{
    getSlider,
    getCategories,
    getBusinessList,
    getBusinessListByCategory
}