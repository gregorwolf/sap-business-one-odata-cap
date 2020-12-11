import { NfTaxCategoriesRequestBuilder } from './NfTaxCategoriesRequestBuilder';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "NFTaxCategories" of service "SAPB1".
 */
export declare class NfTaxCategories extends EntityV4 implements NfTaxCategoriesType {
    /**
     * Technical entity name for NfTaxCategories.
     */
    static _entityName: string;
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
     * Locked.
     * @nullable
     */
    locked?: BoYesNoEnum;
    /**
     * Gpc Id.
     * @nullable
     */
    gpcId?: number;
    /**
     * One-to-one navigation property to the [[GovPayCodes]] entity.
     */
    govPayCode: GovPayCodes;
    /**
     * Returns an entity builder to construct instances of `NfTaxCategories`.
     * @returns A builder that constructs instances of entity type `NfTaxCategories`.
     */
    static builder(): EntityBuilderType<NfTaxCategories, NfTaxCategoriesType>;
    /**
     * Returns a request builder to construct requests for operations on the `NfTaxCategories` entity type.
     * @returns A `NfTaxCategories` request builder.
     */
    static requestBuilder(): NfTaxCategoriesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `NfTaxCategories`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `NfTaxCategories`.
     */
    static customField(fieldName: string): CustomFieldV4<NfTaxCategories>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { GovPayCodes, GovPayCodesType } from './GovPayCodes';
export interface NfTaxCategoriesType {
    absId?: number | null;
    code?: string | null;
    locked?: BoYesNoEnum | null;
    gpcId?: number | null;
    govPayCode: GovPayCodesType;
}
export declare namespace NfTaxCategories {
    /**
     * Static representation of the [[absId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABS_ID: NumberField<NfTaxCategories>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<NfTaxCategories>;
    /**
     * Static representation of the [[locked]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCKED: EnumField<NfTaxCategories>;
    /**
     * Static representation of the [[gpcId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GPC_ID: NumberField<NfTaxCategories>;
    /**
     * Static representation of the one-to-one navigation property [[govPayCode]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOV_PAY_CODE: OneToOneLink<NfTaxCategories, GovPayCodes>;
    /**
     * All fields of the NfTaxCategories entity.
     */
    const _allFields: Array<NumberField<NfTaxCategories> | StringField<NfTaxCategories> | EnumField<NfTaxCategories> | OneToOneLink<NfTaxCategories, GovPayCodes>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<NfTaxCategories>;
    /**
     * All key fields of the NfTaxCategories entity.
     */
    const _keyFields: Array<Field<NfTaxCategories>>;
    /**
     * Mapping of all key field names to the respective static field property NfTaxCategories.
     */
    const _keys: {
        [keys: string]: Field<NfTaxCategories>;
    };
}
//# sourceMappingURL=NfTaxCategories.d.ts.map