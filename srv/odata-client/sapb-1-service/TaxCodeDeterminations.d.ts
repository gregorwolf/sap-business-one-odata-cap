import { TaxCodeDeterminationsRequestBuilder } from './TaxCodeDeterminationsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "TaxCodeDeterminations" of service "SAPB1".
 */
export declare class TaxCodeDeterminations extends Entity implements TaxCodeDeterminationsType {
    /**
     * Technical entity name for TaxCodeDeterminations.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TaxCodeDeterminations.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
    /**
     * Line Number.
     * @nullable
     */
    lineNumber?: number;
    /**
     * Udf Table 1.
     * @nullable
     */
    udfTable1?: string;
    /**
     * Number Value 1.
     * @nullable
     */
    numberValue1?: number;
    /**
     * String Value 1.
     * @nullable
     */
    stringValue1?: string;
    /**
     * Money Value 1.
     * @nullable
     */
    moneyValue1?: number;
    /**
     * Udf Table 2.
     * @nullable
     */
    udfTable2?: string;
    /**
     * Number Value 2.
     * @nullable
     */
    numberValue2?: number;
    /**
     * String Value 2.
     * @nullable
     */
    stringValue2?: string;
    /**
     * Money Value 2.
     * @nullable
     */
    moneyValue2?: number;
    /**
     * Udf Table 3.
     * @nullable
     */
    udfTable3?: string;
    /**
     * Number Value 3.
     * @nullable
     */
    numberValue3?: number;
    /**
     * String Value 3.
     * @nullable
     */
    stringValue3?: string;
    /**
     * Money Value 3.
     * @nullable
     */
    moneyValue3?: number;
    /**
     * Udf Table 4.
     * @nullable
     */
    udfTable4?: string;
    /**
     * Number Value 4.
     * @nullable
     */
    numberValue4?: number;
    /**
     * String Value 4.
     * @nullable
     */
    stringValue4?: string;
    /**
     * Money Value 4.
     * @nullable
     */
    moneyValue4?: number;
    /**
     * Udf Table 5.
     * @nullable
     */
    udfTable5?: string;
    /**
     * Number Value 5.
     * @nullable
     */
    numberValue5?: number;
    /**
     * String Value 5.
     * @nullable
     */
    stringValue5?: string;
    /**
     * Money Value 5.
     * @nullable
     */
    moneyValue5?: number;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * Tax Code.
     * @nullable
     */
    taxCode?: string;
    /**
     * Freight Row Tax.
     * @nullable
     */
    freightRowTax?: string;
    /**
     * Freight Header Tax.
     * @nullable
     */
    freightHeaderTax?: string;
    /**
     * Udf Alias 1.
     * @nullable
     */
    udfAlias1?: string;
    /**
     * Udf Alias 2.
     * @nullable
     */
    udfAlias2?: string;
    /**
     * Udf Alias 3.
     * @nullable
     */
    udfAlias3?: string;
    /**
     * Udf Alias 4.
     * @nullable
     */
    udfAlias4?: string;
    /**
     * Udf Alias 5.
     * @nullable
     */
    udfAlias5?: string;
    /**
     * Returns an entity builder to construct instances `TaxCodeDeterminations`.
     * @returns A builder that constructs instances of entity type `TaxCodeDeterminations`.
     */
    static builder(): EntityBuilderType<TaxCodeDeterminations, TaxCodeDeterminationsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `TaxCodeDeterminations` entity type.
     * @returns A `TaxCodeDeterminations` request builder.
     */
    static requestBuilder(): TaxCodeDeterminationsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TaxCodeDeterminations`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TaxCodeDeterminations`.
     */
    static customField(fieldName: string): CustomField<TaxCodeDeterminations>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface TaxCodeDeterminationsType {
    docEntry?: number;
    lineNumber?: number;
    udfTable1?: string;
    numberValue1?: number;
    stringValue1?: string;
    moneyValue1?: number;
    udfTable2?: string;
    numberValue2?: number;
    stringValue2?: string;
    moneyValue2?: number;
    udfTable3?: string;
    numberValue3?: number;
    stringValue3?: string;
    moneyValue3?: number;
    udfTable4?: string;
    numberValue4?: number;
    stringValue4?: string;
    moneyValue4?: number;
    udfTable5?: string;
    numberValue5?: number;
    stringValue5?: string;
    moneyValue5?: number;
    description?: string;
    taxCode?: string;
    freightRowTax?: string;
    freightHeaderTax?: string;
    udfAlias1?: string;
    udfAlias2?: string;
    udfAlias3?: string;
    udfAlias4?: string;
    udfAlias5?: string;
}
export interface TaxCodeDeterminationsTypeForceMandatory {
    docEntry: number;
    lineNumber: number;
    udfTable1: string;
    numberValue1: number;
    stringValue1: string;
    moneyValue1: number;
    udfTable2: string;
    numberValue2: number;
    stringValue2: string;
    moneyValue2: number;
    udfTable3: string;
    numberValue3: number;
    stringValue3: string;
    moneyValue3: number;
    udfTable4: string;
    numberValue4: number;
    stringValue4: string;
    moneyValue4: number;
    udfTable5: string;
    numberValue5: number;
    stringValue5: string;
    moneyValue5: number;
    description: string;
    taxCode: string;
    freightRowTax: string;
    freightHeaderTax: string;
    udfAlias1: string;
    udfAlias2: string;
    udfAlias3: string;
    udfAlias4: string;
    udfAlias5: string;
}
export declare namespace TaxCodeDeterminations {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_ENTRY: NumberField<TaxCodeDeterminations>;
    /**
     * Static representation of the [[lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LINE_NUMBER: NumberField<TaxCodeDeterminations>;
    /**
     * Static representation of the [[udfTable1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UDF_TABLE_1: StringField<TaxCodeDeterminations>;
    /**
     * Static representation of the [[numberValue1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMBER_VALUE_1: NumberField<TaxCodeDeterminations>;
    /**
     * Static representation of the [[stringValue1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STRING_VALUE_1: StringField<TaxCodeDeterminations>;
    /**
     * Static representation of the [[moneyValue1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MONEY_VALUE_1: NumberField<TaxCodeDeterminations>;
    /**
     * Static representation of the [[udfTable2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UDF_TABLE_2: StringField<TaxCodeDeterminations>;
    /**
     * Static representation of the [[numberValue2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMBER_VALUE_2: NumberField<TaxCodeDeterminations>;
    /**
     * Static representation of the [[stringValue2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STRING_VALUE_2: StringField<TaxCodeDeterminations>;
    /**
     * Static representation of the [[moneyValue2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MONEY_VALUE_2: NumberField<TaxCodeDeterminations>;
    /**
     * Static representation of the [[udfTable3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UDF_TABLE_3: StringField<TaxCodeDeterminations>;
    /**
     * Static representation of the [[numberValue3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMBER_VALUE_3: NumberField<TaxCodeDeterminations>;
    /**
     * Static representation of the [[stringValue3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STRING_VALUE_3: StringField<TaxCodeDeterminations>;
    /**
     * Static representation of the [[moneyValue3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MONEY_VALUE_3: NumberField<TaxCodeDeterminations>;
    /**
     * Static representation of the [[udfTable4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UDF_TABLE_4: StringField<TaxCodeDeterminations>;
    /**
     * Static representation of the [[numberValue4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMBER_VALUE_4: NumberField<TaxCodeDeterminations>;
    /**
     * Static representation of the [[stringValue4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STRING_VALUE_4: StringField<TaxCodeDeterminations>;
    /**
     * Static representation of the [[moneyValue4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MONEY_VALUE_4: NumberField<TaxCodeDeterminations>;
    /**
     * Static representation of the [[udfTable5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UDF_TABLE_5: StringField<TaxCodeDeterminations>;
    /**
     * Static representation of the [[numberValue5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMBER_VALUE_5: NumberField<TaxCodeDeterminations>;
    /**
     * Static representation of the [[stringValue5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STRING_VALUE_5: StringField<TaxCodeDeterminations>;
    /**
     * Static representation of the [[moneyValue5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MONEY_VALUE_5: NumberField<TaxCodeDeterminations>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<TaxCodeDeterminations>;
    /**
     * Static representation of the [[taxCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_CODE: StringField<TaxCodeDeterminations>;
    /**
     * Static representation of the [[freightRowTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FREIGHT_ROW_TAX: StringField<TaxCodeDeterminations>;
    /**
     * Static representation of the [[freightHeaderTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FREIGHT_HEADER_TAX: StringField<TaxCodeDeterminations>;
    /**
     * Static representation of the [[udfAlias1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UDF_ALIAS_1: StringField<TaxCodeDeterminations>;
    /**
     * Static representation of the [[udfAlias2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UDF_ALIAS_2: StringField<TaxCodeDeterminations>;
    /**
     * Static representation of the [[udfAlias3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UDF_ALIAS_3: StringField<TaxCodeDeterminations>;
    /**
     * Static representation of the [[udfAlias4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UDF_ALIAS_4: StringField<TaxCodeDeterminations>;
    /**
     * Static representation of the [[udfAlias5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UDF_ALIAS_5: StringField<TaxCodeDeterminations>;
    /**
     * All fields of the TaxCodeDeterminations entity.
     */
    const _allFields: Array<NumberField<TaxCodeDeterminations> | StringField<TaxCodeDeterminations>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<TaxCodeDeterminations>;
    /**
     * All key fields of the TaxCodeDeterminations entity.
     */
    const _keyFields: Array<Field<TaxCodeDeterminations>>;
    /**
     * Mapping of all key field names to the respective static field property TaxCodeDeterminations.
     */
    const _keys: {
        [keys: string]: Field<TaxCodeDeterminations>;
    };
}
//# sourceMappingURL=TaxCodeDeterminations.d.ts.map