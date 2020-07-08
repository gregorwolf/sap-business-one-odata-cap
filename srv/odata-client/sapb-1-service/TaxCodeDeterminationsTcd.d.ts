import { TaxCodeDeterminationsTcdRequestBuilder } from './TaxCodeDeterminationsTcdRequestBuilder';
import { TaxCodeDeterminationTcdDefaultWt } from './TaxCodeDeterminationTcdDefaultWt';
import { TaxCodeDeterminationTcdByUsage } from './TaxCodeDeterminationTcdByUsage';
import { TaxCodeDeterminationTcdKeyField } from './TaxCodeDeterminationTcdKeyField';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "TaxCodeDeterminationsTCD" of service "SAPB1".
 */
export declare class TaxCodeDeterminationsTcd extends Entity implements TaxCodeDeterminationsTcdType {
    /**
     * Technical entity name for TaxCodeDeterminationsTcd.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TaxCodeDeterminationsTcd.
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
     * Dft Ar Code.
     * @nullable
     */
    dftArCode?: string;
    /**
     * Dft Ap Code.
     * @nullable
     */
    dftApCode?: string;
    /**
     * Tax Code Determination Tcd Default W Ts.
     * @nullable
     */
    taxCodeDeterminationTcdDefaultWTs?: TaxCodeDeterminationTcdDefaultWt[];
    /**
     * Tax Code Determination Tcd By Usages.
     * @nullable
     */
    taxCodeDeterminationTcdByUsages?: TaxCodeDeterminationTcdByUsage[];
    /**
     * Tax Code Determination Tcd Key Fields.
     * @nullable
     */
    taxCodeDeterminationTcdKeyFields?: TaxCodeDeterminationTcdKeyField[];
    /**
     * Returns an entity builder to construct instances `TaxCodeDeterminationsTcd`.
     * @returns A builder that constructs instances of entity type `TaxCodeDeterminationsTcd`.
     */
    static builder(): EntityBuilderType<TaxCodeDeterminationsTcd, TaxCodeDeterminationsTcdTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `TaxCodeDeterminationsTcd` entity type.
     * @returns A `TaxCodeDeterminationsTcd` request builder.
     */
    static requestBuilder(): TaxCodeDeterminationsTcdRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TaxCodeDeterminationsTcd`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TaxCodeDeterminationsTcd`.
     */
    static customField(fieldName: string): CustomField<TaxCodeDeterminationsTcd>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface TaxCodeDeterminationsTcdType {
    absId?: number;
    dftArCode?: string;
    dftApCode?: string;
    taxCodeDeterminationTcdDefaultWTs?: TaxCodeDeterminationTcdDefaultWt[];
    taxCodeDeterminationTcdByUsages?: TaxCodeDeterminationTcdByUsage[];
    taxCodeDeterminationTcdKeyFields?: TaxCodeDeterminationTcdKeyField[];
}
export interface TaxCodeDeterminationsTcdTypeForceMandatory {
    absId: number;
    dftArCode: string;
    dftApCode: string;
    taxCodeDeterminationTcdDefaultWTs: TaxCodeDeterminationTcdDefaultWt[];
    taxCodeDeterminationTcdByUsages: TaxCodeDeterminationTcdByUsage[];
    taxCodeDeterminationTcdKeyFields: TaxCodeDeterminationTcdKeyField[];
}
export declare namespace TaxCodeDeterminationsTcd {
    /**
     * Static representation of the [[absId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABS_ID: NumberField<TaxCodeDeterminationsTcd>;
    /**
     * Static representation of the [[dftArCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DFT_AR_CODE: StringField<TaxCodeDeterminationsTcd>;
    /**
     * Static representation of the [[dftApCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DFT_AP_CODE: StringField<TaxCodeDeterminationsTcd>;
    /**
     * Static representation of the [[taxCodeDeterminationTcdDefaultWTs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_CODE_DETERMINATION_TCD_DEFAULT_W_TS: CollectionField<TaxCodeDeterminationsTcd>;
    /**
     * Static representation of the [[taxCodeDeterminationTcdByUsages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_CODE_DETERMINATION_TCD_BY_USAGES: CollectionField<TaxCodeDeterminationsTcd>;
    /**
     * Static representation of the [[taxCodeDeterminationTcdKeyFields]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_CODE_DETERMINATION_TCD_KEY_FIELDS: CollectionField<TaxCodeDeterminationsTcd>;
    /**
     * All fields of the TaxCodeDeterminationsTcd entity.
     */
    const _allFields: Array<NumberField<TaxCodeDeterminationsTcd> | StringField<TaxCodeDeterminationsTcd> | CollectionField<TaxCodeDeterminationsTcd>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<TaxCodeDeterminationsTcd>;
    /**
     * All key fields of the TaxCodeDeterminationsTcd entity.
     */
    const _keyFields: Array<Field<TaxCodeDeterminationsTcd>>;
    /**
     * Mapping of all key field names to the respective static field property TaxCodeDeterminationsTcd.
     */
    const _keys: {
        [keys: string]: Field<TaxCodeDeterminationsTcd>;
    };
}
//# sourceMappingURL=TaxCodeDeterminationsTcd.d.ts.map