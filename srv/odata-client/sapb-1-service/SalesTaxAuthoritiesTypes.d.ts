import { SalesTaxAuthoritiesTypesRequestBuilder } from './SalesTaxAuthoritiesTypesRequestBuilder';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SalesTaxAuthoritiesTypes" of service "SAPB1".
 */
export declare class SalesTaxAuthoritiesTypes extends EntityV4 implements SalesTaxAuthoritiesTypesType {
    /**
     * Technical entity name for SalesTaxAuthoritiesTypes.
     */
    static _entityName: string;
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
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Vat.
     * @nullable
     */
    vat?: BoYesNoEnum;
    /**
     * Numerator.
     * @nullable
     */
    numerator?: number;
    /**
     * Tax Credit Control.
     * @nullable
     */
    taxCreditControl?: BoYesNoEnum;
    /**
     * One-to-many navigation property to the [[DepreciationAreas]] entity.
     */
    depreciationAreas: DepreciationAreas[];
    /**
     * One-to-many navigation property to the [[SalesTaxAuthorities]] entity.
     */
    salesTaxAuthorities: SalesTaxAuthorities[];
    /**
     * One-to-one navigation property to the [[Users]] entity.
     */
    user: Users;
    /**
     * Returns an entity builder to construct instances of `SalesTaxAuthoritiesTypes`.
     * @returns A builder that constructs instances of entity type `SalesTaxAuthoritiesTypes`.
     */
    static builder(): EntityBuilderType<SalesTaxAuthoritiesTypes, SalesTaxAuthoritiesTypesType>;
    /**
     * Returns a request builder to construct requests for operations on the `SalesTaxAuthoritiesTypes` entity type.
     * @returns A `SalesTaxAuthoritiesTypes` request builder.
     */
    static requestBuilder(): SalesTaxAuthoritiesTypesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesTaxAuthoritiesTypes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SalesTaxAuthoritiesTypes`.
     */
    static customField(fieldName: string): CustomFieldV4<SalesTaxAuthoritiesTypes>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { DepreciationAreas, DepreciationAreasType } from './DepreciationAreas';
import { SalesTaxAuthorities, SalesTaxAuthoritiesType } from './SalesTaxAuthorities';
import { Users, UsersType } from './Users';
export interface SalesTaxAuthoritiesTypesType {
    userSignature?: number | null;
    name?: string | null;
    vat?: BoYesNoEnum | null;
    numerator?: number | null;
    taxCreditControl?: BoYesNoEnum | null;
    depreciationAreas: DepreciationAreasType[];
    salesTaxAuthorities: SalesTaxAuthoritiesType[];
    user: UsersType;
}
export declare namespace SalesTaxAuthoritiesTypes {
    /**
     * Static representation of the [[userSignature]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_SIGNATURE: NumberField<SalesTaxAuthoritiesTypes>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<SalesTaxAuthoritiesTypes>;
    /**
     * Static representation of the [[vat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT: EnumField<SalesTaxAuthoritiesTypes>;
    /**
     * Static representation of the [[numerator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMERATOR: NumberField<SalesTaxAuthoritiesTypes>;
    /**
     * Static representation of the [[taxCreditControl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_CREDIT_CONTROL: EnumField<SalesTaxAuthoritiesTypes>;
    /**
     * Static representation of the one-to-many navigation property [[depreciationAreas]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPRECIATION_AREAS: OneToManyLink<SalesTaxAuthoritiesTypes, DepreciationAreas>;
    /**
     * Static representation of the one-to-many navigation property [[salesTaxAuthorities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_TAX_AUTHORITIES: OneToManyLink<SalesTaxAuthoritiesTypes, SalesTaxAuthorities>;
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER: OneToOneLink<SalesTaxAuthoritiesTypes, Users>;
    /**
     * All fields of the SalesTaxAuthoritiesTypes entity.
     */
    const _allFields: Array<NumberField<SalesTaxAuthoritiesTypes> | StringField<SalesTaxAuthoritiesTypes> | EnumField<SalesTaxAuthoritiesTypes> | OneToManyLink<SalesTaxAuthoritiesTypes, DepreciationAreas> | OneToManyLink<SalesTaxAuthoritiesTypes, SalesTaxAuthorities> | OneToOneLink<SalesTaxAuthoritiesTypes, Users>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SalesTaxAuthoritiesTypes>;
    /**
     * All key fields of the SalesTaxAuthoritiesTypes entity.
     */
    const _keyFields: Array<Field<SalesTaxAuthoritiesTypes>>;
    /**
     * Mapping of all key field names to the respective static field property SalesTaxAuthoritiesTypes.
     */
    const _keys: {
        [keys: string]: Field<SalesTaxAuthoritiesTypes>;
    };
}
//# sourceMappingURL=SalesTaxAuthoritiesTypes.d.ts.map