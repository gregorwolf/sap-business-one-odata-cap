import { WitholdingTaxDefinitionRequestBuilder } from './WitholdingTaxDefinitionRequestBuilder';
import { WtdEffectiveDate } from './WtdEffectiveDate';
import { Wtdbp } from './Wtdbp';
import { WtdItem } from './WtdItem';
import { WtdFreight } from './WtdFreight';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "WitholdingTaxDefinition" of service "SAPB1".
 */
export declare class WitholdingTaxDefinition extends Entity implements WitholdingTaxDefinitionType {
    /**
     * Technical entity name for WitholdingTaxDefinition.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for WitholdingTaxDefinition.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * W Tax Code.
     * @nullable
     */
    wTaxCode?: string;
    /**
     * W Tax Name.
     * @nullable
     */
    wTaxName?: string;
    /**
     * Formula Id.
     * @nullable
     */
    formulaId?: number;
    /**
     * Official Code.
     * @nullable
     */
    officialCode?: string;
    /**
     * Type.
     * @nullable
     */
    type?: number;
    /**
     * Min Amount.
     * @nullable
     */
    minAmount?: number;
    /**
     * Base Amount Prct.
     * @nullable
     */
    baseAmountPrct?: number;
    /**
     * Wtd Effective Date Collection.
     * @nullable
     */
    wtdEffectiveDateCollection?: WtdEffectiveDate[];
    /**
     * Wtdbp Collection.
     * @nullable
     */
    wtdbpCollection?: Wtdbp[];
    /**
     * Wtd Item Collection.
     * @nullable
     */
    wtdItemCollection?: WtdItem[];
    /**
     * Wtd Freight Collection.
     * @nullable
     */
    wtdFreightCollection?: WtdFreight[];
    /**
     * Returns an entity builder to construct instances `WitholdingTaxDefinition`.
     * @returns A builder that constructs instances of entity type `WitholdingTaxDefinition`.
     */
    static builder(): EntityBuilderType<WitholdingTaxDefinition, WitholdingTaxDefinitionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `WitholdingTaxDefinition` entity type.
     * @returns A `WitholdingTaxDefinition` request builder.
     */
    static requestBuilder(): WitholdingTaxDefinitionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WitholdingTaxDefinition`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WitholdingTaxDefinition`.
     */
    static customField(fieldName: string): CustomField<WitholdingTaxDefinition>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface WitholdingTaxDefinitionType {
    absEntry?: number;
    wTaxCode?: string;
    wTaxName?: string;
    formulaId?: number;
    officialCode?: string;
    type?: number;
    minAmount?: number;
    baseAmountPrct?: number;
    wtdEffectiveDateCollection?: WtdEffectiveDate[];
    wtdbpCollection?: Wtdbp[];
    wtdItemCollection?: WtdItem[];
    wtdFreightCollection?: WtdFreight[];
}
export interface WitholdingTaxDefinitionTypeForceMandatory {
    absEntry: number;
    wTaxCode: string;
    wTaxName: string;
    formulaId: number;
    officialCode: string;
    type: number;
    minAmount: number;
    baseAmountPrct: number;
    wtdEffectiveDateCollection: WtdEffectiveDate[];
    wtdbpCollection: Wtdbp[];
    wtdItemCollection: WtdItem[];
    wtdFreightCollection: WtdFreight[];
}
export declare namespace WitholdingTaxDefinition {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABS_ENTRY: NumberField<WitholdingTaxDefinition>;
    /**
     * Static representation of the [[wTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const W_TAX_CODE: StringField<WitholdingTaxDefinition>;
    /**
     * Static representation of the [[wTaxName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const W_TAX_NAME: StringField<WitholdingTaxDefinition>;
    /**
     * Static representation of the [[formulaId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORMULA_ID: NumberField<WitholdingTaxDefinition>;
    /**
     * Static representation of the [[officialCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OFFICIAL_CODE: StringField<WitholdingTaxDefinition>;
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: NumberField<WitholdingTaxDefinition>;
    /**
     * Static representation of the [[minAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MIN_AMOUNT: NumberField<WitholdingTaxDefinition>;
    /**
     * Static representation of the [[baseAmountPrct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BASE_AMOUNT_PRCT: NumberField<WitholdingTaxDefinition>;
    /**
     * Static representation of the [[wtdEffectiveDateCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WTD_EFFECTIVE_DATE_COLLECTION: CollectionField<WitholdingTaxDefinition>;
    /**
     * Static representation of the [[wtdbpCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WTDBP_COLLECTION: CollectionField<WitholdingTaxDefinition>;
    /**
     * Static representation of the [[wtdItemCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WTD_ITEM_COLLECTION: CollectionField<WitholdingTaxDefinition>;
    /**
     * Static representation of the [[wtdFreightCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WTD_FREIGHT_COLLECTION: CollectionField<WitholdingTaxDefinition>;
    /**
     * All fields of the WitholdingTaxDefinition entity.
     */
    const _allFields: Array<NumberField<WitholdingTaxDefinition> | StringField<WitholdingTaxDefinition> | CollectionField<WitholdingTaxDefinition>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<WitholdingTaxDefinition>;
    /**
     * All key fields of the WitholdingTaxDefinition entity.
     */
    const _keyFields: Array<Field<WitholdingTaxDefinition>>;
    /**
     * Mapping of all key field names to the respective static field property WitholdingTaxDefinition.
     */
    const _keys: {
        [keys: string]: Field<WitholdingTaxDefinition>;
    };
}
//# sourceMappingURL=WitholdingTaxDefinition.d.ts.map