import { GovPayCodesRequestBuilder } from './GovPayCodesRequestBuilder';
import { GovPayCodeAuthority } from './GovPayCodeAuthority';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "GovPayCodes" of service "SAPB1".
 */
export declare class GovPayCodes extends Entity implements GovPayCodesType {
    /**
     * Technical entity name for GovPayCodes.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for GovPayCodes.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Abs Id.
     * @nullable
     */
    absId?: number;
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Descr.
     * @nullable
     */
    descr?: string;
    /**
     * Gov Pay Code Authorities.
     * @nullable
     */
    govPayCodeAuthorities?: GovPayCodeAuthority[];
    /**
     * One-to-many navigation property to the [[NfTaxCategories]] entity.
     */
    nfTaxCategories: NfTaxCategories[];
    /**
     * Returns an entity builder to construct instances `GovPayCodes`.
     * @returns A builder that constructs instances of entity type `GovPayCodes`.
     */
    static builder(): EntityBuilderType<GovPayCodes, GovPayCodesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `GovPayCodes` entity type.
     * @returns A `GovPayCodes` request builder.
     */
    static requestBuilder(): GovPayCodesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `GovPayCodes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `GovPayCodes`.
     */
    static customField(fieldName: string): CustomField<GovPayCodes>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { NfTaxCategories, NfTaxCategoriesType } from './NfTaxCategories';
export interface GovPayCodesType {
    absId?: number;
    code?: string;
    descr?: string;
    govPayCodeAuthorities?: GovPayCodeAuthority[];
    nfTaxCategories: NfTaxCategoriesType[];
}
export interface GovPayCodesTypeForceMandatory {
    absId: number;
    code: string;
    descr: string;
    govPayCodeAuthorities: GovPayCodeAuthority[];
    nfTaxCategories: NfTaxCategoriesType[];
}
export declare namespace GovPayCodes {
    /**
     * Static representation of the [[absId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABS_ID: NumberField<GovPayCodes>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<GovPayCodes>;
    /**
     * Static representation of the [[descr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCR: StringField<GovPayCodes>;
    /**
     * Static representation of the [[govPayCodeAuthorities]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOV_PAY_CODE_AUTHORITIES: CollectionField<GovPayCodes>;
    /**
     * Static representation of the one-to-many navigation property [[nfTaxCategories]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NF_TAX_CATEGORIES: OneToManyLink<GovPayCodes, NfTaxCategories>;
    /**
     * All fields of the GovPayCodes entity.
     */
    const _allFields: Array<NumberField<GovPayCodes> | StringField<GovPayCodes> | CollectionField<GovPayCodes> | OneToManyLink<GovPayCodes, NfTaxCategories>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<GovPayCodes>;
    /**
     * All key fields of the GovPayCodes entity.
     */
    const _keyFields: Array<Field<GovPayCodes>>;
    /**
     * Mapping of all key field names to the respective static field property GovPayCodes.
     */
    const _keys: {
        [keys: string]: Field<GovPayCodes>;
    };
}
//# sourceMappingURL=GovPayCodes.d.ts.map