import { SalesTaxCodesRequestBuilder } from './SalesTaxCodesRequestBuilder';
import { SalesTaxCodesLine } from './SalesTaxCodesLine';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SalesTaxCodes" of service "SAPB1".
 */
export declare class SalesTaxCodes extends EntityV4 implements SalesTaxCodesType {
    /**
     * Technical entity name for SalesTaxCodes.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Valid For Ar.
     * @nullable
     */
    validForAr?: BoYesNoEnum;
    /**
     * Valid For Ap.
     * @nullable
     */
    validForAp?: BoYesNoEnum;
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
     * Freight.
     * @nullable
     */
    freight?: BoYesNoEnum;
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Is Item Level.
     * @nullable
     */
    isItemLevel?: BoYesNoEnum;
    /**
     * Inactive.
     * @nullable
     */
    inactive?: BoYesNoEnum;
    /**
     * Fa Debit.
     * @nullable
     */
    faDebit?: BoYesNoEnum;
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
     * Returns an entity builder to construct instances of `SalesTaxCodes`.
     * @returns A builder that constructs instances of entity type `SalesTaxCodes`.
     */
    static builder(): EntityBuilderType<SalesTaxCodes, SalesTaxCodesType>;
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
    static customField(fieldName: string): CustomFieldV4<SalesTaxCodes>;
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
    validForAr?: BoYesNoEnum | null;
    validForAp?: BoYesNoEnum | null;
    userSignature?: number | null;
    rate?: number | null;
    name?: string | null;
    freight?: BoYesNoEnum | null;
    code?: string | null;
    isItemLevel?: BoYesNoEnum | null;
    inactive?: BoYesNoEnum | null;
    faDebit?: BoYesNoEnum | null;
    salesTaxCodesLines?: SalesTaxCodesLine[] | null;
    userDefaultGroups: UserDefaultGroupsType[];
    warehouses: WarehousesType[];
    items: ItemsType[];
    businessPartners: BusinessPartnersType[];
    user: UsersType;
    expenseTypes: ExpenseTypesType[];
}
export declare namespace SalesTaxCodes {
    /**
     * Static representation of the [[validForAr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALID_FOR_AR: EnumField<SalesTaxCodes>;
    /**
     * Static representation of the [[validForAp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALID_FOR_AP: EnumField<SalesTaxCodes>;
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
     * Static representation of the [[freight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FREIGHT: EnumField<SalesTaxCodes>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<SalesTaxCodes>;
    /**
     * Static representation of the [[isItemLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_ITEM_LEVEL: EnumField<SalesTaxCodes>;
    /**
     * Static representation of the [[inactive]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INACTIVE: EnumField<SalesTaxCodes>;
    /**
     * Static representation of the [[faDebit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FA_DEBIT: EnumField<SalesTaxCodes>;
    /**
     * Static representation of the [[salesTaxCodesLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_TAX_CODES_LINES: CollectionField<SalesTaxCodes, SalesTaxCodesLine>;
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
    const _allFields: Array<EnumField<SalesTaxCodes> | NumberField<SalesTaxCodes> | StringField<SalesTaxCodes> | CollectionField<SalesTaxCodes, SalesTaxCodesLine> | OneToManyLink<SalesTaxCodes, UserDefaultGroups> | OneToManyLink<SalesTaxCodes, Warehouses> | OneToManyLink<SalesTaxCodes, Items> | OneToManyLink<SalesTaxCodes, BusinessPartners> | OneToOneLink<SalesTaxCodes, Users> | OneToManyLink<SalesTaxCodes, ExpenseTypes>>;
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