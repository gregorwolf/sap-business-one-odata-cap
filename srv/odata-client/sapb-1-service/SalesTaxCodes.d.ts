import { SalesTaxCodesRequestBuilder } from './SalesTaxCodesRequestBuilder';
import { SalesTaxCodesLine } from './SalesTaxCodesLine';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "SalesTaxCodes" of service "SAPB1".
 */
export declare class SalesTaxCodes extends Entity implements SalesTaxCodesType {
    /**
     * Technical entity name for SalesTaxCodes.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SalesTaxCodes.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * User Signature.
     * @nullable
     */
    userSignature?: number;
    /**
     * Rate.
     * @nullable
     */
    rate?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Sales Tax Codes Lines.
     * @nullable
     */
    salesTaxCodesLines?: SalesTaxCodesLine[];
    /**
     * One-to-many navigation property to the [[UserDefaultGroups]] entity.
     */
    userDefaultGroups: UserDefaultGroups[];
    /**
     * One-to-many navigation property to the [[Warehouses]] entity.
     */
    warehouses: Warehouses[];
    /**
     * One-to-many navigation property to the [[Items]] entity.
     */
    items: Items[];
    /**
     * One-to-many navigation property to the [[BusinessPartners]] entity.
     */
    businessPartners: BusinessPartners[];
    /**
     * One-to-one navigation property to the [[Users]] entity.
     */
    user: Users;
    /**
     * One-to-many navigation property to the [[ExpenseTypes]] entity.
     */
    expenseTypes: ExpenseTypes[];
    /**
     * Returns an entity builder to construct instances `SalesTaxCodes`.
     * @returns A builder that constructs instances of entity type `SalesTaxCodes`.
     */
    static builder(): EntityBuilderType<SalesTaxCodes, SalesTaxCodesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `SalesTaxCodes` entity type.
     * @returns A `SalesTaxCodes` request builder.
     */
    static requestBuilder(): SalesTaxCodesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesTaxCodes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SalesTaxCodes`.
     */
    static customField(fieldName: string): CustomField<SalesTaxCodes>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { UserDefaultGroups, UserDefaultGroupsType } from './UserDefaultGroups';
import { Warehouses, WarehousesType } from './Warehouses';
import { Items, ItemsType } from './Items';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Users, UsersType } from './Users';
import { ExpenseTypes, ExpenseTypesType } from './ExpenseTypes';
export interface SalesTaxCodesType {
    userSignature?: number;
    rate?: number;
    name?: string;
    code?: string;
    salesTaxCodesLines?: SalesTaxCodesLine[];
    userDefaultGroups: UserDefaultGroupsType[];
    warehouses: WarehousesType[];
    items: ItemsType[];
    businessPartners: BusinessPartnersType[];
    user: UsersType;
    expenseTypes: ExpenseTypesType[];
}
export interface SalesTaxCodesTypeForceMandatory {
    userSignature: number;
    rate: number;
    name: string;
    code: string;
    salesTaxCodesLines: SalesTaxCodesLine[];
    userDefaultGroups: UserDefaultGroupsType[];
    warehouses: WarehousesType[];
    items: ItemsType[];
    businessPartners: BusinessPartnersType[];
    user: UsersType;
    expenseTypes: ExpenseTypesType[];
}
export declare namespace SalesTaxCodes {
    /**
     * Static representation of the [[userSignature]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_SIGNATURE: NumberField<SalesTaxCodes>;
    /**
     * Static representation of the [[rate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATE: NumberField<SalesTaxCodes>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<SalesTaxCodes>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<SalesTaxCodes>;
    /**
     * Static representation of the [[salesTaxCodesLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_TAX_CODES_LINES: CollectionField<SalesTaxCodes>;
    /**
     * Static representation of the one-to-many navigation property [[userDefaultGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_DEFAULT_GROUPS: OneToManyLink<SalesTaxCodes, UserDefaultGroups>;
    /**
     * Static representation of the one-to-many navigation property [[warehouses]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAREHOUSES: OneToManyLink<SalesTaxCodes, Warehouses>;
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEMS: OneToManyLink<SalesTaxCodes, Items>;
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNERS: OneToManyLink<SalesTaxCodes, BusinessPartners>;
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER: OneToOneLink<SalesTaxCodes, Users>;
    /**
     * Static representation of the one-to-many navigation property [[expenseTypes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPENSE_TYPES: OneToManyLink<SalesTaxCodes, ExpenseTypes>;
    /**
     * All fields of the SalesTaxCodes entity.
     */
    const _allFields: Array<NumberField<SalesTaxCodes> | StringField<SalesTaxCodes> | CollectionField<SalesTaxCodes> | OneToManyLink<SalesTaxCodes, UserDefaultGroups> | OneToManyLink<SalesTaxCodes, Warehouses> | OneToManyLink<SalesTaxCodes, Items> | OneToManyLink<SalesTaxCodes, BusinessPartners> | OneToOneLink<SalesTaxCodes, Users> | OneToManyLink<SalesTaxCodes, ExpenseTypes>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SalesTaxCodes>;
    /**
     * All key fields of the SalesTaxCodes entity.
     */
    const _keyFields: Array<Field<SalesTaxCodes>>;
    /**
     * Mapping of all key field names to the respective static field property SalesTaxCodes.
     */
    const _keys: {
        [keys: string]: Field<SalesTaxCodes>;
    };
}
//# sourceMappingURL=SalesTaxCodes.d.ts.map