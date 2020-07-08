import { CustomerEquipmentCardsRequestBuilder } from './CustomerEquipmentCardsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "CustomerEquipmentCards" of service "SAPB1".
 */
export declare class CustomerEquipmentCards extends Entity implements CustomerEquipmentCardsType {
    /**
     * Technical entity name for CustomerEquipmentCards.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CustomerEquipmentCards.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Equipment Card Num.
     * @nullable
     */
    equipmentCardNum?: number;
    /**
     * Customer Code.
     * @nullable
     */
    customerCode?: string;
    /**
     * Customer Name.
     * @nullable
     */
    customerName?: string;
    /**
     * Direct Customer Name.
     * @nullable
     */
    directCustomerName?: string;
    /**
     * Manufacturer Serial Num.
     * @nullable
     */
    manufacturerSerialNum?: string;
    /**
     * Internal Serial Num.
     * @nullable
     */
    internalSerialNum?: string;
    /**
     * Item Code.
     * @nullable
     */
    itemCode?: string;
    /**
     * Item Description.
     * @nullable
     */
    itemDescription?: string;
    /**
     * Invoice Code.
     * @nullable
     */
    invoiceCode?: number;
    /**
     * Invoice Number.
     * @nullable
     */
    invoiceNumber?: number;
    /**
     * Delivery Date.
     * @nullable
     */
    deliveryDate?: Moment;
    /**
     * Contact Phone.
     * @nullable
     */
    contactPhone?: string;
    /**
     * Street.
     * @nullable
     */
    street?: string;
    /**
     * Block.
     * @nullable
     */
    block?: string;
    /**
     * Zip Code.
     * @nullable
     */
    zipCode?: string;
    /**
     * City.
     * @nullable
     */
    city?: string;
    /**
     * County.
     * @nullable
     */
    county?: string;
    /**
     * Country Code.
     * @nullable
     */
    countryCode?: string;
    /**
     * State Code.
     * @nullable
     */
    stateCode?: string;
    /**
     * Install Location.
     * @nullable
     */
    installLocation?: string;
    /**
     * Delivery Code.
     * @nullable
     */
    deliveryCode?: number;
    /**
     * Delivery Number.
     * @nullable
     */
    deliveryNumber?: number;
    /**
     * Replace Sn.
     * @nullable
     */
    replaceSn?: number;
    /**
     * Default Technician.
     * @nullable
     */
    defaultTechnician?: number;
    /**
     * Replaced By Sn.
     * @nullable
     */
    replacedBySn?: number;
    /**
     * Defaultterritory.
     * @nullable
     */
    defaultterritory?: number;
    /**
     * Building Floor Room.
     * @nullable
     */
    buildingFloorRoom?: string;
    /**
     * Attachment Entry.
     * @nullable
     */
    attachmentEntry?: number;
    /**
     * One-to-one navigation property to the [[BusinessPartners]] entity.
     */
    businessPartner: BusinessPartners;
    /**
     * One-to-one navigation property to the [[Items]] entity.
     */
    item: Items;
    /**
     * One-to-one navigation property to the [[Countries]] entity.
     */
    country: Countries;
    /**
     * One-to-one navigation property to the [[EmployeesInfo]] entity.
     */
    employeeInfo: EmployeesInfo;
    /**
     * One-to-one navigation property to the [[Territories]] entity.
     */
    territory: Territories;
    /**
     * One-to-one navigation property to the [[Attachments2]] entity.
     */
    attachments2: Attachments2;
    /**
     * Returns an entity builder to construct instances `CustomerEquipmentCards`.
     * @returns A builder that constructs instances of entity type `CustomerEquipmentCards`.
     */
    static builder(): EntityBuilderType<CustomerEquipmentCards, CustomerEquipmentCardsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `CustomerEquipmentCards` entity type.
     * @returns A `CustomerEquipmentCards` request builder.
     */
    static requestBuilder(): CustomerEquipmentCardsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomerEquipmentCards`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustomerEquipmentCards`.
     */
    static customField(fieldName: string): CustomField<CustomerEquipmentCards>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Items, ItemsType } from './Items';
import { Countries, CountriesType } from './Countries';
import { EmployeesInfo, EmployeesInfoType } from './EmployeesInfo';
import { Territories, TerritoriesType } from './Territories';
import { Attachments2, Attachments2Type } from './Attachments2';
export interface CustomerEquipmentCardsType {
    equipmentCardNum?: number;
    customerCode?: string;
    customerName?: string;
    directCustomerName?: string;
    manufacturerSerialNum?: string;
    internalSerialNum?: string;
    itemCode?: string;
    itemDescription?: string;
    invoiceCode?: number;
    invoiceNumber?: number;
    deliveryDate?: Moment;
    contactPhone?: string;
    street?: string;
    block?: string;
    zipCode?: string;
    city?: string;
    county?: string;
    countryCode?: string;
    stateCode?: string;
    installLocation?: string;
    deliveryCode?: number;
    deliveryNumber?: number;
    replaceSn?: number;
    defaultTechnician?: number;
    replacedBySn?: number;
    defaultterritory?: number;
    buildingFloorRoom?: string;
    attachmentEntry?: number;
    businessPartner: BusinessPartnersType;
    item: ItemsType;
    country: CountriesType;
    employeeInfo: EmployeesInfoType;
    territory: TerritoriesType;
    attachments2: Attachments2Type;
}
export interface CustomerEquipmentCardsTypeForceMandatory {
    equipmentCardNum: number;
    customerCode: string;
    customerName: string;
    directCustomerName: string;
    manufacturerSerialNum: string;
    internalSerialNum: string;
    itemCode: string;
    itemDescription: string;
    invoiceCode: number;
    invoiceNumber: number;
    deliveryDate: Moment;
    contactPhone: string;
    street: string;
    block: string;
    zipCode: string;
    city: string;
    county: string;
    countryCode: string;
    stateCode: string;
    installLocation: string;
    deliveryCode: number;
    deliveryNumber: number;
    replaceSn: number;
    defaultTechnician: number;
    replacedBySn: number;
    defaultterritory: number;
    buildingFloorRoom: string;
    attachmentEntry: number;
    businessPartner: BusinessPartnersType;
    item: ItemsType;
    country: CountriesType;
    employeeInfo: EmployeesInfoType;
    territory: TerritoriesType;
    attachments2: Attachments2Type;
}
export declare namespace CustomerEquipmentCards {
    /**
     * Static representation of the [[equipmentCardNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EQUIPMENT_CARD_NUM: NumberField<CustomerEquipmentCards>;
    /**
     * Static representation of the [[customerCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_CODE: StringField<CustomerEquipmentCards>;
    /**
     * Static representation of the [[customerName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_NAME: StringField<CustomerEquipmentCards>;
    /**
     * Static representation of the [[directCustomerName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIRECT_CUSTOMER_NAME: StringField<CustomerEquipmentCards>;
    /**
     * Static representation of the [[manufacturerSerialNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANUFACTURER_SERIAL_NUM: StringField<CustomerEquipmentCards>;
    /**
     * Static representation of the [[internalSerialNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNAL_SERIAL_NUM: StringField<CustomerEquipmentCards>;
    /**
     * Static representation of the [[itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_CODE: StringField<CustomerEquipmentCards>;
    /**
     * Static representation of the [[itemDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_DESCRIPTION: StringField<CustomerEquipmentCards>;
    /**
     * Static representation of the [[invoiceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVOICE_CODE: NumberField<CustomerEquipmentCards>;
    /**
     * Static representation of the [[invoiceNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVOICE_NUMBER: NumberField<CustomerEquipmentCards>;
    /**
     * Static representation of the [[deliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELIVERY_DATE: DateField<CustomerEquipmentCards>;
    /**
     * Static representation of the [[contactPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PHONE: StringField<CustomerEquipmentCards>;
    /**
     * Static representation of the [[street]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STREET: StringField<CustomerEquipmentCards>;
    /**
     * Static representation of the [[block]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BLOCK: StringField<CustomerEquipmentCards>;
    /**
     * Static representation of the [[zipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ZIP_CODE: StringField<CustomerEquipmentCards>;
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITY: StringField<CustomerEquipmentCards>;
    /**
     * Static representation of the [[county]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTY: StringField<CustomerEquipmentCards>;
    /**
     * Static representation of the [[countryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_CODE: StringField<CustomerEquipmentCards>;
    /**
     * Static representation of the [[stateCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATE_CODE: StringField<CustomerEquipmentCards>;
    /**
     * Static representation of the [[installLocation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTALL_LOCATION: StringField<CustomerEquipmentCards>;
    /**
     * Static representation of the [[deliveryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELIVERY_CODE: NumberField<CustomerEquipmentCards>;
    /**
     * Static representation of the [[deliveryNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELIVERY_NUMBER: NumberField<CustomerEquipmentCards>;
    /**
     * Static representation of the [[replaceSn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REPLACE_SN: NumberField<CustomerEquipmentCards>;
    /**
     * Static representation of the [[defaultTechnician]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_TECHNICIAN: NumberField<CustomerEquipmentCards>;
    /**
     * Static representation of the [[replacedBySn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REPLACED_BY_SN: NumberField<CustomerEquipmentCards>;
    /**
     * Static representation of the [[defaultterritory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULTTERRITORY: NumberField<CustomerEquipmentCards>;
    /**
     * Static representation of the [[buildingFloorRoom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUILDING_FLOOR_ROOM: StringField<CustomerEquipmentCards>;
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTACHMENT_ENTRY: NumberField<CustomerEquipmentCards>;
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: OneToOneLink<CustomerEquipmentCards, BusinessPartners>;
    /**
     * Static representation of the one-to-one navigation property [[item]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM: OneToOneLink<CustomerEquipmentCards, Items>;
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: OneToOneLink<CustomerEquipmentCards, Countries>;
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_INFO: OneToOneLink<CustomerEquipmentCards, EmployeesInfo>;
    /**
     * Static representation of the one-to-one navigation property [[territory]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TERRITORY: OneToOneLink<CustomerEquipmentCards, Territories>;
    /**
     * Static representation of the one-to-one navigation property [[attachments2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTACHMENTS_2: OneToOneLink<CustomerEquipmentCards, Attachments2>;
    /**
     * All fields of the CustomerEquipmentCards entity.
     */
    const _allFields: Array<NumberField<CustomerEquipmentCards> | StringField<CustomerEquipmentCards> | DateField<CustomerEquipmentCards> | OneToOneLink<CustomerEquipmentCards, BusinessPartners> | OneToOneLink<CustomerEquipmentCards, Items> | OneToOneLink<CustomerEquipmentCards, Countries> | OneToOneLink<CustomerEquipmentCards, EmployeesInfo> | OneToOneLink<CustomerEquipmentCards, Territories> | OneToOneLink<CustomerEquipmentCards, Attachments2>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CustomerEquipmentCards>;
    /**
     * All key fields of the CustomerEquipmentCards entity.
     */
    const _keyFields: Array<Field<CustomerEquipmentCards>>;
    /**
     * Mapping of all key field names to the respective static field property CustomerEquipmentCards.
     */
    const _keys: {
        [keys: string]: Field<CustomerEquipmentCards>;
    };
}
//# sourceMappingURL=CustomerEquipmentCards.d.ts.map