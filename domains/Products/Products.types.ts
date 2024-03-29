import { WithDataFetchParams } from '../../redux/types';

export interface State {
    products: DataInterface
}

export interface ProductDetailsState extends WithDataFetchParams<ProductsDetailsType> {
    lastUpdate: string,
}
export interface ProductListState extends WithDataFetchParams<ProductListInterface> {
    searchTerm: string,
}
export interface DataInterface {
    productList: ProductListState;
    productsDetails: ProductDetailsState;
}

export interface ProductListInterface {
    total: number,
    objectIDs: number[],
}

export type ProductsDetailsType = Map<number, ProductDetailsInterface>

export type ProductsDetailsItemType = {
    key: number,
    value: ProductDetailsInterface,
}
export interface ProductDetailsInterface {
        data: Partial<ProductData>
        key: string
        isAddedToCart: boolean,
    }

export interface ProductItemInterface extends ProductDetailsInterface {
        addToCart: Function;
        removeFromCart: Function;
        colorScheme: 'light' | 'dark',
    }

export interface ProductData {
    'objectID': number,
    'isHighlight': boolean,
    'accessionYear': string,
    'accessionNumber': string,
    'isPublicDomain': true,
    'primaryImage': string,
    'primaryImageSmall': string,
    'additionalImages': string[],
    'constituents': ConstituentsInterface[],
    'department': string,
    'objectName': string,
    'title': string,
    'culture': string,
    'period': string,
    'dynasty': string,
    'reign': string,
    'portfolio': string,
    'artistRole': string,
    'artistPrefix': string,
    'artistDisplayName': string,
    'artistDisplayBio': string,
    'artistSuffix': string,
    'artistAlphaSort': string,
    'artistNationality': string,
    'artistBeginDate': string,
    'artistEndDate': string,
    'artistGender': string,
    'artistWikidata_URL': string,
    'artistULAN_URL': string,
    'objectDate': string,
    'objectBeginDate': number,
    'objectEndDate': number,
    'medium': string,
    'dimensions': string,
    'measurements': MeasurementsInterface[]
    'creditLine': string,
    'geographyType': string,
    'city': string,
    'state': string,
    'county': string,
    'country': string,
    'region': string,
    'subregion': string,
    'locale': string,
    'locus': string,
    'excavation': string,
    'river': string,
    'classification': string,
    'rightsAndReproduction': string,
    'linkResource': string,
    'metadataDate': string,
    'repository': string,
    'objectURL': string,
    'tags': TagInterface[]
    'objectWikidata_URL': string,
    'isTimelineWork': boolean,
    'GalleryNumber': string
}

export interface MeasurementsInterface {
    'elementName': string,
    'elementDescription': string,
    'elementMeasurements': {
        'Height': number,
        'Width': number
    }
}

export interface TagInterface {
    'term': string,
    'AAT_URL': string,
    'Wikidata_URL': string
}

export interface ConstituentsInterface{
    'constituentID': number,
    'role': string,
    'name': string,
    'constituentULAN_URL': string,
    'constituentWikidata_URL': string,
    'gender': string
}
